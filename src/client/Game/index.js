import { connect } from 'react-redux';
import Game from './Game';

const mapStateToProps = (state) => ({
  game: state,
});

// const mapDispatchToProps = () => {};

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Game);