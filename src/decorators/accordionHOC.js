import React, {PropTypes} from 'react';

export default (Component) => class AccordionHOC extends React.Component {

  state = {
    itemID: null
  };

  //нет, propTypes - это что сюда приходить должно. В случае декоратора это что угодно
  static propTypes = {
    isOpen: PropTypes.func,
    articleAccordion: PropTypes.func
  };

  isOpen = (itemID) => {
    return itemID === this.state.itemID;
  };

  articleAccordion = itemID => e => {
    e && e.preventDefault && e.preventDefault();
    this.setState({
      itemID: itemID != this.state.itemID ? itemID : null
    })
  };

  render() {
    console.log(this.props);
    return <Component {...this.props} {...this.state}
      isOpen={this.isOpen}
      articleAccordion={this.articleAccordion}
    />
  }
}

