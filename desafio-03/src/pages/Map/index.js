import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Mapa from '../../components/Mapa';
import { Creators as UserActions } from '../../store/ducks/users';
import { Creators as ModalActions } from '../../store/ducks/modal';
import Modal from '../../components/Modal';

class Map extends Component {
  static propTypes = {
    openModal: PropTypes.func.isRequired,
    addUserRequest: PropTypes.func.isRequired,
  };

  state = {
    viewport: {
      width: window.innerWidth,
      height: window.innerHeight,
      latitude: -23.5439948,
      longitude: -46.6065452,
      zoom: 14,
    },
    lngLat: {
      latitude: 0,
      longiture: 0,
    },
    userName: '',
  };

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
  };

  handleSubmit = () => {
    const { addUserRequest } = this.props;
    const { userName: name, lngLat } = this.state;
    addUserRequest({
      lngLat,
      name,
    });
  };

  render() {
    const { viewport, userName } = this.state;
    return (
      <Fragment>
        <Modal width="300px" height="200px">
          <form onSubmit={this.handleSubmit}>
            <p>teste</p>
            <input type="text" value={userName} onChange={e => this.setState({ userName: e.target.value })} />
            <div>
              <button type="submit" />
            </div>
          </form>
        </Modal>
        <Mapa {...viewport} handleClick={this.handleMapClick} onViewportChange={viewportT => this.setState({ viewport: viewportT })} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions, ...ModalActions }, dispatch);

const mapStateToProps = state => ({
  users: state.users.data,
  loading: state.users.loading,
  error: state.users.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);
