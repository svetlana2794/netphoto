import { createSearchParams,
redirect } from "react-router-dom";

export async function actionCreate({request}) {
const formData=await request.formData();
let width=formData.get("width");
let height=formData.get("height");
let params=createSearchParams({width, height});
return redirect(`/edit?${params}`);
}
