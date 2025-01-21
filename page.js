'use client';
import React from 'react';

export default function CalculatorPage() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="container mx-auto px-4 py-4 md:py-6">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                            Calculate Your Solar Savings
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Find out how much you could save by switching to solar energy
                        </p>

                        {/* Trust Indicators Moved to Top */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mb-6">
                            <div className="p-2">
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Quick & Easy
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Get your estimate in just 2 minutes
                                </p>
                            </div>
                            <div className="p-2">
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Accurate Results
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Based on your local solar data
                                </p>
                            </div>
                            <div className="p-2">
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    No Obligation
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Free calculator, no commitment
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Calculator Embed - Full Height */}
                    <iframe
                        src="https://roccocolasaccojr.outgrow.us/678ede3936ea72a052ae7a04?vHeight=1"
                        className="w-full h-[800px] border-none"
                        title="Solar Savings Quiz"
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </main>
    );
}