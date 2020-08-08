import React from "react";
import CommentForm from "../../forms/CommentForm/CommentForm";
import './styles.scss'


class Comments extends React.Component {


    state = {
        comments: [],
        showAll: false
    }

    componentDidMount() {
        this.setState({
            comments: this.props.comments
        })
    }

    addComment = (username, comment) => {
        this.setState({
            comments: [...this.state.comments, {username, comment}]
        })
    }

    toggleShow = () => {
        this.setState({
            showAll: !this.state.showAll
        })
    }

    renderItems = () => {
        let filteredData = this.state.comments
        if(!this.state.showAll){
            filteredData = filteredData.slice(this.state.comments.length - 2, this.state.comments.length)
        }
        return filteredData.map((item, index) => {
            return <div key={index} className={'comments-list__item'}>
                <span className={'list-item__username'}>
                    {item.username}
                </span>
                <span className={'list-item__comment'}>
                    {item.comment}
                </span>
            </div>
        })
    }

    render() {

        const showString = this.state.showAll ? `Скрыть`  : `Посмотреть все (${this.state.comments.length})`

        return (
            <div>
                <div className={'comments-list'}>
                    {this.state.comments.length > 2 && <a  onClick={this.toggleShow} className={'show-all-anchor'}>
                        {showString}
                    </a>}
                    {this.renderItems()}
                </div>
                <CommentForm addComment={this.addComment} />
            </div>
        )
    }

}

export default Comments
