const School= require('./school.js')
const school =new School();
school.on('bellRing',({period,text})=>{
    console.log(`${period} ${text}`)
})
school.startPeriod();