import React from "react"
import History from "../../elements/History/History";
import PropTypes from 'prop-types'
import './styles.css'

class HistoryList extends React.Component {

    renderItems(){
        return this.props.items.map((item, index) => <History key={index} src={item.link} name={item.name}/>)
    }

    render() {
        return (
            <div className={'history-wrapper container'}>
                <div className={'history-list'}>
                    {this.renderItems()}
                </div>
            </div>
        )
    }
}

HistoryList.propTypes = {
    items: PropTypes.array
}

export default HistoryList