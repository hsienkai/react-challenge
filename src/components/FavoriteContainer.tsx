import React from 'react'
import { connect } from 'react-redux'
import Favorite from './Favorite'
import { bindActionCreators } from 'redux';
import { unfavoriteImage } from '../redux/actions';

interface IRecipeProps {
    unfavoriteImageAction: any;
    favoriteList: string[];
}

interface IRecipeState {
}

class FavoriteContainer extends React.Component<IRecipeProps, IRecipeState> {
  constructor(props) {
    super(props);
    this.unfavorite = this.unfavorite.bind(this);
  }

  unfavorite(url) {
    this.props.unfavoriteImageAction(url);
  }

  render() {
    return(
      <Favorite 
        favoriteList= {this.props.favoriteList}
        unfavorite= {this.unfavorite}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = dispatch => bindActionCreators({
  unfavoriteImageAction: unfavoriteImage
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteContainer);
