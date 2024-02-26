import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://dpzeaijawvrbqlrgllyv.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwemVhaWphd3ZyYnFscmdsbHl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1NTYyNzEsImV4cCI6MjAyNDEzMjI3MX0.pZGFClEsWRhqlSxCT--uK6FiNNnyy_0snpujRc_3nyM';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
