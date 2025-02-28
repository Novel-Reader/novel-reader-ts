import React from 'react';
import { css } from 'glamor';
import PropTypes from 'prop-types';
import Toast from './toast.tsx';

const wrapperClass = css({
  maxWidth: 560,
  margin: '0 auto',
  top: 0,
  left: 0,
  right: 0,
  position: 'fixed',
  zIndex: 10000
});

const hasCustomId = (settings: any) => Object.hasOwnProperty.call(settings, 'id');

export default class ToastManager extends React.PureComponent {
  static propTypes = {
    bindNotify: PropTypes.func.isRequired,
    bindGetToasts: PropTypes.func.isRequired,
    bindCloseAll: PropTypes.func.isRequired
  };

  static idCounter = 0;

  onClose: any;

  constructor (props: any, context: any) {
    super(props, context);
    props.bindNotify(this.notify);
    props.bindGetToasts(this.getToasts);
    props.bindCloseAll(this.closeAll);
    this.state = {
      toasts: []
    };
  }

  getToasts = () => {
    return this.state.toasts;
  };

  closeAll = () => {
    this.getToasts().forEach((toast: any) => toast.close());
  };

  notify = (title: any, settings: any) => {
    if (hasCustomId(settings)) {
      for (const toast of this.state.toasts) {
        if (String(toast.id).startsWith(settings.id)) {
          this.closeToast(toast.id);
        }
      }
    }
    const instance = this.createToastInstance(title, settings);
    this.onClose = settings.onClose;
    this.setState(previousState => {
      return {
        toasts: [instance, ...previousState.toasts]
      };
    });
    return instance;
  };

  createToastInstance = (title: any, settings: any) => {
    const uniqueId = ++ToastManager.idCounter;
    const id = hasCustomId(settings) ? `${settings.id}-${uniqueId}` : uniqueId;
    let hasCloseButton = settings.hasCloseButton || true;
    let duration = settings.duration || 2;
    if (settings.hasCloseButton !== undefined) {
      hasCloseButton = settings.hasCloseButton;
    }
    if (settings.duration !== undefined) {
      duration = settings.duration;
    }

    return {
      id,
      title,
      description: settings.description,
      hasCloseButton,
      duration,
      close: () => this.closeToast(id),
      intent: settings.intent
    };
  };

  closeToast = (id: any) => {
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.map((toast: any) => {
          if (toast.id === id) {
            return {
              ...toast,
              isShown: false
            };
          }
          return toast;
        })
      };
    });
  };

  removeToast = (id: any) => {
    this.onClose && this.onClose();
    this.setState(previousState => {
      return {
        toasts: previousState.toasts.filter((toast: any) => toast.id !== id)
      };
    });
  };

  render () {
    return (
      <span className={wrapperClass}>
        {this.state.toasts.map(({
          id,
          description,
          ...props
        }: any) => {
          return (
            <Toast key={id} onRemove={() => this.removeToast(id)} {...props}>
              {description}
            </Toast>
          );
        })}
      </span>
    );
  }
}
