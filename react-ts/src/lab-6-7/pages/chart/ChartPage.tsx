import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import type { TGroup, TSelect } from "../../types/types";
import { useState } from "react";
import { GroupGrid } from "./components/GroupGrid";
import { countries, types, years } from "../../mock/groupdata";
import { GroupChart } from "./components/GroupChart";

export const ChartPage = () => {
  const [group, setGroup] = useState<TSelect>("Страна");
  const [groupData, setGroupData] = useState<TGroup[]>(countries);

  const handleChange = (event: SelectChangeEvent) => {
    const newGroup = event.target.value as TSelect;
    setGroup(newGroup);

    if (newGroup === "Страна") setGroupData(countries);
    if (newGroup === "Тип") setGroupData(types);
    if (newGroup === "Год") setGroupData(years);
  }

  return (
    <>
      <Box sx={{ width:"200px", m:"20px auto" }}>
        <FormControl fullWidth>
          <InputLabel> Группировать по </InputLabel>
          <Select
            id="select-group"
            value={group}
            label="Группировать по"
            onChange={handleChange}
          >
            <MenuItem value="Страна"> Стране </MenuItem>
            <MenuItem value="Год"> Году </MenuItem>
            <MenuItem value="Тип"> Типу </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData}/>
      <GroupGrid data={groupData} />
    </>
  );
}