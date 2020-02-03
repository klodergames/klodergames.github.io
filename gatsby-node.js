const path = require(`path`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const gameTemplate = path.resolve(`src/templates/game.js`);
  const result = await graphql(`
    {
      allGamesYaml {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allGamesYaml.edges.forEach(({ node }) => {
    createPage({
      path: `/games/${node.slug}`,
      component: gameTemplate,
      context: {
        slug: node.slug,
      }, // additional data can be passed via context
    });
  });
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  const oldPage = { ...page };

  page.context.locale = page.context.intl.language;
  if (page.context.locale !== oldPage.context.locale) {
    // Replace new page with old page
    deletePage(oldPage);
    createPage(page);
  }
};
