import React from "react";
import './styles.css';
import {IoMdHome} from "react-icons/all";
import {IoMdPaperPlane} from "react-icons/all";
import {TiCompass} from "react-icons/all";
import {IoMdHeartEmpty} from "react-icons/all";
import Avatar from "../Avatar/Avatar";

class HeaderNav extends React.Component {

    render () {

        return (
            <ul className={'header-nav__list'}>
                <li className={'header-nav__list-item'}>
                    <div>
                        <a href={'#'}>
                            <IoMdHome className={'header-nav__list-item-logo'} />
                        </a>
                    </div>
                </li>
                <li className={'header-nav__list-item'}>
                    <div>
                        <a href={'#'}>
                            <IoMdPaperPlane className={'header-nav__list-item-logo'} />
                        </a>
                    </div>
                </li>
                <li className={'header-nav__list-item'}>
                    <div>
                        <a href={'#'}>
                            <TiCompass className={'header-nav__list-item-logo'} />
                        </a>
                    </div>
                </li>
                <li className={'header-nav__list-item'}>
                    <div>
                        <a href={'#'}>
                            <IoMdHeartEmpty className={'header-nav__list-item-logo'} />
                        </a>
                    </div>
                </li>
                <li className={'header-nav__list-item'}>
                    <Avatar className={'header-nav__list-item-avatar'} src={this.props.Avatar}/>
                </li>
            </ul>
        )

    }

}

export default HeaderNav