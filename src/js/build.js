var childProcess = require('child_process');
var flexSdk = require('flex-sdk');
var path = require('path');
var binPath = flexSdk.bin.mxmlc;


var childArgs = [
    '-o=' + path.join(__dirname, 'RtmpStreamer.swf'),
'-file-specs=' + path.join(__dirname, 'RtmpStreamer.as')
 
 
];
//console.log(path.join(__dirname, 'test.as'))

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  // handle results
  if (err) {
      console.log(err)
  }
});