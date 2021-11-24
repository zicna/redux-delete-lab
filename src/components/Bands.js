import React, { Component } from 'react'
import Band from './Band'

export default class Bands extends Component{
    renderBands = () => this.props.bands.map(band => < Band key={band.id} {...band} deleteBand={this.props.deleteBand} />)

    render(){
        return (
            <ul>
                {this.renderBands()}
            </ul>
        )
    }
}