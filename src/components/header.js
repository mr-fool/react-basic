import React from "react";

const user = {
    name: "cyka",
    lastname: "blyat",
    age: 100
}

const Header = () => {
    return (
        <div>
            <div>{user.name}</div>
            <div>{user.lastname}</div>
            <div>{user.age}</div>
        </div>

    ) 
}

export default Header;