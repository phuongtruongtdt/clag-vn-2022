import React from 'react';
import FeatureItem from '../FeatureItem';
import { StyledArrow, StyledContainer } from './style';

const Feature = () => {
  return (
    <StyledContainer style={{ marginTop: '5rem' }}>
      <FeatureItem
        icon='card.png'
        title='Transfer Money'
        content='Sending money around the world is easy. Find out how you can make transfers from Georgia to your loved ones online'
      />
      <StyledArrow
        className='fa fa-chevron-right'
        aria-hidden='true'
      ></StyledArrow>
      <FeatureItem
        icon='shield.png'
        title='Safe Transfer'
        content='Sending money around the world is easy. Find out how you can make transfers from Georgia to your loved ones online'
      />
      <StyledArrow
        className='fa fa-chevron-right'
        aria-hidden='true'
      ></StyledArrow>
      <FeatureItem
        icon='social.png'
        title='Real Friendship'
        content='Sending money around the world is easy. Find out how you can make transfers from Georgia to your loved ones online'
      />
    </StyledContainer>
  );
};
export default Feature;
