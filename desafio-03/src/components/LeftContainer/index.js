import React from 'react';
import Card from './styles';

const LeftContainer = ({ ...rest }) => <Card>{rest.children}</Card>;

export default LeftContainer;
