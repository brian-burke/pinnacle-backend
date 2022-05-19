module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: 'dthgdsr3s',
        api_key: '416369372115337',
        api_secret: 'qWR0aueRUnzNXgL4KY-u6RlSJw4',
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
