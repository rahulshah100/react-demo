import React, { useEffect, useState, Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
function Users() {

    const [user, setUser] = useState([
        { name: 'rajesh', age: 13 },
        { name: 'dipesh', age: 15 },
        { name: 'narendara', age: 12 },
        { name: 'gopal', age: 87 }
    ])
    
    const[secondUser,setsecondUser]=useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{data.json().then(result=>{
            console.warn("result",result.data);
            setsecondUser(result.data);
        })
      })
    },[])

    return (
        <div>
            <h1>User's listing is here</h1>

            { user.map(
                (item, i) =>
                    <div key={i}>
                        {item.name} {item.age}
                    </div>
            )
            }

            {user.length == 4 ? <div>Yes length matches</div> : <div>No,length aint True</div>}

            <Fragment>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </Fragment>

            <>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index) => <tr key={index}>
                                <td>{index}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </>
            
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
               {
                secondUser.map((item2,index2)=>
                 <tr key={index2}>
                    <td>{item2.id}</td>    
                    <td>{item2.employee_name}</td>    
                    <td>{item2.employee_salary}</td>    
                    <td>{item2.employee_age}</td>    
                 </tr>
                )}
            </tbody>
            </Table>

        </div>
    )
}

export default Users;