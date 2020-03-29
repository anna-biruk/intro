const drawText = (textObject, x, y, scaleX, scaleY, rotate) => {
    textObject.setTransform(x, y, scaleX, scaleY, rotate, 0, 0, 30, 10);
    stage.update();
};



const createText = (text, font, color, x, y, scaleX, scaleY, rotate) => {

    const textObject = new createjs.Text(text, font, color);
    drawText(textObject, x, y, scaleX, scaleY, rotate);
    // textObject.regX=400;
    // textObject.regY =300;
   // addNextChild(textObject, 60);
    stage.addChild(textObject);
    
    stage.update();
    textObject.scaleX = scaleX;
    textObject.scaleY = scaleY;

    textObject.rotate = rotate;
    return textObject;
};

const animateText = (textObject, time, x, y, scaleX, scaleY, rotate, onAnimationComplete) => {
    TweenMax.to(textObject, time, {
        rotate: rotate,
        scaleX: scaleX,
        scaleY: scaleY,

        onUpdate: () => {
            drawText(textObject, x, y, textObject.scaleX, textObject.scaleY, textObject.rotate);

        },
        onComplete: () => {
            if (onAnimationComplete) {
                onAnimationComplete();
            }

        }
    });
};

const runAnimateText = () => {

    const text1 = createText('Anna', '30px Impact', 'rgb(255,120,37)', 400, 300, 2, 2, -90);
    animateText(text1, 1.5, 400, 300, 2, 2, 30, () => {
        setTimeout(() => {
            animateText(text1, 2, 400, 300, 2, 2, -45, () => {
                animateText(text1, 2, 400, 300, 2, 2, 10, () => {
                    animateText(text1, 1, 400, 300, 2, 2, 0);
                });
            });
        }, 1000);


    });
    const text2 = createText('Anna', '30px Impact', 'white', 400, 300, 0, 0, -90);
    animateText(text2, 2.5, 400, 300, 2, 2, 30, () => {
        setTimeout(() => {
            animateText(text2, 1, 400, 300, 2, 2, -45, () => {
                animateText(text2, 2, 400, 300, 2, 2, 10, () => {
                    animateText(text2, 1, 400, 300, 2, 2, 0);
                });
            });
        }, 300);


    });
stage.update();

};


setTimeout(()=>{
    runAnimateText();

},22000)


//text.setTransform(370, 300, 2, 2, 90);

