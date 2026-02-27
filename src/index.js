import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,
RouterProvider } from "react-router-dom";

import App from"./App.js";
import Start from "./start/Start.js";
import Editor from "./editor/Editor.js";
import Create from "./create/Create.js";

import { actionCreate } from "./utils/actions.js";

import "./styles.css";

const router=createBrowserRouter([{
	path: "/",
	element: <App/>,
	children: [
		{
		index: true,
		element: <Start/>
		},
		{
		path: "/create",
		element: <Create/>,
		action: actionCreate
		},
		{
		path: "/edit",
		element: <Editor/>
		},
	]
}]);

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<RouterProvider router={router}>
<App/>
</RouterProvider>
);
