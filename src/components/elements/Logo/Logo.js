import React from "react";
import './styles.css'

class Logo extends React.Component {

    render () {

        const logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png';

        return (
            <div className={'header__logo'}>
                <img src={logo} />
            </div>
        )

    }

}
export default Logo