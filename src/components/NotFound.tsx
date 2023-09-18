"use client";
const NotFound = () => {
  return (
    <section className="h-full w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className="text-2xl">This page does not exist :(</h1>
      <div className="relative w-fit h-fit mt-5 rounded-lg">
        <button
          onClick={(e) => {
            window.location.href = "/";
          }}
          className="text-secondary border-2 border-secondary rounded-md py-3 w-40 main-btn text-xs md:text-md"
        >
          Home
        </button>
      </div>
    </section>
  );
};

export default NotFound;
