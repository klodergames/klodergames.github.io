import React from 'react';
import PropTypes from 'prop-types';
import remark from 'remark';
import html from 'remark-html';

const processor = remark().use(html);

const getContent = text => processor.processSync(text).toString();

const Markdown = ({ text }) => (
  <div dangerouslySetInnerHTML={{ __html: getContent(text) }} />
);

Markdown.propTypes = {
  text: PropTypes.string,
};

export default Markdown;
