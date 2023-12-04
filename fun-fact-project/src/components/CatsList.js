import React from "react";
import CatsListItem from "./CatsListItem";

function CatsList() 
{
    return (
        <div className="contacts">
            <CatsListItem 
                contact={{name: "Cat 1",  imgUrl: "http://placekitten.com/300/200", 
                phone: "(83) 9 9999-8999", email: "cat1@catmail.com"}}
            />
            <CatsListItem 
                contact={{name: "Cat 2",  imgUrl: "http://placekitten.com/300/100", 
                phone: "(83) 9 9999-8999", email: "cat2@catmail.com"}}
            />
            <CatsListItem 
                contact={{name: "Cat 3",  imgUrl: "http://placekitten.com/300/300", 
                phone: "(83) 9 9999-8999", email: "cat3@catmail.com"}}
            />
            <CatsListItem 
                contact={{name: "Cat 4",  imgUrl: "http://placekitten.com/300/500", 
                phone: "(83) 9 9999-8999", email: "cat4@catmail.com"}}
            />
        </div>
    )   ; 
}

export default CatsList;