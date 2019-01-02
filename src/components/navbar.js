import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from 'redux';
import { connect } from "react-redux";
import { fetchState } from "./actions/index";
import { Modal, Button } from "react-bootstrap";

class navbar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      selectedLocaId: null
    };
  }
  componentDidMount() {
    this.props.fetchState();
    //console.log(this.props);
  }

  handleHide() {
    this.setState({ show: false });
  }
  handleChange = e => {
    this.setState({
      selectedLocaId: e.target.value
    });
    //console.log(this.state);
  };
  handleClick = e => {
    this.props.history.push("/Ads/ShowAdsWithState/" + this.state.selectedLocaId);
  };
  render() {
    const { location } = this.props;
    //console.log(location);
    //console.log(this.state);
    return (
      <div className="header">
        <div className="container">
          <div className="logo">
            <Link to={"/"}>
              <span>Ta</span>kaslaa
            </Link>
          </div>
          <div className="header-right">
            <Link className="account" to="/auth">
              Profil
            </Link>
            <span className="active uls-trigger">Yakınlarımda Neler Var</span>
            <div className="selectregion">
              <div className="modal-container">
                <Button
                  bsStyle="primary"
                  bsSize="large"
                  onClick={() => this.setState({ show: true })}
                >
                  Şehir Şeç
                </Button>

                <Modal
                  show={this.state.show}
                  onHide={this.handleHide}
                  container={this}
                  aria-labelledby="contained-modal-title"
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">
                      Şehir Seçiniz
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="modal-body">
                      <form>
                        <div className="form-group row" />
                        <select
                          id="inputState"
                          className="form-control"
                          onChange={this.handleChange}
                        >
                          {location
                            ? location.map(item => {
                                return (
                                  <optgroup key={item.name} label={item.name}>
                                    {item.cities
                                      ? item.cities.map(it => {
                                          return (
                                            <option value={it.id} key={it.name}>
                                              {it.name}
                                            </option>
                                          );
                                        })
                                      : "Bekleyiniz.."}
                                  </optgroup>
                                );
                              })
                            : "Bekleyiniz.."}
                        </select>
                      </form>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.handleClick}>Seç</Button>
                    <Button onClick={this.handleHide}>Kapat</Button>
                  </Modal.Footer>
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, props) => {
  //console.log(props.match);
  return {
    location: state.loca.data,
    history: props.history
  };
};
function mapDispatchToProps(dispatch) {
  return {
    fetchState: () => dispatch(fetchState())
  };
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(navbar)
);
// export default compose(
//   connect(
//   mapStateToProps,
//   mapDispatchToProps
//   ),
//   withRouter
// )(navbar);