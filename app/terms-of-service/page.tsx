import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] mb-6">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 18, 2025</p>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <h2 className="text-xl font-semibold text-gray-100 pt-4">1. Company Information</h2>
          <p>
            Skaliq<br />
            Sole proprietorship<br />
            Registered Address: P.O. BOX 240, Montréal, Québec H3B 0A2, Canada<br />
            Legal Notice Email: info@skaliq.com
          </p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">2. Purpose</h2>
          <p>These Terms of Service (“Terms”) govern the provision by Skaliq of its qualified meeting-booking services (“Booked Meetings”) for corporate decision-makers.</p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">3. Definitions</h2>
          <p><strong>Booked Meeting:</strong> a calendar appointment that meets all of the following criteria:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>a confirmed calendar invitation accepted by the prospect;</li>
            <li>attendance of a final decision-maker;</li>
            <li>a minimum duration of 15 minutes (unless otherwise agreed).</li>
          </ul>
          <p><strong>Client:</strong> any individual or legal entity that signs a quote or purchase order for Skaliq’s services.</p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">4. Services & Client Obligations</h2>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">4.1 Skaliq’s Services</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Identify and qualify prospects based on the Client’s target profile.</li>
            <li>Schedule Booked Meetings as defined in Section 3.</li>
            <li>If a Booked Meeting is not achieved, continue efforts at no additional cost until the objective is met (see § 6.2).</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">4.2 Client’s Obligations</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Register for and maintain an active account on any platforms specified by Skaliq.</li>
            <li>Provide a valid email address and grant access to the Client’s professional calendar.</li>
            <li>Supply all necessary briefing materials, qualification criteria, and other information requested by Skaliq.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">5. Fees & Payment Terms</h2>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">5.1 Fee</h3>
          <p>CAD 150 (excluding taxes) per Booked Meeting.</p>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">5.2 Payment Schedule</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>50% deposit due upon signing the quote (deposit invoice).</li>
            <li>50% balance due upon delivery of each Booked Meeting (final invoice).</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">5.3 No-Show / Cancellation</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>If a prospect cancels less than 24 hours before the scheduled meeting, the Client will be charged as if the meeting occurred.</li>
            <li>Skaliq will reschedule any cancelled meeting free of charge within 7 days of the cancellation.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">6. Service Level & Guarantees</h2>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">6.1 Guarantee</h3>
          <p>First delivery must satisfy the Booked Meeting definition in Section 3.</p>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">6.2 Free Re-execution</h3>
          <p>If Skaliq fails to deliver a valid Booked Meeting, it will continue its efforts at no extra cost until the agreed objective is reached.</p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">7. Intellectual Property & Confidentiality</h2>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">7.1 Ownership</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Skaliq retains all rights to its methods, processes, scripts, and tools.</li>
            <li>The Client receives a non-exclusive, non-transferable, revocable license to use any deliverables (calendar invitations, briefs).</li>
          </ul>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">7.2 Confidentiality</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>No mutual NDA is required by default.</li>
            <li>Each party agrees not to disclose the other party’s confidential commercial or technical information.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">8. Personal Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Skaliq collects prospect contact data (name, email, position) solely for meeting-booking purposes.</li>
            <li>No prospect data will be retained after the meeting takes place or the campaign ends.</li>
            <li>The Client is responsible for obtaining proper consent and complying with all applicable data-protection laws (e.g., PIPEDA).</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">9. Liability & Disclaimers</h2>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">9.1 Disclaimer</h3>
          <p>Services are provided “as is.” Skaliq only guarantees scheduling a qualified meeting; no commercial outcome (e.g., sale, revenue) is promised.</p>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">9.2 Liability Cap</h3>
          <p>Skaliq’s total liability for all claims is limited to the total fees paid by the Client in the 12 months prior to the claim.</p>
          <h3 className="text-lg font-semibold text-gray-200 pt-2">9.3 Early Termination</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Either party may terminate the agreement with 30 days’ written notice.</li>
            <li>Fees for services already rendered remain due in accordance with Section 5.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">10. Governing Law & Dispute Resolution</h2>
          <p><strong>Governing Law:</strong> the laws of the Province of Québec, Canada.</p>
          <p><strong>Jurisdiction:</strong> courts of the judicial district of Montréal, Québec, Canada.</p>

          <h2 className="text-xl font-semibold text-gray-100 pt-4">11. Changes to These Terms</h2>
          <p>Skaliq reserves the right to modify these Terms. Any updates will be communicated to the Client by email at least 30 days before they take effect.</p>
        </div>
      </div>
    </main>
  );
}
