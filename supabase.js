import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://qwgrytzojnpepmwafnxi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3Z3J5dHpvam5wZXBtd2FmbnhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTIxOTQsImV4cCI6MjA2NzIyODE5NH0.Jf5NHuKAO8HE0jmib1i34tqthmR-6Ew8jQPiiSGP9-0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
