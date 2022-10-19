import React from "react";
import styled from "@emotion/styled";
import {
  AssistWalker,
  FitnessCenter,
  Games,
  AutoStories,
  Casino,
  Pool,
} from "@mui/icons-material";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  box-shadow: 0px 5px 15px 12px rgba(66, 68, 90, 1);
  position: relative;
  background: white;
  justify-content: center;
  align-content: center;
  svg {
    margin: auto;
    font-size: 45px;
    color: rgb(101, 48, 4);
  }
`;

export const Label = styled.span`
  margin: 0 auto !important;
`;
interface IProps {
  name?: string;
  iconName?: IconSet;
}

export enum IconSet {
  AssistWalker = "AssistWalker",
  FitnessCenter = "FitnessCenter",
  Games = "Games",
  AutoStories = "AutoStories",
  Pool = "Pool",
  Casino = "Casino",
}

const IconStrategy = {
  AssistWalker: <AssistWalker fontSize="large" />,
  FitnessCenter: <FitnessCenter fontSize="large" />,
  Games: <Games fontSize="large" />,
  AutoStories: <AutoStories fontSize="large" />,
  Casino: <Casino fontSize="large" />,
  Pool: <Pool fontSize="large" />,
};
export const ActivityCard = ({ name, iconName }: IProps) => {
  const icon = IconStrategy[iconName as IconSet];
  return (
    <Wrapper>
      {icon}
      <Label>{name}</Label>
    </Wrapper>
  );
};
