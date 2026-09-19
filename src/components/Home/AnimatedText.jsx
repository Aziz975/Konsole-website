import React, { useEffect, useRef, useState } from "react";


export default function AnimatedText() {
  const textRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} className={visible ? "text-reveal active" : "text-reveal"}>
      <h2 className="text-[42px] font-semibold leading-[1.02] sm:text-[48px] md:text-[55px] lg:text-[56px]">
        Our Direction
      </h2>

      <p className="mt-5 max-w-[650px] text-lg">
        Creating a connected circular economy for a better future.
      </p>
    </div>
  );
}