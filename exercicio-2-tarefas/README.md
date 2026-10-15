# Exercício 2

`src/tarefas.ts` exporta `lerTarefas`, `salvarTarefas`, `adicionar`, `concluir(id)` e `remover(id)`. Cada tarefa tem `id: string` (UUID), `descricao: string` e `concluida: boolean`. Todas as alterações releem e salvam `tarefas.json`, sem cache entre chamadas. Arquivo ausente resulta em lista vazia; JSON inválido e IDs inexistentes geram erro. `salvarTarefas` substitui explicitamente a lista completa. Use chamadas sequenciais com `await`: este exercício não oferece bloqueio entre processos nem escrita transacional. Execute `npm start` duas vezes para confirmar que a lista cresce e os dados persistem em disco.

## Executar

Requer Node.js 22 ou superior. Abra o terminal dentro desta pasta:

```sh
npm ci
npm test
npm start
```

O exemplo fica em `src/exemplo.ts`. `npm run build` compila para `dist/`. Os testes usam uma pasta temporária, sem modificar seus dados. Caminhos de dados são relativos à pasta de onde o programa é iniciado. Dependências, compilados e dados estão no .gitignore.

## Commit separado

Na raiz do seu repositório, após copiar esta pasta:

```sh
git add exercicio-2-tarefas
git commit -m "Resolve exercício 2"
```
