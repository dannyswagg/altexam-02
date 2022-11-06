import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import SyntaxHighlighter from "react-syntax-highlighter";

function ErrorFallback({ error }) {
  return (
    <div role="alert" className="bg-[#F6EED8]">
      <h1>This doesn't look right</h1>
      <p>Check this error message for more info</p>
      <SyntaxHighlighter language="javascript">
        {error.message}
      </SyntaxHighlighter>
    </div>
  );
}
export default ErrorBoundary;
