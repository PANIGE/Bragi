const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@services': 'src/services', // Chemin vers le dossier 'services' dans 'src'
  })(config);

  return config;
};
