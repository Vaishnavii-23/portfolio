import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vaishnavighuge711@gmail.com",
    link: "mailto:vaishnavighuge711@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Vaishnavii-23",
    link: "https://github.com/Vaishnavii-23"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/vaishnavi-sanjay-ghuge",
    link: "https://www.linkedin.com/in/vaishnavi-sanjay-ghuge/"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    link: null
  }
];

export function ContactPage() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl text-black mb-4">Get In Touch</h1>
          <div className="w-20 h-1 bg-black rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            I'm currently open to internship and entry-level opportunities in Software Engineering, 
            Backend Development, Data Science, and Applied Science roles.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-100 rounded-2xl p-8 border border-gray-200">
              <h2 className="text-2xl text-black mb-6">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-600 transition-colors break-all"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <div className="text-black">{item.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Box */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl text-black mb-3">Looking For</h3>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>Software Engineer Intern</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>Backend Developer Intern</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>Data Science Intern</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 bg-black rounded-full"></span>
                  <span>Applied Science Intern</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Available for Summer 2025 internships and full-time opportunities starting 2026.
              </p>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl text-black mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  placeholder="Internship Opportunity"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>

              <p className="text-xs text-gray-500 text-center">
                Note: This is a demo form. Please use the email address above to contact directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}