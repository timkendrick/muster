/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

class Help extends React.Component {
  render() {
    const language = this.props.language || '';
    const supportLinks = [
      {
        content: `Learn more using the [documentation on this site](${docUrl(
          'overview.html',
          language,
        )}).`,
        title: 'Browse Docs',
      },
      {
        content:
          'Ask questions about Muster on [Stack Overflow](http://stackoverflow.com/questions/tagged/muster).',
        title: 'Ask for help',
      },
      {
        content:
          'Raise an issue with Muster on [Github](https://github.com/dwstech/muster/issues).',
        title: 'Raise an issue',
      },
      {
        content: `Find out what's new with Muster at the [Changelog](${docUrl(
          'changelog.html',
          language,
        )}).`,
        title: 'Stay up to date',
      },
    ];

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <p>This project is maintained by a dedicated group of people.</p>
            <GridBlock contents={supportLinks} layout="fourColumn" />
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Help;
