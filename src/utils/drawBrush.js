import { PencilBrush,
CircleBrush,
SprayBrush } from "fabric";

export function drawPencil(canvas) {
let pencil=new PencilBrush(canvas);
canvas.freeDrawingBrush=pencil;
pencil.color="red";
pencil.width=5;
pencil.straightLineKey="shiftKey";
pencil.drawStraightLine=true;
return pencil;
}

export function drawCircle(canvas) {
let circle=new CircleBrush(canvas);
canvas.freeDrawingBrush=circle;
circle.color="red";
circle.width=5;
return circle;
}

export function drawSpray(canvas) {
let spray=new SprayBrush(canvas);
canvas.freeDrawingBrush=spray;
spray.color="red";
spray.width=5;
return spray;
}
