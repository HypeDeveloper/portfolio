// const express = require('express');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const { connectDB, connectDB_local } = require('./backend/config/dbConfig');

// dotenv.config();

// if (process.env.NODE_ENV === "production") {
//     connectDB();
// } else {
//     connectDB_local();
// }

// const port = process.env.PORT || 8000;

// // inti express
// const app = express()

// // add Middlewares
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));


// // setup routes
// app.use("/api", require("./backend/routes"));


// // serve static access
// // serve Fronten
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, './dist')))
//     app.get('*', (req, res)=>{
//         res.sendFile(path.resolve(__dirname, './','dist', 'index.html'))
//     })
// } 
// else {
//     app.get('/', (req, res) => {
//         res.send('Set env to production')
//     })
// }


// // listen to for server
// app.listen(port, () => {
//     console.log(`SERVER: listening on port ${port}`);
// })