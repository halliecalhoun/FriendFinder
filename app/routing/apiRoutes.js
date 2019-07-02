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

       
};