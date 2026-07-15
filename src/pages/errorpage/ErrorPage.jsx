import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-xl">
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-500 text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="text-8xl my-8">📚</div>

        <div className="flex justify-center gap-4">
          <Link to="/" className="btn btn-primary rounded-full px-8">
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline rounded-full px-8"
          >
            ← Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
