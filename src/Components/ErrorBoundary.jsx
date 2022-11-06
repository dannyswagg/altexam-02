import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // componentDidCatch(error, errorInfo) {
  //   // You can also log the error to an error reporting service
  //   logErrorToMyService(error, errorInfo);
  // }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="w-screen bg-[#f6eed8] h-screen absolute text-[#C19167]">
          <div className=" translate-x-[-50%] translate-y-[-50%] absolute top-[40%] flex justify-center flex-col items-center left-[50%] border-4 px-20 py-[3rem] border-gray-600  text-center">
            <p className="font-[700] text-[30px]">Ooops! Sorry</p>
            <h1 className="mt-5">You're Not Supposed To see This Page</h1>

            <Link to="/">
              <button className="rounded bg-black text-[#c19167] p-3 mt-3">
                Go Home
              </button>
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
