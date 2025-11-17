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
    liked: boolean;
}

export interface SportProgram {
    day: string;
    activities: string[];
}

export interface Sport {
    title: string;
    image: string;
    difficulty: 'Mudah' | 'Sedang' | 'Sulit';
    area: string;
    calories: number;
    duration: number;

    programs: {
        totalDays: number;
        days: {
        day: string;
        exercises: {
            name: string;
            sets: number;
            reps: string;
            duration: string;
        }[];
        }[];
    };
}


export interface Article {
    id: number;
    title: string;
    image: string;
    description: string;
    content: string;
    category: "health" | "sports" | "food";
    read_time: number;
    liked: boolean;
}
