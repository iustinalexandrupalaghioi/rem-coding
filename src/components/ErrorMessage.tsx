const ErrorMessage = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black dark:bg-gray-900 dark:text-white">
      <h1 className="mt-3 text-4xl font-semibold text-gray-800 dark:text-white md:text-3xl">
        Oops! Something went wrong
      </h1>
      <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
        Please try again later.
      </p>
    </section>
  );
};

export default ErrorMessage;
