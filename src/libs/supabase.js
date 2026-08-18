import { SUPABASE } from "@/config/env";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(SUPABASE.URL, SUPABASE.KEY);