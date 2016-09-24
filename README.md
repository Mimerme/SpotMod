# SpotMod
SpotMod is a set of build tools designed to easily setup and utilize a development enviroment for modifying the Spotify desktop client.

## Installation

- This requires NodeJS and NPM installed download it from [here](https://nodejs.org/en/)
- Clone this directory with 
``` 
git clone https://github.com/Mimerme/SpotMod/
```

- Enter the directory

- Install the dependencies with

`npm install`

## Usage
`node unpack list`

This lists all the possible components that can be extracted

`node unpack [module name]`

Unpacks the module into components/[module name]

`node repack [module name]
Repacks the module into the Spotify components folder 

## TODO
- Get a list of directories that Spotify acceses during its critical reading and writting stages
- Figure out how to reload the Chromium frame without restarting
- Figure out how to access Chrome Dev Tools

If anyone has the solution to these problems I would gladly accept a pull request :)
