const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida = '', consola = ''

        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${i * base}\n`;
            salida += `${base} x ${i} = ${i * base}\n`;
        }

        if (listar) {
            console.log('==========================='.green);
            console.log(' Esta es la table del '.blue, colors.cyan(base));
            console.log('==========================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salidas/tabla${base}-.txt`, salida);

        return `tabla${base}-.txt creada.`.rainbow;
    } catch (err) {
        throw err;
    }
};

module.exports = {
    crearArchivo
}