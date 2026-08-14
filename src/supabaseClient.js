import { createClient } from "@supabase/supabase-js";

// Эти два значения безопасны для публикации (защита данных — на стороне базы,
// через правила доступа, которые мы настроили на Этапе 2).
const SUPABASE_URL = "https://uodytafoacsodvaacwzb.supabase.co";
const SUPABASE_KEY = "sb_publishable_gjfqDHojhVrroGvgV84Rhg_HvY8u06j";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
