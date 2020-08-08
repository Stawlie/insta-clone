import React from "react";
import Avatar from "../Avatar/Avatar";
import {FaEllipsisH} from "react-icons/all";
import PropTypes from 'prop-types'
import './styles.css'
import Comments from "../Comments/Comments";


class PostItem extends React.Component {
    render() {
        return (
            <div className={'post-item'}>
                <div className="post-item__header">
                    <div className="post-header__left">
                        <Avatar src={this.props.src}/>
                        <div className={'post-header__info'}>
                            <h4 className={'post-header__name'}>{this.props.name}</h4>
                            <span className={'post-header__place'}>{this.props.desc}</span>
                        </div>
                    </div>
                    <div className="post-header__right">
                        <FaEllipsisH/>
                    </div>
                </div>
                <div className="post-item__content">
                    <img className={'post-content__image'} src={this.props.imgSrc} />
                </div>
                <div className="post-item__comments">
                    <Comments comments={this.props.comments} />
                </div>
            </div>
        )
    }

}

PostItem.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    imgSrc: PropTypes.string,
    comments: PropTypes.array
}


export default PostItem
