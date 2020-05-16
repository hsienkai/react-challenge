import React from 'react'
import { connect } from 'react-redux'
import SearchResult from './SearchResult'
import { bindActionCreators } from 'redux';
import { fetchImages, favoriteImage, unfavoriteImage } from '../redux/actions';

interface IRecipeProps {
  fetchImagesAction: any;
  favoriteImageAction: any;
  unfavoriteImageAction: any;
  imageURLs: string[];
  favoriteList: string[];
}
  
interface IRecipeState {
}

class SearchResultContainer extends React.Component<IRecipeProps, IRecipeState> {
  constructor(props) {
    super(props);
    this.favorite = this.favorite.bind(this);
    this.unfavorite = this.unfavorite.bind(this);
  }

  componentWillMount() {
    const { fetchImagesAction } = this.props;
    fetchImagesAction();
  }

  favorite(url) {
    this.props.favoriteImageAction(url);
  }

  unfavorite(url) {
    this.props.unfavoriteImageAction(url);
  }

  render() {
    const { imageURLs, favoriteList } = this.props;

    return(
      <SearchResult 
        imageURLs= {imageURLs}
        favoriteList= {favoriteList}
        favorite= {this.favorite}
        unfavorite= {this.unfavorite}
      />
    )
  }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchImagesAction: fetchImages,
  favoriteImageAction: favoriteImage,
  unfavoriteImageAction: unfavoriteImage
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SearchResultContainer);
