const fs = require('fs');
var colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("*************************".green);
    console.log(`tabla del ${base}`.green);
    console.log("*************************".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor de la base: ${base} No es un número`);
            return;
        }

        let dataTemp = '';
        for (let i = 1; i <= limite; i++) {
            dataTemp += `${base} * ${i} = ${base * i}\n`;
        }

        const data = new Uint8Array(Buffer.from(dataTemp));
        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`archivo tabla-del-${base}-al-${limite}.txt`);
        });
    });

}

module.exports = {
    crearArchivo,
    listarTabla
}