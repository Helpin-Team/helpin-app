import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container, Input } from './styles';

export default function Select({
  items,
  style,
}) {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Container style={style}>
      <Input
        selectedValue={selectedItem}
        onValueChange={itemValue => setSelectedItem(itemValue)}
      >
        {
        items.map(item => (
          <Input.Item
            key={item}
            label={item}
            value={item}
          />
        ))
      }
      </Input>
    </Container>
  );
}

Select.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
