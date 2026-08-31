import { supabase } from "@/lib/supabase";

export async function getReviews() {
    const { data, error } = await supabase
        .from("reviews")
        .select("id, author, content")
        .eq("is_visible", true)
        .order("id", { ascending: true });

    if (error) {
        throw error;
    }

    return data;
}