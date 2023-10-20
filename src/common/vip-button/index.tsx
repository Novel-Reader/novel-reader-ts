import React from "react";
import { StarIcon } from "../icons.tsx";
import VipDialog from "../vip-dialog/index.tsx";
import "./index.css";

export default function VipButton () {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <div className="vip-button" onClick={() => setOpen(!isOpen)}>
        <StarIcon />
        <span className="vip-button-text">Upgrade now</span>
      </div>
      {isOpen &&
        <VipDialog toggleUpgrade={() => setOpen(!isOpen)} />
      }
    </>
  );
}
