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
    padding: 20px;

    margin-right: 15px;
`;

export const CardMain = styled.div`
  display: flex;

  span{
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    width: 30px;
    border-radius: 50%;

    background-color: #E0F2F1;

    img{
      width: 17px;
      height: 17px;
    }
  }

  h3{
    font-size: 18px;
    font-weight: 600;

    margin-left: 10px;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
    color:${({theme})=>theme.colors.grey};
    font-size: 11px;
    font-weight: 600;

    div{
      display: flex;
    }
  }
`;