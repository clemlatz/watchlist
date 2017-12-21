import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
    errorMessage: ''
  }

  componentDidCatch = (error, info) => {
    this.setState({
      hasError: true,
      errorMessage: error.message
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went terribly wrong!</h1>
          <p>{this.state.errorMessage}</p>
        </div>
      );
    }

    return this.props.children;
  }
}
