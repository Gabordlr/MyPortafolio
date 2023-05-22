import { useState, useEffect } from 'react';

let check = false;
let prevInterval = 0;

function TypeAnimation({ prompt, size, color}) {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const textArray = prompt.split('');
  useEffect(() => {
    if (textArray[currentIndex] === '#') {
      const timerId = setTimeout(() => {
        check = true;
        setTypedText(typedText.slice(0, typedText.length - 1));
        setCurrentIndex(currentIndex - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }

    else if (check === true) {
      const timerId = setTimeout(() => {
        check = true;
        setTypedText(typedText.slice(0, typedText.length - 1));
        setCurrentIndex(currentIndex - 1);
        if (typedText.length === 0) {
          check = false;
          prevInterval += 1;
          setCurrentIndex(prevInterval + 1);
        }
      }, 100);
      return () => clearTimeout(timerId);
    }

    else if (currentIndex < textArray.length && check === false) {
      const timerId = setTimeout(() => {
        setTypedText(typedText + textArray[currentIndex]);
        setCurrentIndex(currentIndex + 1);
        prevInterval = currentIndex;
      }, 100);
      return () => clearTimeout(timerId);
    }
  }, [currentIndex]);

  return <h1 className={`${color} font-light ${size}`}> {typedText}</h1>;
}
export default TypeAnimation;