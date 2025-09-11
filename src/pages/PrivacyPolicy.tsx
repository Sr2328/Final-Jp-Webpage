import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function PrivacyPolicy(): JSX.Element {
  const [showCookie, setShowCookie] = useState<boolean>(true);

  useEffect(() => {
    try {
      const accepted = localStorage.getItem("jp_cookie_accepted");
      if (accepted === "1") setShowCookie(false);
    } catch (e) {
      // ignore localStorage failures
    }
  }, []);

  function acceptCookies() {
    try {
      localStorage.setItem("jp_cookie_accepted", "1");
    } catch (e) {
      // ignore
    }
    setShowCookie(false);
  }

  return (
    <div className="min-h-screen bg-gray-50 text-slate-800 py-12 px-6 lg:px-20">
      <header className="max-w-6xl mx-auto flex items-center justify-between mb-10">
       
        <nav className="flex items-center gap-4">
          <Link
            to="/"
            className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm text-slate-700 hover:shadow-md"
            aria-label="Back to Home"
          >
            ← Back to Home
          </Link>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto">
        <section className="bg-gradient-to-r from-white via-slate-50 to-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2 className="text-3xl font-display font-bold">Privacy Policy</h2>
              <p className="mt-2 text-slate-500">Last updated: <strong>{new Date().toLocaleDateString()}</strong></p>
            </div>
            <div className="text-right">
              <Link
                to="/contact"
                className="inline-block bg-slate-800 text-white px-4 py-2 rounded-full shadow-sm hover:opacity-95"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <p className="mt-6 text-slate-600 leading-relaxed">
           Satija Properties ("we", "us", "our") is committed to protecting and respecting your privacy. This
            document explains what information we collect, why we collect it, how we use it, and the choices you have.
            We built this policy to be simple, honest, and compliant with major ad platforms (Google Ads, Meta Ads).
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-3">What we collect</h3>
            <ul className="text-slate-600 space-y-2 list-inside">
              <li>• <strong>Contact info:</strong> name, email, phone when you request info or consultation.</li>
              <li>• <strong>Property preferences:</strong> budget, BHK, location choices and search filters.</li>
              <li>• <strong>Analytics & device data:</strong> IP, browser, device, pages visited, and session data.</li>
              <li>• <strong>Ad & tracking data:</strong> cookies, pixels, and advertising identifiers used by Google & Meta.</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-3">How we use it</h3>
            <ul className="text-slate-600 space-y-2 list-inside">
              <li>• Match you with properties that fit your needs and budget.</li>
              <li>• Send updates, appointment confirmations, and tailored offers.</li>
              <li>• Improve our product and ad experiences with analytics and A/B testing.</li>
              <li>• Serve relevant ads via Google Ads & Meta (remarketing & lookalike audiences).</li>
            </ul>
          </article>

          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-semibold mb-3">We never sell your data</h3>
            <p className="text-slate-600">Your data is never sold to third parties. We only share data with:</p>
            <ul className="text-slate-600 mt-3 space-y-2">
              <li>• Trusted partners & developers when necessary to service your requests.</li>
              <li>• Advertising platforms (Google, Meta) to deliver and measure ads.</li>
            </ul>
          </article>
        </div>

        <section className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Advertising, cookies & tracking</h3>
          <p className="text-slate-600 leading-relaxed">
            We use cookies and tracking pixels to give you a better experience and show relevant properties. Our ads
            platform partners (Google Ads, Meta) may set cookies or use device identifiers for remarketing and
            personalization. These tools help us show you listings that matter and measure ad effectiveness.
          </p>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <h4 className="font-medium">Manage Cookies</h4>
              <p className="text-slate-500 text-sm mt-2">You can disable cookies from your browser or opt out of personalised ads on Google & Meta.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <h4 className="font-medium">Third-party Ads</h4>
              <p className="text-slate-500 text-sm mt-2">Ad partners may use your data subject to their own policies. Links to manage ad settings are provided below.</p>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href="https://adssettings.google.com/" target="_blank" rel="noreferrer" className="inline-block px-3 py-2 border rounded-full text-sm bg-white shadow-sm">Google Ad Settings</a>
            <a href="https://www.facebook.com/adpreferences" target="_blank" rel="noreferrer" className="inline-block px-3 py-2 border rounded-full text-sm bg-white shadow-sm">Meta Ad Preferences</a>
          </div>
        </section>

        <section className="mt-8 bg-gradient-to-r from-white via-slate-50 to-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Your rights & choices</h3>
          <ul className="text-slate-600 list-inside space-y-2">
            <li>• Access & correction: Ask for a copy of your data and request corrections.</li>
            <li>• Deletion: Request removal of your personal data from our active systems.</li>
            <li>• Opt-out: Unsubscribe from marketing emails and SMS at any time.</li>
          </ul>

          <p className="mt-4 text-slate-500">To exercise any rights, email <strong>propertiessatija@gmail.com</strong> or call +91 9205413041.</p>
        </section>

        <section className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Security</h3>
          <p className="text-slate-600 leading-relaxed">We implement reasonable and modern measures to protect your data. While we aim for strong security, no system is 100% fail-proof — if a breach occurs, we'll notify affected users where required by law.</p>
        </section>

        <section className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Children</h3>
          <p className="text-slate-600">Our services are not directed to children under 16. We do not knowingly collect personal data from children. If you believe we have data of a child, contact us and we'll take steps to delete it.</p>
        </section>

        <section className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <h3 className="text-2xl font-semibold mb-4">Contact & updates</h3>
          <p className="text-slate-600">Questions about this policy or requests about your data? Reach out:</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a href="mailto:satijaproperties@gmail.com" className="inline-block px-4 py-2 rounded-lg bg-slate-800 text-white">Email Us</a>
            <a href="tel:+919205413041" className="inline-block px-4 py-2 rounded-lg border">Call +91 9205413041</a>
          </div>

          <p className="mt-4 text-sm text-slate-500">We may update this policy periodically. When changes are material, we will highlight them on the site and update the "Last updated" date above.</p>
        </section>

       
      </main>

      {showCookie && (
        <div className="fixed left-6 right-6 bottom-6 md:left-10 md:right-auto md:bottom-10 max-w-3xl mx-auto md:max-w-none md:right-10 bg-white border rounded-xl shadow-lg p-4 flex items-center gap-4">
          <div className="flex-1">
            <p className="text-slate-700 font-semibold">We use cookies to improve your experience</p>
            <p className="text-slate-500 text-sm">By continuing to browse, you agree to our use of cookies for analytics and personalized ads. You can change settings in your browser.</p>
          </div>
          <div className="flex items-center gap-3">
            <button onClick={acceptCookies} className="px-4 py-2 bg-slate-800 text-white rounded-md">Accept</button>
            <Link to="/privacy#cookie" onClick={() => setShowCookie(false)} className="px-4 py-2 border rounded-md text-slate-700">Manage</Link>
          </div>
        </div>
      )}
    </div>
  );
}
export { PrivacyPolicy };