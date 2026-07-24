const canvas = document.getElementById("garden");
const ctx = canvas.getContext("2d");

const flower = document.getElementById("flower");
const tree = document.getElementById("tree");

let flowerActive = false;
let treeActive = false;

flower.onclick = function () {
    flowerActive = !flowerActive;

    flower.classList.toggle("active", flowerActive);
};

tree.onclick = function() {
    treeActive = !treeActive;

    tree.classList.toggle("active", treeActive);
};

canvas.addEventListener("click", (e) => {
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    console.table(rect);
    console.table("clientX", e.clientX, "clientY", e.clientY, "x", x, "y" , y);

    ctx.fillText("Hello", x,y);
    ctx.fillRect(x, y, 10, 10);

    if (flowerActive) {
        ctx.fillText("💮", x, y);
    }

    if (treeActive) {
        ctx.fillText("🌴", x, y);
    }
});

