const express =  require('express')
const app = express();

const port = 8080;

app.get('/', (req,res)=>{
    return res.json({
        message : "Hey i am using the node js conatiner "
    })
})

app.listen(port,()=>{
    console.log(`The serves is listen on port ${port}`);
})