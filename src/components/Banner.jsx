import React from "react"

export default function Banner() {
  return (
    <>
      <div className="text-center py-20">
        <div className="text-[#cdd3dc] space-y-3">
          <h1 className="text-6xl font-semibold">The API Security Framework</h1>
          <h4>
            Our landing page template works on all devices, so you only have to
            set it up once,
            <br /> and get beautiful results forever.
          </h4>
          <div>
            <button
              type="button"
              class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
