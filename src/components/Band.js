import React, { Component } from 'react'
// import { connect } from 'react-redux'

class Band extends Component {

    handleDelete =() => {
        // deleteBand({type: "DELETE_BAND", id: this.props.id})
        this.props.deleteBand({
            type: 'DELETE_BAND', 
            id: this.props.id
        })
    }
    render() {
        return (
            <li >
               
                <span>{this.props.name}</span>
                <button
                onClick={this.handleDelete}>DELETE</button>
            </li>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         deleteBand: state.deleteBand
//     }
// }

// export default connect(mapStateToProps)(Band)
export default Band

