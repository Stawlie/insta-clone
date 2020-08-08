import React from "react";
import FlatButton from "../../buttons/FlatButton/FlatButton";
import './styles.css'


class CommentForm extends React.Component {


    state = {
        value: ''
    }

    changeHandler = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    clickHandler = () => {
        this.props.addComment('test', this.state.value)
        this.setState({
            value: ''
        })
    }

    render() {
        return (
            <div className={'comment-form'}>
                <input placeholder={'Добавьте комментарий...'} value={this.state.value} className={'comment-form__input'} onChange={this.changeHandler}/>
                <FlatButton onClick={this.clickHandler} isDisabled={!this.state.value} text={'опубликовать'}/>
            </div>
        )
    }

}

export default CommentForm
