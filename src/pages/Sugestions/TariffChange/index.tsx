import React, { useState } from "react";
import { useTheme } from "styled-components";
import Select from "../../../components/Select";

import { tariffChangeData } from "./service";

import { CardListContainer, SelectContainer } from "./styles";
import SuggestionCard from "../components/SuggestionCard";
import { ChartEntry, LegendItem } from "../../../components/Charts/interfaces";
import ChartHeader from "../components/ChartHeader";
import LineChart from "../../../components/Charts/LineChart";
import { getLabelsAndLegend } from "../../../components/Charts/utils";

const PeriodChange: React.FC = () => {
  const [rankingPriority, setRankingPriority] = useState("");
  const options = ["Sustainable", "Economic", "Similar to my profile"];

  const Chart: React.FC<{ chartData: ChartEntry[]; xAxis: string }> = ({
    chartData,
    xAxis,
  }) => {
    return (
      <>
        <ChartHeader
          title="Monthly"
          legend={getLabelsAndLegend(chartData, xAxis)[1] as LegendItem[]}
        />
        <LineChart data={chartData} xAxis={xAxis} yUnit={`\u20AC`} />
      </>
    );
  };

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
        {tariffChangeData.map(({ chartData, savings, suggestion }, index) => (
          <SuggestionCard
            title={suggestion.name}
            link={{
              href: suggestion.url,
              text: "View Recommendations",
            }}
            iconUrl={suggestion.logo}
            chart={<Chart chartData={chartData} xAxis="date" />}
          >
            <span>
              Save up to <b>{`${savings}\u20AC monthly`}</b> by changing your
              tariff!
            </span>
            <span>
              <b>{suggestion.description}</b>
            </span>
          </SuggestionCard>
        ))}
      </CardListContainer>
    </div>
  );
};

export default PeriodChange;
