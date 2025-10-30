export interface Menu {
    title: string;
    image: string;
    difficulty: 'Mudah' | 'Sedang' | 'Sulit';
    rating: number;
    calories: number;
    steps: number;
    prepTime: number;
}