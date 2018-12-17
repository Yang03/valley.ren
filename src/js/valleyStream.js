function ValleyStream(conatinerId, options) {
    var conatiner = document.getElementById(conatinerId)
    var stream = document.createElement('object')
    stream.setAttribute('type',"application/x-shockwave-flash")
    stream.setAttribute('data', options.swf)
    stream.setAttribute('width', options.width)
    stream.setAttribute('height', options.height)
    conatiner.appendChild(stream); 
    this.stream = stream;
}

ValleyStream.prototype.publish = function(url, name) {
    this.stream.publish(url, name)
}





