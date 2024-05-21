"use strict";

const nav = document.querySelector("nav");
nav.addEventListener("pointermove", computeBG);

function computeBG(e) {

    document.
    documentElement.style
    .setProperty("--neonx", `${e.x - 75}px`);
    document.
    documentElement.style
    .setProperty("--neony", `${e.y - 75}px`);
}