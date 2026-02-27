import React from "react";
import { Outlet } from "react-router-dom";

//import Sidebar from "./sidebar/Sidebar.js";

import "./styles.css";

function App() {
return (
<div id="main">
<h1>Online Paint</h1>
<div>
<Outlet/>
</div>
</div>
);
}

export default App;

