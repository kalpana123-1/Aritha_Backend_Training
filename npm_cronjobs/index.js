const cron = require('node-cron');

cron.schedule('* */8 * * * *', ()=>{
    console.log('Running a task every minute');
    },
    {
    schedule : true,
    timezone : "America/Sao_Paulo"
});