import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className=" lg:py-[90px] py-10 flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-white text-4xl font-bold mb-1 text-center lg:text-8xl lg:text-start">LET'S WORK <span className='text-[#333333]'>TOGETHER</span></h1>        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="name" className="block text-[#6f7072] mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-[#333333] rounded text-white placeholder-[#6f7072]"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-[#6f7072] mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your@email.com"
                className="w-full p-3 bg-[#333333] rounded text-white placeholder-[#6f7072]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          
          {/* <div className="mb-4">
            <label htmlFor="budget" className="block text-[#6f7072] mb-2">Budget</label>
            <select
              id="budget"
              name="budget"
              className="w-full p-3 bg-[#333333] rounded text-white appearance-none"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="" disabled selected>Select...</option>
              <option value="small">Less than $5,000</option>
              <option value="medium">$5,000 - $10,000</option>
              <option value="large">$10,000+</option>
            </select>
          </div> */}
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-[#6f7072] mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows="6"
              className="w-full p-3 bg-[#333333] rounded text-white placeholder-[#6f7072] resize-none"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#1E90FF] hover:bg-[#1874CD] text-white font-medium py-3 px-4 rounded transition duration-300 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;