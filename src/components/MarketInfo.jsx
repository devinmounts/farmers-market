import React from 'react';
import PropTypes from 'prop-types';

function MarketInfo(market) {
    let divStyle = {
        border: '3px solid grey',
        width: '25%',
        display: 'inline-block',
        margin: '1.5%',
        padding: '10px',
        verticalAlign: 'top',
        minHeight: '200px',
        WebkitBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        MozBoxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        boxShadow: '0px 0px 33px 1px rgba(0,0,0,0.74)',
        backgroundColor: '#76b35d'
    };
    return(
        <div style={divStyle}>
            <h3>{market.location}</h3>
            <h5>{market.day}</h5>
            <h5>{market.hours}</h5>
            <h5>{market.booth}</h5>
        </div>
    );
}

MarketInfo.propTypes = {
    location: PropTypes.string,
    day: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
};

export default MarketInfo;