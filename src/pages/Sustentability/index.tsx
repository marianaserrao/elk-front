import React from "react";
import SuggestionCard from "../Sugestions/components/SuggestionCard";
import {
  CardMain,
  CardImageContainer,
  CardInfoContainer,
  Container,
} from "../Sugestions/PeriodChange/styles";

const Sustentability: React.FC = () => {
  return (
    <Container>
      <SuggestionCard
        title={`Hot recommendation just for you!!`}
        chart={""}
        fullSize={true}
      >
        <CardMain>
          <CardImageContainer
            showImage={true}
            style={{
              backgroundImage: `url(https://media.adeo.com/marketplace/LMPT/84130456/2856091.png?width=650&height=650&format=jpg&quality=80&fit=bounds)`,
            }}
          />
          <CardInfoContainer>
            <p>
              Want to save even more? Come with us!
              <br />
              <br />
              We realize that most of your consumption is in the daytime, so how
              about getting your own solar panel?! you can save up to{" "}
              <b>20 euros per month,</b>with your current consumption profile.
            </p>
          </CardInfoContainer>
        </CardMain>
      </SuggestionCard>
      <SuggestionCard
        title={`Washing Machine - VS1013`}
        chart={""}
        fullSize={true}
      >
        <CardMain>
          <CardImageContainer
            showImage={true}
            style={{
              backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb2C2rCb8_6HJeyCz4gJVWvAuwHr27NqJjAAGNsX0Zp8ZaKW5pPoxooh9hmqz9IaUt0g)`,
            }}
          />
          <CardInfoContainer>
            <p>
              Your machine emitted 1.8 kg of carbon dioxide this week! <br />
              <br /> From 10 hours of washing machine use,{" "}
              <b>2 hours came from sustainable sources,</b> while the rest
              equals <b>1.8 kg of CO2.</b>
            </p>
          </CardInfoContainer>
        </CardMain>
      </SuggestionCard>

      <SuggestionCard
        title={`Category - Refrigerators`}
        chart={""}
        fullSize={true}
      >
        <CardMain>
          <CardImageContainer
            showImage={true}
            style={{
              backgroundImage: `url(https://cookeletroraro.vteximg.com.br/arquivos/ids/173041-1000-1000/geladeira-samsung.jpg)`,
            }}
          />
          <CardInfoContainer>
            <p>
              Congratulations 🎉🎉🎉 Bigger savings in your pocket!
              <br />
              <br /> Your refrigerators have spent <b>30 euros less</b> than
              last week!
            </p>
          </CardInfoContainer>
        </CardMain>
      </SuggestionCard>

      <SuggestionCard
        title={`Air conditioning - ITS1102`}
        chart={""}
        fullSize={true}
      >
        <CardMain>
          <CardImageContainer
            showImage={true}
            style={{
              backgroundImage: `url(https://m.media-amazon.com/images/I/51EGvigZDtL._AC_SL1000_.jpg)`,
            }}
          />
          <CardInfoContainer>
            <p>
              In 2 hours, your air conditioner used 3 kWh!
              <br />
              <br />
              <b> Only 20 minutes came from sustainable sources,</b> the other
              100 minutes are associated with a 1.2 kg CO2 emission with your
              with your current fare plan.
            </p>
          </CardInfoContainer>
        </CardMain>
      </SuggestionCard>
    </Container>
  );
};

export default Sustentability;
