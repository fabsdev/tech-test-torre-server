const fetch = require("node-fetch");

const getUser = async (req, res) => {
  try {
    const username = req.params.username;
    let user = {};
    await fetch(`https://torre.bio/api/bios/${username}`)
      .then((promise) => promise.json())
      .then((data) => {
        user = {
          subjectId: data.person.subjectId,
          name: data.person.name,
          picture: data.person.picture,
          profession: data.person.professionalHeadline,
          location: data.person.location,
          strengths: data.strengths,
        };
      });
    res.json({
      ok: true,
      user,
    });
  } catch (error) {
    res.status(404).json({
      ok: false,
      msg: "User does not exist.",
    });
  }
};

module.exports = { getUser };
