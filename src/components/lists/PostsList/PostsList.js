import React from "react";
import './styles.css'
import PropTypes from 'prop-types'
import PostItem from "../../elements/PostItem/PostItem";


class PostsList extends React.Component {

    renderItems(){
        return this.props.items.map((item, index) => <PostItem key={index} comments={item.comments} imgSrc={item.link} src={item.link} name={item.name} desc={item.desc}/>)
    }

    render() {
        return (
            <div className={'post-list container'}>
                {this.renderItems()}
            </div>
        )
    }


}


PostsList.propTypes = {
    items: PropTypes.array
}


export default PostsList
