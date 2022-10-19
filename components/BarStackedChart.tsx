import React from "react";
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background: white;
  box-shadow: 0px 5px 15px 12px rgba(66, 68, 90, 1);
`;

export default function BarStackedChart({ data }: any) {
  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <Tooltip />
          <XAxis dataKey="name" />
          <Bar dataKey="amountOfResults" fill="rgb(101, 48, 4)" />
        </BarChart>
      </ResponsiveContainer>
    </Wrapper>
  );
}
