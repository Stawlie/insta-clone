import React from "react";
import './styles.css'


class Avatar extends React.Component {

    render() {

        const showDefault = this.props.showDefault
        let imgSrc = 'https://amd-agro.ru/media/catalog/product/cache/1/image/d3c8bcb7854d60ce1b923908353486f1/placeholder/default/placeholder-image.jpg'

        if(!showDefault){
            imgSrc = this.props.src
        }

        return (
            <div className={'avatar-wrapper'}>
                <img src={imgSrc} />
            </div>
        )
    }

}


export default Avatar
