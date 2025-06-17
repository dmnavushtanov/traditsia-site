export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        Get in touch with us to learn more about our work or to get involved.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> info@ournonprofit.org</p>
          <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
          <p className="mb-2"><strong>Address:</strong> 123 Community St, City, State 12345</p>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-2 border border-gray-300 rounded"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-2 border border-gray-300 rounded"
            />
            <textarea 
              placeholder="Your Message" 
              rows={4}
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
            <button 
              type="submit" 
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 