const http=require('http');
const path=require('path');
const fs=require('fs');



const server=http.createServer((req,res)=>{


// if (req.url==='/api/users'){
//     const users=[
//         {name:'Harsh',age:20},
//         {name:'HG'}
//     ];
//     res.writeHead(200,{'Content-Type':'application'})
//     res.end(JSON.stringify(users));
// }
// })

// if (req.url==='/'){
//     fs.readFile(
//         path.join(__dirname,'public','index.html'),
//         (err, content) => {
//      if (err)throw err;       
//     res.writeHead(200,{'Content-Type':'text/html'})
//     res.end(content);
// })
// }

//Build File Path
let filePath=path.join(__dirname,'public',req.url==='/'?'index.html':req.url)
console.log(filePath);
res.end();
})
const PORT=process.env.PORT||5000;

server.listen(PORT,()=>console.log(`Server Runnin @ ${PORT}`));