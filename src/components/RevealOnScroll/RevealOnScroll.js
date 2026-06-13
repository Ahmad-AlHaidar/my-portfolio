import React, {useEffect, useState} from "react";
import {Fade} from "react-reveal";

function shouldSkipAnimation() {
  if (typeof window === "undefined") {
    return false;
  }

  const isNarrowScreen = window.matchMedia("(max-width: 768px)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return isNarrowScreen || prefersReducedMotion;
}

export default function RevealOnScroll({children, ...fadeProps}) {
  const [skipAnimation, setSkipAnimation] = useState(shouldSkipAnimation);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateAnimationState = () => {
      setSkipAnimation(shouldSkipAnimation());
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateAnimationState);
      motionQuery.addEventListener("change", updateAnimationState);
    } else {
      mediaQuery.addListener(updateAnimationState);
      motionQuery.addListener(updateAnimationState);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", updateAnimationState);
        motionQuery.removeEventListener("change", updateAnimationState);
      } else {
        mediaQuery.removeListener(updateAnimationState);
        motionQuery.removeListener(updateAnimationState);
      }
    };
  }, []);

  if (skipAnimation) {
    return <div>{children}</div>;
  }

  return <Fade {...fadeProps}>{children}</Fade>;
}
