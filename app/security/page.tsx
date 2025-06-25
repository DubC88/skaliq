import Link from 'next/link';

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#050509] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-200 transition-colors">
            &larr; Back to Home
          </Link>
        </div>
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9F6BFF] to-[#6B48FF] mb-6">
          Security
        </h1>
        <p className="text-sm text-gray-400 mb-8">Last updated: June 18, 2025</p>

        <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
          <p className="text-lg">
            At Skaliq, we're committed to keeping your information safe:
          </p>
          
          <ul className="list-disc pl-5 space-y-4">
            <li className="text-gray-300">
              <span className="font-semibold text-white">Encryption in transit:</span> All data exchanged between your browser and our site is protected by HTTPS/TLS.
            </li>
            
            <li className="text-gray-300">
              <span className="font-semibold text-white">Access controls:</span> We restrict administrative access to authorized personnel only.
            </li>
            
            <li className="text-gray-300">
              <span className="font-semibold text-white">Data handling:</span> We do not retain any lead data beyond the completion of each campaign.
            </li>
          </ul>
          
          <div className="mt-8 pt-4 border-t border-[#ffffff20]">
            <p className="text-gray-300">
              <span className="font-semibold text-white">Questions?</span> Contact us at{' '}
              <a 
                href="mailto:info@skaliq.com" 
                className="text-[#9F6BFF] hover:text-[#6B48FF] transition-colors"
              >
                info@skaliq.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
