import React from 'react';

function Player({ player }) {
    const name = player.name;
    const country = player.country;
    const searches = player.searches;

    return (
        <div>
            <h2>{name}</h2>
            <h4>{`Country: ${country}`}</h4>
            <h4>{`Searches: ${searches}`}</h4>
        </div>
    );
}

export default Player