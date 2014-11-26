var fs = require("fs"),
    http = require("http"),
    path = require("path"),
    url = require("url");

var staticExtns = [".html",".js",".css",".ico",".png",".jpg", ".json"];

function isStaticResource(pathname){
    return staticExtns.some(function(extn){
        return path.extname(pathname) === extn;
    });
}

var server = http.createServer(function(req,res){
    var urlData = url.parse(req.url,true);
    if (isStaticResource(urlData.pathname)){
        var filePath = path.join(__dirname, urlData.pathname);
        if (fs.existsSync(filePath)){
            var readStream = fs.createReadStream(filePath);
            readStream.pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        if (urlData.pathname === "/tasks"){
            setTimeout(function(){
                var data = '[{"id":"1416915248269","name":"New Task - 1","category":"Official","createdAt":"2014-11-25T11:34:08.269Z","isCompleted":false},{"id":"1416915252762","name":"New Task - 2","category":"Official","createdAt":"2014-11-25T11:34:12.762Z","isCompleted":false},{"id":"1416915258306","name":"New Task - 3","category":"Official","createdAt":"2014-11-25T11:34:18.306Z","isCompleted":false},{"id":"1416915265101","name":"New Task - 11","category":"Personal","createdAt":"2014-11-25T11:34:25.101Z","isCompleted":false},{"id":"1416915269624","name":"New Task - 12","category":"Personal","createdAt":"2014-11-25T11:34:29.624Z","isCompleted":false},{"id":"1416915274038","name":"New Task - 13","category":"Personal","createdAt":"2014-11-25T11:34:34.038Z","isCompleted":false},{"id":"1416915282623","name":"New Task - 21","category":"Recreational","createdAt":"2014-11-25T11:34:42.623Z","isCompleted":true},{"id":"1416915286953","name":"New Task - 22","category":"Recreational","createdAt":"2014-11-25T11:34:46.953Z","isCompleted":true},{"id":"1416915289579","name":"New Task - 23","category":"Recreational","createdAt":"2014-11-25T11:34:49.579Z","isCompleted":false},{"id":"1416915632242","name":"Something Recreational","category":"Official","createdAt":"2014-11-25T11:40:32.242Z","isCompleted":false},{"id":"1416915853076","name":"One last task","category":"Personal","createdAt":"2014-11-25T11:44:13.076Z","isCompleted":false}]';
                res.write(data);
                res.end();
            },5000);
        }
    }
});
server.listen(9090);
console.log("server listening on port 9090");
