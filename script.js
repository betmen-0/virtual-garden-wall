const stage = new Konva.Stage({
    container: "garden",
    width: 270,
    height: 480,
});

const baseURL = "assets/";

const elementsURL = {
    logo: `${baseURL}logo.png`,
    monstera: `${baseURL}monstera.svg`,
    rose: `${baseURL}rose.svg`,
    ranunculus: `${baseURL}ranuculus.svg`,
    hibiscus: `${baseURL}hibiscus.svg`,
    glassRose: `${baseURL}baptism.svg`,
    sunflowers: `${baseURL}sunflowers.svg`,
    almond: `${baseURL}almond.svg`,
    bouquet: `${baseURL}bouquet.svg`,
};

const layer = new Konva.Layer();
stage.add(layer);

const background = new Konva.Rect({
    x: 0,
    y: 0,
    width: stage.width(),
    height: stage.height(),
    fill: "#c5d6e0",
    strokeWidth: 4,
});
layer.add(background);

const colors = {
    blue: "#c5d6e0",
    pink: "#f0d3d3",
    ivory: "#dfd6d1",
    cream: "blanchedalmond",
    green: "#c0cfb2",
};

let blueActive = false;
let pinkActive = false;
let ivoryActive = false;
let creamActive = false;
let greenActive = false;

const blue = document.getElementById("blue");
const pink = document.getElementById("pink");
const ivory = document.getElementById("ivory");
const cream = document.getElementById("cream");
const green = document.getElementById("green");

blue.onclick = function () {
    blueActive = true;

    if (blueActive) {
        pinkActive = ivoryActive = creamActive = greenActive = false;
        background.fill(colors.blue);
    }

    updateButtons();
};

pink.onclick = function () {
    pinkActive = true;

    if (pinkActive) {
        blueActive = ivoryActive = creamActive = greenActive = false;
        background.fill(colors.pink);
    }

    updateButtons();
};

ivory.onclick = function () {
    ivoryActive = true;

    if (ivoryActive) {
        blueActive = pinkActive = creamActive = greenActive = false;
        background.fill(colors.ivory);
    }

    updateButtons();
};


cream.onclick = function () {
    creamActive = true;

    if (creamActive) {
        blueActive = pinkActive = ivoryActive = greenActive = false;
        background.fill(colors.cream);
    }

    updateButtons();
};

green.onclick = function () {
    greenActive = true;

    if(greenActive) {
        blueActive = pinkActive = ivoryActive = creamActive = false;
        background.fill(colors.green);
    }

    updateButtons();
};

function updateButtons() {
    [blue,pink,ivory,cream,green].forEach((btn) =>
        btn.classList.remove("active")
    );

    if (blueActive) blue.classList.add("active");
    if (pinkActive) pink.classList.add("active");
    if (ivoryActive) ivory.classList.add("active");
    if (creamActive) cream.classList.add("active");
    if(greenActive) green.classList.add("active");

    layer.draw();
}

let circleActive = false;

const circle = new Konva.Circle({
    x: stage.width() / 2,
    y: stage.height() / 2,
    radius: 100,
    fill: "ivory",
    draggable: true,
    name: "circle",
});

layer.add(circle);

const RANUNCULUS = elementsURL.ranunculus;
const ROSE = elementsURL.rose;
const MONSTERA = elementsURL.monstera;
const HIBISCUS = elementsURL.hibiscus;
const GLASSROSE = elementsURL.glassRose;
const SUNFLOWERS = elementsURL.sunflowers;
const ALMOND = elementsURL.almond;
const BOUQUET = elementsURL.bouquet;

let ranunculusActive = false;
let roseActive = false;
let monsteraActive = false;
let hibiscusActive = false;
let glassRoseActive = false;
let sunflowersActive = false;
let almondActive = false;
let bouquetActive = false;

function getScaleFactor(customSmallScale , customLargeScale) {
    const screenWidth = window.innerWidth;
    let scaleFactor;

    if (screenWidth <= 480) {
        scaleFactor = customSmallScale;
    } else if (screenWidth <= 1024) {
        scaleFactor = 0.5;
    } else {
        scaleFactor = customLargeScale;
    }

    return scaleFactor;
}

