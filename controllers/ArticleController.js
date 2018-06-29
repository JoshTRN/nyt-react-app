const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Article.find().then(data => (res.json(data)))
    },
    save: function(req, res) {
        db.Article.create(req.body).then(data => res.json(data))
    },
    delete: function(req, res) {
        dbArticle.findById({_id: req.params.id})
    }
}