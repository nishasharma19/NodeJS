const mongoose = require("mongoose");
require("./connection")

async function createCourse(){
    const courseSchema= new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type: Date, default:Date.now},
        price: Number,
        isPublished: Boolean
    });
    
    const Course = mongoose.model("Course", courseSchema);
    let course = new Course({
        name: "Pro Spring",
        author: "Rod Johnson",
        tags: ["Spring", "Middleware"],
        price: 15,
        isPublished: true
    });    

    let c = await course.save();
    console.log(c);
}



async function getAllCourses(){
    const courseSchema= new mongoose.Schema({
        name: String,
        author: String,
        tags: [String],
        date: {type: Date, default:Date.now},
        price: Number,
        isPublished: Boolean
    });
    
    const Course = mongoose.model("Course", courseSchema);
    let course = new Course({
        name: "Apache Spark",
        author: "Romeo Kienzler",
        tags: ["Apache", "Spark"],
        price: 10,
        isPublished: true
    });  

    let c = await course.save();
    console.log(c);
}

createCourse();
//getAllCourses(); 