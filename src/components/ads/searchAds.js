import React from "react";

const searchAds = () => {
  return (
    <div className="search-hotel">
      <h3 className="sear-head">Name contains</h3>
      <form>
        <input
          type="text"
          value="Product name..."
          onFocus="this.value = '';"
          onBlur="if (this.value == '') {this.value = 'Product name...';}"
          required=""
        />
        <input type="submit" value=" " />
      </form>
    </div>
  );
};

export default searchAds;