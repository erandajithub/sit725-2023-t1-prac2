const { log } = require("console");
const express = require("express");
const res =require("express/lib/response");
const app=express();
const addTwoNumber=(n1,n2) => { return n1+n2;}
const minusTwonumber=(m1,m2) => { return m1-m2;}
const timesTwonumber=(t1,t2) => { return t1*t2;}
const powerTwonumber=(p1,p2) => { return Math.pow(p1, p2);}

app.get("/addTwonumber",(req,res)=>{
const n1=parseInt(req.query.n1);
const n2=parseInt(req.query.n2);
const result = addTwoNumber(n1,n2);
res.json({statuscode:200, Plus_Calcuation_of: n1 , and:n2 ,Answer:result });
});

app.get("/minusTwonumber",(req,res)=>{
    const m1=parseInt(req.query.m1);
    const m2=parseInt(req.query.m2);
    const result = minusTwonumber(m1,m2);
    res.json({statuscode:200, Minus_Calcuation_of: m1 , and:m2 ,Answer:result });
    });

app.get("/timesTwonumber",(req,res)=>{
        const t1=parseInt(req.query.t1);
        const t2=parseInt(req.query.t2);
        const result = timesTwonumber(t1,t2);
        res.json({statuscode:200, Time_Calcuation_of: t1 , and:t2 ,Answer:result });
        });

app.get("/powerTwonumber",(req,res)=>{
        const p1=parseInt(req.query.p1);
        const p2=parseInt(req.query.p2);
        const result = powerTwonumber(p1,p2);
        res.json({statuscode:200, Power_Calcuation_of: p1 , and:p2 ,Answer:result });
        });        

//Math.pow(m, n);
//console.log(addTwoNumber(19,12));
const port=3040;
app.listen(port,()=>{console,log("Hello i'm listening to port "+port);
})