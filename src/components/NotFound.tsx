"use client";

const NotFound = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl">This page does not exist :(</h1>
      <button
        onClick={(e) => {
          window.location.href = "/";
        }}
        className="text-secondary border-2 border-secondary rounded-md py-3 w-40 main-btn text-xs md:text-md"
      >
        Go Home
      </button>
    </section>
  );
};

export default NotFound;
