const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const empmodel = require('./models/emp');


const app = express();
app.use(express.json())
app.use(cors())
const mongoURI = 'mongodb://localhost:27017/mer';



mongoose.connect(mongoURI, { })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});
 
app.post("/login",(req,res)=>{
  const {name, password} = req.body;
  empmodel.findOne({name:name})
  .then(mer => 
    {
      if(mer){
        if(mer.password === password ){
          res.json(mer.LCd)
        }else{
          res.json(0)
        }
      }else {
        res.json(0)
      }
    })
})


app.post('/users',(req,res)=>{
  empmodel.create(req.body)
  .then(mern => res.json(users))
  .catch(err => res.json(err))
})

app.get('/getusers', async (req, res) => {
  const { username } = req.query; // Access username from query parameters

  try {
    if (!username) {
      return res.status(400).json({ message: 'Username parameter is required.' });
    }

    const users = await empmodel.find({ name: username }); // Filter based on username

    if (users.length === 0) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error.' });
  }
});

const port = process.env.PORT || 5000;


const message = 'Hello from your Express.js server!';


app.get('/', (req, res) => {
  res.send(message);
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
