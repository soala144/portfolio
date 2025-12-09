"use client";

import React from "react";
import Snowfall from "react-snowfall";

export default function SnowfallClient() {
  return (
    <Snowfall // Changes the snowflake color
      color="#dee4fd"
      
      style={{ background: "#fff" }}
      
      snowflakeCount={400}
      
    />
  );
}
