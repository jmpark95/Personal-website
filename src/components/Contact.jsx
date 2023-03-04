export default function Contact() {
   return (
      <section
         id="contact"
         className="min-h-[calc(100vh-64px)] flex flex-col justify-center"
      >
         <div className="flex flex-col w-9/12 pb-8 mx-auto font-medium text-center dark:text-stone-100 gap-y-5 lg:gap-y-7">
            <h3 className="text-2xl font-extrabold text-indigo-300 dark:text-cyan-200 xl:text-4xl">
               Contact
            </h3>
            <p className="lg:text-2xl">
               Please get in touch if you have any questions &#128512;
            </p>

            <form
               name="contact"
               method="POST"
               action="/success.html"
               data-netlify="true"
               className="flex flex-col mx-auto gap-y-7 md:w-7/12 lg:w-9/12 xl:w-5/12"
            >
               <div className="flex">
                  <div className="w-1/2">
                     <input
                        className="w-10/12 p-1 text-sm border-b-2 rounded-md xl:p-2 lg:text-xl dark:bg-gray-500 dark:placeholder-stone-200 dark:border-b-0"
                        type="text"
                        name="name"
                        placeholder="Name"
                     />
                  </div>
                  <div className="w-1/2">
                     <input
                        className="w-10/12 p-1 text-sm border-b-2 rounded-md xl:p-2 lg:text-xl dark:bg-gray-500 dark:placeholder-stone-200 dark:border-b-0"
                        type="email"
                        name="email"
                        placeholder="Email"
                     />
                  </div>
               </div>

               <textarea
                  className="w-11/12 p-3 mx-auto text-sm border rounded-md dark:bg-gray-500 dark:placeholder-stone-200 lg:text-xl"
                  name="message"
                  placeholder="Message"
                  rows="4"
               ></textarea>

               <button
                  className="w-6/12 py-3 mx-auto font-bold border-2 rounded-md dark:hover:border-cyan-200 dark:hover:text-cyan-200 dark:border-stone-100 lg:w-5/12 xl:w-4/12 border-slate-400 btn-hover"
                  type="submit"
               >
                  Send
               </button>
            </form>
         </div>
      </section>
   );
}
