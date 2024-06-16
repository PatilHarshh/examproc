// supabaseClient.js

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hdkhywzpldasiechwlyw.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhka2h5d3pwbGRhc2llY2h3bHl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NjQ4MTcsImV4cCI6MjAzNDA0MDgxN30.7-azbQxoFo4p9Rz0uZYM49R7LjbcekCfEpfUG2YjIrM";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase };
