import React from 'react';

// STYLES
import { Card, Decoration } from './decoration-card.styles';

const DecorationCard = ({ children }) => {
  return (
    <Card>
      {children} <Decoration />
    </Card>
  );
};

export default DecorationCard;
