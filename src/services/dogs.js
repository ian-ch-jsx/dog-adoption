import { checkError, client } from './client';

export async function getDogs() {
  const resp = await client.from('pets').select('*').order('species');
  return checkError(resp);
}

export async function getDogById(id) {
  const resp = await client.from('pets').select('*').match({ id }).limit(1).single();
  return checkError(resp);
}

export async function updateDog(id, name, species, breed, age, image, bio) {
  const resp = await client
    .from('pets')
    .update({ name, species, breed, age, image, bio })
    .match({ id });
  return checkError(resp);
}
