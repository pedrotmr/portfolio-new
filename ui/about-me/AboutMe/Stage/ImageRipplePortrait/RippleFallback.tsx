import { Component, ReactNode } from 'react';

interface RippleFallbackProps {
  children: ReactNode;
  onReady: (ready: boolean) => void;
}

interface RippleFallbackState {
  failed: boolean;
}

export default class RippleFallback extends Component<RippleFallbackProps, RippleFallbackState> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onReady(false);
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}
