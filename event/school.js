const EventEmitter= require('events')
class School extends EventEmitter{
    startPeriod(){
        setTimeout(()=>{
            this.emit('bellRing',{
                period:'first',
                text:'class ended'
            })
        })
    }
}
module.exports=School