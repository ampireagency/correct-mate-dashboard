import React from "react";
import Btn from "./signup-btn";

const page = () => {
  return (
    <div className="flex min-h-[80vh] items-center justify-center">
      <div className="mt-7 w-full max-w-lg rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800">Sign up</h1>
            <p className="mt-2 text-sm text-gray-600">
              already have account?
              <a
                className="font-medium text-green-500 decoration-2 hover:underline"
                href="/login"
              >
                Sign in here
              </a>
            </p>
          </div>
          <div className="mt-5">
            {/* Form */}
            {/* <form> */}
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      aria-describedby="email-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                {/* End Form Group */}
                {/* Form Group */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="mb-2 block text-sm dark:text-white"
                    >
                      Password
                    </label>
                    <a
                      className="text-sm font-medium text-green-500 decoration-2 hover:underline"
                      href="/forgot-password"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="block w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      aria-describedby="password-error"
                    />
                    <div className="pointer-events-none absolute inset-y-0 end-0 hidden pe-3">
                      <svg
                        className="size-5 text-red-500"
                        width={16}
                        height={16}
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        aria-hidden="true"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                      </svg>
                    </div>
                  </div>
                  <p
                    className="mt-2 hidden text-xs text-red-600"
                    id="password-error"
                  >
                    8+ characters required
                  </p>
                </div>
                {/* End Form Group */}
                {/* Checkbox */}
                <div className="flex items-center">
                  <div className="flex">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="mt-0.5 shrink-0 rounded border-gray-200 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ms-3">
                    <label htmlFor="remember-me" className="text-sm">
                      Remember me
                    </label>
                  </div>
                </div>
                {/* End Checkbox */}
                <Btn/>
              </div>
            {/* </form> */}
            {/* End Form */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
