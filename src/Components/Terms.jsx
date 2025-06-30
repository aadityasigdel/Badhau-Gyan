import React from "react";
import NavCompBar from './ComponentNav';

export default function Terms() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <NavCompBar />
            
            <main className="flex-1 flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12">
                <div className="w-full max-w-4xl flex-grow">
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                        {/* Header with accent color */}
                        <div className="bg-gradient-to-r from-blue-800 to-blue-600 p-6 sm:p-8">
                            <h1 className="text-3xl sm:text-4xl font-bold text-white">
                                Terms & Conditions
                            </h1>
                            <p className="text-blue-100 mt-2">
                                Last updated: June 8, 2025
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 space-y-8">
                            <section className="space-y-2">
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms and Conditions ("Terms") govern your use of the
                                    Badhau Gyan platform and associated services. By accessing or
                                    using our website, located at www.badhaugyan.com (the "Site"),
                                    you agree to be legally bound by these Terms. If you do not
                                    agree, please refrain from using our services.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    1. Use of Our Services
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Badhau Gyan provides educational content, community features,
                                    and tools for personal and academic growth. You may use the
                                    services only in compliance with applicable laws and these
                                    Terms. Unauthorized use, including but not limited to scraping,
                                    reverse engineering, or abusing user data, is strictly
                                    prohibited.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    2. Account Responsibility
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    When you create an account with us, you must provide accurate
                                    and complete information. You are solely responsible for
                                    maintaining the confidentiality of your account and password,
                                    and for all activities that occur under your account.
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Do not share your login credentials with others</li>
                                    <li>Immediately notify us of any unauthorized access</li>
                                    <li>You must be at least 13 years old to create an account</li>
                                </ul>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    3. Content Ownership
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    All educational materials, logos, design elements, and
                                    platform features are the intellectual property of Badhau Gyan.
                                    Any reproduction, redistribution, or commercial use of our
                                    content without express permission is a violation of copyright
                                    laws.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    User-generated content remains your property, but by posting on our platform, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute such content.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    4. Limitation of Liability
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    While we strive to provide high-quality, accurate information,
                                    Badhau Gyan makes no warranties, expressed or implied,
                                    regarding the reliability or accuracy of any content. The
                                    platform is provided "as is," and we disclaim liability for
                                    any damages arising from use or inability to use the site.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    5. Modifications
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    We reserve the right to update or modify these Terms at any
                                    time without prior notice. It is your responsibility to review
                                    this page periodically. Continued use of the site constitutes
                                    acceptance of the revised Terms.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    6. Governing Law
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    These Terms shall be governed by and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <h2 className="text-xl font-semibold text-blue-800 border-b border-blue-100 pb-2">
                                    7. Contact Information
                                </h2>
                                <p className="text-gray-700 leading-relaxed">
                                    For questions or concerns regarding these Terms, please contact
                                    us at <a href="mailto:support@badhaugyan.com" className="text-blue-600 hover:underline">support@badhaugyan.com</a>.
                                </p>
                            </section>

                            <div className="pt-4 border-t border-gray-200">
                                <p className="text-sm text-gray-500">
                                    © 2025 Badhau Gyan. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}