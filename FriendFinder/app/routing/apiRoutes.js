var friendData = require("../data/friends.js");

module.exports = function(app) {
    // api get request
    app.get("/api/friends",function(req, res){
        res.json(friendData);
    });
    // api post for survey
    app.post("/api/friends", function(req,res){
        user = req.body
        // turns user score into integers
        for (var i=0;i<user.scores.length;i++){
            user.scores[i]= parseInt(user.scores[i]);
        }

        // friend match is default at first index
        var match = 0

        // difference is set at the max it can be so it can lower to the best match
        var matchPoints = 40

        // loop through friendData array to start the matching
        for (var i=0;i<friendData.length;i++){
            // setting default difference of each index in friendData array
            var totalDiff = 0

            for (var j=0;j<friendData[i].scores.length;j++){
                var scoreDiff = Math.abs(user.scores[j] - friendData[i].scores[j]);
                totalDiff += scoreDiff;
            }

        }
        // checks for lowest difference to match user and friend from array
        if (totalDiff < matchPoints){
            match = i;
            matchPoints = totalDiff
        }


        friendData.push(user);
        res.json(friendData[match]);
    });
}