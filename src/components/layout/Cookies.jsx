import React from 'react';
import styled from 'styled-components';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import { useCookies } from 'react-cookie';

import Button from '../Button';

const StyledCookie = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  z-index: 10;
`;

const StyledBox = styled.div`
  border: 3px solid var(--primary-color);
  background-color: var(--darker-grey);
  color: white;
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-gap: 20px;
  justify-content: space-between;
`;

const StyledText = styled.div`
 a {
    color: var(--text-color);
    font-weight: bold;
    text-decoration; underline;

    &:hover {
    text-decoration: none;
  }
 }`;

const Cookies = () => {
  const [cookie, setCookie] = useCookies(['cookie']);
  const acceptCookie = () => {
    setCookie('cookie', 'accepted', { path: '/' });
  };
  return (
    <>
      {!cookie.cookie || cookie.cookie !== 'accepted' ? (
        <StyledCookie>
          <StyledBox>
            <StyledText>
              <FormattedMessage
                id={'We use cookies to improve your experience on our website.'}
              />{' '}
              <FormattedMessage
                id={'By browsing our site you accept the use of cookies.'}
              />{' '}
              <FormattedMessage
                id={'Read more about our {link}.'}
                values={{
                  link: (
                    <Link to="/cookie-policy">
                      <FormattedMessage id={'cookies policy'} />
                    </Link>
                  ),
                }}
              />
            </StyledText>
            <Button onClick={() => acceptCookie()}>
              <FormattedMessage id={'Accept'} />
            </Button>
          </StyledBox>
        </StyledCookie>
      ) : (
        ''
      )}
    </>
  );
};

export default Cookies;
