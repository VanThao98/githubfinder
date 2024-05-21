import React from "react";
import UserItem from "./UserItem";

const Users = (props) =>{
    const {Users} = props;
    const userStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)", 
        gridGap : "1rem",
    };

    return(
        <div style={userStyle}> 
            {Users.map((user) => (<UserItem key={user.id} user={user} />))}
        </div>
    );
}
export default Users;