import React from 'react';

const Country = (props) => {
    const {name, flags} = props.country;
    const flagStyle ={
        height: '50px',
    }
    return (
        <div>
            <h3>{name.common}</h3>
            <img style={flagStyle} src={flags.svg} alt="" />
        </div>
    );
};

export default Country;