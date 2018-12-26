import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class navbar extends Component {
  render() {
    return (
      <div className="header">
          <div className="container">
            <div className="logo">
              <a href="index.html">
                <span>Ta</span>kaslaa
              </a>
            </div>
            <div className="header-right">
              <Link className="account" to="/auth">
                Profil
              </Link>
              <span className="active uls-trigger">Yakınlarımda Neler Var</span>
              <div className="selectregion">
                <button
                  className="btn btn-primary"
                  data-toggle="modal"
                  data-target="#myModal">
                  Konumunuzu Seçiniz
                </button>
                <div
                  className="modal fade"
                  id="myModal"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="myLargeModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-hidden="true"
                        >
                          &times;
                        </button>
                        <h4 className="modal-title" id="myModalLabel">
                          Konum Seçiniz
                        </h4>
                      </div>
                      <div className="modal-body">
                        <form className="form-horizontal" role="form">
                          <div className="form-group">
                            <select
                              id="basic2"
                              className="show-tick form-control"
                              multiple>
                              <optgroup label="Popular Cities">
                                <option
                                  selected
                                  style={{ display: "none", color: "#eee" }}>
                                  Select City
                                </option>
                                <option>Birmingham</option>
                                <option>Anchorage</option>
                                <option>Phoenix</option>
                                <option>Little Rock</option>
                                <option>Los Angeles</option>
                                <option>Denver</option>
                                <option>Bridgeport</option>
                                <option>Wilmington</option>
                                <option>Jacksonville</option>
                                <option>Atlanta</option>
                                <option>Honolulu</option>
                                <option>Boise</option>
                                <option>Chicago</option>
                                <option>Indianapolis</option>
                              </optgroup>
                              <optgroup label="More Cities">
                                <optgroup label="Alabama">
                                  <option>Birmingham</option>
                                  <option>Montgomery</option>
                                  <option>Mobile</option>
                                  <option>Huntsville</option>
                                  <option>Tuscaloosa</option>
                                </optgroup>
                                <optgroup label="Alaska">
                                  <option>Anchorage</option>
                                  <option>Fairbanks</option>
                                  <option>Juneau</option>
                                  <option>Sitka</option>
                                  <option>Ketchikan</option>
                                </optgroup>
                              </optgroup>
                            </select>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <script>$('#myModal').modal('');</script>
              </div>
            </div>
          </div>
        </div>
    )
  }
}
