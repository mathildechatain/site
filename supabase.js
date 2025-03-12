import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://mjzoglltnicwgwzdjfoh.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qem9nbGx0bmljd2d3emRqZm9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NTAzMjcsImV4cCI6MjA1NjMyNjMyN30.Ois52vfdNzVRD3DIGS_8JuPFb5AiyW8PSgFygScecLo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
export default supabase;
