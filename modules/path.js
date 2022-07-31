const path = require('path');

// Basename - Apenas o nome do arquivo atual
console.log(path.basename(__filename));

// Dirname - Nome do diretório atual
console.log(path.dirname(__filename));

// Extname - Extensão do Arquivo
console.log(path.extname(__filename));

// Parse - Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste1", "teste2"));