import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        title: "Hubert's Resume",
        link_1:["/contact", "Contact Me"],
        link_2:["/aboutme", "About Me"],
    });
});
app.get("/aboutme", (req, res) => {
    res.render("aboutme.ejs", {
        title: "Who is Hubert Wu",
        link_1:["/", "Homepage"],
        link_2:["/contact", "Contact Me"],
    });
});  
app.get("/contact", (req, res) => {
    res.render("contact.ejs", {
        title: "Contact Me",
        link_1:["/", "Homepage"],
        link_2:["/aboutme", "About Me"],
    });
}); 


app.post("/submit", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});