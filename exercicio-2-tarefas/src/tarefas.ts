import { randomUUID } from 'node:crypto';
import { readFile, writeFile } from 'node:fs/promises';

export interface Tarefa {
  id: string;
  descricao: string;
  concluida: boolean;
}

function validarTarefas(valor: unknown): asserts valor is Tarefa[] {
  if (!Array.isArray(valor)) throw new Error('O JSON deve conter uma lista de tarefas.');
  const ids = new Set<string>();
  for (const item of valor) {
    if (typeof item !== 'object' || item === null ||
        typeof item.id !== 'string' || item.id.trim() === '' ||
        typeof item.descricao !== 'string' || item.descricao.trim() === '' ||
        typeof item.concluida !== 'boolean' || ids.has(item.id)) {
      throw new Error('Tarefa inválida ou ID duplicado no JSON.');
    }
    ids.add(item.id);
  }
}

export async function lerTarefas(): Promise<Tarefa[]> {
  let conteudo: string;
  try { conteudo = await readFile('tarefas.json', 'utf8'); }
  catch (erro) {
    if (erro instanceof Error && 'code' in erro && erro.code === 'ENOENT') return [];
    throw erro;
  }
  const tarefas: unknown = JSON.parse(conteudo);
  validarTarefas(tarefas);
  return tarefas;
}

// Substitui explicitamente a lista inteira; as operações abaixo leem antes de salvar.
export async function salvarTarefas(tarefas: Tarefa[]): Promise<void> {
  validarTarefas(tarefas);
  await writeFile('tarefas.json', `${JSON.stringify(tarefas, null, 2)}\n`, 'utf8');
}

export async function adicionar(descricao: string): Promise<Tarefa> {
  if (descricao.trim() === '') throw new Error('A descrição não pode ser vazia.');
  const tarefas = await lerTarefas();
  const tarefa: Tarefa = { id: randomUUID(), descricao: descricao.trim(), concluida: false };
  tarefas.push(tarefa);
  await salvarTarefas(tarefas);
  return tarefa;
}

export async function concluir(id: string): Promise<Tarefa> {
  const tarefas = await lerTarefas();
  const tarefa = tarefas.find((item) => item.id === id);
  if (!tarefa) throw new Error(`Tarefa não encontrada: ${id}`);
  tarefa.concluida = true;
  await salvarTarefas(tarefas);
  return tarefa;
}

export async function remover(id: string): Promise<void> {
  const tarefas = await lerTarefas();
  if (!tarefas.some((item) => item.id === id)) throw new Error(`Tarefa não encontrada: ${id}`);
  await salvarTarefas(tarefas.filter((item) => item.id !== id));
}
