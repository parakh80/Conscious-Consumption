import { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [messageSent, setMessageSent] = useState(false);

  return (
    <div className="container mx-auto py-8">
      {messageSent && (
        <div className="mb-4 text-green-700 font-semibold text-center">
          Your message has been sent!
        </div>
      )}
      <form
        action="https://formspree.io/f/xyzzqldo"
        method="POST"
        className="max-w-lg mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="_replyto"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Message</label>
          <textarea
            name="message"
            className="w-full p-2 border rounded"
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          ></textarea>
        </div>
        {/* Honeypot Field */}
        <input type="text" name="_gotcha" style={{ display: 'none' }} />
        <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
}

export default ContactForm;