import { email } from '@config';
import { usePrefersReducedMotion } from '@hooks';
import { loaderDelay, navDelay } from '@utils';
import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Gowtham Kishore</h2>;
  const three = (
    <h1 className="big-heading">
      Building scalable solutions that makes a <i>difference</i>
    </h1>
  );
  const four = (
    <>
      <p>
        Currently pursuing Master of Science in Computer Science at{' '}
        <a href="https://www.csusb.edu/" target="_blank" rel="noreferrer">
          California State University
        </a>
        . I am a engineer with a proven track record of success in dynamic environments. My
        proficient in languages such as Node.js, Typescript and Python been pivotal in developing
        cutting-edge software solutions for the IT industry
        <br /> <br /> Passionate about efficiency and precision, I enjoy tackling challenging
        projects that push me to grow while creating a meaningful impact.
        <br />
        <br />{' '}
      </p>
    </>
  );

  const five = (
    <>
      <a className="email-link" href={`mailto:${email}`}>
        Connect with Me
      </a>
    </>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
