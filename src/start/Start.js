import React from "react";
import { Link } from "react-router-dom";

import { useStore } from "../utils/store.js";

import "./styles.css";

function Start() {
const pictures=useStore((state) => state.pictures);

return (
<div id="start">
<h2 hidden={pictures.length>0}>Добро пожаловать!</h2>
<Link to={"/create"}>Начать</Link>
</div>
);
}

export default Start;
