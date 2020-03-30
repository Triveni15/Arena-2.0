import React from 'react';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ContestDetails from './ContestDetails';

const CreateContest = () => (
  <div className="mw7 center pa2">
    <Headline4 className="purple mb1 mt3">Create Contest</Headline4>
    <Body2 className="mt0 mid-gray mb4">Create a Single Round Match or Long Queue Contest</Body2>
    <ContestDetails />
    <Button
      className="ma1 ml0 mt3"
      raised
    >
      Create Contest
    </Button>
  </div>
);

export default CreateContest;