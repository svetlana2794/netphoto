import { create } from "zustand";

const createPicturesSlice=(set) => ({pictures: [],
loadPictures: async () => {
let response=await fetch("/pictures");
let data=await response.json();
set({pictures: data});
},
selectedPicture: null,
addPicture: async (picture) => {
let response=await fetch("/add", {
method: "POST",
headers: {
"Content-Type": "application/json;charset=utf-8"
},
body: JSON.stringify(picture)
});
let data=await response.json();
set((state) => ({pictures: [...state.pictures, data]}));
},
setPicture: (src) => set({selectedPicture: src})
});

const createCanvasSlice=(set) => ({
canvas: null,
setCanvas: (c) => set({canvas: c})
});

const createSelObjSlice=(set) => ({
selObj: null,
changeSelObj: (obj) => set({selObj: obj})
});

const createSidebarHide=(set) => ({
hide: false,
setHide: (h) => set({hide: h})
});

export const useStore=create((...a) => ({
...createPicturesSlice(...a),
...createCanvasSlice(...a),
...createSelObjSlice(...a),
...createSidebarHide(...a)
}));
