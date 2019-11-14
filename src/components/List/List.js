import React from 'react';
import { node } from 'prop-types';
import Item from './Item';

const List = ({ children, ...props }) => {
  return (
    <ol {...props} className="list">
      {children}
    </ol>
  );
};

List.displayName = 'List';

List.defaultProps = {
  children: undefined,
};

List.propTypes = {
  children: node,
};

List.Item = Item;

export default List;
