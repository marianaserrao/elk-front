import React, { useState } from "react";
import Select from "../../../components/Select";

import { equipamentChangeData } from "./service";

import { CardListContainer, SelectContainer } from "./styles";
import { ChartEntry, LegendItem } from "../../../components/Charts/interfaces";
import LineChart from "../../../components/Charts/LineChart";
import ChartHeader from "../components/ChartHeader";
import { getLabelsAndLegend } from "../../../components/Charts/utils";
import SuggestionCard from "../components/SuggestionCard";

const Chart: React.FC<{ chartData: ChartEntry[]; xAxis: string }> = ({
  chartData,
  xAxis,
}) => {
  return (
    <>
      <ChartHeader
        title="Consumption"
        legend={getLabelsAndLegend(chartData, xAxis)[1] as LegendItem[]}
      />
      <LineChart data={chartData} xAxis={xAxis} />
    </>
  );
};

const EquipamentChange: React.FC = () => {
  const [rankingPriority, setRankingPriority] = useState("");
  const options = ["Sustainable", "Economic", "Similar to my profile"];
  return (
    <div>
      <SelectContainer>
        <Select
          style={{
            width: "fit-content",
            margin: 0,
          }}
          labelText="Highest priority:"
          setFunction={setRankingPriority}
        >
          {options.map((opt) => (
            <option value={opt}>{opt}</option>
          ))}
        </Select>
      </SelectContainer>
      <CardListContainer>
        {equipamentChangeData.map(
          ({ chartData, equipament, payback, savings, url }) => (
            <SuggestionCard
              key={equipament.id}
              title={`${equipament.name} - ${equipament.id}`}
              link={{
                href: url,
                text: "View Recommendations",
              }}
              chart={<Chart chartData={chartData} xAxis="date" />}
            >
              <span>
                Save up to <b>{`${savings}\u20AC annually `}</b> with equipment
                replacement!
              </span>
              <span>
                Payback starting at <b>{payback}</b>!
              </span>
            </SuggestionCard>
          )
        )}
      </CardListContainer>
    </div>
  );
};

export default EquipamentChange;
