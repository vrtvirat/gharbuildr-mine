import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | gharbuildr.com",
  description: "Review gharbuildr.com's terms of service to understand our policies, procedures, and guidelines for using our construction and interior design services.",
  openGraph: {
    title: "Terms of Service | gharbuildr.com",
    description: "Review gharbuildr.com's terms of service to understand our policies, procedures, and guidelines for using our construction and interior design services.",
  },
  alternates: {
    canonical: "https://gharbuildr.com/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="container mx-auto px-4 py-12 md:py-16 lg:py-24 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Terms of Service</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-muted-foreground mb-8">Last Updated: April 27, 2024</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            Welcome to gharbuildr.com. These Terms of Service ("Terms") govern your use of the gharbuildr.com website
            and services offered by gharbuildr.com ("we," "our," or "us"). By accessing or using our website and
            services, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not
            access our website or use our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
          <p className="mb-4">
            GharBuildr provides construction, interior design, and renovation services for residential and commercial
            properties. Our services include but are not limited to:
          </p>
          <ul className="list-disc pl-6">
            <li>Home construction</li>
            <li>Interior design</li>
            <li>Home renovations</li>
            <li>Architectural design</li>
            <li>Project management</li>
            <li>Consultation services</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Client Agreements</h2>
          <p>
            All specific services, deliverables, timelines, and payment terms will be outlined in a separate client
            agreement or statement of work. These Terms supplement any such agreements. In the event of a conflict
            between these Terms and a specific client agreement, the terms of the client agreement shall prevail.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Website Use</h2>
          <p className="mb-4">By using our website, you agree to:</p>
          <ul className="list-disc pl-6">
            <li>Use the website in a manner consistent with all applicable laws and regulations</li>
            <li>Not engage in any activity that could harm, disable, or impair the website's functionality</li>
            <li>Not attempt to gain unauthorized access to any portion of the website</li>
            <li>Not use automated means to access or collect data from the website</li>
            <li>Not impersonate any person or entity or falsely state your affiliation with a person or entity</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
          <p className="mb-4">
            The content on our website, including text, graphics, logos, images, designs, and software, is the property
            of GharBuildr and is protected by copyright, trademark, and other intellectual property laws.
          </p>
          <p className="mb-4">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
            republish, download, store, or transmit any of the material on our website without our prior written
            consent.
          </p>
          <p>
            Project designs, plans, and specifications created for clients remain the intellectual property of
            GharBuildr unless otherwise specified in a written agreement. Clients receive a license to use these
            materials for the specific project for which they were created.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
          <p className="mb-4">
            Payment terms for our services will be outlined in individual client agreements. Generally:
          </p>
          <ul className="list-disc pl-6">
            <li>We operate on a milestone-based payment structure</li>
            <li>Deposits may be required before work commences</li>
            <li>Payment schedules will be tied to project milestones</li>
            <li>Final payment is due upon completion of services</li>
            <li>Late payments may incur additional fees</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Project Changes and Cancellations</h2>
          <p className="mb-4">
            Changes to project scope, specifications, or timelines must be agreed upon in writing and may result in
            additional costs and timeline adjustments.
          </p>
          <p>
            Cancellation policies will be outlined in individual client agreements. Generally, deposits are
            non-refundable, and cancellation fees may apply depending on the stage of the project.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Warranties and Guarantees</h2>
          <p className="mb-4">
            GharBuildr warrants that all services will be performed in a professional manner in accordance with industry
            standards. Specific warranties for materials and workmanship will be outlined in individual client
            agreements.
          </p>
          <p>
            We provide a defect liability period as required by Indian law and as specified in client agreements. This
            warranty does not cover damage due to normal wear and tear, improper use, or modifications made by the
            client or third parties not authorized by GharBuildr.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
          <p className="mb-4">
            To the maximum extent permitted by law, GharBuildr shall not be liable for any indirect, incidental,
            special, consequential, or punitive damages resulting from your use of our services or website.
          </p>
          <p>
            Our total liability for any claims arising under these Terms shall be limited to the amount paid by you for
            the specific service giving rise to the claim.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless GharBuildr and its officers, directors, employees, agents,
            and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in
            any way connected with your use of our services or violation of these Terms.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any dispute arising out
            of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Noida, Uttar
            Pradesh, India.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
          <p>
            Any dispute arising out of or in connection with these Terms shall first be attempted to be resolved through
            good faith negotiations. If the dispute cannot be resolved through negotiation, it shall be referred to
            arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Termination</h2>
          <p>
            We may terminate or suspend your access to our website and services immediately, without prior notice or
            liability, for any reason, including breach of these Terms. Upon termination, your right to use our website
            and services will immediately cease.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
            provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change
            will be determined at our sole discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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
