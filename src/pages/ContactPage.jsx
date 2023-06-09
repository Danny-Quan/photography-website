import React from "react";
import Contact from "./../components/Contact";
import {FaPhone} from 'react-icons/fa'
import {MdLocationOn} from 'react-icons/md'
import {BsFillEnvelopeOpenFill} from 'react-icons/bs'

function ContactPage() {
  return (
    <section className="mt-16 pb-10">
      <h2 className="text-center font-bold xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl text-xl uppercase text-black mb-10">contact us</h2>
      <div className="container contact--page--container grid  xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <p>
          "Only Photography has been able to divide human life into series of
          moments, each of them has a complete value of existence" &nbsp;{" "}
          <strong>Eadweard Muybridge</strong>
          </p>
          <ul className="mt-10">
            <li className="mb-5">
              <a href="tel:+19782018477" className="flex gap-5 items-center"><FaPhone size={20} color={"dodgerblue"}/>+1 (978) 201-8477</a>
            </li>
            {/* <li className="mb-5">
              <a href="tel:0241537297" className="flex gap-5 items-center"><FaPhone size={20} color={"dodgerblue"}/>+233 24 153 7297</a>
            </li> */}
            <li className="mb-5">
              <a href="mailto:emson504@gmail.com" className="flex gap-5 items-center"><BsFillEnvelopeOpenFill size={20} color={"dodgerblue"}  />emson504@gmail.com</a>
            </li>
            <li className="mb-2 flex gap-5 items-center" ><MdLocationOn size={30} color={"dodgerblue"} />United States, Massachussets</li>
          </ul>
        </div>
        <Contact />
      </div>
    </section>
  );
}
// style={{backgroundColor:"orange",width:"45px",height:"45px",borderRadius:"50%", padding:"5px"}}
export default ContactPage;
