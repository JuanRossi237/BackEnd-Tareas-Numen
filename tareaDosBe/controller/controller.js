const controllers = {
  myIndex(req, res) {
    res.render("index", { title: "Express" });
  },
  myUser(req, res) {
    res.json({
      name: "Axel",
      age: 25,
    });
  },
};

module.exports = controllers;
