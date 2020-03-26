const path= require('path');

//Base File
console.log(path.basename(__filename) );

//Directory name
console.log(path.dirname(__filename));

//FIle Ext
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename).base);

//concate
console.log(path.join(__dirname,'test','hello.html'));