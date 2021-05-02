Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:100
});

camera = document.getElementById("camera");

Webcam.attach( '#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M6he0S4h8/model.json', modelLoaded);

function modelLoaded()
{
    console.log('Model is Loaded!');
}

function check()
{
   var img = document.getElementById("captured_image");
   classifier.classify(img, gotResult); 
}

function gotResult(error, results)
{
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("O").innerHTML = results[0].label;
        document.getElementById("A").innerHTML = results[0].confidence.toFixed(1);
    }
}