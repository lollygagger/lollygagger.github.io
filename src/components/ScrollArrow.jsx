import React from 'react';
import '../Styles/components//ScrollArrow.css';

const ScrollArrow = ({ isScrolled }) => {

    //dont render if the header is already smaller
    if(isScrolled){
        return null;
    }

    return (
        <div className="scroll-arrow">
            {/*<svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    width="60"*/}
            {/*    height="60"*/}
            {/*    viewBox="5 5 15 15"*/}
            {/*    fill="none"*/}
            {/*>*/}
            {/*    <path*/}
            {/*        d="M12 16L8 12H10V6H14V12H16L12 16Z"*/}
            {/*        fill="#FFFFEB"*/}
            {/*    />*/}
            {/*</svg>*/}
            ^
        </div>
    );
};

export default ScrollArrow;
