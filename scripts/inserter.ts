import { createClient } from '@supabase/supabase-js'
import fs from 'fs'

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

async function main() {
    const raw = fs.readFileSync('./cleaned.json', 'utf8')

    // Kamu bilang CLEAN → JSON-nya SUDAH VALID → langsung parse
    const items = JSON.parse(raw)

    for (const item of items) {
        const { error } = await supabase
            .from('Recipe')
            .insert(item)

        if (error) {
            console.log('❌ ERROR:', error.message)
        } else {
            console.log(`✅ Insert: ${item.title}`)
        }
    }

    console.log('Selesai!')
}

main()
