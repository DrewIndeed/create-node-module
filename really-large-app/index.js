/*
You’ve now successfully installed the colors module and can manage it like any other 
npm package used in your project. However, if you added more colors and functions to 
your local colors module, you would have to run npm update in your applications to be 
able to use the new options
*/

/*
npm links modules by using symbolic links (or symlinks), which are references that point 
to files or directories in your computer. Linking a module is done in two steps:

* 1. Creating a global link to the module. npm creates a symlink between your global 
* node_modules directory and the directory of your module. The global node_modules 
* directory is the location in which all your system-wide npm packages are installed 
* (any package you install with the -g flag).

* 2. Create a local link. npm creates a symlink between your local project that’s using 
* the module and the global link of the module.
*/

/* 
    * Step 4: Linking a Local Module
    - npm un drew-first-module

    - cd ../drew-first-module && sudo npm link (global link) 
    * Output: /usr/local/lib/node_modules/drew-first-module -> ...[previous parts of the path]/create-node-module/drew-first-module

    - cd ../really-large-app && sudo npm link drew-first-module
    * Output: ...[previous parts of the path]/create-node-module/really-large-app/node_modules/colors -> /usr/local/lib/node_modules/colors -> ...[previous parts of the path]/create-node-module/drew-first-module
   
    * As the output shows, you just created a symlink from your really-large-application’s local node_modules directory to the colors symlink in your global node_modules, 
    * which points to the actual directory with the colors module.
    
    - node index.js
    * to run your app again to test if the linking process has been done correctly
*/

const colors = require('drew-first-module');

const chosenColor = colors.getRandomColor();

console.log(
  `You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`
);

const favoriteColor = colors.getBlue();

console.log(
  `My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`
);
