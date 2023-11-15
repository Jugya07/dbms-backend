const {
    post,
    get,
  } = require("./favorites.services");
  
  module.exports = {
    postfavbyID: (req, res) => {
        console.log(req.body);
      const body = req.body;
      post(body, (err, results) => {
        if (err) {
          console.log(err);
          return res.status(500).json({
            success: 0,
            message: "Database connection errror"
          });
        }
        return res.status(200).json({
          success: 1,
          data: results
        });
      });
    },
    getfavbyID: (req, res) => {
      const id = req.params.id;
      get(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record not Found"
          });
        }
        return res.json({
          success: 1,
          data: results
        });
      });
    }
  };