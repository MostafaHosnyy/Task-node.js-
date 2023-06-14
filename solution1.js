
let fs = require('fs');
let fluffy = JSON.parse( fs.readFileSync("problems/problem1.json",'utf8') );

fluffy.height = "30 cm";
fluffy.weight = "9 kg";

fluffy.name= "spelled wrongly";

let catFriends_activities = [];
fluffy.catFriends.forEach( c => { catFriends_activities = [...catFriends_activities , ...c.activities] } );

fluffy.catFriends.forEach( c=>{ console.log(c.name) } );

console.log( fluffy.catFriends.reduce( (t,c)=> t + c.weight , 0) );

console.log([...fluffy.activities , ...catFriends_activities].length);

fluffy.catFriends[0].activities.push("Cat Food Puzzles");
fluffy.catFriends[1].activities.push("Mechanical Toys");

fluffy.catFriends[0].furcolor="white";


