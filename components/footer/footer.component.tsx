import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Container from '@layouts/layout.styles';

import {
  CopyRightsContainer,
  FooterContainer,
  StyledFooterGrid,
  StyledFooterMenuTitle,
  StyledFooterUnOrderedList,
  StyledGridColumn,
} from './footer.styles';

const Footer: FC = () => (
  <>
    <FooterContainer>
      <Container>
        <StyledFooterGrid>
          <StyledGridColumn>
            <StyledFooterMenuTitle>contact</StyledFooterMenuTitle>
            <Link href="#">
              <a>terms &#38; condition</a>
            </Link>
          </StyledGridColumn>
          <StyledGridColumn>
            <StyledFooterMenuTitle>address</StyledFooterMenuTitle>

            <StyledFooterUnOrderedList>
              <li>
                19 Onitolo Street off Gbaja road beside St Anthony Catholic
                church Gbaja, Surulere.
              </li>
              <li>
                <Link href="#">
                  <a>terms &#38; condition</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>terms &#38; condition</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>terms &#38; condition</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a>terms &#38; condition</a>
                </Link>
              </li>
            </StyledFooterUnOrderedList>
          </StyledGridColumn>
          <StyledGridColumn>
            <StyledFooterMenuTitle>about</StyledFooterMenuTitle>
            <Link href="#">
              <a>terms &#38; condition</a>
            </Link>
          </StyledGridColumn>

          <StyledGridColumn>
            <StyledFooterMenuTitle>site map</StyledFooterMenuTitle>
            <Link href="#">
              <a>terms &#38; condition</a>
            </Link>
          </StyledGridColumn>
        </StyledFooterGrid>
      </Container>
    </FooterContainer>
    <Container>
      <div>
        <CopyRightsContainer>
          Copyrights &copy; 2022 Devthorr
        </CopyRightsContainer>
      </div>
    </Container>
  </>
);

export default Footer;
