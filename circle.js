const CENTER_CIRCLE_X = 400;
const CENTER_CIRCLE_Y = 300;
const CIRCLE_RADIUS = 150;


const drawCircle = (circle, color, thickness, radius) => {
    circle.graphics.clear()
        .beginFill(color)
        .beginStroke(color)
        .setStrokeStyle(thickness, 'round')
        .drawCircle(CENTER_CIRCLE_X, CENTER_CIRCLE_Y, radius)
        .endStroke();
};

const createCircle = (stage, color, thickness, radius) => {
    const circle = new createjs.Shape();
    drawCircle(circle, color, thickness);
    //addNextChild(circle, 40);
    stage.addChild(circle);
    stage.update();
    circle.radius = radius;
    return circle;
};



const animateCircle = (circle, time, color, thickness, radius) => {

    TweenMax.to(circle, time, {
        radius: radius,
        onUpdate: () => {
            drawCircle(circle, color, thickness, circle.radius);
        }
    });
};


const runAnimateCircles = () => {
    const circle1 = createCircle(stage, 'rgb(39,27,30)', 40, 60);
    const circle2 = createCircle(stage, 'rgb(255,120,37)', 20, 10);
    const circle3 = createCircle(stage, 'rgb(39,27,30)', 20, 1);
    animateCircle(circle1, 10, 'rgb(39,27,30)', 20, 300);
    animateCircle(circle2, 10, 'rgb(255,120,37)', 20, 250);

    animateCircle(circle3, 10, 'rgb(39,27,30)', 20, 150);
    stage.update();
}

setTimeout(()=>{
    runAnimateCircles();

},15000)