import React, { Component } from 'react'
import GlassList from './GlassList';
import { connect } from 'react-redux';

class BaiTapThuKinh extends Component {
  products = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "./glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "./glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "./glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "./glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "./glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "./glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "./glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "./glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ];
  state = {
    glass: {

      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }
  render() {
    return (
      <React.Fragment>
        <header className="header">
          <div className="container">
            <h1 className="header__title">Try glasses app online</h1>
          </div>
        </header>
        <section className="glass">
          <div className="container">
            <div className="glass__content">
              <div className="glass__show">
                <div className="glass__image">
                  <img className="glass__image-model" src='./glassesImage/model.jpg' />
                  <img className="glass__image-product" src={this.props.glass.url} />
                </div>
                <div className="glass__info">
                  <h3 className="glass__title">{this.props.glass.name}</h3>
                  <p className="glass__detail">
                    {this.props.glass.desc}
                  </p>
                </div>
              </div>
              <div className="glass__choose">
                <GlassList productList={this.products} />
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}
const mapStatetoProps = (rootReducer) => {
  return {
    glass: rootReducer.glassReducer
  }
}
export default connect(mapStatetoProps)(BaiTapThuKinh);
