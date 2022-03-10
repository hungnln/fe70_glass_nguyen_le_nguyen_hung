import React, { Component } from 'react'
import GlassItem from './GlassItem';

export default class GlassList extends Component {
  renderProduct = () => {
    let { productList } = this.props;
    return productList.map((item, index) => {
        return <div className='col-2' key={index}>
            <GlassItem item={item} />
        </div>
    })
}
  render() {
    return (
      <div className="glass__list d-flex">
        <div className="row">
          {this.renderProduct()}
        </div>
      </div>
    )
  }
}
