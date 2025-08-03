import React, { useEffect, useRef } from 'react';
// import './TypedText.css'; // Tailwind-compatible cursor style

import "../../App.css"

const TypedText = () => {
  const typedRef = useRef(null);
  const textArray = ["Full Stack Developer", "Programmer", "Web Designer"];
  const typingDelay = 200;
  const erasingDelay = 50;
  const newTextDelay = 1500;
  let textIndex = 0;
  let charIndex = 0;

  useEffect(() => {
    const typedElement = typedRef.current;

    function type() {
      if (charIndex < textArray[textIndex].length) {
        typedElement.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(type, typingDelay + 200);
      }
    }

    setTimeout(type, 1000);
  }, []);

  return (
    <h2 className="text-[30px]/[100%] md:text-[64px]/[100%] uppercase font-bold md:my-6 mt-[15px] mb-[20px]">
      I am <span ref={typedRef}></span><span className="blinking-cursor">.</span>
    </h2>
  );
};

export default TypedText;
