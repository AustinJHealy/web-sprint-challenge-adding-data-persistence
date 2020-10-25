const express = require('express')
const server = express()
const projectRouter = require('./routers/projectRouter')
server.use(express.json())
server.use("/api/projects", projectRouter)

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
    res.status(200).json({ message: "SUCCESS" });
  });

server.listen(PORT, () => console.log(`Listening on port ${PORT}...`));