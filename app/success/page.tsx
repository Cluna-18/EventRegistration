import React from 'react';
import Link from 'next/link';

export default function SuccessMessage() {

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-green-600 mb-4">Registration Successful!</h1>
        <p className="text-gray-700 mb-6">Thank you for registering. We look forward to seeing you at the event!</p>
        <Link
            key="home"
            href="/"
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors"
        >
            Home 
        </Link>
        </div>
    );
}
