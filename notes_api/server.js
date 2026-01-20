// const http=require('http')
// const fs=require('fs')
// const server=http.createServer((req,res)=>{
//     res.setHeader('Content-Type','text/html')
//     let path='/docs/'
//     if(req.url=='/homess')path+='index.html'
//     fs.readFile(path,(err,data)=>{
//         if(err){
//             console.log(err)
//             res.end()
//         }
//         else {
//             res.write(data)
//             res.end()
//         }
//     })
// })
// server.listen(3000,()=>{
//     console.log("hello")
//     console.log("server is listening")
// })