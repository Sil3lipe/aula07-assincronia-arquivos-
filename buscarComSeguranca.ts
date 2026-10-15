import { readFile } from 'node:fs/promises';

export async function buscarComSeguranca(caminho: string): Promise<string | null> {
  try {
    return await readFile(caminho, 'utf8');
  } catch (erro) {
    if (erro instanceof Error && 'code' in erro && erro.code === 'ENOENT') {
      return null;
    }
    throw erro;
  }
}
