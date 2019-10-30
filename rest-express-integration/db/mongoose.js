const mongoose = require('mongoose')

mongoose.connect
('mongodb://127.0.0.1:27017/task-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(()=>{
    console.log('connected to mongo');
}).catch(err=>{
    console.log('error connecting to the db', err);
})