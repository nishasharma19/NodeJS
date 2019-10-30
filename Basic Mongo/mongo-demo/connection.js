const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/course-information',{useUnifiedTopology:true,useNewUrlParser: true}).then(()=>{
    console.log('connected to mongo');
}).catch(err=>{
    console.log('error connecting to the db', err);
})