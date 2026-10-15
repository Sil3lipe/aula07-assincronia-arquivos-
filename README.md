# Exercício 3

`src/buscarComSeguranca.ts` exporta `buscarComSeguranca(caminho: string): Promise<string | null>`. Lê UTF-8, retorna `null` apenas para `ENOENT` e relança outros erros. Arquivo vazio retorna uma string vazia. O enunciado indica que este exercício deve ser feito sem IA: esta solução gerada por IA serve como referência de estudo; siga a orientação do professor na sua entrega.

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
git add exercicio-3-busca-segura
git commit -m "Resolve exercício 3"
```
