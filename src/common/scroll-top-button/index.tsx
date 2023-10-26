import React from "react";
import { UncontrolledTooltip } from "reactstrap";

import "./index.css";
function ScrollTopIcon({ onClick, style }: { onClick: Function, style: Object }) {
  const id = "novel-scroll-top-icon";
  return (
    <>
      <div className="scroll-top-icon" onClick={() => onClick()} style={style} id={id}></div>
      <UncontrolledTooltip
        placement='right'
        target={id}
        fade={false}
        delay={{ show: 0, hide: 0 }}
      >
        {"回到顶部"}
      </UncontrolledTooltip>
    </>
  );
}

export default ScrollTopIcon;
