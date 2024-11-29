import React from 'react';
import PropTypes from 'prop-types';
import Book from './book.tsx';

import './book-list.less';

function BookList (props: any) {
  if (!Array.isArray(props.novelList) || props.novelList.length === 0) {
    return (
      <div className="book-list">没有找到对应的小说，请换个关键词试试</div>
    );
  }
  return (
    <div className="book-list">
      {props.novelList.map((item: any, index: any) => <Book key={index} novel={item} onClick={props.onClickNovel}/>)}
    </div>
  );
}

BookList.propTypes = {
  novelList: PropTypes.array.isRequired,
  onClickNovel: PropTypes.func.isRequired
};

export default BookList;
