import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Mapa from '../../components/Mapa';
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modal';
import AddUser from '../../components/AddUser';

class GithubUsers extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
    usersMap: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        lngLat: PropTypes.array.isRequired,
      }),
    ).isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    lngLat: [],
    userName: '',
  };

  inputRef = React.createRef();

  componentDidMount() {
    window.addEventListener('resize', this._resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    const { viewport } = this.state;
    this.setState({
      viewport: {
        ...viewport,
        width: window.innerWidth,
        height: window.innerHeight,
      },
    });
  };

  handleMapClick = (e) => {
    const { openModal } = this.props;
    openModal();
    this.setState({ lngLat: e.lngLat });
    const node = this.inputRef.current;
    node.focus();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addUserRequest } = this.props;
    const { userName: name, lngLat } = this.state;
    addUserRequest({
      lngLat,
      name,
    });
    this.setState({ lngLat: [], userName: '' });
  };

  render() {
    const { viewport, userName } = this.state;
    const { usersMap } = this.props;
    return (
      <Fragment>
        <AddUser
          handleSubmit={this.handleSubmit}
          userName={userName}
          inputRef={this.inputRef}
          onInputChange={e => this.setState({ userName: e.target.value })}
        />
        <Mapa
          {...viewport}
          markers={usersMap}
          handleClick={this.handleMapClick}
          onViewportChange={viewportT => this.setState({ viewport: viewportT })}
        />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...ModalActions }, dispatch);

const mapStateToProps = state => ({
  usersMap: state.users.data.map(user => ({ id: user.id, src: user.avatar, lngLat: user.lngLat })),
  loading: state.users.loading,
  error: state.users.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GithubUsers);
