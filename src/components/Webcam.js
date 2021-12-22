import React, { useRef, useState } from "react";
// import Hat from "../Assets/santaHat.png";
import moment from "moment";
import Webcam from "react-webcam";
import "../styles/Camera.css";

const Camera = () => {
  const today = moment().format("MMMM Do YYYY, h:mm:ss a");

  const WebcamRef = useRef(null);

  const [imgSrc, setImgSrc] = useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = WebcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [WebcamRef, setImgSrc]);

  const selfTimer = () => {
    const imageSrc = WebcamRef.current.getScreenshot();
    setTimeout(() => {
      setImgSrc(imageSrc);
    }, 2000);
  };

  const clear = () => {
    setImgSrc(null);
  };
  return (
    <>
      <div className='Webcam-container'>
        <Webcam
          className='Webcam'
          audio={false}
          ref={WebcamRef}
          screenshotFormat='image/jpeg'
        />
        <button className='capture' onClick={capture}>
          Take Screenshot
        </button>
      </div>
      {imgSrc && (
        <div className='screenshot-container'>
          <div className='vingette'>
            <img className='screenshot' alt='capture' src={imgSrc} />
          </div>
          <h1 className='date'>{today}</h1>
          <button className='clear' onClick={clear}>
            Clear
          </button>
          {/* <img className='santaHat' src={Hat} alt='hat' /> */}
        </div>
      )}
      <h1 className='title'>POLAROID YOURSELF! 📸</h1>
    </>
  );
};

export default Camera;
