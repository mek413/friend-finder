var friendData = require("../data/friends.js");

module.exports = function(app) {
    // api get request
    app.get("/api/friends",function(req, res){
        res.json(friendData);
    });
    // api post for survey
    app.post("/api/friends", function(req,res){
        friendData.push(req.body);
        res.json(req.body);
    });
}