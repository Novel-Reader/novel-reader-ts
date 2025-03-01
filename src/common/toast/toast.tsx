import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group/Transition';
import Alert from './alert.tsx';

const animationEasing = {
  deceleration: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  acceleration: 'cubic-bezier(0.4, 0.0, 1, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.320, 1.175)'
};

const ANIMATION_DURATION = 240;

const openAnimation = css.keyframes('openAnimation', {
  from: {
    opacity: 0,
    transform: 'translateY(-120%)'
  },
  to: {
    transform: 'translateY(0)'
  }
});

const closeAnimation = css.keyframes('closeAnimation', {
  from: {
    transform: 'scale(1)',
    opacity: 1
  },
  to: {
    transform: 'scale(0.9)',
    opacity: 0
  }
});

const animationStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 0,
  transition: `all ${ANIMATION_DURATION}ms ${animationEasing.deceleration}`,
  '&[data-state="entering"], &[data-state="entered"]': {
    animation: `${openAnimation} ${ANIMATION_DURATION}ms ${animationEasing.spring} both`
  },
  '&[data-state="exiting"]': {
    animation: `${closeAnimation} 120ms ${animationEasing.acceleration} both`
  }
});

export default class Toast extends React.PureComponent {
  static propTypes = {
    zIndex: PropTypes.number,
    duration: PropTypes.number,
    onRemove: PropTypes.func,
    intent: PropTypes.oneOf(['success', 'warning', 'danger']).isRequired,
    title: PropTypes.node,
    children: PropTypes.node,
    hasCloseButton: PropTypes.bool,
    isShown: PropTypes.bool
  };

  static defaultProps = {
    intent: 'none'
  };

  closeTimer: any;

  state = {
    isShown: true,
    height: 0
  };

  componentDidUpdate (prevProps: any) {
    if (prevProps.isShown !== this.props.isShown) {
      this.setState({
        isShown: this.props.isShown
      });
    }
  }

  componentDidMount () {
    this.startCloseTimer();
  }

  componentWillUnmount () {
    this.clearCloseTimer();
  }

  close = (event: any) => {
    if (event) {
      event.nativeEvent.stopImmediatePropagation();
      event.stopPropagation();
    }
    this.clearCloseTimer();
    this.setState({
      isShown: false
    });
  };

  startCloseTimer = () => {
    if (this.props.duration) {
      this.closeTimer = setTimeout(() => {
        this.close();
      }, this.props.duration * 1000);
    }
  };

  clearCloseTimer = () => {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  };

  handleMouseEnter = () => {
    this.clearCloseTimer();
  };

  handleMouseLeave = () => {
    this.startCloseTimer();
  };

  onRef = (ref: any) => {
    if (ref === null) return;
    const { height } = ref.getBoundingClientRect();
    this.setState({ height });
  };

  render () {
    return (
      <Transition
        appear
        unmountOnExit
        timeout={ANIMATION_DURATION}
        in={this.state.isShown}
        onExited={this.props.onRemove}
      >
        {state => (
          <div
            data-state={state}
            className={animationStyles}
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            style={{
              height: this.state.height,
              zIndex: this.props.zIndex,
              marginBottom: this.state.isShown ? 0 : -this.state.height
            }}
          >
            <div ref={this.onRef} style={{ padding: 8 }}>
              <Alert
                {...this.props}
                onRemove={(event: any) => this.close(event)}
                isRemoveable={true}
              />
            </div>
          </div>
        )}
      </Transition>
    );
  }
}
