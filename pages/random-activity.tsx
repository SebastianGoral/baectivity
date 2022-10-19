import React, { useEffect, useState } from "react";
import { BackButton } from "../components/back-button";
import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { query } from "thin-backend";
import { ActivityCard, IconSet } from "../components/ActivityCard";

const Wrapper = styled.div`
  display: flex;
  margin: 100px auto;
  width: 80%;
  height: 100%;
  align-content: center;
  justify-content: space-between;
  flex-direction: column;

  span {
    text-align: center;
  }
`;

enum Category {
  SPORT = "Sport",
  CHILL = "Chill",
  ALL = "All",
}
interface IActivity {
  name: string;
  icon: string;
  category: string;
}

const RandomActivity = () => {
  const [category, setCategory] = useState<Category>(Category.ALL);
  const [activity, setActivity] = useState<IActivity | null>(null);

  const [activities, setActivities] = useState<IActivity[]>([]);
  //const activities = useQuery(query("activity"));

  useEffect(() => {
    query("activities")
      .fetch()
      .then((data) => {
        setActivities(data as any[]);
      });
  }, []);
  const handleChange = (event: SelectChangeEvent<Category>) => {
    setCategory(event.target.value as Category);
  };

  const handleClick = () => {
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
      setActivity(filteredActivities[randomIndex - 1]);
    }
  };

  return (
    <Wrapper>
      <BackButton />
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
      {activity && (
        <ActivityCard
          name={activity?.name}
          iconName={activity?.icon as IconSet}
        />
      )}
      <Button variant="contained" onClick={handleClick}>
        Shuffle
      </Button>
    </Wrapper>
  );
};

export default RandomActivity;
