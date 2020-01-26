import React, { useState } from 'react';
import styled from 'styled-components';

import FlexColumn from '../Layout/FlexColumn';
import FlexRow from '../Layout/FlexRow';

import * as achievementIcons from '../../images/post/achievement_icons';
import { ACHIEVEMENTS } from './constants';

const Icon = styled.img`
  height: 35px;
  border: ${({ selected }) => selected && '3px solid red'};
  border-radius: 50%;
  box-sizing: border-box;
`;

const Title = styled.div`
  height: 30px;
  margin: auto;
`;

const Description = styled.div`
  height: 100px;
  margin: 20px;
`;

export default () => {
  const [selectedIcon, setSelectedIcon] = useState();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <FlexColumn>
      <Title>{title}</Title>
      <FlexRow justifyContent="space-between">
        {ACHIEVEMENTS.map(talent => {
          return (
            <Icon
              key={achievementIcons[talent.icon]}
              src={achievementIcons[talent.icon]}
              selected={selectedIcon === talent.icon}
              onClick={() => {
                setTitle(talent.title);
                setDescription(talent.description);
                setSelectedIcon(talent.icon);
              }}
            ></Icon>
          );
        })}
      </FlexRow>
      <Description>{description}</Description>
    </FlexColumn>
  );
};
