import styled from 'styled-components/macro';

export const Title = styled.p``;

export const Container = styled.div`
  dispaly: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;

  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div``;

export const SubTitle = styled.p``;

export const Text = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)``;

export const FeatureText = styled.p``;

export const FeatureClose = styled.button``;

export const Maturity = styled.div``;

export const Content = styled.div``;

export const Entities = styled.div``;

export const Meta = styled.div``;

export const Item = styled.div``;

export const Image = styled.img``;
