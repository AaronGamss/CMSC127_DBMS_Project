// supabaseClient.js
// this establish the Supabase connection

// Use CDN import-friendly version
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Replace with your actual Supabase project details
const SUPABASE_URL = "https://xnecqlcgcyxpnisiyxhw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhuZWNxbGNnY3l4cG5pc2l5eGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzODU3MDUsImV4cCI6MjA1OTk2MTcwNX0.v7NmfQp2OBl9pxCZJ9hPysGn2s7WkotGJxLt85Rub0U";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Function to log in user
export async function loginUser(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
  });

  return { data, error };  // Return the response data and error
}