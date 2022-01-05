import { checkError, client } from './client';

export async function getDogs() {
  const resp = await client.from('pets').select('*').order('name');
  return checkError(resp);
}

export async function getDogById(id) {
  const resp = await client.from('pets').select('*').match({ id });
  return checkError(resp);
}
