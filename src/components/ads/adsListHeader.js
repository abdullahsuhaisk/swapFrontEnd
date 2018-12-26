import React from 'react'

const adsListHeader = () => {
  return (
            <div className="select-box">
              <div className="select-city-for-local-ads ads-list">
                <label>Select your city to see local ads</label>
                <select>
                  <optgroup label="Popular Cities">
                    <option selected style={{ display: "none", color: "#eee" }}>
                      Entire USA
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
              <div className="browse-category ads-list">
                <label>Browse Categories</label>
                <select
                  className="selectpicker show-tick"
                  data-live-search="true"
                >
                  <option data-tokens="Furniture">Furniture</option>
                  <option data-tokens="Mobiles">Mobiles</option>
                  <option data-tokens="Electronics & Appliances">
                    Electronics & Appliances
                  </option>
                  <option data-tokens="Cars">Cars</option>
                  <option data-tokens="Bikes">Bikes</option>
                  <option data-tokens="Pets">Pets</option>
                  <option data-tokens="Books, Sports & Hobbies">
                    Books, Sports & Hobbies
                  </option>
                  <option data-tokens="Fashion">Fashion</option>
                  <option data-tokens="Kids">Kids</option>
                  <option data-tokens="Services">Services</option>
                  <option data-tokens="Jobs">Jobs</option>
                  <option data-tokens="Real Estate">Real Estate</option>
                </select>
              </div>
              <div className="search-product ads-list">
                <label>Search for a specific product</label>
                <div className="search">
                  <div id="custom-search-input">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control input-lg"
                        placeholder="Buscar"
                      />
                      <span className="input-group-btn">
                        <button className="btn btn-info btn-lg" type="button">
                          <i className="glyphicon glyphicon-search" />
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix" />
            </div>
  )
}

export default adsListHeader;
