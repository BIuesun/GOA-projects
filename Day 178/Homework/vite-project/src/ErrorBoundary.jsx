import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorKey: 0 
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught:", error);
    console.error("Component Stack:", errorInfo.componentStack);
  }

  handleRetry = () => {
    this.setState({ 
      hasError: false,
      errorKey: this.state.errorKey + 1 
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ 
          padding: '20px', 
          backgroundColor: '#ffebee', 
          border: '1px solid #f44336',
          borderRadius: '8px',
          textAlign: 'center'
        }}>
          <h2>⚠️ რაღაც შეცდა მოხდა</h2>
          <p>კომპონენტში შეცდომა წარმოიქმნა.</p>
          <button 
            onClick={this.handleRetry}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    return (
      <div key={this.state.errorKey}>
        {this.props.children}
      </div>
    );
  }
}

export default ErrorBoundary;