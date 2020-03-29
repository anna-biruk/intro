const canvas = document.getElementById('canvas');
const stage = new createjs.Stage(canvas);

const CENTER_X = 400;
const CENTER_Y = 300;
const RADIUS = 150;

const addNextChild = (child, layer) => {
    const childrenCount = stage.children.length + (layer);
    stage.addChildAt(child, childrenCount);
}


const drawArc = (arc, color, thickness, endAngle) => {
    arc.graphics.clear()
        .beginStroke(color)
        .setStrokeStyle(thickness, 'round')
        .arc(CENTER_X, CENTER_Y, RADIUS, 0, endAngle)
        .endStroke();
};

const createShape = (stage, color, thickness) => {
    const arc = new createjs.Shape();

    drawArc(arc, color, thickness, 0);
    //addNextChild(arc,10);
    stage.addChild(arc);
    stage.update();

    arc.loaded = 1;

    return arc;
};

const animate = (arc, time, color, thickness,onAnimationComplete) => {

    TweenMax.to(arc, time, {
        loaded: 100,
        onUpdate: () => {
            drawArc(arc, color, thickness, Math.PI * 2 * (arc.loaded / 100));
        },
        onComplete: () => {
            if (onAnimationComplete) {
                onAnimationComplete();
            }

        }
    });
    
}

const runAnimateArc=()=>{
    const arc1 = createShape(stage, 'white', 30);
    const arc2 = createShape(stage, 'orange', 27);
    const arc3 = createShape(stage, 'yellow', 15);
    const arc4 = createShape(stage,'black',15);
    
    animate(arc1, 2, 'white', 30);
    animate(arc2, 4, '#ff3300', 28);
    animate(arc3, 6, '#ff9900', 24);
    animate(arc4,12,'black',18,()=>{
        arc1.graphics.clear();
        arc2.graphics.clear();
        arc3.graphics.clear();
        arc4.graphics.clear();
        stage.update();
    });
     
};
runAnimateArc();






TweenMax.ticker.addEventListener("tick", stage.update, stage);
TweenMax.ticker.fps(60);