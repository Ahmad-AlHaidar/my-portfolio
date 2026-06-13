import React, {useEffect, useState} from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

export default function RemoteLottie({animationUrl, className}) {
  const [animationData, setAnimationData] = useState(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    fetch(animationUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load animation");
        }
        return response.json();
      })
      .then(data => {
        if (isMounted) {
          setAnimationData(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setHasError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [animationUrl]);

  if (hasError) {
    return null;
  }

  if (!animationData) {
    return <Loading />;
  }

  return (
    <div className={className}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}
