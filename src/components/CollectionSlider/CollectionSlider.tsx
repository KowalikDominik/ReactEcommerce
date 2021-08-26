import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { ICollectionItem } from "../../interfaces";
import Slider from "../../utilities/slider";
import CollectionItem from "../CollectionItem/CollectionItem";
import { CollectionMap } from "../CollectionMap/CollectionMap";
import { CustomButton } from "../CustomButton/CustomButton";

import "./CollectionSlider.scss";

interface Props extends RouteComponentProps {
  title: string;
  items: ICollectionItem[];
}
const CollectionSlider: React.FC<Props> = ({ title, items, history }) => {
  const collectionSlider = new Slider();

  useEffect(() => {
    // individual slider selector if in one page is more than one slider
    const sliderSelector = document.querySelector(
      `.collection-slider[data-id=${title.replaceAll(" ", "")}]`
    );
    if (sliderSelector) {
      // wrapper everyting
      const sliderWrapper =
        sliderSelector.querySelector<HTMLElement>(".slider-wrapper");
      // slider he contain slidererapper and slides, have scrollbar
      const slider = sliderSelector.querySelector<HTMLElement>(".slider");
      // wrap slides
      const slidesWrapper =
        sliderSelector.querySelector<HTMLElement>(".slides-wrapper");
      // create new extra element to slides
      const newElem = document.createElement("div");
      newElem.className = "collection-item extra";
      // create component to showing button show more
      const Element: React.FC<any> = () => (
        <CustomButton
          inverted
          type="button"
          onClick={() => history.push(`/shop/${title.toLowerCase()}`)}
        >
          show more <span className="arrow">&#10095;</span>{" "}
        </CustomButton>
      );

      if (slidesWrapper) {
        // put extra element to slides
        slidesWrapper.querySelector(".slides")?.appendChild(newElem);
        // render new component in extra element
        ReactDOM.render(
          <Element />,
          slidesWrapper?.querySelector(".slides .collection-item.extra")
        );
      }
      // collection on slides
      const slides: NodeListOf<HTMLElement> =
        sliderSelector.querySelectorAll(".collection-item");

      // init Slider with selectors
      collectionSlider.init(sliderWrapper, slider, slidesWrapper, slides);
    }
  });

  const rightHandler = () => {
    collectionSlider.sliderTransiton("right");
  };
  const leftHandler = () => {
    collectionSlider.sliderTransiton("left");
  };

  return (
    <CollectionMap title={title} items={items}>
      <div className="collection-slider" data-id={title.replaceAll(" ", "")}>
        <div className="slider-wrapper">
          <div className="silder-btn">
            <div className="left noselect" onClick={leftHandler}>
              &#10094;
            </div>
            <div className="right noselect" onClick={rightHandler}>
              &#10095;
            </div>
          </div>
          <div className="slider">
            <div className="slides-wrapper">
              <div className="slides" id={title}>
                {items
                  ? items.map((item) => (
                      <CollectionItem key={item.id} {...item} />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollectionMap>
  );
};
export default withRouter(CollectionSlider);
