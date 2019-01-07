import React, {Component} from 'react';
export default class Search extends Component {
    render() {
        return (
            <div class="search-container">
             <input type="text" placeholder="Insira aqui o nome da cidade" name="search"/>
             <button type="submit">OK</button>
            </div>
    );
    }
    // <i class="fa fa-search"></i>
}