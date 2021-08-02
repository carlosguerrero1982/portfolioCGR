import React from "react";

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }
  
  return (
    <section id="contact" className="relative">
      <div className="container flex flex-wrap px-10 py-10 mx-10 mx-auto sm:flex-nowrap">
        <div className="relative flex items-end p-10 overflow-hidden bg-gray-900 rounded-lg justify-items-start lg:w-2/3 md:w-1/2 sm:mr-10">
         
          <div className="relative flex flex-wrap px-2 bg-gray-900 rounded shadow-md ">
            <div className="px-6 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                DIRECCION
              </h2>
              <p className="mt-1">
                C/ Alcudia 11 2 A <br />
                Camas (Sevilla)
              </p>
            </div>
            <div className="px-4 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                EMAIL
              </h2>

              <div className="flex flex-col">
              <a className="flex px-2 mt-4 text-indigo-400">
                carlos.guerrero.rodriguez.asir@gmail.com
              </a>

              <a className="px-2 mt-4 text-indigo-400">
                carlos.guerrero.rodriguez.devops@gmail.com
              </a>

              <a className="px-2 mt-4 text-indigo-400">
                carlos.guerrero.rodriguez.dev@gmail.com
              </a>

            

              </div>
            </div>

            <div className="px-3 lg:w-1/2">
              <h2 className="text-xs font-semibold tracking-widest text-white title-font">
                CONTACTO
              </h2>
              <p className="mt-1">
              643975620
              </p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
          <h2 className="mb-1 text-3xl font-medium text-white sm:text-4xl title-font">
            CONTACTO
          </h2>
         
          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-400">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="text-sm leading-7 text-gray-400">
              Correo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-400">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-800 border border-gray-700 rounded outline-none resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">
            ENVIAR
          </button>
        </form>
      </div>
    </section>
  );
}