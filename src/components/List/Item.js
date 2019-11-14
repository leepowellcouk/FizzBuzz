import React from 'react';
import { node } from 'prop-types';

const Item = ({ children, ...props }) => <li {...props} className="list__item">{children}</li>;

Item.displayName = 'List.Item';

Item.defaultProps = {
  children: undefined,
};

Item.propTypes = {
  children: node,
};

export default Item;
