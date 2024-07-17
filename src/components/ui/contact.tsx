import React from "react";

const Contact = () => {
  return (
    <div>
        {/* Hire Us */}
        <div
          id="contact"
          className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
        >
          {/* Grid */}
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight ">
                Contact us
              </h1>
              <p className="mt-1 md:text-lg text-gray-800 ">
                We help educational institutions transform exam preparation
                through AI
              </p>
              <p className="py-4 text-lg font-bold">contact@correctmate.in</p>
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 ">
                  What can I expect?
                </h2>
                <ul className="mt-2 max-w-xs w-full space-y-4">
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 ">
                      Enjoy a simple and intuitive interface that is easy to use
                      and affordable.
                    </span>
                  </li>
                  <li className="flex space-x-3">
                    <svg
                      className="flex-shrink-0 mt-0.5 size-5 text-gray-600 "
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-gray-600 ">
                      Enhanced Student Performance: Leverage AI to provide
                      detailed feedback
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            {/* End Col */}
            <div className="relative">
              {/* Card */}
              <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
                <h2 className="text-xl font-semibold text-gray-800 ">
                  Fill in the form
                </h2>
                <form>
                  <div className="mt-6 grid gap-4 lg:gap-6">
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-firstname-hire-us-1"
                          className="block mb-2 text-sm text-gray-700  font-medium "
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          name="hs-firstname-hire-us-1"
                          id="hs-firstname-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-600 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-work-email-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium "
                      >
                        Email
                      </label>
                      <input
                        placeholder="Enter a Email"
                        type="email"
                        name="hs-work-email-hire-us-1"
                        id="hs-work-email-hire-us-1"
                        autoComplete="email"
                        className="py-3 px-4 block w-full border-gray-600 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      />
                    </div>
                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="hs-Institution-hire-us-1"
                          className="block mb-2 text-sm text-gray-700 font-medium "
                        >
                          Institution
                        </label>
                        <input
                          placeholder="Enter a Institution"
                          type="text"
                          name="hs-Institution-hire-us-1"
                          id="hs-Institution-hire-us-1"
                          className="py-3 px-4 block w-full border-gray-600 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                        />
                      </div>
                    </div>
                    {/* End Grid */}
                    <div>
                      <label
                        htmlFor="hs-about-hire-us-1"
                        className="block mb-2 text-sm text-gray-700 font-medium "
                      >
                        Message
                      </label>
                      <textarea
                        placeholder="Enter a Message (optinal)"
                        id="hs-about-hire-us-1"
                        name="hs-about-hire-us-1"
                        rows={4}
                        className="py-3 px-4 block w-full border-gray-600 border rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </form>
                {/* End Grid */}
                {/* Checkbox */}
                <div className="mt-3 flex">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="shrink-0 mt-1.5 border-gray-600 border rounded text-blue-600 focus:ring-blue-500 "
                    />
                  </div>
                  <div className="ms-3">
                    <label
                      htmlFor="remember-me"
                      className="text-sm text-gray-600 "
                    >
                      By submitting this form I have read and acknowledged the{" "}
                      <a
                        className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
                        href="#"
                      >
                        Privacy policy
                      </a>
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <div className="mt-6 grid">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-500 text-white hover:bg-green-500 duration-300 disabled:opacity-50 disabled:pointer-events-none"
                  >
                    Send inquiry
                  </button>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm text-gray-500 ">
                    Well get back to you in 1-2 business days.
                  </p>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Hire Us */}
    </div>
  );
};

export default Contact;