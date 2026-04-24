import { Container } from "@mui/material";
import type { TGroup } from "../../../types/types";
import { BarChart, LineChart } from "@mui/x-charts";
import { useState } from "react";
import { SettingChart } from "./SettingChart";

interface Props {
  data: TGroup[]
}

export const GroupChart = ({ data }: Props) => {
  const [series, setSeries] = useState({
    'Максимальная высота': true,
    'Средняя высота': false,
    'Минимальная высота': false,
  });

  const [isBar, setIsBar] = useState(false);

  const activeCount = Object.values(series).filter(Boolean).length;

  const seriesY = Object.entries(series)
    .filter(item => item[1] == true)
    .map(item => ({
      "dataKey": item[0], 
      "label": item[0], 
      barLabel: activeCount > 1 ? null : ("value" as const) 
  }));

  const chartSetting = {
    yAxis: [{ label: 'Высота (м)' }],
    height: 400,
  };
    
  return (
    <Container maxWidth="lg">
      { isBar ? (
        <BarChart 
          dataset={ data }
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]} 
          series={ seriesY }
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      ) : (
        <LineChart
          dataset={ data }
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={ seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      )}
      <SettingChart series={series} setSeries={setSeries} isBar={isBar} setIsBar={setIsBar} />
    </Container>
  );
}