import React, { useInsertionEffect } from "react";
import { getHeapCodeStatistics } from "v8";

import { firebase } from "./firebase";

const [userss, setUsers] = useState([])

useEffect(() => {
    getUsers()
}, [])

useInsertionEffect(() => {
    console.log(userss)
}, [userss])

function getUsers(){
    const usersCollect = firebase.firestore().collection("user")
    getDocs(usersCollect)
        .then(response => {
            console.log(response)
        const users = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id}))
            setUsers(userss)
    })
        .catch(error => console.log(error))
}


export default function UserList() {
    return(
        <div>
            <h4>UserList</h4>
        </div>
    )
}