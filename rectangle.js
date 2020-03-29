const RECTANGLE_CENTER_X = 400;
const RECTANGLE_CENTER_Y = 300;

let drawRectangle = (rect, color, thickness, H, W, x) => {
    const y = RECTANGLE_CENTER_Y - W / 2;
    // rect.y = y;
    //  rect.x = x;
    rect.graphics.clear()
        .beginStroke(color)
        .setStrokeStyle(thickness, 'round')
        .drawRect(x, y, H, W)
        .endStroke();
};
const createRectangle = (stage, color, thickness, H, W, x) => {
    const rect = new createjs.Shape();
    drawRectangle(rect, color, thickness, H, W, x);
    // addNextChild(rect,30);
    stage.addChild(rect);
    stage.update();
    //rect.regX = RECTANGLE_CENTER_X;
    //rect.regY = RECTANGLE_CENTER_Y;
    //  rect.y = RECTANGLE_CENTER_Y;
    //  rect.x = RECTANGLE_CENTER_X;

    //  rect.scaleX = 1;
    rect.H = H;
    rect.W = W;
    rect.thickness = thickness;

    return rect;
};
const animateRectangle = (rect, time, color, thickness, height, width, calculateX, onAnimationComplete) => {

    TweenMax.to(rect, time, {
        H: height,
        W: width,
        thickness: thickness,
        onUpdate: () => {
            drawRectangle(rect, color, rect.thickness, rect.H, rect.W, calculateX(rect.H));
        },
        onComplete: () => {
            if (onAnimationComplete) {
                onAnimationComplete();
            }

        }
    });
};



const runAnimateRectagle = () => {


    const rectangle1 = createRectangle(stage,
        'rgb(135,49,46)',
        150,
        790,
        500,
        RECTANGLE_CENTER_X - 790 / 2);

    const rectangle2 = createRectangle(stage,
        'white',
        150,
        790,
        500,
        RECTANGLE_CENTER_X - (790 / 2)
    );
    const rectangle3 = createRectangle(stage,
        'white',
        150,
        0,
        500,
        -50);
    const rectangle4 = createRectangle(stage,
        'white',
        150,
        50,
        500,
        850);

    animateRectangle(rectangle1,
        5,
        'rgb(135,49,46)',
        30,
        790,
        40,
        (H) => {
            return RECTANGLE_CENTER_X - H / 2;
        });
    animateRectangle(rectangle2,
        5,
        'white',
        15,
        200,
        20,
        (H) => {
            return RECTANGLE_CENTER_X - H / 2;
        });
    animateRectangle(rectangle3,
        5,
        'white',
        15,
        350,
        20,
        (H) => {
            return -50;
        });
    animateRectangle(rectangle4,
        5,
        'white',
        15,
        350,
        20,
        (H) => {
            return 850 - H;
        });

};

setTimeout(()=>{
    runAnimateRectagle();

},11000)
