
var assetLoader;

var options = {
    framerate: 60.0
};

function update() {
    console.log("update");
}

function main() {
    setInterval(update, 1000 / options.framerate);
}

window.onload=function() {
    assetLoader=new AssetLoader();

    assetLoader.addQueueItem("assets/models/health_small.json");
    assetLoader.addQueueItem("assets/models/health_medium.json");
    assetLoader.addQueueItem("assets/models/health_large.json");

    assetLoader.addQueueItem("assets/models/armor_small.json");
    assetLoader.addQueueItem("assets/models/armor_medium.json");
    assetLoader.addQueueItem("assets/models/armor_large.json");

    assetLoader.loadNextQueueItem(main);
}
