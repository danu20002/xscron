import React from "react";
import { ArrowLeft, FileText, AlertTriangle, Scale, Ban, Shield, RefreshCw, Globe, Mail } from "lucide-react";

export default function TermsConditions({ onBack }) {
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
            <FileText className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900 hidden sm:block">Terms & Conditions</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Agreement to Terms</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                By accessing and using SAP Cron Generator, you agree to be bound by these Terms and Conditions. 
                If you do not agree with any part of these terms, please do not use our service.
              </p>
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("User," "you," 
                or "your") and SAP Cron Generator ("we," "us," or "our") regarding your access to and use of our website 
                and services.
              </p>
              <p>
                By accessing or using our service, you acknowledge that you have read, understood, and agree to be bound 
                by these Terms, as well as our Privacy Policy. If you are using the service on behalf of an organization, 
                you represent that you have the authority to bind that organization to these Terms.
              </p>
            </div>
          </section>

          {/* Service Description */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">2. Service Description</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                SAP Cron Generator provides a web-based tool for creating and validating cron expressions specifically 
                for SAP XS Advanced Job Scheduling Service. Our service includes:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Interactive cron expression generator with visual interface</li>
                <li>Real-time validation and syntax highlighting</li>
                <li>Comprehensive documentation and examples</li>
                <li>Best practices and scheduling patterns</li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify, suspend, or discontinue any aspect of the service at any time without 
                prior notice.
              </p>
            </div>
          </section>

          {/* User Obligations */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">3. User Obligations and Acceptable Use</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>When using our service, you agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Use the service only for lawful purposes</li>
                <li>Respect intellectual property rights</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not interfere with the proper functioning of the service</li>
                <li>Not use automated systems to access the service without permission</li>
                <li>Not transmit malicious code or harmful content</li>
              </ul>
              <p className="mt-3">
                <strong>You agree NOT to:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use the service to violate any laws or regulations</li>
                <li>Impersonate any person or entity</li>
                <li>Harass, abuse, or harm others</li>
                <li>Distribute spam or unsolicited messages</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Remove or modify any proprietary notices</li>
              </ul>
            </div>
          </section>

          {/* Intellectual Property */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">4. Intellectual Property Rights</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                All content, features, and functionality of SAP Cron Generator, including but not limited to text, 
                graphics, logos, icons, images, code, and software, are the exclusive property of SAP Cron Generator 
                or its licensors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
              <p>
                <strong>Your Content:</strong> The cron expressions you create remain your property. By using our service, 
                you grant us a limited license to process and display your expressions solely for the purpose of providing 
                the service to you.
              </p>
              <p>
                <strong>Trademarks:</strong> SAP, SAP XS Advanced, and related trademarks are the property of SAP SE or 
                its affiliates. We are not affiliated with, endorsed by, or sponsored by SAP SE.
              </p>
            </div>
          </section>

          {/* Disclaimer of Warranties */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-xl font-semibold text-gray-900">5. Disclaimer of Warranties</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="font-semibold text-amber-900 mb-2">IMPORTANT: Please Read Carefully</p>
                <p className="text-amber-800">
                  THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, 
                  EITHER EXPRESS OR IMPLIED.
                </p>
              </div>
              <p>We explicitly disclaim all warranties, including but not limited to:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Warranties of merchantability and fitness for a particular purpose</li>
                <li>Warranties that the service will be uninterrupted, secure, or error-free</li>
                <li>Warranties regarding the accuracy, reliability, or completeness of content</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p className="mt-3">
                <strong>No Guarantee:</strong> We do not guarantee that cron expressions generated by our tool will work 
                in all environments. You are responsible for testing and validating expressions before using them in 
                production systems.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">6. Limitation of Liability</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-2">LIABILITY LIMITATION</p>
                <p className="text-red-800">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SAP CRON GENERATOR BE LIABLE FOR ANY 
                  INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES.
                </p>
              </div>
              <p>This limitation applies to damages arising from:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Use or inability to use the service</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Errors, mistakes, or inaccuracies in content</li>
                <li>Personal injury or property damage resulting from service use</li>
                <li>Any interruption or cessation of service</li>
                <li>Bugs, viruses, or harmful code</li>
                <li>Loss of data or business opportunities</li>
              </ul>
              <p className="mt-3">
                Our total liability to you for all claims arising from or related to the service shall not exceed $100 USD 
                or the amount you paid us in the past 12 months, whichever is greater.
              </p>
            </div>
          </section>

          {/* Indemnification */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">7. Indemnification</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless SAP Cron Generator and its officers, directors, employees, 
              agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees 
              (including reasonable attorneys' fees) arising from: (a) your use or misuse of the service, (b) your 
              violation of these Terms, (c) your violation of any rights of another party, or (d) your violation of any 
              applicable laws or regulations.
            </p>
          </section>

          {/* Third-Party Links */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">8. Third-Party Links and Services</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                Our service may contain links to third-party websites or services that are not owned or controlled by us. 
                We have no control over, and assume no responsibility for, the content, privacy policies, or practices of 
                any third-party websites or services.
              </p>
              <p>
                We use third-party services including Google Analytics and Google AdSense. These services have their own 
                terms and policies that apply to your use of them.
              </p>
              <p className="font-semibold">
                You acknowledge and agree that we shall not be responsible or liable for any damage or loss caused by your 
                use of any third-party content, goods, or services.
              </p>
            </div>
          </section>

          {/* Termination */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Ban className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">9. Termination</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                We reserve the right to terminate or suspend your access to the service immediately, without prior notice 
                or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Breach of these Terms</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Request by law enforcement or government agencies</li>
              </ul>
              <p className="mt-3">
                Upon termination, your right to use the service will immediately cease. All provisions of these Terms 
                which by their nature should survive termination shall survive, including ownership provisions, warranty 
                disclaimers, and limitations of liability.
              </p>
            </div>
          </section>

          {/* Changes to Terms */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <RefreshCw className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">10. Changes to Terms</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide 
              notice of any material changes by updating the "Last Updated" date at the top of this page. Your continued 
              use of the service after any changes constitutes acceptance of the new Terms. We encourage you to review 
              these Terms periodically.
            </p>
          </section>

          {/* Governing Law */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">11. Governing Law and Dispute Resolution</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], 
                without regard to its conflict of law provisions.
              </p>
              <p>
                Any disputes arising from or relating to these Terms or the service shall first be attempted to be 
                resolved through good faith negotiations. If negotiations fail, disputes shall be resolved through 
                binding arbitration in accordance with the rules of [Arbitration Body], or through the courts of 
                [Your Jurisdiction].
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">12. Contact Information</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm">
              <p className="text-gray-700"><strong>Email:</strong> naikdanesh2@gmail.com</p>
              <p className="text-gray-700 mt-1"><strong>Website:</strong> https://xscron.com/contact</p>
            </div>
          </section>

          {/* Severability */}
          <section className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-5 h-5 text-gray-600" />
              <h2 className="text-xl font-semibold text-gray-900">13. Severability and Waiver</h2>
            </div>
            <div className="text-sm text-gray-700 leading-relaxed space-y-3">
              <p>
                <strong>Severability:</strong> If any provision of these Terms is found to be unenforceable or invalid, 
                that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall 
                otherwise remain in full force and effect.
              </p>
              <p>
                <strong>Waiver:</strong> No waiver of any term of these Terms shall be deemed a further or continuing 
                waiver of such term or any other term, and our failure to assert any right or provision under these Terms 
                shall not constitute a waiver of such right or provision.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 bg-gray-100 border border-gray-200 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            By using SAP Cron Generator, you acknowledge that you have read, understood, and agree to be bound by 
            these Terms and Conditions.
          </p>
        </div>
      </main>
    </div>
  );
}
