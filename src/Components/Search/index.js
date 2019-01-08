import React, {Component} from 'react';
import './Search.css';

export default class Search extends Component {
    render() {
        return (
            <div class="search-container">
             <input type="text" class="search-container-input" placeholder="Insira aqui o nome da cidade" name="search"/>
             <button type="submit" class="search-container-button">OK</button>
            </div>
    );
    }
    // <i class="fa fa-search"></i>
}