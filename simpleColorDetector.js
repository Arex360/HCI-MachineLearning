var Mind = require('node-mind')
var red = 100
var green = 250
var blue = 255
var mind; 
var learn= ()=>{
    mind = new Mind({
        activator: 'sigmoid'
    }).learn([
        {input: [255,0,0], output:[1,0,0]},
        {input: [0,255,0], output:[0,1,0]},
        {input: [0,0,255], output:[0,0,1]},
        {input: [255,100,100], output:[1,0,0]},
        {input: [180,130,10], output:[1,0,0]},
        {input: [255,200,80], output:[1,0,0]},
        {input: [255,200,100], output:[1,0,0]},
        {input: [245,210,50], output:[1,0,0]},
        {input: [155,100,70], output:[1,0,0]},
        {input: [170,50,80], output:[1,0,0]},
        {input: [180,200,80], output:[0,0,0]},
        {input: [130,220,80], output:[0,1,0]},
        {input: [200,100,9], output:[1,0,0]},
        {input: [6,0,0], output:[1,0,0]},
        {input: [0,6,0], output:[0,1,0]},
        {input: [0,0,6], output:[0,0,1]},
        {input: [12,0,0], output:[1,0,0]},
        {input: [0,12,0], output:[0,1,0]},
        {input: [0,0,12], output:[0,0,1]},
        {input: [240,230,20], output:[1,0,0]},
        {input: [2,255,240], output:[0,1,0]},
        {input: [2,240,250], output:[0,0,1]},
        {input: [230,160,20], output:[1,0,0]},
        {input: [20,250,240], output:[0,1,0]},
        {input: [20,250,255], output:[0,0,1]},
        {input: [100,250,255], output:[0,0,1]},
        {input: [200,250,255], output:[0,0,1]},
        {input: [130,240,250], output:[0,0,1]},
    ])
    var output = mind.predict([red,green,blue]).map((n,i)=>{
        var map = function(c){
            let perc = Math.floor(n * 100)
            let str = c + ": " + perc.toString()+"%"
            return str
        }
        if (i==0) return map("red")
        else if (i==1) return map("green")
        else if (i==2) return map("blue")
         
    })
    if(output[0].includes('NaN')){
        console.log('predicting')
        learn()
    }else{
        console.log(output)
    }
}
learn()

