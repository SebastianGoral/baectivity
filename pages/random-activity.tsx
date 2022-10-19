import React, { useEffect, useState } from "react";
import { BackButton } from "../components/back-button";
import styled from "@emotion/styled";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { query, updateRecord } from "thin-backend";
import { ActivityCard, IconSet } from "../components/ActivityCard";
import { Category, IActivity } from "../types/types";

const Spinner = styled(CircularProgress)`
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  margin: 100px auto;
  width: 80%;
  height: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  span {
    text-align: center;
  }
`;

const RandomActivity = () => {
  const [category, setCategory] = useState<Category>(Category.ALL);
  const [activity, setActivity] = useState<IActivity | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [activities, setActivities] = useState<IActivity[]>([]);

  useEffect(() => {
    setIsLoading(true);
    query("activities")
      .fetch()
      .then((data) => {
        setActivities(data as any[]);
        setIsLoading(false);
      });
  }, []);

  const handleChange = (event: SelectChangeEvent<Category>) => {
    setCategory(event.target.value as Category);
  };

  const handleClick = async () => {
    setIsShuffling(true);
    setTimeout(() => {
      setIsShuffling(false);
    }, 1000);
    const filteredActivities = activities.filter((item) => {
      if (category === Category.ALL) {
        return true;
      }
      return item.category === category;
    });

    const randomIndex =
      filteredActivities &&
      Math.ceil(Math.random() * filteredActivities?.length);
    if (randomIndex) {
      const newActivity = filteredActivities[randomIndex - 1];
      setActivity(filteredActivities[randomIndex - 1]);
      await updateRecord("activities", newActivity.id, {
        amountOfResults: newActivity.amountOfResults + 1,
      });
    }
  };

  return (
    <Wrapper>
      <BackButton />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={category}
              variant="filled"
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={Category.SPORT}>Sport</MenuItem>
              <MenuItem value={Category.CHILL}>Chill</MenuItem>
              <MenuItem value={Category.ALL}>All</MenuItem>
            </Select>
          </FormControl>
          {isShuffling ? (
            <CircularProgress />
          ) : (
            <>
              {activity && (
                <ActivityCard
                  name={activity?.name}
                  iconName={activity?.icon as IconSet}
                />
              )}
            </>
          )}
          <Button
            style={{ width: "100%" }}
            variant="contained"
            onClick={handleClick}
          >
            Shuffle
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default RandomActivity;
