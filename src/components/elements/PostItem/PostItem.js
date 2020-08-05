import React from "react";
import Avatar from "../Avatar/Avatar";
import {FaEllipsisH} from "react-icons/all";
import './styles.css'


class PostItem extends React.Component {
    render() {
        return (
            <div className={'post-item'}>
                <div className="post-item__header">
                    <div className="post-header__left">
                        <Avatar src={this.props.src}/>
                        <div className={'post-header__info'}>
                            <h4 className={'post-header__name'}>{this.props.name}</h4>
                            <h5 className={'post-header__place'}>{this.props.desc}</h5>
                        </div>
                    </div>
                    <div className="post-header__right">
                        <FaEllipsisH/>
                    </div>
                </div>
                <div className="post-item__content">
                    <img className={'post-content__image'} src={this.props.imgSrc} />
                </div>
            </div>
        )
    }

}


export default PostItem
