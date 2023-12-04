import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Feed = () => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".container",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        end: () => "+=" + document.querySelector(".container").offsetWidth,
      },
    });
  }, []);

  return (
    <div className="relative overflow-y-scroll h-[100%] overflow-x-hidden">
      <div className="firstContainer flex flex-col justify-center items-center h-screen bg-yellow-300">
        <h1>Testing horizontal scrolling w/ three sections</h1>
        <h2>First Container</h2>
      </div>

      <div className="h-[100vh] flex flex-nowrap container">
        <div className="description panel w-[100vw] bg-blue-400 flex items-center justify-center h-screen">
          <div>
            SCROLL DOWN
            <div className="scroll-down">
              <div className="arrow"></div>
            </div>
          </div>
        </div>

        <section className="panel w-[100vw] red bg-red-400 flex items-center justify-center h-screen">
          ONE
        </section>
        <section className="panel w-[100vw] orange bg-orange-400 flex items-center justify-center h-screen">
          TWO
        </section>
        <section className="panel w-[100vw] purple bg-purple-400 flex items-center justify-center h-screen">
          THREE
        </section>
      </div>

      <div className="lastContainer flex items-center justify-center h-screen bg-yellow-300">
        Last Container
      </div>
    </div>
  );
};

export default Feed;
