import React, { useEffect, useState } from "react";

import { BackButton } from "../components/back-button";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";

const BarStacked = dynamic(() => import("../components/BarStackedChart"), {
  ssr: false,
});

import { IActivity } from "../types/types";
import { query } from "thin-backend";

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

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  return (
    <Wrapper>
      <BackButton />
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <BarStacked data={activities} />
        </>
      )}
    </Wrapper>
  );
};

export default Dashboard;
