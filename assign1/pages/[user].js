import Header from "@/components/Header/Header";
import React from "react";



export default function Dashboard({ user }) {
    const handleAddProduct = () => {
        // Navigate to the page where users can add a product
        // Or open a modal/popup to allow users to add a product
        console.log('Adding a product');
    }

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <h1 className="text-2xl font-semibold">Welcome, </h1> {/* Assuming user is an object containing email */}
                        <div className="divide-y divide-gray-200">
                            <p className="mt-6 text-indigo-600 text-lg">
                                This is your user dashboard. You can enhance this page by adding more user-specific details and features.
                            </p>
                            <div className="mt-8 flex space-x-4">
                                <button 
                                    onClick={handleAddProduct}
                                    className="px-5 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none">
                                    Add Product
                                </button>
                                <button 
                                    className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none">
                                    User Action
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
