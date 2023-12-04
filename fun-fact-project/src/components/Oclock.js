import React from "react";

function Oclock()
{
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    
    const styles = 
    {
        color: "#FF8C00",
        backgroundColor: "#000000",
        fontSize: 50 // or fontSize: "50px"
    };

    if (hours < 12)
    {
        timeOfDay = 'morning';
        styles.color = "#04756F"
    }
    else if (hours >= 12 && hours < 17)
    {
        timeOfDay = 'afternoon';
        styles.color = "#2E0927"
    }
    else
    {
        timeOfDay = 'evening';
        styles.color = "#D90000"
    }

    return (
        <div>
            <p style={styles}>Good {timeOfDay}!</p>
            <p>It is currently about {date.getHours()} o'clock.</p>
        </div>
    );
}

export default Oclock;