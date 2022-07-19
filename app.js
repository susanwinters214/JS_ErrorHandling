"use strict";



function parseToJSON(data) {
 

  try {
    return JSON.parse(data);
   
  } catch (error) {
    console.error(error.message);
    return null;
  }
  return JSON.parse(data); 

}

let passData = JSON.stringify({ success: true });
let failData = "<h1>Hello World!</h1>"
console.log(parseToJSON(failData)); //null
console.log(parseToJSON(passData)); // {success: true}
