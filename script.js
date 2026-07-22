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