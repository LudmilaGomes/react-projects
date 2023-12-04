import React from "react";

// props (properties) works like parameters in functions

function CatsListItem(props)
{
    // console.log(props);
    return (
        <div className="contact-card">
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
            <img src={props.contact.imgUrl}/>
        </div>
    );
}

export default CatsListItem