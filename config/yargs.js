const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime una tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo de una tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}