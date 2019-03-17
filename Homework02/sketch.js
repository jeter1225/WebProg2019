let cvsWrapper = null;
let x1, y1;
let vx, vy;
let triW, triH;
let ay;
let triAng;
let bg_day;
let bird_img;
let seed = Math.random();
let flap_sound;
let point_play;
let over_flag;
let hun_num;
let ten_num;
let one_num;
const color = ['red', 'blue', 'yellow'];
const state = ['downflap', 'midflap', 'upflap'];
const bg_color = ['day', 'night'];
const pipe_color = ['green', 'red'];
const point_cnt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let point_num;

// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
    seed = Math.round(seed);
    bg_day = loadImage(`./assets/sprites/background-${bg_color[seed]}.png`);
    pipe_up = loadImage(`./assets/sprites/pipe-${pipe_color[seed]}-upper.png`);
    pipe_down = loadImage(`./assets/sprites/pipe-${pipe_color[seed]}-lower.png`);
    seed = Math.random() * 2;
    seed = Math.round(seed);
    bird_flat1 = loadImage(`./assets/sprites/${color[seed]}bird-${state[0]}.png`);
    bird_flat2 = loadImage(`./assets/sprites/${color[seed]}bird-${state[1]}.png`);
    bird_flat3 = loadImage(`./assets/sprites/${color[seed]}bird-${state[2]}.png`);
    gameover = loadImage("./assets/sprites/gameover.png");
    message = loadImage("./assets/sprites/message.png");
    ground = loadImage("./assets/sprites/base.png");
    wing = loadSound("./assets/audio/wing.ogg");
    swoosh = loadSound("./assets/audio/swoosh.ogg");
    hit_sound = loadSound("./assets/audio/hit.ogg");
    point_sound = loadSound("./assets/audio/point.ogg");
    p_0 = loadImage("./assets/sprites/0.png");
    p_1 = loadImage("./assets/sprites/1.png");
    p_2 = loadImage("./assets/sprites/2.png");
    p_3 = loadImage("./assets/sprites/3.png");
    p_4 = loadImage("./assets/sprites/4.png");
    p_5 = loadImage("./assets/sprites/5.png");
    p_6 = loadImage("./assets/sprites/6.png");
    p_7 = loadImage("./assets/sprites/7.png");
    p_8 = loadImage("./assets/sprites/8.png");
    p_9 = loadImage("./assets/sprites/9.png");
    points = [p_0, p_1, p_2, p_3, p_4, p_5, p_6, p_7, p_8, p_9];
}

function setup() {
    // Game basic setup.
    // Mounting canvas onto div for convenient styling.
    cvsWrapper = document.getElementById("canvasWrapper");
    const myCanvas = createCanvas(
        cvsWrapper.offsetWidth,
        cvsWrapper.offsetHeight
    );
    myCanvas.parent("canvasWrapper");

    // setup code below
	vx = 0 //2;
	vy = 0;
	ay = 10;
	x1 = width/2 - bird_flat1.width/2;
    y1 = height/2 + bird_flat1.height;
    cnt = 0;
    x0 = 0;
    y0 = 0;
    x3 = width;
    x4 = (width * 3) / 2 + 30;
    bird_img = bird_flat1;
    bgScale = width / bg_day.width;
    bgScale_g = width / ground.width;
    bird_Ang = 0;
    over = false;
    start = false;
    point_play = false;
    over_flag = false;

    point_num = 0;
    hun_num = p_0;
    ten_num = p_0;
    one_num = p_0;
}

function draw() {
    background(220);
    fill("red");
    if(!over){
        x0 -= 1;
        flap();
    }
	
    if(x0 < -bg_day.width * bgScale){
        x0 = 0;
    }
    if(x3 <  -pipe_up.width){
        x3 = width;
    }
    if(x4 <  -pipe_up.width){
        x4 = width;
    }
     
    image(bg_day, x0, y0, bg_day.width * bgScale, bg_day.height * bgScale);
    image(bg_day, x0 + bg_day.width * bgScale, y0, bg_day.width * bgScale, bg_day.height * bgScale);

    image(pipe_up, x3, 0, pipe_up.width, pipe_up.height);
    image(pipe_down, x3, pipe_up.height + 200, pipe_down.width, pipe_down.height);
    image(pipe_up, x4, -pipe_up.height / 2, pipe_up.width, pipe_up.height);
    image(pipe_down, x4, pipe_up.height/2 + 200, pipe_down.width, pipe_down.height);

    image(ground, x0, height - ground.height / 4 * 3, ground.width * bgScale_g, ground.height * bgScale_g / 4 * 3);
    image(ground, x0 + ground.width * bgScale_g, height - ground.height / 4 * 3, ground.width * bgScale_g, ground.height * bgScale_g / 4 * 3);
    
    if(start){
        point_display();
        push();
        translate(x1, y1);
        rotate(bird_Ang);
        image(bird_img, 0, 0);  
    }
    else{
        image(message, width/2 - message.width/2, height/2 - message.height/2);
        image(bird_img, x1, y1);
    }
    
    if(start){
        if(!over){
            x1 += 0.5 * vx;
            vy += ay * 0.018;
            y1 += vy;
            bird_Ang += 0.01;
            x3 -= 1;
            x4 -= 1;
            hit();
        }

        if(over_flag === true){
            pop();
            image(gameover, width/2 - gameover.width/2, (height/2 - gameover.height/2)*2/3);
        }

        if(y1 <= bird_img.height){
            y1 = bird_img.height;
            vy += ay * 0.018;
        }
        if(y1 >= height - ground.height / 4 * 3 - bird_img.height){
            y1 = height - ground.height / 4 * 3 - bird_img.height;
            pop();
            image(gameover, width/2 - gameover.width/2, (height/2 - gameover.height/2)*2/3);
            over = true;
            if(over_sound === true){
                hit_sound.play();
                over_sound = false;
            }
        }
    }




}
function flap(){
    cnt += 1;

    if(cnt % 2 === 0){
        flap_sound = wing;
    }
    else{
        flap_sound = swoosh;
    }

    if(cnt === 4){
        bird_img = bird_flat1;
    }
    else if(cnt === 8){
        bird_img = bird_flat2;
    }
    else if(cnt === 12){
        bird_img = bird_flat3;
    }
    else if(cnt === 16){
        cnt = 0;
        bird_img = bird_flat1;
    }
}

function keyPressed() {
    if(start === false){
        start = true;
        over = false;
        over_sound = true;
    }
    else{
        if(!over){
            if (keyCode === 32){
                vy = -6;
                flap_sound.play();
                bird_Ang = -PI/4;
            }
        }

        if(keyCode === 82){
            start = false;
            setup();
        }
    }
}

function hit(){
    if(x1 + bird_img.width >= x3 && x1 <= x3 + pipe_down.width){
        if(y1 <= pipe_up.height || y1 + bird_img.height >=  pipe_up.height + 200){
            over = true;
            if(over_sound === true){
                hit_sound.play();
                over_sound = false;
            }
            over_flag = true;
        }
        if(x1 === x3 + pipe_down.width){
            point_num += 1;
            point_sound.play();
        }
    }
    
    if(x1 + bird_img.width >= x4 && x1 <= x4 + pipe_down.width){
        if(y1 <= pipe_up.height / 2 || y1 + bird_img.height >=  pipe_up.height/2 + 200){
            over = true;
            if(over_sound === true){
                hit_sound.play();
                over_sound = false;
            }
            over_flag = true;
        }
        if(x1 === x4 + pipe_down.width){
            point_num += 1;
            point_sound.play();
        }
    }
}

function point_display(){
    hun = 0;
    ten = 0;
    one = 0;
    one = point_num % 10;
    ten = ((point_num - one) % 100) / 10;
    hun = point_num / 100;
    for(var i = 0; i < 10; i++){
        if(hun === point_cnt[i]){
            hun_num = points[i];
        }
    }
    for(var i = 0; i < 10; i++){
        if(ten === point_cnt[i]){
            ten_num = points[i];
        }
    }
    for(var i = 0; i < 10; i++){
        if(one === point_cnt[i]){
            one_num = points[i];
        }
    }
    if(!over){
        image(hun_num, width / 2 - p_0.width * 3 / 2, 100);
        image(ten_num, width / 2 - p_0.width / 2, 100);
        image(one_num, width / 2 + p_0.width / 2, 100);
    }
    else{
        image(hun_num, width / 2 - p_0.width * 3 / 2, (height/2 - gameover.height/2)*2/3 + 70);
        image(ten_num, width / 2 - p_0.width / 2, (height/2 - gameover.height/2)*2/3 + 70);
        image(one_num, width / 2 + p_0.width / 2, (height/2 - gameover.height/2)*2/3 + 70);
    }
    
}