export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-8 text-[var(--text-charcoal)]">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-6">
        Get in touch with us to learn more about our work or to get involved.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2"><strong>Email:</strong> nationaltradition@abv.bg</p>
          <p className="mb-2"><strong>Address:</strong> 
            Държава: БЪЛГАРИЯ, Област: София (столица), Община: Столична,
            гр. София, п.к. 1407, р-н Лозенец,
            ж.к. Лозенец, бул./ул. Любата, бл. 14, вх. Г, ет. 6, ап. 66
          </p>
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
              className="bg-[var(--primary-accent-green)] text-white px-6 py-2 rounded hover:bg-[var(--secondary-accent-ochre)]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 