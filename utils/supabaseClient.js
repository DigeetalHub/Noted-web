import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error(
    "Make sure to add your SUPABASE_URL to your environment variables."
  );
}

if (!supabaseKey) {
  throw new Error(
    "Make sure to add yourSUPABASE_ANON_KEY to your environment variables."
  );
}

export const supabase = createClient(supabaseUrl, supabaseKey);
