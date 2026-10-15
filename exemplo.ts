import { buscarComSeguranca } from './buscarComSeguranca.js';
console.log('README:', await buscarComSeguranca('README.md'));
console.log('Ausente:', await buscarComSeguranca('nao-existe.txt'));
