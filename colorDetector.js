var synaptic = require('synaptic'); 
var Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
    Architect = synaptic.Architect;
var inputLayer = new Layer(3);
var hiddenLayer = new Layer(6);
var outputLayer = new Layer(3);
    inputLayer.project(hiddenLayer);
    hiddenLayer.project(outputLayer);
var network = new Network({
        input: inputLayer,
        hidden: [hiddenLayer],
        output: outputLayer
    });
var learningRate = .3;
for (var i = 0; i < 20000; i++){
        network.activate([255,0,0]);
        network.propagate(learningRate, [1,0,0]);
        network.activate([0,255,0]);
        network.propagate(learningRate, [0,1,0]);
        network.activate([0,0,255]);
        network.propagate(learningRate, [0,0,1]);
        network.activate([255,0,0]);
        network.propagate(learningRate, [1,0,0]);
        network.activate([0,255,0]);
        network.propagate(learningRate, [0,1,0]);
        network.activate([0,0,255]);
        network.propagate(learningRate, [0,0,1]);
    }
    console.log(network.activate([255,0,0])); 
