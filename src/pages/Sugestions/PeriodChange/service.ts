import theme from "../../../styles/theme";
const { colors } = theme;

export const tariffs = {
  normal: {
    value: "Custo normal",
    color: colors.primary,
  },
  high: {
    value: "Custo alto",
    color: colors.error,
  },
  low: {
    value: "Custo baixo",
    color: colors.success,
  },
};

export const periodChangeSuggestions = [
  {
    currentInterval: ["12 pm", "4 pm"],
    suggestedInterval: ["10 am", "2 pm"],
    savings: 300 / 26,
    equipament: {
      name: "Washing Machine",
      id: "HR-0231",
      image:
        "https://www.prinfor.pt/586149-large_default/maquina-de-lavar-roupa-indesit-bwe-91285x-ws-spt-n-60-cm.jpg",
    },
    chartData: [
      {
        hour: "1h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "2h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "3h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "4h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "5h",
        amt: 0,
        tariff: "low",
      },
      {
        hour: "6h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "7h",
        amt: 0,
        tariff: "high",
      },

      {
        hour: "8h",
        amt: 10,
        tariff: "high",
      },
      {
        hour: "9h",
        amt: 25,
        tariff: "high",
      },
      {
        hour: "10h",
        amt: 90,
        tariff: "normal",
      },
      {
        hour: "11h",
        amt: 70,
        tariff: "normal",
      },
      {
        hour: "12h",
        amt: 220,
        tariff: "normal",
      },
      {
        hour: "13h",
        amt: 250,
        tariff: "normal",
      },
      {
        hour: "14h",
        amt: 210,
        tariff: "high",
      },

      {
        hour: "15h",
        amt: 240,
        tariff: "high",
      },
      {
        hour: "16h",
        amt: 70,
        tariff: "high",
      },
      {
        hour: "17h",
        amt: 90,
        tariff: "normal",
      },
      {
        hour: "18h",
        amt: 50,
        tariff: "normal",
      },
      {
        hour: "19h",
        amt: 27,
        tariff: "low",
      },
      {
        hour: "20h",
        amt: 15,
        tariff: "normal",
      },
      {
        hour: "21h",
        amt: 5,
        tariff: "high",
      },

      {
        hour: "22h",
        amt: 1,
        tariff: "low",
      },
      {
        hour: "23h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "24h",
        amt: 0,
        tariff: "high",
      },
    ],
  },
  {
    currentInterval: ["2 pm", "4 pm"],
    suggestedInterval: ["4pm ", "6 pm"],
    savings: 200 / 27,
    equipament: {
      name: "Heater",
      id: "HR-0288",
      image:
        "https://www.electrofun.pt/26840-large_default/aquecedor-eletrico-mi-smart-space-heater-s-xiaomi.jpg",
    },
    chartData: [
      {
        hour: "1h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "2h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "3h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "4h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "5h",
        amt: 0,
        tariff: "low",
      },
      {
        hour: "6h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "7h",
        amt: 0,
        tariff: "high",
      },

      {
        hour: "8h",
        amt: 10,
        tariff: "high",
      },
      {
        hour: "9h",
        amt: 25,
        tariff: "high",
      },
      {
        hour: "10h",
        amt: 90,
        tariff: "normal",
      },
      {
        hour: "11h",
        amt: 70,
        tariff: "normal",
      },
      {
        hour: "12h",
        amt: 50,
        tariff: "normal",
      },
      {
        hour: "13h",
        amt: 80,
        tariff: "normal",
      },
      {
        hour: "14h",
        amt: 310,
        tariff: "high",
      },

      {
        hour: "15h",
        amt: 280,
        tariff: "high",
      },
      {
        hour: "16h",
        amt: 195,
        tariff: "high",
      },
      {
        hour: "17h",
        amt: 80,
        tariff: "normal",
      },
      {
        hour: "18h",
        amt: 50,
        tariff: "normal",
      },
      {
        hour: "19h",
        amt: 27,
        tariff: "low",
      },
      {
        hour: "20h",
        amt: 15,
        tariff: "normal",
      },
      {
        hour: "21h",
        amt: 5,
        tariff: "high",
      },

      {
        hour: "22h",
        amt: 1,
        tariff: "low",
      },
      {
        hour: "23h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "24h",
        amt: 0,
        tariff: "high",
      },
    ],
  },
  {
    currentInterval: ["4 pm", "6 pm"],
    suggestedInterval: ["6 pm", "8 pm"],
    savings: 80 / 27,
    equipament: {
      name: "Washing Machine",
      id: "FR-1397",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJb2C2rCb8_6HJeyCz4gJVWvAuwHr27NqJjAAGNsX0Zp8ZaKW5pPoxooh9hmqz9IaUt0g&usqp=CAU",
    },
    chartData: [
      {
        hour: "1h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "2h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "3h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "4h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "5h",
        amt: 0,
        tariff: "low",
      },
      {
        hour: "6h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "7h",
        amt: 0,
        tariff: "high",
      },

      {
        hour: "8h",
        amt: 10,
        tariff: "high",
      },
      {
        hour: "9h",
        amt: 25,
        tariff: "high",
      },
      {
        hour: "10h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "11h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "12h",
        amt: 20,
        tariff: "normal",
      },
      {
        hour: "13h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "14h",
        amt: 10,
        tariff: "high",
      },

      {
        hour: "15h",
        amt: 30,
        tariff: "high",
      },
      {
        hour: "16h",
        amt: 130,
        tariff: "high",
      },
      {
        hour: "17h",
        amt: 200,
        tariff: "normal",
      },
      {
        hour: "18h",
        amt: 200,
        tariff: "normal",
      },
      {
        hour: "19h",
        amt: 50,
        tariff: "low",
      },
      {
        hour: "20h",
        amt: 15,
        tariff: "normal",
      },
      {
        hour: "21h",
        amt: 30,
        tariff: "high",
      },

      {
        hour: "22h",
        amt: 10,
        tariff: "low",
      },
      {
        hour: "23h",
        amt: 10,
        tariff: "normal",
      },
      {
        hour: "24h",
        amt: 0,
        tariff: "high",
      },
    ],
  },
  {
    currentInterval: ["12 pm", "3 pm"],
    suggestedInterval: ["10 am", "1 pm"],
    savings: 50 / 27,
    equipament: {
      name: "Electric Oven",
      id: "MS-1032",
      image:
        "https://casadosacessorios.pt/wp-content/uploads/2021/06/75890_1.png",
    },
    chartData: [
      {
        hour: "1h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "2h",
        amt: 0,
        tariff: "high",
      },
      {
        hour: "3h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "4h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "5h",
        amt: 0,
        tariff: "low",
      },
      {
        hour: "6h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "7h",
        amt: 0,
        tariff: "high",
      },

      {
        hour: "8h",
        amt: 10,
        tariff: "high",
      },
      {
        hour: "9h",
        amt: 15,
        tariff: "high",
      },
      {
        hour: "10h",
        amt: 10,
        tariff: "normal",
      },
      {
        hour: "11h",
        amt: 7,
        tariff: "normal",
      },
      {
        hour: "12h",
        amt: 50,
        tariff: "normal",
      },
      {
        hour: "13h",
        amt: 60,
        tariff: "normal",
      },
      {
        hour: "14h",
        amt: 57,
        tariff: "high",
      },

      {
        hour: "15h",
        amt: 80,
        tariff: "high",
      },
      {
        hour: "16h",
        amt: 12,
        tariff: "high",
      },
      {
        hour: "17h",
        amt: 13,
        tariff: "normal",
      },
      {
        hour: "18h",
        amt: 12,
        tariff: "normal",
      },
      {
        hour: "19h",
        amt: 7,
        tariff: "low",
      },
      {
        hour: "20h",
        amt: 5,
        tariff: "normal",
      },
      {
        hour: "21h",
        amt: 5,
        tariff: "high",
      },

      {
        hour: "22h",
        amt: 1,
        tariff: "low",
      },
      {
        hour: "23h",
        amt: 0,
        tariff: "normal",
      },
      {
        hour: "24h",
        amt: 0,
        tariff: "high",
      },
    ],
  },
];
