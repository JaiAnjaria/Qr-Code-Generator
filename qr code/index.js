import inquirer from "inquirer";
import qr from 'qr-image'
import fs from 'fs'
inquirer
  .prompt([
    
   
  {message:"type your url",name:'URL'},
    

  ])
  .then((answers) => {
    var link = answers.URL
    console.log(link)
     
  var qr_svg = qr.image(link,{ type: 'png' });
  qr_svg.pipe(fs.createWriteStream('convert.png'));//writestream helps to convert many data into seperate lines 
  fs.writeFile('convert.txt',link, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
});

  


  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {
      
    }
  });
  




