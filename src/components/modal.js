import React, {Component} from "react"
import './modal.css'

export default class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            show: newProps.show,
            handleClose: newProps.show,
            children: newProps.children,
            showHideClassName: newProps.show ? "modal display-block" : "modal display-none"
        })
    }
  
    render() {
        return (
        <div className={this.state.showHideClassname}>
            <section className="modal-main">
                {this.state.children}
            </section>
        </div>
        )
    }
}
