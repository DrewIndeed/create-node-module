/*
You’ve now successfully installed the colors module and can manage it like any other 
npm package used in your project. However, if you added more colors and functions to 
your local colors module, you would have to run npm update in your applications to be 
able to use the new options
*/

const colors = require('drew-first-module');

const chosenColor = colors.getRandomColor();

console.log(
  `You should use ${chosenColor.name} on your website. It's HTML code is ${chosenColor.code}`
);
