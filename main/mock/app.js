export default {
  'GET /api/apps': [
    {
      name: 'demo',
      entry: 'http://localhost:8030/demo',
      to: '/demo',
      props: {
        testProp1: 'test1',
      },
    },
  ],
};
