'use strict'
const config = require('./config.json');
const AdmZip = require('adm-zip');

const SPOTIFY_PATH = config.spotify_path === "default" ?  process.env.appdata + "\\Spotify\\Apps\\" : config.spotify_path

function createNewUnpacked(componentsArray){
  console.log("Running SpotMod Unpacker... \n");
  componentsArray.forEach((item)=>{
    console.log("Unpacking " + item + ".spa");
    let zip = new AdmZip(SPOTIFY_PATH + "\\" + item + ".spa");
    zip.extractAllTo("./components/" + item);
  })
}

if(!process.argv[2]){
  console.log("Please specify a component");
  console.log("Type \'list\' for a list of components");
  return;
}
else if(process.argv[2] === "all"){
  createNewUnpacked(config.components);
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
createNewUnpacked([process.argv[2]]);






