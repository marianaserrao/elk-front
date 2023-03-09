import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 200px;
    height: 100px;

    background-color: ${({theme})=>theme.colors.cardBackground};
    box-shadow: ${({theme})=>theme.shadows.default};

    border-radius: ${({theme})=>theme.radius.default};
    padding: 15px;

    margin-right: 15px;
`;

export const CardMain = styled.div`
  display: flex;

  h3{
    font-size: 18px;
    font-weight: 600;

    /* margin:5px 0 ; */
  }
`;

export const CardInfo = styled.div`
  display: flex;
  div{
    display: flex;
    align-items:center ;
  }
  span{
    color:${({theme})=>theme.colors.grey};
    font-size: 11px;
  }
`;