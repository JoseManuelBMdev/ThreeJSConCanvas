class LoopMachine {
    constructor(){
        this.flag = false
        this.callbacks = []
    }
    addCallback(callback){
        this.callbacks.push(callback)
    }

    removeCallback(callback){
        let index = this.callbacks.indexOf(callback)
        if(index> -1){
            this.callbacks.splice(index, 1)
        }
        
    }

    run(){
      if(!this.flag) return 
      this.callbacks.forEach(cb => {
        cb()
      }) 
      requestAnimationFrame(this.run.bind(this))
    }

    start(){
        if(this.flag) return  
        this.flag = true
        this.run()
    }

    stop(){
        this.flag = false
    }

}

const loopMachine = new LoopMachine()

export default loopMachine