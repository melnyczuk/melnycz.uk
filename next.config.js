/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  output: 'export',
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
