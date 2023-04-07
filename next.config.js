module.exports = {
  future: { webpack5: true },
  rewrites: async () => [
    {
      source: '/rss',
      destination: 'https://dl.dropbox.com/s/65vk4kp2aqze06s/rss.xml',
    },
  ],
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
