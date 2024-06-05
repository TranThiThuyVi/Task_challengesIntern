import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const TodoFilters = ({ setFilter }) => {
  const [value, setValue] = React.useState('All');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setFilter(newValue);
  };

  return (
    <Box display="flex" justifyContent="center" mt={2} mb={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        sx={{ borderBottom: '1px solid #ddd', width: '380px'}}
      >
        <Tab value="All" label="All" />
        <Tab value="Active" label="Active" />
        <Tab value="Completed" label="Completed" />
      </Tabs>
    </Box>
  );
};

export default TodoFilters;
