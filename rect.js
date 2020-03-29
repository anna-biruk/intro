    //const canvas = document.getElementById('canvas');


    const RECT_CENTER_X = 610;
    const RECT_CENTER_Y = 300;

    let drawRect = (rect, color, thickness, H, W) => {
        const y = RECT_CENTER_Y - (H / Math.sqrt(2));
        const x = RECT_CENTER_X;
        rect.y = y;
        rect.x = x;
        rect.graphics.clear()
            .beginStroke(color)
            .setStrokeStyle(thickness, 'round')
            .drawRect(0, 300, H, W)
            .endStroke();
    };


    const createRect = (stage, color, thickness, H, W, shouldDrawRect) => {
        const rect = new createjs.Shape();
        if (shouldDrawRect) {
            drawRect(rect, color, thickness, H, W);
        }
       // addNextChild(rect,20);
        stage.addChildAt(rect,0);
        rect.regX = 150;
        rect.regY = 150;


        rect.y = RECT_CENTER_Y - (H / Math.sqrt(2));
        rect.x = RECT_CENTER_X;
        rect.rotation = 45;

        //  rect.scaleX = 1;
        rect.H = H;
        rect.W = W;




        return rect;
    };
    const animateRect = (rect, time, color, thickness, height, width, onAnimationComplete) => {
        TweenMax.to(rect, time, {
            H: height,
            W: width,
            onUpdate: () => {
                drawRect(rect, color, thickness, rect.H, rect.W);
            },
            onComplete: () => {
                if (onAnimationComplete) {
                    onAnimationComplete();
                }

            }
        });
    };

    const runRectAnimation = () => {
        const rect2 = createRect(stage, 'rgb(139,127,130)', 30, 60, 60, false);
        const rect1 = createRect(stage, 'rgb(54,37,43)', 15, 20, 20, true);

        const rect3 = createRect(stage, 'rgb(142,126,132)', 10, 400, 400, false);



        animateRect(rect1, 7, 'rgb(139,127,130)', 30, 120, 120, () => {
            rect1.H = 250;
            rect1.W = 250;
            animateRect(rect1, 3, 'rgb(139,127,130)', 30, 350, 350, () => {
                rect1.H = 350;
                rect1.H = 350;
                animateRect(rect1, 2, 'rgb(139,127,130)', 5, 400, 400)
            });
        });

        // setTimeout(() => {
        animateRect(rect2, 7, 'rgb(48,36,39)', 30, 120, 120, () => {
            rect2.H = 250;
            rect2.W = 250;
            animateRect(rect2, 4, 'rgb(48,36,39)', 30, 350, 350, () => {
                rect2.H = 350;
                rect2.W = 350;
                animateRect(rect2, 2, 'rgb(48,36,39)', 30, 250, 250,()=>{
                    rect1.graphics.clear();
                    rect2.graphics.clear();
                });
            });
        });
        stage.update();
    };

    setTimeout(()=>{
        runRectAnimation();

    },10)
    