const package = require('./package.json');

/** Versão do projeto. */
const buildVersion = package.version;

/** Versão do angular que é utilizada no projeto. */
const angularVersion = package.dependencies['@angular/core'];

module.exports = {
  projectVersion: buildVersion,
  angularVersion: angularVersion,
};
