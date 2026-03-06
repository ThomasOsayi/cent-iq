const FIELDS = [
  { label: "Your Name", type: "text", placeholder: "John Smith" },
  { label: "Email Address", type: "email", placeholder: "john@example.com" },
  { label: "Organization", type: "text", placeholder: "School or company name" },
];

export function DemoFormSection() {
  return (
    <section id="demo" className="section-padding text-center">
      <div className="section-inner">
        <div className="section-label">Get Started</div>
        <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.15] tracking-tight mb-5">Book a demo</h2>
        <p className="text-[17px] leading-relaxed text-text-secondary max-w-[560px] mx-auto">
          Tell us about your organization and we&apos;ll schedule a personalized demo to show you how CentIQ can help.
        </p>
        <div className="max-w-[540px] mx-auto mt-12 bg-white border border-border rounded-[20px] p-11 text-left">
          {FIELDS.map((field) => (
            <div key={field.label} className="mb-5">
              <label className="block text-sm font-semibold mb-2">{field.label} *</label>
              <input type={field.type} placeholder={field.placeholder} className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-input text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(11,138,94,0.1)] transition-all" />
            </div>
          ))}
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">Your Role *</label>
            <select className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-input text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(11,138,94,0.1)] transition-all">
              <option value="">Select your role</option>
              <option>Teacher</option>
              <option>Administrator</option>
              <option>Financial Institution</option>
              <option>Community Organization</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-semibold mb-2">How can we help?</label>
            <textarea placeholder="Tell us about your goals..." className="w-full px-[18px] py-3.5 border-[1.5px] border-border rounded-input text-[15px] bg-warm-white outline-none focus:border-green focus:shadow-[0_0_0_3px_rgba(11,138,94,0.1)] transition-all resize-y min-h-[100px]" />
          </div>
          <button type="button" className="w-full bg-green text-white py-4 rounded-pill text-base font-semibold hover:bg-green-dark hover:shadow-btn transition-all duration-300 mt-2 cursor-pointer">
            ✨ Request a Demo
          </button>
        </div>
      </div>
    </section>
  );
}
