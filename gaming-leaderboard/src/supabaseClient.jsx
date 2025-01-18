import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://wmrwrwhwwzbctsyspsvf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indtcndyd2h3d3piY3RzeXNwc3ZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MTYxNzUsImV4cCI6MjA1MjM5MjE3NX0.NZ39fdXOcDM_S8Zy24Gf1CbW_jpF9iMWH2idWfll1nY"

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
