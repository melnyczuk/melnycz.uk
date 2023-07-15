module.exports = {
  future: { webpack5: true },
  output: 'exports',
  webpack: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      fallback: {
        fs: false,
        os: false,
        path: false,
        child_process: false,
      },
    },
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
