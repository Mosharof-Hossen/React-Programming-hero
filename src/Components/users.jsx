import React ,{useState,useEffect} from "react"

function Users (){
    
    const [users , setUsers] = useState([])

    useEffect(() => {
        console.log("Effect?")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => setUsers(users))
        
    },[])
    return(
        <div>
            <h2>Dynamic Users : {users.length}</h2>
            <ul>
            {
                users.map(name => <li >{name.name}</li>)
            }
            </ul>
        </div>
        
    )
}

export default Users;