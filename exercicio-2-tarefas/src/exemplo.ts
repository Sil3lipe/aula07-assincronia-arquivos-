import { adicionar, concluir, remover, lerTarefas } from './tarefas.js';
// Cada execução mantém as tarefas anteriores e adiciona uma nova.
const nova = await adicionar('Estudar TypeScript');
console.log('Tarefa adicionada:', nova);
await concluir(nova.id);
console.log('Tarefas salvas:', await lerTarefas());
// Para remover uma tarefa, use: await remover(nova.id);
