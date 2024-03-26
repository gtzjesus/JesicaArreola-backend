import supabase from '../services/supabase.mjs';

export async function getHouses() {
  // Code logic to query all columns from the 'houses' table
  const { data: houses, error } = await supabase.from('houses').select('*');
  if (error) {
    throw new Error('Houses could not be fetched');
  }

  return houses;
}
