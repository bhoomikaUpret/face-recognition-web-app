Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("resutl").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
    });
}

console.log('ml5.version' , ml5.version);
clssifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Lf5hFuQ_l/model.json', modelLoaded)

function modelLoaded()
{
    console.log('Model Loaded!')
}