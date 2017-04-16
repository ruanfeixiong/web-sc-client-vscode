import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from '../../mRedux';
class RenderInBody extends Component {
  componentDidMount() {
    this.popup = document.createElement('div');
    document
      .getElementById('root')
      .appendChild(this.popup);
    this._renderLayer();
  }

  componentDidUpdate() {
    this._renderLayer();
  }

  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.popup);
    document.getElementById('root').removeChild(this.popup);
  }

  _renderLayer() {
    ReactDom.render(
      <Provider store={store}>
        {this.props.children}
      </Provider>, this.popup);
  }

  render() {
    // Render a placeholder
    return React
      .DOM
      .div(this.props);
  }
}

export default RenderInBody;
