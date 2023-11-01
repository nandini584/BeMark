// src/App.js
import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'react-gsap';

import Container from './Container';
import Section from "./Section";

 // Make sure to set up Tailwind CSS in your project

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  const sections = [
    { color: 'red', title: 'ONE' },
    { color: 'orange', title: 'TWO' },
    { color: 'purple', title: 'THREE' },
    { color: 'green', title: 'FOUR' },
    { color: 'gray', title: 'FIVE' },
  ];

  const sectionIncrement = 10 / (sections.length - 1);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.container',
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      start: 'top top',
      end: '+=5000',
    },
  });

  tl.to('.panel', {
    xPercent: -100 * (sections.length - 1),
    duration: 10,
    ease: 'none',
  });

  sections.forEach((section, index) => {
    const tween = gsap.from(section, {
      opacity: 0,
      scale: 0.6,
      duration: 1,
      force3D: true,
      paused: true,
    });

    tl.add(() => {
      if (index === 0) {
        tween.progress(1);
      }
    }, sectionIncrement * (index - 0.99));

    tl.add(() => {
      tween.play();
    }, sectionIncrement * (index - 0.99));

    tl.add(() => {
      tween.reverse();
    }, sectionIncrement * (index + 0.99));

    tl.add(() => {
      tween.play();
    }, sectionIncrement * (index + 0.99));
  });

  return (
    <div>
      <header>
        <a href="https://greensock.com/scrolltrigger">
          <img
            className="greensock-icon"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg"
            width="200"
            height="64"
            alt="GreenSock Logo"
          />
        </a>
      </header>
      <Container>
        <Section color="blue" title="Horizontal snapping sections (advanced)">
          <h1>Horizontal snapping sections (advanced)</h1>
          <p>
            Scroll vertically to scrub the horizontal animation. It also dynamically snaps to the sections in an organic way based on the velocity. The snapping occurs based on the natural ending position after momentum is applied, not a simplistic "wherever it is when the user stops". The fading/scaling happens at a consistent rate, not based on how fast you scroll.
          </p>
          <div className="scroll-down">Scroll down<div className="arrow"></div></div>
        </Section>
        {sections.map((section, index) => (
          <Section key={index} color={section.color} title={section.title} />
        ))}
      </Container>
    </div>
  );
};

export default App;
