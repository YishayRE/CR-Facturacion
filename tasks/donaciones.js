import { schedule } from 'node-cron';

const donaciones = () => {
    console.log('Tareas programadas: Proyectos');

    const fecha = new Date();
    fecha.setUTCHours(parseInt(process.env.HORA1), 0, 0, 0);
    console.log(fecha.getHours());

    schedule(`36 ${fecha.getHours()} * * *`, async() => {
        console.log('Tarea: Verificar Proyectos Nuevos');
        console.time('VPN');

        try{
            console.log('Tarea: Verificar Proyectos Nuevos');
        }catch(err){
            console.log(err);
        }
        
        console.timeEnd('VPN');
    });
}

export {
    donaciones
}