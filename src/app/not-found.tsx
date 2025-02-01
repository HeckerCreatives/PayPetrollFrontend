import Link from "next/link"

import { MoveLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="text-center flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist or has been moved.</p>
        <a href="/">
          <button className="inline-flex items-center px-4 py-2 bg-green-600 rounded-md">
            <MoveLeft className="mr-2 h-4 w-4" />
            Back to Home
          </button>
        </a>
      </div>
    </div>
  )
}

