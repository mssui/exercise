import React from "react";

const SearchBar = ({onInputChange}) => (
  <div className="container">
    <div className="form-group has-feedback">
      <input type="text" className="form-control" onChange={(event) => onInputChange(event.target.value)} placeholder="&#xF002; Find by name" style={{ borderRadius: "4px", fontFamily: "Arial, FontAwesome" }} />
      <span className="form-control-feedback" />
    </div>
  </div>
);

export default SearchBar;
