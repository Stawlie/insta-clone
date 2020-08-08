import React from "react";
import './styles.css';
import {GrFormSearch} from "react-icons/all"

class Search extends React.Component {

    render() {
        return (
            <div className={'header__search'}>
                <GrFormSearch/>
                <input className={'header__search-bar'} placeholder={'Search'} />
            </div>
        )
    }

}
export default Search