'use strict'
const config = require('./config.json');
const AdmZip = require('adm-zip');
const fs = require('fs');

const SPOTIFY_PATH = config.spotify_path === "default" ?  process.env.appdata + "\\Spotify\\Apps\\" : config.spotify_path

function repackComponents(componentsArray){
  console.log("Running SpotMod Repacker... \n");
  componentsArray.forEach((item)=>{
    console.log("Repacking " + item + ".spa");
    let zip = new AdmZip();
    zip.addLocalFolder("./components/" + item);
    zip.writeZip(SPOTIFY_PATH + "\\" + item + ".spa");
  })
}

if(!process.argv[2]){
  console.log("Please specify a component");
  console.log("Type \'list\' for a list of components");
  return;
}
else if(process.argv[2] === "all"){
  const ALL_UNPACKED_COMPONENTS = fs.readdirSync("./components");
  repackComponents(ALL_UNPACKED_COMPONENTS);
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
repackComponents([process.argv[2]]);

