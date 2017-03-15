
function AssetLoader() {
    this.totalItems=0;
    this.finishedItems=0;
    this.queue=[];
    this.cache={};
};

AssetLoader.prototype.addQueueItem=function(name, done) {
    if (this.cache.hasOwnProperty(name)) {
        if (done) {
            done(name, cache[name]);
        }

        console.log("Asset "+name+" is already loaded, skipping");

        return
    }
    
    this.queue.push({
        name: name,
        done: done
    });

    this.totalItems++;

    console.log("There are now "+this.totalItems+" item(s) in the queue");
}

AssetLoader.prototype.loadNextQueueItem=function(done) {
    if (!done) {
        console.error("No finish function given; this is usually bad");
        
        return;
    }

    // this should only happen if you called this function with an empty queue
    if (this.queue.length<1) { 
        console.log("No queue items left");

        done();

        return;
    }
    
    var item=this.queue[0];

    var dataType="text";

    if (item.name.endsWith(".json")) {
        dataType="json";
    }

    $.get(item.name, "", function(data) {
        this.finishedItems++;

        cache[item.name]={
            data: data
        }

        if (item.done) {
            cache[item.name].value=item.done(item.name, data);
        } else {
            cache[item.name].value=true;
        }

        if (queue.length<1) {
            done();

            return;
        }

        this.queue.splice(0, 1);

        this.loadNextQueueItem(done);
    }, dataType);
}
