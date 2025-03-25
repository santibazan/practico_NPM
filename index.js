const yargs = require('yargs')

const argv = yargs
    .command('saludar', 'Muestra un saludo',{
        nombre:{
            describe: 'Nombre de la persona a saludar',
            demandOption: true,
            type:'string',
        }
    })    
    .command("sumar", "Suma dos numeros", {
        num1:{
            type: "number",
            demandOption: true,
            describe: "numero 1",
        },
        num2:{
            type: "number",
            demandOption: true,
            describe: "numero 2",
        }
    })
.help()
.argv;


if (argv._.includes('saludar'||"despedir")) {
    if (!argv.nombre || argv.nombre.trim() === '') {
        console.log('Error: El nombre no puede estar vacío.');
        process.exit(1);
    } else if (argv._.includes("saludar")) {
        console.log(`Hola, ${argv.nombre}!`);
    }else{
        console.log(`Adios, ${argv.nombre}!`);
    }
}
const resultado = argv.num1 + argv.num2;
console.log(`La suma de ${argv.num1} y ${argv.num2} es: ${resultado}`);

const fs = require("fs");
const { type } = require('os');

fs.readFile("package.json", "utf-8", (error, data)=>{
    if (error) {
        console.log(error);
    } else {
        const datos = JSON.parse(data);
        console.log("Contenido de package.json:");
        console.log(datos);
    }
})