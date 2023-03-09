class NewsController {
  //[GET] /news
  index(req, res) {
    res.render('news');
  }
  //[GET] /:slugs
  show(req, res) {
    res.send('show details');
  }
}

module.exports = new NewsController();
