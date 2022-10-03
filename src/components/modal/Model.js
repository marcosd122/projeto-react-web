
import React, { Component } from 'react'
import './modal.css'

// https://mdbootstrap.com/docs/react/components/modal/
// Uso do componente bootstrap para criação do Modal/


export default class Model extends Component {

  render() {
    let modelStyle = {
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
     
  }
    return (
      
<div class="modal show fade" style={modelStyle}>
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header" >
        <h5 class="modal-title">{this.props.titulo}</h5>
        <button type="button" class="btn-close" onClick={this.props.hide}></button>
      </div>
      <div class="modal-body">
        <img src={this.props.imagem} alt="{item.titulo}" class="img-fluid"/>
        <p>{this.props.detalhes}</p>
        
      </div>
      </div>
    </div>
  </div>

    )
  }
}
