import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sshjmxzoscdaghqcskis.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzaGpteHpvc2NkYWdocWNza2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4ODg4MDcsImV4cCI6MjA0NzQ2NDgwN30._d7iOFTIt2NqwrEkWUn1UGIeN11W1y75j51Y9IO1RoY';

export const supabase = createClient(supabaseUrl, supabaseKey);
