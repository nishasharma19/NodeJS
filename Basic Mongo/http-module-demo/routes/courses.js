const express=require('express');
const Joi=require('joi');
const router=express.Router();
const courses=[
    {
        id:1,
        name:'Course-1'
    },
    {
    
        id:2,
        name:'Course-2'
    },
    {
        id:3,
        name:'Course-3'
    }
    
    ];
    
    
        
        router.get("/",(req,res)=>{
        
        res.status(200).send(courses);
        });
        
    
    router.get("/:id",(req,res)=>{
    
        const course=courses.find(c=>c.id==parseInt(req.params.id))
        if(!course)
        {
            res.send('no course found with the given id.');
            return;
        }
        res.send(course);
    });
    
        
    router.post("/",(req,res)=>{
       
    const { error} =validateCourse(req.body);   
    if(error)
    {
        res.status(400).send(error.details[0].message);
        return;
    } 
    
    const course={
        id:courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
    
    });
    
    router.put("/:id",(req,res)=>{
        const course=courses.find(c=>c.id==parseInt(req.params.id));
        
        if(!course)
        {
           res.status(404).send('the course with the given id was not found');
           return;
        }
        const { error} =validateCourse(req.body);   
        if(error)
        {
            res.status(400).send(error.details[0].message);
            return;
        } 
        
        course.name=req.body.name;
        res.send(course);
    });
    
    router.delete("/:id",(req,res)=>{
        const course=courses.find(c=>c.id==parseInt(req.params.id));
        if(!course)
        {
           res.status(404).send('the course with the given id was not found');
           return;
        }
        let index=courses.indexOf(course);
        courses.splice(index,1);
        res.send(course);
    
    
    })
    {
    
    }
    
    
    
    function validateCourse(course)
    {
        const schema={
            name: Joi.string().min(3).required()
        };
        return Joi.validate(course,schema);
    }
    module.exports=router;