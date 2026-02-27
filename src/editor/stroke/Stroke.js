import React, { useState,
useEffect } from "react";

import Fill from "../color/Color.js";
import { useStore } from "../../utils/store.js";

import "./styles.css"

function Stroke() {
const [width, setWidth]=useState(5);
const canvas=useStore((state) => state.canvas);
const selObj=useStore((state) => state.selObj);

useEffect(() => {
if (selObj) {
setWidth(selObj.get("strokeWidth"));
}

return () => {
setWidth(5);
}

}, [selObj]);

function handleWidth(e) {
setWidth(e.target.value);
selObj.set("strokeWidth", +e.target.value);
canvas.requestRenderAll();
}

return (
<>
<Fill prop={"stroke"}/>
<label className="label">Ширина: </label>
<input type="range" value={width} min="1" max="10" step="1" onChange={handleWidth}/>
</>
);
}

export default Stroke;

