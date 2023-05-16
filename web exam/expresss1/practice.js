const express = require('express')
const mongoose = require('mongoose')
const app = express();
try {
    mongoose.connect('mongodb://127.0.0.1:27017/new')
        .then(()=>{
            console.log('mongodb connected');
        })
}
catch (err) {
    console.error(err);
    console.log('cannot connect sorry');

}

const info = mongoose.Schema({
    name: String,
    addr: String,
    score: Number,
})

const Dj = mongoose.model('info', info)

const abc = new Dj({ name: "aditya", addr: "y", score: 90 });
abc.save();
const abc1 = new Dj({ name: "adi", addr: "x", score: 20 });
abc1.save();
const abc2 = new Dj({ name: "adit", addr: "z", score: 70 });
abc2.save();

Dj.updateOne({ name: 'aditya' }, { $set: { addr: 'xy' } })
    .then(() => {
        console.log('updated successful');
    })
    .catch((err) => {
        console.error(err);
        console.log('Update failed');
    });

Dj.deleteOne({addr:'x'})
    .then(()=>{
        console.log('deleted successfully');
    });


app.get('/', (req, res) => {
    Dj.find({ score: 90 }).then((data) => {
        res.send(data);
    });
});

app.listen(5000, () => {
    console.log("server running on http://localhost:3000")
})

