import { StyledContainer, StyledIcon, StyledRow, StyledTitle } from './style';

interface FeatureItemProps {
  icon: string;
  title: string;
  content: string;
}

const FeatureItem = (props: FeatureItemProps) => {
  const { icon, title, content } = props;
  return (
    <StyledContainer>
      <StyledRow>
        <StyledIcon src={process.env.PUBLIC_URL + `/img/${icon}`} />
        <StyledTitle>{title}</StyledTitle>
      </StyledRow>
      <p>{content}</p>
    </StyledContainer>
  );
};

export default FeatureItem;
