import React from "react";

function AboutPage() {
  return (
    <section className="mt-10">
      <div className="container">
        <div>
          <img src="./../img/unnamed.jpg" alt="emson photography" />
          <div>
          <h2 className="xl:text-2xl lg:text-2xl md:text-2xl text-xl font-bold uppercase mb-5 mt-10 text-black">
          About us
        </h2>
            <p>
              My name is Emmanuel Forson, a professional Photographer based in
              Massachusetts, where I specialize in wedding, portrait, Maternity,
              Birthday and lifestyle photography. what started as a hobby quick
              developed into a passion and profession leading me to also become
              the founder of <strong>EmSon Photography</strong>
            </p>
            <br />
            <p>
              <strong>
                "Only Photography has been able to divide human life into series
                of moments, each of them has a complete value of existence"
                Eadweard Muybridge
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
