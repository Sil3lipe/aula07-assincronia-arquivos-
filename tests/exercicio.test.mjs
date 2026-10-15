import assert from 'node:assert/strict';
import { test } from 'node:test';
import { mkdtemp, rm, readFile, writeFile, mkdir } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
test('Exercício 1', async () => {
 const anterior=process.cwd();
 const pasta=await mkdtemp(join(tmpdir(),'exercicio-'));
 process.chdir(pasta);
 try {
const {log, lerLogs} = await import('../dist/logger.js');
assert.deepEqual(await lerLogs(), []);
await log('Primeiro'); await log('Segundo');
const linhas = await lerLogs();
assert.equal(linhas.length, 2);
assert.match(linhas[0], /^\[\d{4}-\d{2}-\d{2}T.*Z\] Primeiro$/);
assert.ok(linhas[1].endsWith('Segundo'));

 } finally { process.chdir(anterior); await rm(pasta,{recursive:true,force:true}); }
});
