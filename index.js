const path=require('path')
const os=require('os')

// path module 
const myPath="/Node/core-modules/index.js"
console.log(path.basename(myPath))
console.log(path.dirname(myPath))


// Os module 
console.log(os.platform())
