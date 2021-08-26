type domElem = HTMLElement | null;
type domElemArray = NodeListOf<HTMLElement> | null;
export default class Slider {
  sliderWrapper: domElem; // wrap everyting have scrolling btns
  slider: domElem; // ouiter div have overflow: scroll
  slidesWrapper: domElem; // wrapp all slides
  slides: domElemArray; // have collection of slides

  constructor() {
    this.sliderWrapper = null;
    this.slider = null;
    this.slidesWrapper = null;
    this.slides = null;
  }
  init(
    _sliderWrapper: domElem,
    _slider: domElem,
    _slidesWrapper: domElem,
    _slides: domElemArray
  ) {
    this.sliderWrapper = _sliderWrapper;
    this.slider = _slider;
    this.slidesWrapper = _slidesWrapper;
    this.slides = _slides;

    this.updateSliderWidth();
    window.addEventListener("resize", this.updateSliderWidth.bind(this));
    this.updateButtonsVisibility();
    if (this.slider)
      this.slider.addEventListener(
        "scroll",
        this.updateButtonsVisibility.bind(this)
      );
  }

  updateButtonsVisibility() {
    if (this.sliderWrapper && this.slidesWrapper && this.slider) {
      const sliderWidth = this.slider.clientWidth;
      const maxScroll = this.slidesWrapper.clientWidth - sliderWidth;
      const scrollLeft = Math.ceil(this.slider.scrollLeft);
      const leftBtn =
        this.sliderWrapper.querySelector<HTMLElement>(".silder-btn .left");
      const rightBtn =
        this.sliderWrapper.querySelector<HTMLElement>(".silder-btn .right");
      const hideLeftBtn = () => {
        if (leftBtn) {
          leftBtn.style.visibility = "hidden";
          leftBtn.style.opacity = "0";
        }
      };
      const hideRightBtn = () => {
        if (rightBtn) {
          rightBtn.style.visibility = "hidden";
          rightBtn.style.opacity = "0";
        }
      };
      const showAllBtn = () => {
        if (leftBtn && rightBtn) {
          leftBtn.style.visibility = "visible";
          leftBtn.style.opacity = "1";
          rightBtn.style.visibility = "visible";
          rightBtn.style.opacity = "1";
        }
      };

      showAllBtn();
      if (scrollLeft >= maxScroll) hideRightBtn();
      if (scrollLeft === 0) hideLeftBtn();
    }
  }
  updateSliderWidth() {
    if (this.slidesWrapper && this.slides) {
      this.slidesWrapper.style.width = `${
        Number(this.slides[0].clientWidth) * this.slides.length
      }px`;
    }
  }

  sliderTransiton(direction: string) {
    if (this.slides && this.slider && this.slidesWrapper) {
      const slideWidth = Number(this.slides[0].clientWidth);
      const scrollLeft = Math.ceil(this.slider.scrollLeft);
      const sliderWidth = direction === "right" ? this.slider.clientWidth : 0;
      const maxScroll = this.slidesWrapper.clientWidth - sliderWidth;
      let scroll: number;
      const division =
        Math.round(((scrollLeft + sliderWidth) / slideWidth) * 10) / 10;
      const remainde = division - Math.floor(division);

      if (direction === "right") {
        const integer = Math.ceil(division);
        scroll =
          remainde <= 0.5 && remainde > 0
            ? integer * slideWidth
            : (integer + 1) * slideWidth;
      } else {
        const integer = Math.floor(division);
        scroll =
          remainde <= 0.5 ? (integer - 1) * slideWidth : integer * slideWidth;
        if (integer <= 0) {
          scroll = 0;
        }
      }
      scroll = Math.abs(scroll - sliderWidth);
      if (maxScroll - scroll < slideWidth) {
        scroll = maxScroll;
      }
      this.slider.scrollLeft = scroll;
    }
  }
}
