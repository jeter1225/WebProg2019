var display = document.getElementById("display");
var source = document.getElementById("source");
var back_but = document.getElementById("back_but");
var next_but = document.getElementById("next_but");
var img_count = 0;
var img_sources = [
    { url: 'https://gamewith.akamaized.net/article_tools/pricone-re/gacha/94461_main.jpg' , name: '智' },
    { url: 'https://gamewith.akamaized.net/article_tools/pricone-re/gacha/94457_main.jpg' , name: '鏡華' },
    { url: 'https://gamewith.akamaized.net/article_tools/pricone-re/gacha/120761_main.jpg' , name: '忍' },
    { url: 'https://gamewith.akamaized.net/article_tools/pricone-re/gacha/92870_main.jpg' , name: '小望' },
    { url: 'https://gamewith.akamaized.net/article_tools/pricone-re/gacha/92907_main.jpg' , name: '真步' },
];

this.display.src = img_sources[img_count].url;
this.source.href = img_sources[img_count].url;
this.source.innerHTML = img_sources[img_count].name;
this.back_but.classList.add("disabled");

function back(){
    if(this.img_count == 0){

    }
    else{
        this.img_count -= 1;
        this.next_but.classList.remove("disabled");
        if(this.img_count == 0){
            this.back_but.classList.add("disabled");
        }
    }
    this.display.src = './images/loading.gif';
    this.source.href = img_sources[img_count].url;
    this.source.innerHTML = img_sources[img_count].name;
    this.display.src = img_sources[img_count].url;
}
function next(){
    if(this.img_count == img_sources.length - 1){

    }
    else{
        this.img_count += 1;
        this.back_but.classList.remove("disabled");
        if(this.img_count == img_sources.length - 1){
            this.next_but.classList.add("disabled");
        }

    }
    this.display.src = './images/loading.gif';
    this.source.href = img_sources[img_count].url;
    this.source.innerHTML = img_sources[img_count].name;
    this.display.src = img_sources[img_count].url;
}


