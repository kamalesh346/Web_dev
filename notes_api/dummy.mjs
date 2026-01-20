const fs=require('fs')
const rstream=fs.createReadStream('./dummy.txt')
rstream.on('data',(buffer)=>{
    console.log(buffer)
    console.log("\n new buffer created \n")
})