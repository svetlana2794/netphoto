import { Rect,
Circle,
Triangle,
Line,
FabricText } from "fabric";

export function addRect(canvas) {
let rect=new Rect({
width: 50,
height: 50,
top: canvas.width/2-25,
left: canvas.height/2-25,
stroke: "black",
strokeWidth: 1,
fill: "white"
});
return rect;
}

export function addCircle(canvas) {
let circle=new Circle({
radius: 25,
top: canvas.width/2-25,
left: canvas.height/2-25,
stroke: "black",
strokeWidth: 1,
fill: "white"
});
return circle;
}

export function addTriangle(canvas) {
let triangle=new Triangle({
width: 50,
height: 50,
top: canvas.width/2-25,
left: canvas.height/2-25,
stroke: "black",
strokeWidth: 1,
fill: "white"
});
return triangle;
}

export function addText(canvas) {
let text=new FabricText("text", {
top: canvas.width/2-25,
left: canvas.height/2-25,
stroke: "black",
strokeWidth: 1,
fill: "yellow"
});
return text;
}
