var images_file = ["images/cat00.jpg", "images/cat01.jpg", "images/cat02.jpg", "images/cat03.jpg", "images/cat04.jpg",
"<iframe id='ytplayer' type='text/html' width='720' height='405' src='https://www.youtube.com/embed/QH2-TGUlwu4' frameborder='0' allowfullscreen>"];
var img_num = 2;
var images_source = ["https://pixabay.com/images/id-1994499/", "https://pixabay.com/images/id-1995961/", "https://pixabay.com/images/id-1149841/", "https://pixabay.com/images/id-3900329/", "https://pixabay.com/images/id-323262/", "https://www.youtube.com/watch?v=QH2-TGUlwu4"];


var backButton = document.getElementById("backButton");
var nextButton = document.getElementById("nextButton");

function PrevImg(a) {
    var picNum = images_file.length;
    if(img_num + a >= 0 && img_num + a < picNum) {
        if(a === -1) { //prev 
            var target = document.getElementById("backPreview");
            target.innerHTML = "<img src='" + images_file[img_num + a] + "' alt='img'>";
        }
        else { //next
            var target = document.getElementById("nextPreview");
            if(img_num + a == picNum - 1) {
                target.innerHTML = "<iframe id='ytplayer' type='text/html' width='200' height='113' src='https://www.youtube.com/embed/QH2-TGUlwu4' frameborder='0' allowfullscreen>";
            }
            else {
                target.innerHTML = "<img src='" + images_file[img_num + a] + "' alt='img'>";
            }
        }
    }
}

function RemoveImg(a) {
    var picNum = images_file.length;
    if(a === -1) { //prev 
        var target = document.getElementById("backPreview");
        target.innerHTML = "";
    }
    else { //next
        var target = document.getElementById("nextPreview");
        target.innerHTML = "";
    }
}


function changeImg(a) {
    var picNum = images_file.length;
    
    

    if(img_num + a >= 0 && img_num + a < picNum) {
        var target = document.getElementById("imageclass");
        var img_source = document.getElementById("source");

        img_num += a;

        if(img_num != picNum - 1) {
            target.innerHTML = "<img src='" + images_file[img_num] + "' alt='img' id='display'>";
        }
        else {
            target.innerHTML = images_file[img_num];
        }

        img_source.innerHTML = "Source: <a href='" + images_source[img_num] + "'>" + images_source[img_num] + "</a>";

        PrevImg(a);

        if(img_num == 0) {
            backButton.className = "disabled";
            img_num = 0;
        }
        else {
            backButton.className = "image-viewer__button";
        }
        if(img_num >= picNum - 1) {
            nextButton.className = "disabled";
            img_num = picNum - 1;
        }
        else {
            nextButton.className = "image-viewer__button";
        }

    }
    
    return;
};