export default {
    master: {
      apps: [
        {
          name: 'app-demo',
          entry:
            process.env.NODE_ENV === 'development'
              ? '//localhost:8030'
              : '/demo/',
          activeRule: '/app-demo',
        }
      ],
    },
  }