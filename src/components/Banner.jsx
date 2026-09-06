import React, { useEffect, useRef } from "react";
import "./Banner.css";

const Banner = ({
  imageUrl,
  text,
  textAlignment = "center",
}) => {
  const bannerRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;

    if (!banner) {
      return;
    }

    let animationFrame;

    const handleScroll = () => {
      if (animationFrame) {
        return;
      }

      animationFrame = requestAnimationFrame(() => {
        const rect = banner.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        /*
          How far the banner has moved through
          the viewport.

          0   = banner entering viewport
          0.5 = banner centered
          1   = banner leaving viewport
        */
        const progress =
          (windowHeight - rect.top) /
          (windowHeight + rect.height);

        /*
          Keep the value between 0 and 1.
        */
        const clampedProgress = Math.min(
          Math.max(progress, 0),
          1
        );

        /*
          CSS will use this variable to control
          the parallax animation.
        */
        banner.style.setProperty(
          "--scroll-progress",
          clampedProgress
        );

        animationFrame = null;
      });
    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    /*
      Set initial position.
    */
    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <section
      ref={bannerRef}
      className={`banner banner-${textAlignment}`}
      style={{
        "--banner-image": `url("${imageUrl}")`,
      }}
    >
      <div className="banner-background" />

      <div className="banner-overlay" />

      <div className="banner-content">
        <h1>{text}</h1>
      </div>

      <div className="banner-scroll-indicator">
        <span />
      </div>
    </section>
  );
};

export default Banner;