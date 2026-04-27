import { Checkbox, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from "@mui/material"
import type { TSeries } from "../../../types/types"

interface Props {
  series: TSeries
  setSeries: (value: TSeries) => void
  isBar: boolean
  setIsBar: (value: boolean) => void
}

export const SettingChart = ({ series, setSeries, isBar, setIsBar }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Stack
      component={"div"}
      direction={"row"}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ m: "20px 0", justifyContent: "center" }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">
          Тип диаграммы:
        </FormLabel>
        <RadioGroup
          name="group-radio"
          value={(isBar) ? "bar": "dot"}
          onChange={(e) => setIsBar(e.target.value === "bar")}
        >
          <FormControlLabel value="bar"
            control={
              <Radio checked={isBar} />
            }
            label="Гистограмма"
          />
          <FormControlLabel value="dot"
            control={
              <Radio checked={!isBar} />
            }
            label="Линейная" 
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-checkbox-group">
          На диаграмме показать:
        </FormLabel>
        <FormControlLabel
          control={
            <Checkbox 
              checked={series.maxKcal} 
              name="maxKcal"
              onChange={handleChange}
            />
          }
          label="Максимальные кКал" />
        <FormControlLabel
          control={
            <Checkbox 
              checked={series.avgKcal} 
              name="avgKcal" 
              onChange={handleChange}
            />
          }
        label="Среднии кКал" />
        <FormControlLabel 
          control={
            <Checkbox 
              checked={series.minKcal} 
              name="minKcal"
              onChange={handleChange} 
            />
          }
          label="Минимальные кКал" />
      </FormControl>
    </Stack>
  );
}