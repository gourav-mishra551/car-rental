import { useRef, useState } from "react";
import "./faq.css";
import { gsap } from "gsap";
const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
      // console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };

  return (
    <>
    <h1 className="testimonial-heading">Frequently asked questions by our customers</h1>
    <div className="accordion">
      
      <div className="accordion__container">
        <div
          className={`accordion__item  ${openAccordion === 0 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[0] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(0)}
          >
            <p className="accordion__name">Do you accept credit cards?</p>
          </div>

          <div className="accordion__details">
            <ul>
              <li>
               Yes , we aaccept all types of credit cards and online payment methods like GPay , PhonePay , Paytm and wallet.
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`accordion__item ${openAccordion === 1 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[1] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(1)}
          >
            
            <p className="accordion__name">
            Do you have a lost and found service?
            </p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
              Yes , we care about all types of security for our customers and there lugage also. 
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`accordion__item ${openAccordion === 2 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[2] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(2)}
          >
            <p className="accordion__name">Is there an additional charge for luggage?</p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                No , there is no additional charges for lugage but the lugage should be not more than the car capacity , if the 
                lugage is more than the car capacity it all will be your responsibility , or you can took a big car for more lugage.
              </li>
            
            </ul>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Faq