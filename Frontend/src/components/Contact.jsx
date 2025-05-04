import React from 'react';

function Contact() {
  return (
    <section className="py-16  bg-zinc-100 px-6 md:px-16 bg-sky-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-sky-900 mb-4 underline decoration-sky-500 underline-offset-4">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            We'd love to hear from you! Reach out with any questions about pet adoption, volunteering, or events.
          </p>

          <div className="space-y-4 text-gray-700">
            <p><strong>📞 Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>✉️ Email:</strong> contact@pawfriends.org</p>
            <p><strong>📍 Location:</strong> 123 Pet Lane, Animal City, USA</p>
            <p><strong>🕒 Hours:</strong> Mon - Sat | 9:00 AM - 6:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-lg space-y-6">
          <h3 className="text-3xl font-semibold text-sky-900 mb-4">Send Us a Message</h3>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
