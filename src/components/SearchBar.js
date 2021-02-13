import React from "react";

class SearchBar extends React.Component {
  state = { text: "" };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.text);
  };

  render() {
    return (
      <div className="center searchbar">
        <form onSubmit={this.onFormSubmit} className="">
          <div className="">
            <label className="primaryColor">Foodie</label>
            <p>
              <span className="slogan white">
                Search your favorite recipe today
              </span>
            </p>
            <br />
            <input
              type="text"
              value={this.state.text}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
