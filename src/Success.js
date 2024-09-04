import React from 'react'

const Success = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
        <div className="flex flex-col items-center">
          <svg
            className="w-24 h-24 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h1 className="text-2xl font-semibold text-gray-800 mt-4">Success!</h1>
          <p className="text-gray-600 mt-2">
            You have successfully logged in. Welcome back!
          </p>
          <a
            href="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}

export default Success