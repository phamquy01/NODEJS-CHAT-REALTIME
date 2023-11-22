const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, fisrt_name: username },
      { headers: { "private-key": "4819d871-3310-419b-8242-e6c3d9a5e584" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(r.status).json(r.data);
  }
});

app.listen(3001);
