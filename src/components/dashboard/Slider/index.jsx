import React, { useEffect, useState } from "react";
import styles from './slider.module.scss';




const Slider = ({ labels, slidesContent }) => {
    const [sliderPos, setSliderPos] = useState(0);
    const [sliderWidth, setSliderWidth] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        const currentTab = document.querySelector(`.tab-${activeTab}`);
        if (currentTab) {
            const tabPos = currentTab.offsetLeft;
            const width = currentTab.clientWidth;
            setSliderWidth(width);
            setSliderPos(tabPos);
        }
    }, [activeTab]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className={styles["project-tab"]}>
            <div className={styles["project-tab__inner"]}>
                <span
                    className={styles["project-tab__slider-span"]}
                    style={{
                        width: `${sliderWidth}px`,
                        transform: `translateX(${sliderPos}px)`,
                    }}
                ></span>
                <div className={styles["inner-right"]}>
                    {labels?.map((tab, index) => (
                        <div
                            key={index}
                            className={`${styles["project-tab__tabs"]} ${activeTab === index ? styles.active : ""
                                } tab-${index}`}
                            onClick={() => handleTabClick(index)}
                        >
                            <p className={styles.titles}>{tab}</p>
                        </div>
                    ))}
                </div>
            </div>
            {slidesContent && slidesContent[activeTab]}
        </div>
    );
};

export default Slider;