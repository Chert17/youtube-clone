import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map(({ name, icon }) => (
        <button
          key={name}
          onClick={() => setSelectedCategory(name)}
          className="category-btn"
          style={{
            backgroundColor: name === selectedCategory && "#fc1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: name === selectedCategory ? "white" : "red",
              marginRight: 15,
            }}
          >
            {icon}
          </span>
          <span style={{ opacity: name === selectedCategory ? 1 : "0.8" }}>
            {name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
