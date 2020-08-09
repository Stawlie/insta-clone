import React from "react"
import Avatar from "../Avatar/Avatar";
import './styles.css'
import PropTypes from "prop-types";

class History extends React.Component {



    render() {

        const name = this.props.name.length > 8 ? this.props.name.slice(this.props.name.length - 8) + '...' : this.props.name

        return (
            <div className={'history-list__item'}>
                <Avatar src={this.props.src} className={'history-avatar'} />
                <span>{name}</span>
            </div>
        )
    }

}

History.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string
}

export default History