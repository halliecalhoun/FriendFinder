var path = require("path");
var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var userData = req.body;
        var userScores = userData.scores
        var bestMatch = {
            name: "",
            photo: "",
            difference: 500
            
        };

        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < userScores.length; j++) {
                totalDifference += Math.abs(friends[i].scores[j] - userScores[j]);

                if (totalDifference <= bestMatch.difference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDifference;
                }
            }
        }
        friends.push(userData);
        res.json(bestMatch);
        // var userData = req.body;
        // var userScores = userData.scores;
        // var userName = userData.name;
        // var userPhoto = userData.photo;
    });
};