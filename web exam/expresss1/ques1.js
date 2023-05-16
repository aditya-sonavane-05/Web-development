const express = require("express")
const mongoose = require("mongoose")
const app = express()
try {
    mongoose.connect('mongodb://127.0.0.1:27017/mondo')

} 
catch (error) {
    console.log(error);
    console.log("could not connect");
}
const hiyaSchema = new mongoose.Schema({
    name: String,
    city: String
});
const Hiya = mongoose.model('Hiya', hiyaSchema)

const abc = new Hiya({ name: "X", city: "Y" });
abc.save();
const abc1 = new Hiya({ name: "X", city: "Y" });
abc1.save();
const abc2 = new Hiya({ name: "X", city: "z" });
abc2.save();

app.get('/', (req, res) => {
    Hiya.find({ city: "Y" }).then((data) => {
        res.send(data);
    })
        .catch((err) => {
            console.log(err)
        }
        );
});
app.listen(3000, function () {
    console.log("server")
}
);