import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

// Assets
import viewport from '../../viewportSizes';
import addHypens from '../../scripts/addHypens';

// Components
import StyledImgCont from './ImgContainer';
import StyledTitleCont from './TitleContainer';
import {
  StyledParagraph, StyledEmphasisBtn,
} from '../LandingPage/ElementComponents';

interface StyledDescripContProps {
  readonly isImportant: boolean;
};

const StyledDescripCont = styled.section<StyledDescripContProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  padding-top: 10px;

  ${({ isImportant }) => isImportant && `
    @media (${viewport.lg}) {
      align-items: center;
      text-align: center;
    }
  `}
`;

interface StaticImageData {
  src: string;
  height: number;
  width: number;
};

interface itemData {
  readonly title: string;
  readonly category: string;
  readonly textContent: string;
  readonly src: string | StaticImageData;
  readonly alt: string;
  readonly isSelectable: boolean;
  readonly important: boolean;
  readonly cover?: boolean;
};

interface ProjectItemProps {
  readonly className?: string;
  readonly data: itemData;
  readonly isSelectable: boolean;
};

function ProjectItem ({ className, data }: ProjectItemProps) {
  const projectName = addHypens(data.title.toLowerCase());
  return (
    <li className={className}>
      <Link href={ `projects/${projectName}` }>
        <div>
          <StyledImgCont src={data.src} alt={data.alt} cover={data.cover} />
        </div>
      </Link>

      <StyledDescripCont isImportant={data.important}>
        <StyledTitleCont title={data.title} subTitle={data.category} />
        <StyledParagraph style={{ fontSize: '1rem', maxWidth: '600px' }}>
          {data.textContent}
        </StyledParagraph>
        <div>
          <Link href={ `/projects/${projectName}` }>
            <StyledEmphasisBtn>
              {data.important === true ? 'Coming Soon' : 'View Details'}
            </StyledEmphasisBtn>
          </Link>
        </div>
      </StyledDescripCont>
    </li>
  );
};

const StyledProjectItem = styled(ProjectItem)`
  pointer-events: none;
  width: 100%;
  ${({ isSelectable }) => isSelectable && 'pointer-events: auto;'}

  @media (${viewport.lg}) {
    flex: 1 0 35%;
  }
`;

export default StyledProjectItem;
