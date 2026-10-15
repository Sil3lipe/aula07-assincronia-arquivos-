import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, rm, readFile, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
test('Exercício 2', async () => {
 const anterior=process.cwd();
 const pasta=await mkdtemp(join(tmpdir(),'exercicio-'));
 process.chdir(pasta);
 try {
const {lerTarefas, salvarTarefas, adicionar, concluir, remover} = await import('../dist/tarefas.js');
assert.deepEqual(await lerTarefas(), []);
const primeira = await adicionar('Estudar');
const externa = {id:'externa', descricao:'Alteração externa', concluida:false};
await writeFile('tarefas.json', JSON.stringify([primeira, externa]));
await adicionar('Praticar');
assert.equal((await lerTarefas()).length, 3);
assert.equal((await concluir('externa')).concluida, true);
await remover(primeira.id);
assert.equal((await lerTarefas()).length, 2);
await assert.rejects(concluir('ausente'));
await assert.rejects(remover('ausente'));
await assert.rejects(adicionar('  '));
await writeFile('tarefas.json', '{invalido');
await assert.rejects(adicionar('Não sobrescrever'));
assert.equal(await readFile('tarefas.json', 'utf8'), '{invalido');
await salvarTarefas([]);
assert.deepEqual(await lerTarefas(), []);

 } finally { process.chdir(anterior); await rm(pasta,{recursive:true,force:true}); }
});
