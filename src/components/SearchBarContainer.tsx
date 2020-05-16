import React from 'react'
import { connect } from 'react-redux'
import SearchBar from './SearchBar'
import { bindActionCreators } from 'redux';
import { fetchImages } from '../redux/actions';

interface IRecipeProps {
  fetchImagesAction: any;
}
  
interface IRecipeState {
  query: string
}

class SearchBarContainer extends React.Component<IRecipeProps, IRecipeState> {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.updateQuery = this.updateQuery.bind(this);
    this.search = this.search.bind(this);
  }

  updateQuery(text) {
    this.setState({
      query: text
    });
  }

  search() {
    this.props.fetchImagesAction(this.state.query.toLowerCase());
  }

  render() {
    return(
      <SearchBar 
        value= {this.state.query}
        updateQuery= {this.updateQuery}
        search= {this.search}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesAction: fetchImages
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(SearchBarContainer);
