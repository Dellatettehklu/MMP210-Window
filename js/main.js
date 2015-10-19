//location variables
var x;
var y;
var w;
var h;

function setup(){
    // create the canvas
    createCanvas(windowWidth, windowHeight);


    //set the location
    x=70;
    y=70;
    w=250;
    h=30;

    //top box
    strokeWeight(1);
    stroke('blue');
    fill('cyan');
    rect(x,y,w,h);

    // inside box
     strokeWeight(1);
    stroke('blue');
    fill('Cornsilk');
    var x=85;
    var y=100;
    var w=220;
    var h=350;
    rect(x,y,w,h);

    //bottom box
     strokeWeight(1);
    stroke('blue');
    fill('cyan');
    var x=70;
    var y=450;
    var w=250;
    var h=40;
    rect(x,y,w,h);

    //side lines
     strokeWeight(4);
    stroke('blue');

    var x=85;
    var y=100;
    var w=85;
    var h=450;
    line(x,y,w,h);
    var x=85+73;
    line(x,y,x,h);
    var x=158+73;
    line(x,y,x,h);
    var x=231+73;
    line(x,y,x,h);

    line(85,100,x,100);

    line(85,100+87,x,100+87);
    line(85,100+174,x,100+174);
    line(85,100+261,x,100+261);

    line(85,100+350,x,100+350);

}
