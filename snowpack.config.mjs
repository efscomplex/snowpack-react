/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
   routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    [
      '@snowpack/plugin-typescript',
      {
        ...(process.versions.pnp ? { tsc: 'yarn pnpify tsc' } : {}),
      },
    ],
  ],
  alias: {
    '@': './src',
  },
}
