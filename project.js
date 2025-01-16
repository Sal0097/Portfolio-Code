import React from "react";
function Projects(){
    return(
        <section id="projects">
            <div className="text-xl ... text-wrap backdrop-blur-xl p-8 ... m-8 ... rounded-lg">
            <b><h2 className="font-mono text-3xl ...">Projects: </h2></b><br></br>
            <p><b>AMBA based AHB - APB data transfer </b>
                Designing an AMBA(advanced microcontroller bus architecture based bridge
                between AHB and APB to perform multiple read and write operations in
                Verilog using open-source tools.<br></br>
                <br></br><b>E-commerce PetShop web application </b>
                Designing of a Pet Shop web application which has a variety of pets to choose from. Webpage consists of a Home
                page ,Contact Us forms page & a display of pets available to choose from.Done using technologies like
                HTML,Tailwind Css, ReactJS .<br></br>
                <br></br><b>Portfolio Website </b>
                A portfolio website showcasing my skills , academics ,etc using frontend technologies like ReactJS,
                HTML,tailwindCSS.<br></br>
                <br></br><b>Console Based Questionnaire using Java </b>
                A console based questionnaire which displays 10 questions with 5 option to choose from where each correct option
                adds to the total price money won and wrong option leads to end of the contest. The 5th option consists of two life
                lines where each can be used once throughout the contest.<br></br>
                <br></br><b>GPS+GSM based vehicle tracking system </b>
                A vehicle tracking system which sends location data to mobile phones via SMS
                when prompted with the help of Arduino, GPS and GSM modules.
                Intoxication detection with engine locking
                A safety device which prevents the vehicle motor from turning on when the
                presence of alcohol is detected by the MQ-3 sensor. which are all connected
                to L293D motor driver<br></br>
                </p>
            </div>
            

            <div className="text-xl ... text-wrap backdrop-blur-xl p-8 ... m-8 ... rounded-lg">
            <br></br><b><h2 className="font-mono text-3xl ...">Certificationas: </h2></b><br></br>
            <a href="https://www.credly.com/badges/797138c5-b293-4421-b181-9e0d7ac03b55/public_url"><b className="text-cyan-600">CCNAv7: Introduction to Networks</b></a>
                <p>
                Network Fundamentals, OSI model, Configure network in Packet tracer
                </p>
                <br></br>
        
                <a href="https://www.credly.com/badges/169a8676-35f8-4f87-84e3-9eb4f42dc73b/public_url"><b className="text-cyan-600">Cisco Data Analytics Essentials</b></a>
                <p>
                Data manipulation- Excel, SQL, Data visualization - Tableau
                </p>
            </div>
        </section>
    );
}
export default Projects