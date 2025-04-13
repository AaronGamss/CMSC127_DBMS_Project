// authHelpers.js
// this allows signup and login  of the user
import { supabase } from './supabaseClient.js'  // import the Supabase client

// SIGN UP function
export const signUpUser = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error('Sign Up Error:', error.message);
    return { error: error.message };
  }
  return { data };
};

// LOGIN function
export const loginUser = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login Error:', error.message);
    return { error: error.message };
  }
  return { data };
};

// Validate input before calling login or signup
export const validateCredentials = (email, password) => {
  if (!email || !password) {
    return 'Email and password are required.';
  }

  if (password.length < 6) {
    return 'Password must be at least 6 characters.';
  }

  // Simple email format check (optional)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email format.';
  }

  return null; // No errors
};
