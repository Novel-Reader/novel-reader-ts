import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

const propTypes = {
  intent: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onRemove: PropTypes.func.isRequired,
  children: PropTypes.string,
  isRemoveable: PropTypes.bool
};

class Alert extends React.PureComponent {

  containerBorderDanger: any;
  containerBorderSuccess: any;
  containerBorderWarn: any;
  containerStyle: any;
  toastClose: any;
  toastIcon: any;
  toastTextChild: any;
  toastTextContainer: any;
  toastTextTitle: any;

  constructor (props: any) {
    super(props);
    this.containerStyle = css({
      borderRadius: '3px',
      backgroundColor: '#fff',
      padding: '10px 16px',
      display: 'flex',
      boxSizing: 'border-box',
      boxShadow: 'rgba(67, 90, 111, 0.3) 0px 0px 1px, rgba(67, 90, 111, 0.47) 0px 8px 10px -4px',
      justifyContent: 'space-between',
      flexDirection: 'row'
    });
    this.containerBorderSuccess = css({
      borderLeft: '3px solid rgb(71, 184, 129)'
    });
    this.containerBorderWarn = css({
      borderLeft: '3px solid rgb(217, 130, 43)'
    });
    this.containerBorderDanger = css({
      borderLeft: '3px solid rgb(236, 76, 71)'
    });
    this.toastTextTitle = css({
      fontWeight: '600',
      fontSize: '14px',
      color: '#435a6f',
      margin: '0'
    });
    this.toastTextChild = css({
      fontSize: '14px',
      color: '#999',
      margin: '0'
    });
    this.toastClose = css({
      marginLeft: '15px',
      height: '24px',
      width: '24px',
      lineHeight: '22px',
      fontWeight: '700',
      textAlign: 'center',
      fontSize: '20px',
      color: '#000',
      cursor: 'pointer',
      opacity: '0.5',
      ':hover': {
        opacity: 1
      }
    });
    this.toastIcon = css({
      marginRight: '10px',
      width: '14px',
      height: '20px',
      lineHeight: '20px'
    });
  }

  getContainerStyle (intent: any) {
    switch (intent) {
      case 'success':
        return { borderStyle: this.containerBorderSuccess, iconColor: css({ color: 'rgb(71, 184, 129)' }), iconClass: 'icon icon-happy' };
      case 'warning':
        return { borderStyle: this.containerBorderWarn, iconColor: css({ color: 'rgb(217, 130, 43)' }), iconClass: 'icon icon-warning' };
      case 'danger':
        return { borderStyle: this.containerBorderDanger, iconColor: css({ color: 'rgb(236, 76, 71)' }), iconClass: 'icon icon-notification' };
    }
  }

  render () {
    const toastStyle = this.getContainerStyle(this.props.intent);
    return (
      <div {...css(toastStyle.borderStyle, this.containerStyle)}>
        <div className={this.toastIcon} >
          <i className={toastStyle.iconClass} {...toastStyle.iconColor}/>
        </div>
        <div className={this.toastTextContainer}>
          <p className={this.toastTextTitle}>{this.props.title}</p>
          {this.props.children ? <p className={this.toastTextChild}>{this.props.children}</p> : ''}
        </div>
        {this.props.isRemoveable && (
          <div onClick={this.props.onRemove} className={this.toastClose}>
            <span>&times;</span>
          </div>
        )}
      </div>
    );
  }
}

Alert.propTypes = propTypes;

export default Alert;
