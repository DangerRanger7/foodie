import React from "react";
import SearchBar from "./SearchBar";
import edamam from "../apis/edamam";
import RecipeList from "./RecipeList";
import "../App.css";

const KEY = "337c065c8ece6abb6dfa7be6a3e07866";
const APP_ID = "45fc63f2";

class App extends React.Component {
  state = { recipes: [] };

  onTermSubmit = async (text) => {
    const response = await edamam.get("/search", {
      params: {
        q: text,
        app_id: APP_ID,
        app_key: KEY,
      },
    });
    this.setState({ recipes: response.data.hits });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <RecipeList recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
