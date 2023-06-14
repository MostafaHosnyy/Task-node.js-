const moment = require('moment');
const day = new Date();
let parsed = moment(day, "YYYY-MM-DD");
console.log(parsed);
fs.writeFile('./output2.json', 
JSON.stringify(parsed,null,2), err =>{
    if(err){
        console.log(err);
    }
})