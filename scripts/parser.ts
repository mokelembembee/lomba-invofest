import Papa from 'papaparse'
import { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { CohereClientV2 } from 'cohere-ai';

interface Recipe {
    title: string,
    image: string,
    rating: number,
    difficulty?: string,
    duration: number,
    calories?: number,
    portion: number
    description?: string
    ingredients: any
    steps: string[]
}

const parsed: Recipe[] = []

// --- LOAD CSV ---
const { data: recipes } = Papa.parse(readFileSync(path.join(__dirname, '../data/recipes.csv'), 'utf-8'), { 
    header: true, 
    dynamicTyping: true
})

recipes.forEach((recipe) => {
    const cleaned: Recipe = {
        title: recipe.recipe_name,
        image: recipe.image_src,
        rating: recipe.rating,
        duration: recipe.total_time ? recipe.total_time : 0,
        portion: recipe.servings,
        description: recipe.description,
        ingredients: recipe.ingredients,
        steps: recipe.directions
    }
    parsed.push(cleaned)
})

const cohere = new CohereClientV2({ token: 'wIng8nnfURZdwaGaMvEg0mg1dyIqyxjaLhYasOde' });

async function processRecipes() {
    let totalProcessed = 0
    const allResults: any[] = []  // ← semua batch akan ditampung di sini

    while (totalProcessed < 100) {
        const batch = parsed[totalProcessed]

        const response = await cohere.chat({
            messages: [
                {
                    role: "user",
                    content: `i have this kind of recipe stucture: \n\ninterface Recipe {\n    title: string,\n    image: string,\n    rating: number,\n    difficulty?: string,\n    duration: number,\n    calories?: number,\n    portion: number\n    description: string\n    ingredients: Record<string, {\n        humanValue: string, (human readable value, example 200 gram, 1 cup)\n        systemValue: number (items value in gram),\nnutritionalValue: JSON, consisted of Caloric Value,Fat,Saturated Fats,Monounsaturated Fats,Polyunsaturated Fats,Carbohydrates,Sugars,Protein,Dietary Fiber,Cholesterol,Sodium,Water,Vitamin A,Vitamin B1,Vitamin B11,Vitamin B12,Vitamin B2,Vitamin B3,Vitamin B5,Vitamin B6,Vitamin C,Vitamin D,Vitamin E,Vitamin K,Calcium,Copper,Iron,Magnesium,Manganese,Phosphorus,Potassium,Selenium,Zinc,Nutrition Density based on the used ingredients   }>\n    steps: string[]\n}\ni will give the recipe data with that structure, but will miss one or more column. you need to add the missing column. reply only in json. you also must translate all the data into indonesian.

Here is the data:
${JSON.stringify(batch)}`
                }
            ],
            temperature: 0.3,
            model: "command-a-03-2025"
        })

        const raw = response.message.content?.[0]?.text ?? ""

        // coba parse
        try {
            const json = JSON.parse(raw)
            allResults.push(json)
        } catch (e) {
            console.error("JSON parse error untuk batch:", totalProcessed)
            console.error("Raw output:", raw)
            allResults.push({ error: true, raw })
        }

        // simpan SETIAP REQUEST selesai → aman kalau crash
        writeFileSync(path.join(__dirname, 'parsed.json'), JSON.stringify(allResults, null, 2), 'utf-8')
        console.log(`✔ Batch ${totalProcessed} disimpan ke cohere_output.json`)

        totalProcessed += 1
    }
}

processRecipes()
