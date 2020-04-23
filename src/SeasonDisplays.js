import React from "react";

const SeasonConfig = {
    summer: {
        iconName: "sun",
        text: "Lets hit the beach",
    },
    winter: {
        text: "Burr, it is chilly",
        iconName: "snowFlacke",
    }
}

const getSeason = (lat, month) => {
    if ( month > 2 && month < 9 ) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat < 0 ? "winter" : "summer";
    }
};

const SeasonDisplay = props => {

    const season = getSeason(props.lat, new Date().getMonth());
    // let text = season === "winter" ? "Burr, it is chilly" : "Lets hit the beach";
    // let icon = season === "winter" ? "showflake" : "sun";
    const {text, iconName} = SeasonConfig[season];

    return(
    <div>
        <i className={`${icon} icon`} />
        <div>{text}</div>
        <i className={'icon'} />
        <div>Just text</div>
    </div>
    );
};

export default SeasonDisplay;