# Exercício 1

`src/logger.ts` exporta `log(message: string): Promise<void>` e `lerLogs(): Promise<string[]>`. Cada chamada acrescenta timestamp ISO UTC a `app.log`. Arquivo ausente retorna uma lista vazia. Mensagens com quebras de linha são escapadas para manter uma entrada por linha.

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
git add exercicio-1-logger
git commit -m "Resolve exercício 1"
```
