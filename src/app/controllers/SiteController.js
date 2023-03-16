const Course = require("../model/Course");
class SiteController {
  //[GET] /
  async index(req, res) {
    const course = await Course.find({});
    await res.json(course);
  }
  //[GET] /search
  search(req, res) {
    res.send("search details");
  }
}

module.exports = new SiteController();
