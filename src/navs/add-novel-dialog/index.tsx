import React, { useState } from "react";
import { Nav, NavItem, NavLink, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoadFromLocal from "./load-from-local.tsx";
import LoadFromServer from "./load-from-server.tsx";

import "./index.css";

function AddNovelDialog({closeDialog, addFile}: any) {
  const [ activeTab, setActiveTab ] = useState<string>('local');
  return (
    <Modal isOpen={true} toggle={closeDialog} className="add-novel-dialog" size="lg">
      <ModalHeader toggle={closeDialog}>导入</ModalHeader>        
      <ModalBody>
        <div className='add-novel-dialog-side'>
          <Nav pills vertical>
            <NavItem>
              <NavLink className={activeTab === "local" ? "active" : ""} onClick={() => setActiveTab("local")}>
                本地导入
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={activeTab === "network" ? "active" : ""} onClick={() => setActiveTab("network")}>
                在线导入
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className='add-novel-dialog-main'>
          {activeTab === "local" &&
            <LoadFromLocal addFile={addFile} closeDialog={closeDialog} />
          }
          {activeTab === "network" &&
            <LoadFromServer addFile={addFile} closeDialog={closeDialog} />
          }
        </div>
      </ModalBody>
    </Modal>
  );
}

export default AddNovelDialog;
