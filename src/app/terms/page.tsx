import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Huma Tech',
  description: 'Terms and Conditions for using the Huma Tech Blog website.',
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8" style={{ color: 'var(--text-primary)' }}>
        Terms & <span className="text-blue-500">Conditions</span>
      </h1>

      <div className="article-content" style={{ color: 'var(--text-secondary)' }}>
        <p>Last Updated: October 21, 2026</p>

        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using humatech.com (the "Website"), you agree to accept and be bound by these Terms and Conditions. If you do not agree to all of these terms, you are prohibited from using this Website.</p>

        <h2>2. Use of the Website</h2>
        <p>You agree to use the Website only for lawful purposes and in a manner consistent with all applicable laws and regulations. You may not use the Website to distribute harmful content, infringe intellectual property rights, or engage in any fraudulent activity.</p>

        <h2>3. Intellectual Property</h2>
        <p>All content on this Website, including but not limited to text, graphics, logos, images, and software, is the property of Huma Tech and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.</p>

        <h2>4. External Links</h2>
        <p>This Website may contain links to third-party websites. Huma Tech does not control, endorse, or assume responsibility for the content, products, or services offered by these external sites. Your use of such links is at your own risk.</p>

        <h2>5. Disclaimer of Warranties</h2>
        <p>This Website is provided on an "AS IS" and "AS AVAILABLE" basis. Huma Tech makes no representations or warranties of any kind, express or implied, regarding the accuracy, completeness, reliability, or availability of the content or services.</p>

        <h2>6. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Huma Tech shall not be liable for any indirect, incidental, consequential, or punitive damages arising out of your use of or inability to use this Website.</p>

        <h2>7. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us through our Contact page.</p>
      </div>
    </div>
  );
}