const CENTER_Arc_X = 1600;
const CENTER_Arc_Y = 300;
const Arc_RADIUS = 1200;


const drawLine = (line, color, thickness, endAngle) => {
  
    line.graphics.clear()
        .beginStroke(color)
        .setStrokeStyle(thickness, 'round')
        .arc(CENTER_Arc_X, CENTER_Arc_Y, Arc_RADIUS, 0, endAngle)
        .endStroke();
};

const createLine = (stage, color, thickness) => {
    const line = new createjs.Shape();

    drawLine(line, color, thickness, 0);
  //  addNextChild(line,50);
    stage.addChild(line);
    stage.update();
    line.thickness=thickness;

    line.loaded = 0;

    return line;
};

const animateLine = (line, time, color, thickness) => {

    TweenMax.to(line, time, {
        loaded: 100,
        thickness:thickness,
        onUpdate: () => {
            drawLine(line, color, line.thickness, Math.PI * 2 * (line.loaded / 100));
        }
    });
};
 
const runAnimateLine=()=>{
    const line1 = createLine(stage, 'white', 0);
    const line2 = createLine(stage,'rgb(247,77,34)',0);
    const line3 = createLine(stage,'rgb(255,120,37)',0);
    const line4 = createLine(stage, 'rgb(39,27,30)',0);
    animateLine(line1,10,'white',1000);
    animateLine(line2,12,'rgb(247,77,34)',900);
    animateLine(line3,14,'rgb(255,120,37)',900);
    animateLine(line4,16 ,'rgb(39,27,30)',900);
};

setTimeout(()=>{
    runAnimateLine();

},18000);



stage.update();