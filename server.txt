import express from "express";
import path from "path";
import bodyParser from "body-parser"
import fs from "fs/promises";

let pictures=[];

const app=express();

app.use(express.urlencoded({
	limit: "50mb",
	extended: true
}));

app.use(express.json({limit: "50mb"}));

app.use(express.static(path.resolve("public")));

app.get("/", (req, res) => {
	res.sendFile(path.resolve("public/index.html"));
});

app.get("/pictures", (req, res) => {
	res.send(JSON.stringify(pictures));
});

app.post("/add", async (req, res) => {
	let body=req.body;
let str=body.link
let image=str.split(";base64,").pop()
	let name="imgs/"+body.id+".png";
	try {
	await fs.writeFile("public/"+name, image, {encoding: "base64"});
	} catch (err) {
	console.log(err);
	}
	let obj={id: body.id, link: name};
	pictures.push(obj)
	res.send(JSON.stringify(obj));
});

app.listen(3000, () => {
	console.log("server running");
});
