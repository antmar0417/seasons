import './SeasonDisplay.css'
import React from 'react';
import Date1 from './Date1';
import Clock from './Clock';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun icon'
    },
    winter: {
        text: 'Brr, it is chilly!',
        iconName: 'snowflake icon'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //console.log(season);
    const {text, iconName} = seasonConfig[season] //{text, icon}
    return (
        <div className={`season-display ${season}`}>
            <i className={` icon-left massive ${iconName} icon`} />
            <h1>
                {text}
                <Date1 />
                <Clock />
            </h1>
            <i className={` icon-right massive ${iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;