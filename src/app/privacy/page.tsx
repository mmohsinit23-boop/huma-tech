import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Huma Tech',
  description: 'Privacy Policy for Huma Tech Blog. Learn how we handle your data and our use of Google AdSense.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8" style={{ color: 'var(--text-primary)' }}>
        Privacy <span className="text-blue-500">Policy</span>
      </h1>

      <div className="article-content" style={{ color: 'var(--text-secondary)' }}>
        <p>Last Updated: October 21, 2026</p>

        <p>At Huma Tech, accessible from humatech.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Huma Tech and how we use it.</p>

        <h2>1. Information We Collect</h2>
        <p>We do not require any registration to read our blog. However, if you contact us directly or sign up for our newsletter, we may receive additional information about you such as your name, email address, and the contents of any message you may send us.</p>

        <h2>2. Google AdSense and Cookies</h2>
        <p><strong>Important for AdSense:</strong> We use Google AdSense to serve ads on our website. Google, as a third-party vendor, uses cookies to serve ads based on your visit to this and other websites on the Internet.</p>
        <p>Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to our sites and/or other sites on the Internet. Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Ads Settings</a>.</p>

        <h2>3. Log Files</h2>
        <p>Huma Tech follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2>4. Third Party Privacy Policies</h2>
        <p>Huma Tech's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>

        <h2>5. GDPR and CCPA Data Protection Rights</h2>
        <p>We want to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
        <ul>
          <li>The right to access – You have the right to request copies of your personal data.</li>
          <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
          <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
        </ul>

        <h2>6. Contact Us</h2>
        <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through our Contact page.</p>
      </div>
    </div>
  );
}
