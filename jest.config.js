module.exports = {
  transform: {
    '^.+\\.(tsx|ts)?$': 'ts-jest',
    '^.+\\.(jsx|js)?$': 'babel-jest',
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
};
