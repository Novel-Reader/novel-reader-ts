import React, { Component } from "react";
import PropTypes from "prop-types";
import NavFooter from "./nav-footer.tsx";
// import NavHeader from "./nav-header";
// import FileTree from "./file-tree";
// import Outline from "./outline";

import "./index.css";

export default class Navs extends Component {

  static propTypes = {
    files: PropTypes.array.isRequired,
    addFile: PropTypes.func.isRequired,
    deleteFile: PropTypes.func.isRequired,
    changeFileIndex: PropTypes.func.isRequired,
    isShowLeftPanel: PropTypes.bool.isRequired,
    currentPageIndex: PropTypes.number.isRequired,
    changePageIndex: PropTypes.func.isRequired,
    currentFileIndex: PropTypes.number.isRequired
  };

  constructor (props: any) {
    super(props);
    this.state = {
      isSearch: false,
      searchValue: "",
      currentNav: "filetree" // filetree or outline 文件树或者大纲
    };
  }

  changeCurrentNav = (currentNav: any) => {
    this.setState({ currentNav });
  };

  openSearch = () => {
    this.setState({ isSearch: true });
  };

  closeSearch = () => {
    this.setState({ isSearch: false, searchValue: "" });
  };

  onSearchChange = (e: any) => {
    this.setState({ searchValue: e.target.value });
  };

  render () {
    const { isShowLeftPanel } = this.props;
    // const { currentFileIndex, isShowLeftPanel } = this.props;
    // const { isSearch, currentNav, searchValue } = this.state;
    return (
      <div id="navs" className="navs" style={{ width: isShowLeftPanel ? 200 : 0, display: isShowLeftPanel ? 'block' : 'none' }}>
        {/* <NavHeader
          isSearch={isSearch}
          currentNav={currentNav}
          changeCurrentNav={this.changeCurrentNav}
          // search
          openSearch={this.openSearch}
          searchValue={searchValue}
          onSearchChange={this.onSearchChange}
          closeSearch={this.closeSearch}
        /> */}
        {/* <div className="navs-body">
          {currentNav === "filetree" &&
            <FileTree
              files={this.props.files}
              changeFileIndex={this.props.changeFileIndex}
              deleteFile={this.props.deleteFile}
              currentFileIndex={currentFileIndex}
              searchValue={searchValue}
            />
          }
          {currentNav === "outline" &&
            <Outline
              files={this.props.files}
              currentFileIndex={currentFileIndex}
              currentPageIndex={this.props.currentPageIndex}
              changePageIndex={this.props.changePageIndex}
            />
          }
        </div> */}
        <NavFooter addFile={this.props.addFile} />
      </div>
    );
  }
}
