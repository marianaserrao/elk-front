import React from "react";
import SuggestionCard from "../Sugestions/components/SuggestionCard";
import { CardMain, CardImageContainer, CardInfoContainer, Container } from "../Sugestions/PeriodChange/styles";


const Sustentability: React.FC = () => {
    return(
        <Container>
            <SuggestionCard
                title={`Recomendação quente apenas para você!`} chart={''}   fullSize={true}      >
                    <CardMain>
            <CardImageContainer style={{backgroundImage: `url(https://media.adeo.com/marketplace/LMPT/84130456/2856091.png?width=650&height=650&format=jpg&quality=80&fit=bounds)`}}/>
            <CardInfoContainer>
            <p>Quer economizar mais ainda? Vem com a gente!<br/> 
            <br/>Percebemos que a maior parte do seu consumo se encontra no período diurno, então que tal aderir a um painel solar próprio?!
            Com um painel solar, você pode economizar até <b>20 euros mensais, </b>com seu atual perfil de consumo.</p>

            </CardInfoContainer>
          </CardMain>
        </SuggestionCard>
        <SuggestionCard
                title={`Maquina de lavar - VS1013`} chart={''}   fullSize={true}      >
                    <CardMain>
            <CardImageContainer style={{backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb2C2rCb8_6HJeyCz4gJVWvAuwHr27NqJjAAGNsX0Zp8ZaKW5pPoxooh9hmqz9IaUt0g)`}}/>
            <CardInfoContainer>
            <p>Sua máquina emitiu 500 mg de gás carbônico essa semana! <br/> 
            <br/> Das 10 horas de uso da máquina de lavar, <b>2 horas vieram de fontes sustentáveis,</b> enquanto o restante equivalem a <b>500 mg de CO2.</b></p>

            </CardInfoContainer>
          </CardMain>
        </SuggestionCard>

        <SuggestionCard
                title={`Geladeira - 12P36`} chart={''}     fullSize={true}    >
                    <CardMain>
            <CardImageContainer style={{backgroundImage: `url(https://cookeletroraro.vteximg.com.br/arquivos/ids/173041-1000-1000/geladeira-samsung.jpg)`}}/>
            <CardInfoContainer>
              <p>Parabéns 🎉🎉🎉 Maior economia no seu bolso!<br /><br /> Sua geladeira gastou <b>30 euros menos</b> do que na semana passada!</p>
            </CardInfoContainer>
          </CardMain>
        </SuggestionCard>


        <SuggestionCard
                title={`Ar condicionado - ITS1102`} chart={''}       fullSize={true}  >
                    <CardMain>
            <CardImageContainer style={{backgroundImage: `url(https://m.media-amazon.com/images/I/51EGvigZDtL._AC_SL1000_.jpg)`}}/>
            <CardInfoContainer>
              <p>Em 2 horas, seu ar condicionado gastou 3 MWh.<b> Apenas 20 minutos veio de fontes sustentáveis</b>, o que equivale a 4 kg CO2 com o seu plano tarifário atual.
              </p>
            </CardInfoContainer>
          </CardMain>
        </SuggestionCard>
        </Container>
    );
}

export default Sustentability;