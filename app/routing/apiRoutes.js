var path = require("path");
var friends = require('../data/friends.js');

module.exports = function(app) {
    app.get('/api/friends', function(req, res) {
        res.json(friends);
    });

    app.post('/api/friends', function(req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            matchDifference: 1000
            
        };

        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores
        var totalDifference = 0;


        for (var i = 0; i < friends.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < userScores.length; j++) {
                totalDifference += Math.abs(parseInt(friends[i].scores[j] - (parseInt(userScores[j]))));

                if (totalDifference <= bestMatch.difference) {
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.matchDifference = totalDifference;
                }
            }
        }
        friends.push(userData);
        res.json(bestMatch);
        
    });
};