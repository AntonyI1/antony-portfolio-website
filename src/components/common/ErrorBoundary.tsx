import { Component, ErrorInfo, ReactNode } from 'react';
import './ErrorBoundary.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log error to console in development
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = (): void => {
    this.setState({
      hasError: false,
      error: null,
    });
    // Reload the page to reset the app
    window.location.href = '/';
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-content">
            <h1>Oops! Something went wrong</h1>
            <p className="error-message">
              We encountered an unexpected error. Don't worry, your data is safe.
            </p>

            {import.meta.env.DEV && this.state.error && (
              <details className="error-details">
                <summary>Error Details (Development Only)</summary>
                <pre>{this.state.error.toString()}</pre>
              </details>
            )}

            <div className="error-actions">
              <button onClick={this.handleReset} className="error-button primary">
                Go to Home Page
              </button>
              <button onClick={() => window.location.reload()} className="error-button secondary">
                Reload Page
              </button>
            </div>

            <p className="error-help">
              If this problem persists, please try clearing your browser cache or{' '}
              <a href="mailto:Antonyibrahim0@gmail.com">contact support</a>.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
