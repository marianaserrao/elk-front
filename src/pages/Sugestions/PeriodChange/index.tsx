import React from "react";

import { periodChangeSuggestions, tariffs } from "./service";
import * as S from "./styles";
import SuggestionCard from "../components/SuggestionCard";
import HourlyUsageChart from "../../../components/Charts/HourlyUsageChart";

const PeriodChange: React.FC = () => {
  return (
    <S.Container>
      {periodChangeSuggestions.map(
        (
          {
            chartData,
            currentInterval,
            savings,
            suggestedInterval,
            equipment,
          },
          index
        ) => (
          <SuggestionCard
            key={index}
            title={`${equipment.name} - ${equipment.id}`}
            chart={
              <HourlyUsageChart
                data={chartData}
                xAxis="hour"
                colors={chartData.map(
                  (entry) => tariffs[entry.tariff as keyof typeof tariffs].color
                )}
              />
            }
          >
            <S.CardMain>
              <S.CardImageContainer
                style={{ backgroundImage: `url(${equipment.image})` }}
              />
              <S.CardInfoContainer>
                <p>
                  You are using the {equipment.name} at the highest cost time,
                  from
                  <b>
                    {" "}
                    {currentInterval[0]} to {currentInterval[1]}{" "}
                  </b>
                  . Try using it at the lowest cost time, from
                  <b>
                    {" "}
                    {suggestedInterval[0]} to {suggestedInterval[1]}{" "}
                  </b>
                  and save up to
                  <b> {savings.toFixed(2) + "\u20AC"} per month</b>.
                </p>
              </S.CardInfoContainer>
            </S.CardMain>
          </SuggestionCard>
        )
      )}
    </S.Container>
  );
};

export default PeriodChange;
