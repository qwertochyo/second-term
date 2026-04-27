import { useState } from "react";
import type { TGroup, TSelect } from "../../types/types";
import { cookingTimes, popularities, servingsGroups } from "../../mock/group";
import { Box, FormControl, InputLabel, MenuItem, Select, type SelectChangeEvent } from "@mui/material";
import { GroupChart } from "./components/GroupChart";
import { GroupGrid } from "./components/GroupGrid";

export const DiagramPage = () => {
  const [group, setGroup] = useState<TSelect>("Время готовки");
  const [groupData, setGroupData] = useState<TGroup[]>(cookingTimes);

  const handleChange = (e: SelectChangeEvent) => {
    const newGroup = e.target.value as TSelect;
    setGroup(newGroup);

    if (newGroup === "Время готовки") setGroupData(cookingTimes);
    if (newGroup === "Количество порций") setGroupData(servingsGroups);
    if (newGroup === "Популярность") setGroupData(popularities);
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
            <MenuItem value="Время готовки"> Времени готовки</MenuItem>
            <MenuItem value="Количество порций"> Количеству порций </MenuItem>
            <MenuItem value="Популярность"> Популярности </MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={groupData}/>
      <GroupGrid data={groupData} />
    </>
  );
}