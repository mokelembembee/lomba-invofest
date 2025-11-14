type Ingredient = {
    humanValue: string
    systemValue: number
}

export interface Menu {
    title: string;
    image: string;
    description: string;
    difficulty: 'Mudah' | 'Sedang' | 'Sulit';
    rating: number;
    calories: number;
    steps: string[];
    prepTime: number;
    ingredients: Record<string, Ingredient>;
}

export interface Sport {
    title: string;
    image: string;
    difficulty: 'Mudah' | 'Sedang' | 'Sulit';
    area: string;
    calories: number;
    prepTime: number;
}
