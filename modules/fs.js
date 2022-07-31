const fs = require('fs');
const path = require('path');

//Criar uma pasta
// fs.mkdir(path.join(__dirname, '/teste'), (error) => {
//     if(error) {
//         return console.log("Erro: ", error);
//     } else {
//         console.log("Pasta criada com sucesso");
//     }
// })

//Criar um arquivo
fs.writeFile(path.join(__dirname, '/teste', 'teste.txt'), 'Hello Node!', (error) => {
    if(error) {
        return console.log("Erro: ", error);
    } else {
        console.log("Arquivo criado com sucesso");
    }
    //Adiciona a um arquivo
    fs.appendFile(path.join(__dirname, '/teste', 'teste.txt'), 'Lalalalala!', (error) => {
        if(error) {
                return console.log("Erro: ", error);
            } else {
                console.log("Arquivo modificado com sucesso");
            }
    });
    //Ler arquivo
    fs.readFile(path.join(__dirname, '/teste', 'teste.txt'), 'utf-8', (error, data) => {
        if(error) {
                return console.log("Erro: ", error);
            } else {
                console.log(data);
            }
    })
})