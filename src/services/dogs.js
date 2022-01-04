import { checkError, client } from './client';

export async function getDogs() {
  const resp = await client.from('dogs').select('*').order('name');
  return checkError(resp);
}
