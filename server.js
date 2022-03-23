import { createServer } from 'http';
import  {func2}  from './index.js';



createServer((request, response)=>{
  console.log('Workkk');
  let index = '';
 if(request.method === 'POST'){
    let body = '';
    request.on('data', chunk => {
      body = chunk.toString();
    })
    request.on('end', ()=>{
      console.log(body);
      index = body;
      func2(index);
      response.end('ok');
     
    })
  }
 
  
}).listen(3000)