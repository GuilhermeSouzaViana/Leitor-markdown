import chalk from 'chalk';
import fs from 'fs'

function leitura(caminho){
    const encoding="utf-8"
    fs.promises
    .readFile(caminho,encoding)
    .then((texto)=> console.log(chalk.yellow(texto)))
    .catch((err)=> console.log(chalk.red("Erro de programa:Impossivel ler arquivo")))
}

//leitura("./arquivos/texto.md")
//Feito por:Guilherme Souza Viana Coqueiro

export default leitura;