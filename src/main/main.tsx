import React, { Component } from "react";
import PropTypes from "prop-types";
import LongPage from "./long-page.tsx";
import FoldedIcon from "./folded-icon.tsx";
import { PAGES, PARAGRAPHS } from "../utils/constants.ts";

import "./main.css";

const LONG_PAGE = "long_page";

export default class Main extends Component {

  static propTypes = {
    currentPageIndex: PropTypes.number.isRequired,
    toggleRightPanel: PropTypes.func.isRequired,
    isShowRightPanel: PropTypes.bool.isRequired,
    currentFile: PropTypes.object,
    style: PropTypes.object
  };

  constructor (props: any) {
    super(props);
    this.state = {
      mode: LONG_PAGE
    };
  }

  render () {
    const { mode } = this.state;
    const { currentFile, style, currentPageIndex } = this.props;
    if (!currentFile) {
      return (

        <div id="main" className="main error center">
          当前没有文本，请上传并选择文本
        </div>
      );
    }

    let context = "";
    if (currentFile.type === PAGES || currentFile.type === PARAGRAPHS) {
      context = currentFile.context[currentPageIndex];
    } else {
      context = currentFile.context;
    }

    return (
      <div id="main" className="main">
        {mode === LONG_PAGE &&
          <LongPage
            context={context}
            style={style}
            isShowRightPanel={this.state.isShowRightPanel}
          />
        }
        <FoldedIcon toggleRightPanel={this.props.toggleRightPanel} isShowRightPanel={this.props.isShowRightPanel} />
      </div>
    );
  }
}
