import React, { CSSProperties } from 'react';
import { Link } from 'gatsby';

const pageStyles: CSSProperties = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const paragraphStyles: CSSProperties = {
  marginBottom: 48,
  fontSize: 50,
  textAlign: 'center',
  border: 'solid 1 black',
};

const aStyles: CSSProperties = {
  textDecoration: 'none',
};

const NotFoundPage = ({ path }) => (
  <main style={pageStyles}>
    <title>Not found</title>
    <p style={paragraphStyles}>
      <p>{path}</p>
      <Link style={aStyles} to="/">
        ¯\_(ツ)_/¯
      </Link>
    </p>
  </main>
);

export default NotFoundPage;
