import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Carousel = (props) => {
  const { slides } = props;
  const slideLength = slides.length;

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(updateSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  function goTo(index) {
    setCurrentSlide(index);
  }

  function updateSlide() {
    if (currentSlide === 0) {
      setCurrentSlide(currentSlide + 1);
    } else if (currentSlide === slideLength - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  function prev() {
    if (currentSlide === 0) {
      setCurrentSlide(slideLength - 1);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  }

  function next() {
    if (currentSlide === slideLength - 1) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  }

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-16 px-4 relative my-2  group">
      <div
        style={{ backgroundImage: `url(${slides[currentSlide].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover   duration-500"
      >
        <div className="w-full h-full bg-slate-700 bg-opacity-25 flex flex-row rounded-2xl justify-between px-5">
          <p className="text-white text-7xl font-bold p-4 mx-3">{slides[currentSlide].heroText}</p>
          <img className="p-4 h-auto max-w-md" src={slides[currentSlide].heroImg} alt={slides[currentSlide].alt} />
        </div>
      </div>
      <div className="hidden  group-hover:block absolute  top-[50%] -translate-x-0 translate-y-[-50%] left-5 carouselControls">
        <button onClick={() => prev()}>
          <FontAwesomeIcon
            className="text-white text-4xl bg-slate-400 rounded-full p-2"
            icon={faArrowLeft}
          />
        </button>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 carouselControls">
        <button onClick={() => next()}>
          <FontAwesomeIcon
            className="text-white text-4xl bg-slate-400 rounded-full p-2"
            icon={faArrowRight}
          />
        </button>
      </div>
      <div className="hidden group-hover:block absolute top-[75%] left-[45%] translate-y-[80%] mt-4  space-x-2 ">
        {slides.map((item, index) => {
          if (currentSlide === index) {
            return (
              <span
                className=" p-1 border border-2  border-slate-300 bg-gradient-to-tr from-green-500 to-purple-700 rounded-full text-[1px]"
                onClick={() => goTo(index)}
              ></span>
            );
          } else {
            return (
              <span
                className=" p-1 border border-2  border-slate-300 bg-white rounded-full text-[1px]"
                onClick={() => goTo(index)}
              ></span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
