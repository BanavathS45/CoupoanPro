import React from 'react' 
import axios  from 'axios'
 
let url=("http://localhost:3000/products")
// console.log(url);
 export async function getData() {
     return await axios.get(url) 
        
        
    }
 

 
 
