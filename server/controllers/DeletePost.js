const { isAuthorized } = require("./tokenFunction");
const { post } = require("../models"); // modified

module.exports = {
  deleteMyPost: (req, res) => {
    const post_id = req.params.id;
    const accessTokendata = isAuthorized(req);

    if (!accessTokendata) {
      return res.status(401).json({ message: "invalid access token" });
    } else {
      post
        .destroy({
          where: {
            id: post_id,
          },
        })
        .then((data) => {
          return res.status(200).json({ message: "successfully deleted" });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
