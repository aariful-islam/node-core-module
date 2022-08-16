const fs=require('fs')

// write file 
fs.writeFileSync('myfile.txt',"hello");

//append 
fs.appendFileSync('myfile.txt'," world");


// read file
const data=fs.readFileSync('myfile.txt')
console.log(data.toString())

// get list of files from a folder 
const fileList ='./files'
fs.readdir(fileList,(err,files)=>{
    files.forEach(file=>{
        console.log(file)
    })
})

