import React from "react";
import { ArrowLeft, Shield, Eye, Cookie, Database, Lock, UserCheck, Globe, Mail } from "lucide-react";

export default function PrivacyPolicy({ onBack }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-100 -ml-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </button>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900 hidden sm:block">Privacy Policy</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Your Privacy Matters</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                At SAP Cron Generator, we are committed to protecting your privacy. This policy explains how we collect, 
                use, and safeguard your information when you use our web application.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Information We Collect */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">1. Information We Collect</h2>
            </div>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1.1 Information You Provide</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Contact form submissions (name, email, message)</li>
                  <li>Cron expression configurations you create</li>
                  <li>Feedback and support inquiries</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">1.2 Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address (anonymized)</li>
                  <li>Pages visited and time spent</li>
                  <li>Referring website URLs</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">2. How We Use Your Information</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-2">
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Service Provision:</strong> To provide and maintain the cron generator functionality</li>
                <li><strong>User Support:</strong> To respond to your inquiries and provide customer support</li>
                <li><strong>Improvement:</strong> To analyze usage patterns and improve our application</li>
                <li><strong>Communication:</strong> To send important updates about the service</li>
                <li><strong>Security:</strong> To detect and prevent fraudulent or malicious activity</li>
                <li><strong>Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              </ul>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">3. Data Storage and Security</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                We implement industry-standard security measures to protect your information:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>HTTPS encryption for all data transmission</li>
                <li>Secure server infrastructure with regular security updates</li>
                <li>Limited access to personal information by authorized personnel only</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Data backup and disaster recovery procedures</li>
              </ul>
              <p className="mt-3">
                <strong>Note:</strong> Cron expressions you create are processed locally in your browser whenever possible 
                and are not stored on our servers unless you explicitly save them.
              </p>
            </div>
          </section>

          {/* Cookies and Tracking */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">4. Cookies and Tracking Technologies</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>We use cookies and similar tracking technologies to enhance your experience:</p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Types of Cookies We Use:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Essential Cookies:</strong> Required for basic functionality (cannot be disabled)
                  </li>
                  <li>
                    <strong>Analytics Cookies:</strong> Help us understand how users interact with our application
                  </li>
                  <li>
                    <strong>Preference Cookies:</strong> Remember your settings and preferences
                  </li>
                  <li>
                    <strong>Advertising Cookies:</strong> Used to display relevant ads (Google AdSense)
                  </li>
                </ul>
              </div>
              <p>
                You can control cookie preferences through your browser settings. Note that disabling certain cookies 
                may limit functionality.
              </p>
            </div>
          </section>

          {/* Third-Party Services */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">5. Third-Party Services</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>We use the following third-party services that may collect information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong>Google Analytics:</strong> For website traffic analysis and user behavior insights
                </li>
                <li>
                  <strong>Google AdSense:</strong> For displaying advertisements
                </li>
                <li>
                  <strong>Hosting Provider:</strong> For server infrastructure and content delivery
                </li>
              </ul>
              <p className="mt-3">
                These third parties have their own privacy policies. We recommend reviewing their policies to understand 
                how they handle your data.
              </p>
            </div>
          </section>

          {/* Your Rights */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">6. Your Privacy Rights</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-2">
              <p>Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us using the information in the Contact section.
              </p>
            </div>
          </section>

          {/* Children's Privacy */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">7. Children's Privacy</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our service is not directed to individuals under the age of 13. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child under 13, please 
              contact us immediately, and we will take steps to delete such information.
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">8. Changes to This Privacy Policy</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by updating the 
              "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically 
              to stay informed about how we protect your information.
            </p>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">9. Contact Us</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
              <p className="text-gray-700"><strong>Email:</strong> naikdanesh2@gmail.com</p>
              <p className="text-gray-700 mt-1"><strong>Website:</strong> https://xscron.com/contact</p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-gray-100 border border-gray-200 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            By using SAP Cron Generator, you acknowledge that you have read and understood this Privacy Policy 
            and agree to its terms.
          </p>
        </div>
      </main>
    </div>
  );
}
