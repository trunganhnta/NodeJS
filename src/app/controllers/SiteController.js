const Course = require("../model/Course");
class SiteController {
  //[GET] /
  index(req, res) {
    Course.find({}, (err, courses) => {
      if (!err) res.json(courses);
      res.status(400).json({ error: "ERROR!!" });
    }).lean();
  }
  //[GET] /search
  search(req, res) {
    res.send("search details");
  }
}

module.exports = new SiteController();
