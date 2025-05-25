import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | gharbuildr.com",
  description: "Read gharbuildr.com's privacy policy to understand how we collect, use, and protect your personal information. Learn about your rights and our data protection practices.",
  openGraph: {
    title: "Privacy Policy | gharbuildr.com",
    description: "Read gharbuildr.com's privacy policy to understand how we collect, use, and protect your personal information. Learn about your rights and our data protection practices.",
  },
  alternates: {
    canonical: "https://gharbuildr.com/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Privacy Policy</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-8">Last Updated: April 27, 2024</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            gharbuildr.com ("we," "our," or "us") respects your privacy and is committed to protecting your personal
            data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you
            visit our website or engage with our construction, interior design, and renovation services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
          <p className="mb-4">We collect information that you provide directly to us when you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Fill out forms on our website, including contact forms and consultation requests</li>
            <li>Subscribe to our newsletter or marketing communications</li>
            <li>Request a quote or consultation for our services</li>
            <li>Correspond with us by phone, email, or otherwise</li>
            <li>Provide feedback or testimonials about our services</li>
          </ul>

          <p className="mb-4">The types of information we may collect include:</p>
          <ul className="list-disc pl-6">
            <li>Personal identification information (name, email address, phone number, etc.)</li>
            <li>Property information related to your construction or renovation project</li>
            <li>Communication preferences and history</li>
            <li>Technical data such as IP address, browser type, and device information</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6">
            <li>Provide, maintain, and improve our services</li>
            <li>Process and respond to your inquiries and service requests</li>
            <li>Communicate with you about our services, promotions, and events</li>
            <li>Personalize your experience on our website</li>
            <li>Analyze website usage to improve user experience</li>
            <li>Comply with legal obligations and enforce our terms</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies and similar tracking technologies to track activity on our website and hold certain
            information. Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if
            you do not accept cookies, you may not be able to use some portions of our website.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
            storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
          <p>
            Our website may contain links to third-party websites or services that are not owned or controlled by
            gharbuildr.com. We have no control over and assume no responsibility for the content, privacy policies, or
            practices of any third-party websites or services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6">
            <li>The right to access personal information we hold about you</li>
            <li>The right to request correction of inaccurate information</li>
            <li>The right to request deletion of your information</li>
            <li>The right to restrict or object to processing of your information</li>
            <li>The right to data portability</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p>
            Our services are not intended for individuals under the age of 18. We do not knowingly collect personal
            information from children. If you are a parent or guardian and believe your child has provided us with
            personal information, please contact us.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <address className="not-italic mt-4">
            <p>gharbuildr.com</p>
            <p>Email: info@gharbuildr.com</p>
            <p>Phone: +91-83838 78137</p>
            <p>Address: SF 212C, Harsha Mall, Alpha I, Greater Noida, Uttar Pradesh</p>
          </address>
        </section>
      </div>
    </main>
  )
}
