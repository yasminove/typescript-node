import express from 'express'

const app = express();

// type Fn = () => void;

// type Params2 = {
//     a:number, 
//     b:number
// }

interface Params {
    a: number, 
    b:number
}

type Add = (x:Params) => number

const add:Add = x => {
        return  x.a + x.b  
}


app.get('/', (req:any) => {
   console.log( add({a: 4, b:4}));
   
    req.name = 'bob'
    console.log(req.name);
    
})

app.listen(3000, () => {
    console.log(`App started on port 3000`);
    
})