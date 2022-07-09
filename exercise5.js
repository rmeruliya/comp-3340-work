var a = 0;
var img = [];
var time = 1000;

img[0] = 'image1.jpg';
img[1] = 'image2.jpg';
img[2] = 'image3.jpg';
img[3] = 'image4.jpg';
img[4] = 'image5.jpg';

function changeImg(){
    document.slide.src = img[a];

    if (a < img.length - 1){
        a++;}
        else {
            a=0;
        }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;