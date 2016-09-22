var config = require('./config.json');
var AdmZip = require('adm-zip');

if(!process.argv[2]){
  console.log("Please specify a component");
  console.log("Type \'list\' for a list of components");
  return;
}
else if(process.argv[2] === "list"){
    console.log("Listing components... \n====================");
  
    config.components.forEach(function(item){
    console.log(item);
  });
  console.log("====================");
  return;
}

console.log("Running SpotMod Unpacker... \n");
console.log("Unpacking " + process.argv[2] + ".spa");

const SPOTIFY_PATH = config.spotify_path === "default" ?  process.env.appdata + "\\Spotify\\Apps\\" : config.spotify_path
var zip = new AdmZip(SPOTIFY_PATH + "\\" + process.argv[2] + ".spa");
zip.extractAllTo("./components/" + process.argv[2]);
