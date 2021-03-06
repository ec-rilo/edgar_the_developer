import styled from 'styled-components';

// Assets
import viewport from '../../viewportSizes';

interface SubTitleProps {
  readonly light?: boolean;
  readonly regular?: boolean;
};

const StyledSubTitle = styled.p<SubTitleProps>`
  color: var(--clr-gainsboro);
  margin-bottom: 10px;

  font-size: 1.3rem;

  @media (${viewport.md}) {
    font-size: 2rem;
  }

  @media (${viewport.xl}) {
    ${({ regular }) => !regular && `
      font-size: 2.5rem;
    `}
  }

  ${({ light }) => light && 'color: var(--clr-gainsboro-light);'}
`;

const StyledArticleSubTitle = styled.p<SubTitleProps>`
  color: var(--clr-gainsboro);
  margin-bottom: 10px;

  font-size: 1.3rem;

  @media (${viewport.md}) {
    font-size: 1.5rem;
  }

  ${({ light }) => light && 'color: var(--clr-gainsboro-light);'}
`;

interface StyledEmphasisWordProps {
  readonly light?: boolean;
  readonly bold?: boolean;
};

const StyledEmphasisWord = styled.span<StyledEmphasisWordProps>`
  color: var(--clr-amber);
  ${ ({ light }) => light && `color: var(--clr-gainsboro);` }

  ${ ({ bold }) => bold && `font-family: var(--fnt-dark)` }
`;

interface ParagraphProps {
  readonly regular?: boolean;
};

const StyledParagraph = styled.p<ParagraphProps>`
  font-family: var(--fnt-regular);
  color: var(--clr-gainsboro);
  font-size: 1.1rem;
  line-height: 1.5rem;

  ${({ regular }) => regular && 'font-size: 1rem;'}
`;

const StyledTitle = styled.h1`
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);

  font-size: 3rem;

  @media (${viewport.md}) {
    font-size: 4rem;
  }

  @media (${viewport.xl}) {
    font-size: 5rem;
  }

  @media (${viewport['2xl']}) {
    font-size: 5.5rem;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 1.5;
  font-size: 1rem;
`;

interface PageTitleProps {
  readonly noMargin?: boolean;
};

const StyledPageTitle = styled.h2<PageTitleProps>`
  font-size: 2.5rem;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-bld);
  margin: 30px 0;

  ${({ noMargin }) => noMargin && 'margin: 0;'}

  @media (${viewport.xl}) {
    font-size: 3rem;
  }
`;

interface EmphasisBtnProps {
  readonly underline?: boolean;
};

const StyledEmphasisBtn = styled.p<EmphasisBtnProps>`
  display: inline-block;
  color: var(--clr-gainsboro);
  font-family: var(--fnt-dark);
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 250ms ease-in-out;

  ${({ underline}) => underline && `
    border-bottom: 1px solid var(--clr-gainsboro);
  `}

  &:after {
    display: block;
    content: ' ';
    padding-bottom: 5px;
    border-bottom: 2px solid var(--clr-gainsboro);
    transform: scaleX(0);
    transition: transform 250ms ease-in-out, border 250ms ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
    border-bottom: 2px solid var(--clr-amber);
  }

  &:hover {
    color: var(--clr-amber);
    ${({ underline}) => underline && `
    border-bottom: 1px solid var(--clr-amber);
  `}
  }
`;

interface InputProps {
  readonly isDefault: boolean;
  readonly isValid: boolean;
};

const StyledInput = styled.input<InputProps>`
  background: transparent;
  height: 30px;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-bottom 0.3s;
  z-index: 1;

  color: var(--clr-gainsboro);
  border-bottom: 1px solid var(--clr-gainsboro);

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-salmon);
  `}
`;

interface FormProps {
  readonly isDefault: boolean;
  readonly isValid: boolean;
  readonly isActive: boolean;
};

const StyledLabel = styled.label<FormProps>`
  position: absolute;
  transition: top 0.3s, color 0.3s, font-size 0.3s;
  color: var(--clr-gainsboro-light);

  top: 8px;

  ${({ isActive }) => isActive && `
    color: var(--clr-gainsboro);
    top: -50%;
    font-size: .8rem;
  `}

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    color: var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    color: var(--clr-salmon);
  `}
`;

const StyledBorder = styled.div<FormProps>`
  position: absolute;
  height: 1px;
  width: 100%;
  bottom: 0;
  background-color: var(--clr-gainsboro);
  transform: scaleX(0);
  transition: transform 0.3s, background-color 0.3s;

  ${({ isActive }) => isActive && `
    height: 3px;
    transform: scaleX(1);
  `}

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    background-color: var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    background-color: var(--clr-salmon);
  `}
`;

const StyledTextArea = styled.textarea<InputProps>`
  font-family: var(--fnt-regular);
  background: transparent;
  height: 200px;
  outline: none;
  border: none;
  box-sizing: border-box;
  font-size: 1rem;
  transition: border-bottom 0.3s;
  resize: none;
  z-index: 1;

  color: var(--clr-gainsboro);
  border-bottom: 1px solid var(--clr-gainsboro);

  ${({ isValid, isDefault }) => isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-amber);
  `}

  ${({ isValid, isDefault }) => !isValid && !isDefault && `
    border-bottom: 1px solid var(--clr-salmon);
  `}
`;

const StyledImgCont = styled.div`
  position: relative;
  height: 250px;
  width: 100%;

  @media (${viewport.xl}) {
    height: 300px;
  }

  @media (${viewport['2xl']}) {
    flex: 1;
    height: 100%;
  }
`;

export {
  StyledEmphasisWord,
  StyledParagraph,
  StyledSection,
  StyledSubTitle,
  StyledTitle,
  StyledPageTitle,
  StyledEmphasisBtn,
  StyledInput,
  StyledLabel,
  StyledBorder,
  StyledTextArea,
  StyledImgCont,
  StyledArticleSubTitle,
};
