import React, { Component } from "react";
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const { id, name, type, exp } = this.props;
        //Give single digits numbers 0 so they can be 3 digits number and being able to get the image from the API
        let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
        return (
            <div className="Pokecard">
                <p className="Pokecard-name">{name}</p>
                <div className="Pokecard-img">
                    <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`} alt={name} />

                </div>
                <p className="Pokecard-data">Type: {type}</p>
                <p className="Pokecard-data">Exp: {exp}</p>
            </div>
        )
    }
}

export default Pokecard;