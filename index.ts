const { getChatResponse } = require("./controller/openaiController");

const express = require("express");
const app = express();
const PORT = 3000 || process.env.PORT;
const cors = require("cors");

app.use(cors({
  origin: "*"
}));

app.get("/", (req, res) => {
    res.json({
        message: "Hello World !"
    });
});

app.use(express.json());
app.use(express.static("public"));

app.post("/api/chat", async(req, res) => {
    var question = req.body.question;

    if(question == null){
        question = "Hello"
    }

    try{
        var response = await getChatResponse(question);
        res.status(200).json({
            message: response
        });
    } 
    catch(error){
        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}\nhttp://localhost:${PORT}`);
});