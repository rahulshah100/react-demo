import React,{useEffect, useState} from 'react';

function Contact(props)
{   
    const[Uname,setName]=useState('anilbhaif');
    const[Uage,setAge]=useState(12);
    
    useEffect(()=>{console.warn("hello from hook");},[Uage])

    useEffect(()=>{console.warn("Check Props",props);})

    let data="data from var"

    const[myval,setVal]=useState("mahesh");
    const test=(e)=>{
        console.warn("test function",e.target.value)
        setVal(e.target.value);
    }
    
    return(
        <div>
            <h1>Contact Us functional Componenet. {data} {Uname} {Uage}</h1>
            <button onClick={()=>
                    setName("sutherbhaif")
                    }>Name Update button</button>
    
            <button onClick={()=>
                    setAge(43)
                    }>
                    Age Update button
            </button>

            <button onClick={()=>console.warn("On click event")}>Onclick</button>

            <input type="text" value={myval} onChange={test}/>
        </div>
    )
}

export default Contact;
// constructor(){    
// }
// componentDidMount(){    
// }
// componentDidUpdate(){    
// }
// componentWillUnmount(){    
// }