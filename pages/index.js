import SearchBar from "material-ui-search-bar";
import { Component } from "react";
import { connect } from "react-redux";
import { searchResult } from "../store/actions/searchResult";
import AutoGridNoWrap from "../components/result";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  render() {
    return (
      <div className="searchbar">
        <SearchBar
          onRequestSearch={() => {
            this.props.searchResult(this.state.search);
          }}
          placeholder="Enter name of the country"
          autoFocus
          value={this.state.search}
          onChange={(val) => {
            this.setState({ search: val });
          }}
        />
        <AutoGridNoWrap />
      </div>
    );
  }
}
export default connect((store) => ({ store: store }), { searchResult })(Home);
