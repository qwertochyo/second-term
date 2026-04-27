import { useState } from "react";
import type { TGroup } from "../../../types/types";
import { BarChart, LineChart } from "@mui/x-charts";
import { Container } from "@mui/material";
import { SettingChart } from "./SettingChart";

interface Props {
  data: TGroup[]
}

const initialState = {
  maxKcal: true,
  avgKcal: false,
  minKcal: false
}

export const GroupChart = ({ data }: Props) => {
  const [series, setSeries] = useState(initialState);

  const [isBar, setIsBar] = useState(false);

  const activeCount = Object.values(series).filter(Boolean).length;

  const seriesY = Object.entries(series)
    .filter(item => item[1] == true)
    .map(item => ({
      dataKey: item[0], 
      label: item[0], 
      barLabel: activeCount > 1 ? null : ("value" as const) 
  }));

  const chartSetting = {
    yAxis: [{ label: 'кКал' }],
    height: 400,
  };

  return (
    <Container maxWidth="lg">
      { isBar ? (
        <BarChart 
          dataset={ data }
          xAxis={[{ scaleType: 'band', dataKey: 'group' }]} 
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
          xAxis={[{ scaleType: 'band', dataKey: 'group' }]}
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