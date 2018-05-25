import React from 'react';
import {Button} from '@material-ui/core';
import { Store } from '../app/store'

const MaterialButton = () => (
  <Store.Consumer>
    {({doTheMath})=>(
  <Button onClick={doTheMath} variant="raised" color="primary">
    Submit
  </Button>
    )}
  </Store.Consumer>
);

export default MaterialButton;