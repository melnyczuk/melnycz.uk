module.exports = {
  webpack: (config) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.md$/,
          exclude: /node_modules/,
          loader: 'raw-loader',
        },
      ],
    },
  }),
};
