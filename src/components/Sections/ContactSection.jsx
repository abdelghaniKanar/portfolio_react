import { useState } from 'react';

export const ContactSection = () => {

  // const [text, setText] = useState("");

  // return (
  //   <div className="p-4 space-y-4">
  //     <input
  //       type="text"
  //       value={text}
  //       onChange={(e) => setText(e.target.value)}
  //       className="border p-2 rounded w-full"
  //       placeholder="Type something..."
  //     />
  //     <p className="text-lg font-semibold">{text}</p>
  //   </div>
  // );

  // const [text, setText] =  useState(0);
  // return (<div className='p-4 space-y-4'>
  //   <input className='border p-2 rounded w-full' type="text" value={text} onChange={(e) => setText(e.target.value)} />
  //   <p>{text}</p>
  // </div>)
  // return (<div className='p-4 space-y-4'>
  //   <button
  //       onClick={() => setText(text + 1)}
  //       className="bg-blue-500 text-white px-4 py-2 rounded"
  //     >
  //       {text}
  //     </button>
  // </div>)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submission logic
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full p-3 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-portfolio-dark dark:focus:ring-portfolio-light
            focus:border-transparent outline-none
            dark:bg-gray-800 dark:border-gray-700"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full p-3 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-portfolio-dark dark:focus:ring-portfolio-light
            focus:border-transparent outline-none
            dark:bg-gray-800 dark:border-gray-700"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter message"
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-portfolio-dark dark:focus:ring-portfolio-light
            focus:border-transparent outline-none
            dark:bg-gray-800 dark:border-gray-700"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full p-3 bg-portfolio-dark text-white 
          dark:bg-portfolio-light dark:text-portfolio-dark
          font-minecraft rounded-lg hover:opacity-90 transition-opacity"
      >
        Send
      </button>
    </form>

    
  );
};