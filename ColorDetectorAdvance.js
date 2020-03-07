/* 
   Detecting color strenght using synaptic
*/
var synaptic = require('synaptic'); 
var Layer = synaptic.Layer   // Created a Layer class
var Network = synaptic.Network // Created a Network class
var Trainer = synaptic.Trainer // created a trainer class
var R = 0
var G = 255
var B = 0
var inputLayer = new Layer(3) //  R , G , B => 3 inputs
var hiddenLayer = new Layer(6) 
var outputLayer = new Layer(3) // R , G , B => 3 outputs
// Projecting the input layer to hidden layer
    inputLayer.project(hiddenLayer)   
    hiddenLayer.project(outputLayer) 
var network = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    }) // This network will take 3 inputs
var trainer = new Trainer(network) 
var trainingSet = [
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
]
trainer.train(trainingSet,{
    rate: 0.5,
    iterations: 60000,
    shuffle: true,
    cost: Trainer.cost.CROSS_ENTROPY
})
let output = network.activate([R,G,B]).map((n,i)=>{
    var map = m=>{
        let perc = Math.floor(n * 100).toString()
        return m + ": " + perc + "%"
    }
    if(i==0) return map("Red")
    else if(i==1) return map("Green")
    else if(i==2) return map("Blue")
})
console.log(output)
