import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const area = searchParams.get("area");
    const duration = searchParams.get("duration");
    const calories = searchParams.get("calories");

    let query = supabase.from("Sports").select("*");

    if (search) query = query.ilike("title", `%${search}%`);
    if (area) query = query.eq("area", area);

    if (duration === "<20") query = query.lt("duration", 20);
    if (duration === "20-40") query = query.gte("duration", 20).lte("duration", 40);
    if (duration === ">40") query = query.gt("duration", 40);

    if (calories === "<200") query = query.lt("calories", 200);
    if (calories === "200-350") query = query.gte("calories", 200).lte("calories", 350);
    if (calories === ">350") query = query.gt("calories", 350);

    const { data, error } = await query;

    if (error) {
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
}
