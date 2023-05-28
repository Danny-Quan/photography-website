import React from "react";

function Contact() {
  return (
    <section className="mt-10 contact--section" id="contact">
      <div data-aos="zoom-in-left" data-aos-duration="1000" className="container">
        <h2 className="uppercase text-black font-bold xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl pb-6">Join the list</h2>
        <form action="">
            <input type="text" placeholder="Enter name" required />
            <input type="email" placeholder="Enter email" required />
            <input type="text" placeholder="Enter subject" required />
            <textarea placeholder="Message" name="message" id="" cols="30" rows="10" ></textarea>
            <button className="bg-primary text-white px-10 py-2 rounded-full" type="submit">Send Now</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
