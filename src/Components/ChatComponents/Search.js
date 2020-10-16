import React, {Component} from 'react';
import { FaSearch } from 'react-icons/fa';

class Search extends Component{

    render(){
        return ( 
                    <div className="search">
                        <button type="submit" className="search-button">
                            <FaSearch/>
                        </button>
                        <input type="text" className="search-input" placeholder="search messages"/>
                        
                    </div>
        );
        }
}

export default Search;
