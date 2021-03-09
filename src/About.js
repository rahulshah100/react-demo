import React from 'react';

class About extends React.Component{
    constructor(){
        super();
        console.warn("constructor");
        this.state={Uname:'anil',age:26};
    }
    componentDidMount(){console.warn("didmount","Props:",this.props);
    }
    componentDidUpdate(){console.warn("didupdate")};
    render(){
        console.warn("render");
        return(
            <div>
                <div>
                    <h1>About US Class Component 
                        ,{this.state.Uname}
                        ,{this.state.age}</h1>
                    <button onClick={()=>
                        this.setState({Uname:"suther"})
                        }>Update State</button>
                 </div>
                 <div>Yo{this.props.sname}</div>
             </div>
         )
                }
            }
 export default About;

    //  constructor(){    
    // }
    // componentDidMount(){    
    // }
    // componentDidUpdate(){    
    // }
    // componentWillUnmount(){    
    // }