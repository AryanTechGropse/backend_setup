import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
app.use(cookieParser())

export { app }




// const port = process.env.PORT || 4000;

// app.get("/", (req, res) => {
//   console.log("this is the home page");
//   res.send("this is the home page");
// });

// app.listen(port, () => {
//   console.log(`App listening on port ${port}`);
// });
