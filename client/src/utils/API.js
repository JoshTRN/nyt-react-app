import axios from "axios";


export default {
    getSearch: function (topic, beginDate, endDate) {
        let apiKey = 'c138c2f70087473884a65fe6c4cb822c';

        let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + topic +'&begin_date=' + beginDate + "&end_date=" + endDate +'&api-key=' + apiKey

        axios.get(queryURL).then(data => console.log(data))
    },

    saveArticle: function(article) {
        return axios.post('/api/articles', article)
    },

    // deleteArticle: function(articleID) {
    //     return axios.delete('api/articles' + articleId)
    // },
    getSaved: function() {
        return axios.get('/api/articles')
    }
}