module.exports = {
  rewrites: async () => [
    {
      source: '/rss',
      destination: 'https://dl.dropbox.com/s/65vk4kp2aqze06s/rss.xml',
    },
  ],
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
