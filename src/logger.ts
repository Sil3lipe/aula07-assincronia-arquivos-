import { appendFile } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';

// Caminhos relativos usam o diretório de onde o programa foi iniciado.
export async function log(message: string): Promise<void> {
  // Uma chamada ocupa uma linha, mesmo se a mensagem tiver quebras de linha.
  const mensagem = message.replace(/\r/g, '\\r').replace(/\n/g, '\\n');
  await appendFile('app.log', `[${new Date().toISOString()}] ${mensagem}\n`, 'utf8');
}

export async function lerLogs(): Promise<string[]> {
  let conteudo: string;
  try { conteudo = await readFile('app.log', 'utf8'); }
  catch (erro) {
    if (erro instanceof Error && 'code' in erro && erro.code === 'ENOENT') return [];
    throw erro;
  }
  if (conteudo === null || conteudo === '') return [];
  return conteudo.split(/\r?\n/).filter((linha) => linha.length > 0);
}
