import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Button } from "reactstrap";
import VipButton from "../../common/vip-button/index.tsx";
import setting from "../../setting.json";
import toaster from '../../common/toast/index.ts';
import BookList from './book-list.tsx';
import SearchFromServer from './search-from-server.tsx';

class LoadFromServer extends Component {
  isOnline: any;
  constructor (props: any) {
    super(props);
    this.isOnline = setting.mode === 'online';
    this.state = {
      isLoading: true,
      novelList: [],
      isSearch: false
    };
  }

  componentDidMount () {
    if (this.isOnline) {
      this.loadNovelsFromServer();
    }
  }

  loadNovelsFromServer = () => {
    window.app.api.getNovelList().then((res: any) => {
      this.setState({
        isLoading: false,
        novelList: res.data
      });
    }).catch((err: any) => {
      toaster.danger(err);
      this.setState({
        isLoading: false
      });
    });
  };

  onClickNovel = (id: any) => {
    window.app.api.getNovelDetail(id).then((res: any) => {
      const file = res.data[0];
      const { author, brief, cover_photo, detail, name, price } = file;
      const fileObj = {
        name,
        author,
        cover_photo,
        context: detail,
        abstract: brief,
        price
      };
      this.props.addFile(fileObj);
    }).catch((err: any) => {
      toaster.danger(err);
    });
  };

  changeSearch = () => {
    this.setState({ isSearch: true });
  };

  render () {
    if (!this.isOnline) {
      return (
        <div>
          这是联网专属功能
          <VipButton />
        </div>
      );
    }
    if (this.state.isSearch) {
      return (
        <SearchFromServer onClickNovel={this.onClickNovel} />
      );
    }
    return (
      <div className="novel-list">
        <div>
          <h3>热点小说</h3>
          <Button onClick={this.changeSearch}>在线搜索</Button>
        </div>
        <BookList novelList={this.state.novelList} onClickNovel={this.onClickNovel} />
      </div>
    );
  }
}

LoadFromServer.propTypes = {
  addFile: PropTypes.func.isRequired
};

export default LoadFromServer;
