const http=require('http');
const _ =require('underscore');
const server=http.createServer((req,res)=>{
if(req.url=="/")
{
    res.write('hello world');
    res.end();
}
if(req.url=="/api/courses")
{
    res.write(JSON.stringify([1,2,3]));
    res.end();
}
});
server.listen(5000);
let result=_.contains([1,2,3],3);
console.log(result);