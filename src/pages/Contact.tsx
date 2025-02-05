// filepath: /d:/my projects/CatreersReact/src/pages/Contact.tsx

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center contact-background ">
      <div className="contact-content bg-black mt-40  p-8 rounded-lg shadow-lg w-full max-w-4xl animate-slideInUp  ">
        <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="  mx-auto ">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              {/* <FontAwesomeIcon icon={faUser} className="mr-2" /> */}
              Your Name
            </label>
            <input
              type="text"
              id="name"
              className="input-field-contact   text-2xl placeholder:text-2xl block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              {/* <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> */}
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="input-field-contact   text-2xl placeholder:text-2xl block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              {/* <FontAwesomeIcon icon={faPhone} className="mr-2" /> */}
              Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className=" input-field-contact   text-2xl placeholder:text-2xl block w-full p-2.5 "
              placeholder="123-456-7890"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="message"
              className=" block mb-2 text-2xl font-medium text-gray-900 dark:text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              className=" input-field-contact   text-2xl placeholder:text-2xl block w-full p-2.5"
              placeholder="Your message..."
              required
            ></textarea>
          </div>
          <div className="icon-wrapper flex justify-center items-center">
            <button type="submit" className="btn btn-secondary">
              <span className="text text-1">Submit</span>

              <span className="text text-2">Submit</span>
            </button>
          </div>
          {/* <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full lg:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
