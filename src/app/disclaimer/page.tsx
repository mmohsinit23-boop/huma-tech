import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | Huma Tech',
  description: 'Disclaimer of liability for content and information published on the Huma Tech Blog.',
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8" style={{ color: 'var(--text-primary)' }}>
        Disclaimer
      </h1>

      <div className="article-content" style={{ color: 'var(--text-secondary)' }}>
        <p>Last Updated: October 21, 2026</p>

        <h2>1. General Disclaimer</h2>
        <p>The content published on humatech.com (the "Website") is provided for general informational and educational purposes only. Huma Tech makes every effort to keep the information on this Website accurate and up-to-date, but we do not make any representations or warranties as to the completeness, reliability, or accuracy of the content.</p>

        <h2>2. No Professional Advice</h2>
        <p>The information on this Website is not intended to be a substitute for professional advice. You should not rely on any information on this Website as an alternative to professional advice. Always seek the advice of a qualified professional with respect to any questions you may have regarding a medical, legal, financial, or other matter.</p>

        <h2>3. Product Reviews and Recommendations</h2>
        <p>Where we provide product reviews, recommendations, or buying guides, these are based on our research and opinions. Prices, availability, and product specifications may change without notice. We do not guarantee the accuracy of any product information and you should verify details directly with the manufacturer or retailer before making a purchase.</p>

        <h2>4. External Links</h2>
        <p>This Website contains links to external websites. We do not control these external sites and are not responsible for their content, privacy practices, or the products and services they offer. We include these links for your convenience only and do not endorse them.</p>

        <h2>5. Advertisements</h2>
        <p>This Website displays advertisements through Google AdSense. The content of these ads is controlled by advertisers and is not endorsed, verified, or guaranteed by Huma Tech. Any transactions you enter into with advertisers are at your own risk.</p>

        <h2>6. Changes to This Disclaimer</h2>
        <p>Huma Tech reserves the right to modify this Disclaimer at any time. Your continued use of the Website after any such changes constitutes your acceptance of the new Disclaimer.</p>
      </div>
    </div>
  );
}