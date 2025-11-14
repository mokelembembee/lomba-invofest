import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Buat Supabase client untuk server (gunakan env)
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, 
    {
        auth: { persistSession: false }
    }
)

export async function GET() {
    const { data, error } = await supabase
        .from('Recipe')
        .select('*')

    console.log(data)

    if (error) {
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch recipes',
            error: error.message
        }, { status: 500 })
    }

    return NextResponse.json({
        success: true,
        data
    })
}
