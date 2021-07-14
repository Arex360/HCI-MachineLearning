const synaptic = require('synaptic'); 
const Layer = synaptic.Layer
const Network = synaptic.Network
let inputLayer = new Layer(3);
let hiddenLayer = new Layer(9);
let outputLayer = new Layer(3);
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);
let network = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
let learningRate = .01;
for (var i = 0; i < 20000; i++){
        network.activate([255,0,0]);
        network.propagate(learningRate, [1,0,0]);
        network.activate([0,255,0]);
        network.propagate(learningRate, [0,1,0]);
        network.activate([0,0,255]);
        network.propagate(learningRate, [0,0,1]);
        network.activate([10,1,5]);
        network.propagate(learningRate, [1,0,0]);
        network.activate([100,200,10]);
        network.propagate(learningRate, [0,1,0]);
        network.activate([10,50,255]);
        network.propagate(learningRate, [0,0,1]);
    }
let result = network.activate([255,200,100])


if(result[0] > result[1] && result[0] > result[2]){
    console.log("The color seems to be red")
}else if(result[1] > result[0] && result[1] > result[2]){
    console.log("The color seems to be green")
}else{
    console.log("The color seems to be blue")
}
result = result.map(out=>{
    out = out * 100
    out = out + ''
    out = out.substring(0,5)
    return out + "%"
})
console.log(result); 
