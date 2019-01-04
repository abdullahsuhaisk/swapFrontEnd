import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchState } from './components/actions/index';
import {

} from "react-bootstrap";

class deneme extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      selectedLoca:null
    };
  }
  componentDidMount() {
    this.props.fetchState();
    console.log(this.props)
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
    const {location} = this.props;
    console.log(location)
    return (
      <div></div>
    );
  }
}
const mapStateToProps = (state) => {
  return({
    location:state.loca.data
  })
}
function mapDispatchToProps (dispatch)  {
  return({
    fetchState: () => dispatch(fetchState())
  })
}
export default connect(mapStateToProps,mapDispatchToProps)(deneme);
