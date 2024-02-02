import React from 'react';

const Questions = () => {
  return (
    <div id="accordion-color" data-accordion="collapse" data-active-classes="text-black-500 dark:text-white">
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Frequently Asked Questions</h1>
      </div>
      <h2 id="accordion-color-heading-1">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-color-body-1"
          aria-expanded="true"
          aria-controls="accordion-color-body-1"
        >
          <span>What is Greet?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div id="accordion-color-body-1" aria-labelledby="accordion-color-heading-1">
        <div className="p-5 border border-b-0 border-gray-200">
          <p className="mb-2 text-black-500 dark:text-gray-400">
            Greet is a subsidiary of Fydo (Lfyd Services Pvt Ltd), an event booking platform designed to streamline the process of organizing and attending events. It offers a user-friendly interface for event organizers and attendees.
          </p>
        </div>
      </div>
      <h2 id="accordion-color-heading-2">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-color-body-2"
          aria-expanded="false"
          aria-controls="accordion-color-body-2"
        >
          <span>What’s Unique about Greet?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <h2 id="accordion-color-heading-3">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-color-body-3"
          aria-expanded="false"
          aria-controls="accordion-color-body-3"
        >
          <span>How can I book tickets for an event on Greet?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <h2 id="accordion-color-heading-4">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-color-body-4"
          aria-expanded="false"
          aria-controls="accordion-color-body-4"
        >
          <span>Can I use cashback earned at partner shops to book event tickets?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <h2 id="accordion-color-heading-5">
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-black-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800 gap-3"
          data-accordion-target="#accordion-color-body-5"
          aria-expanded="false"
          aria-controls="accordion-color-body-5"
        >
          <span>Can I sell tickets for my own event on Greet?</span>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
    </div>
  );
};

export default Questions;
