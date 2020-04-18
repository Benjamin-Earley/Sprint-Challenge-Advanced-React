import React, { Component } from 'react';
import axios from 'axios'

import Player from './Player';

class PlayersList extends Component {
    constructor() {
        super();
        this.state = {
            playersArray: []
        };
    };

    componentDidMount() {
        this.fetch();
    };

    fetch = () => {
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({
                    playersArray: res.data
                })
                console.log(this.state.playersArray)
            })
            .catch(err => {
                console.log(`Error: ${err}`)
            })
    };

    render() {
        return (
            <div>
                {this.state.playersArray.map(player => {
                    console.log(player.name, player.country, player.searches)
                    return <Player key={player.id} player={player} />
                })}
            </div>
        );
    };
}

export default PlayersList