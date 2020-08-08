import React from "react";
import './styles.css'
import Logo from '../Logo/Logo'
import Search from "../Search/Search";
import HeaderNav from "../HeaderNav/HeaderNav";

class Header extends React.Component {

    render () {

        return (
        <div className={'header-wrapper'}>
            <header className={'header container'}>
                <Logo />
                <Search />
                <HeaderNav Avatar={this.props.Avatar}/>
            </header>
        </div>
        )

    }

}

export default Header