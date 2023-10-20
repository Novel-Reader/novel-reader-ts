import React, { useState } from "react";
import { Button } from "reactstrap";
import AddNovelDialog from "./add-novel-dialog/index.tsx";

function NavFooter({ addFile }: { addFile: Function }) {
  const [ isShowAddDialog, setIsShowAddDialog ] = useState<boolean>(false);
  return (
    <>
      <div className="navs-footer">
        <Button onClick={() => setIsShowAddDialog(true)} color="primary">增加作品</Button>
      </div>
      {isShowAddDialog &&
        <AddNovelDialog closeDialog={() => setIsShowAddDialog(false)} addFile={addFile} />
      }
    </>
  );
}

export default NavFooter;
