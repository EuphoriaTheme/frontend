import React from "react";
import bannerimg from '../assets/header.png'; // Adjust the path as necessary

export default function Hero() {
  return (
<section className="bg-white lg:grid lg:h-screen lg:place-content-center dark:bg-gray-900">
  <div
    className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32"
  >
    <div className="max-w-prose text-left">
      <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
        Euphoria Theme<br></br>
        <strong className="text-indigo-600"> Evolve </strong>
        Your User Experience
      </h1>

      <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed dark:text-gray-200">
        Rapidly developed and designed for the Pterodactyl panel, Euphoria is a customizable theme that enhances your server management experience. Built on the Blueprint Framework, it offers a modern and user-friendly interface, making it easy to manage your game servers with style and efficiency.
        <br></br><br></br>
      </p>

      <div className="mt-4 flex gap-4 sm:mt-6">
        <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          href="#"
        >
          Get Started
        </a>

        <a
          className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>

    <img
      src={bannerimg}
      className="mx-auto hidden max-w-screen-xl text-gray-900 md:block dark:text-white rounded-lg shadow-lg"
    ></img>
  </div>
</section>
  );
}