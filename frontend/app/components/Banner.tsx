import Link from 'next/link'
import React from 'react'

const Banner = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
            <h1 className="text-4xl font-bold mb-6">Welcome to the Calculator App</h1>
            <Link className="bg-blue-500 text-white p-4 rounded-lg" href="/calculate">
                Go to Calculator
            </Link>
        </div>

    )
}

export default Banner