const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'El numero base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Numero hasta donde desee multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'Error: La base tiene que ser un numero';
        }
        return true;
    })
    .argv;

module.exports = argv;
