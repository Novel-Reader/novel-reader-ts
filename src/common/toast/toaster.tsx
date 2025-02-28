import React from 'react';
import { createRoot } from 'react-dom/client';
import ToastManager from './toastManager.tsx';

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

export default class Toaster {
  closeAllHandler: any;
  getToastsHandler: any;
  notifyHandler: any;
  constructor () {
    if (!isBrowser) return;
    const container = document.createElement('div');
    container.setAttribute('data-evergreen-toaster-container', '');
    document.body.appendChild(container);
    const root = createRoot(container);
    root.render(
      <ToastManager
        bindNotify={this._bindNotify}
        bindGetToasts={this._bindGetToasts}
        bindCloseAll={this._bindCloseAll}
      />
    );
  }

  _bindNotify = (handler: any) => {
    this.notifyHandler = handler;
  };

  _bindGetToasts = (handler: any) => {
    this.getToastsHandler = handler;
  };

  _bindCloseAll = (handler: any) => {
    this.closeAllHandler = handler;
  };

  getToasts = () => {
    return this.getToastsHandler();
  };

  closeAll = () => {
    return this.closeAllHandler();
  };

  success = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'success' });
  };

  warning = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'warning' });
  };

  danger = (title: any, settings = {}) => {
    return this.notifyHandler(title, { ...settings, intent: 'danger' });
  };
}
