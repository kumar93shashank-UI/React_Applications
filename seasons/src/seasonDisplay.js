import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "It's Chilly outside",
        iconName: "snowflake"
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summner';
    }
}
const seasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    return (
        <div className={`season-display ${season}`}>
            <br />
            <i className={`icon-left massive ${iconName} icon`} />
            {text}
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default seasonDisplay;