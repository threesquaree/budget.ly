module.exports = {

    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/api/:path*', // Replace with your backend server URL
        },
      ];
    },
  };

// module.exports = {
//   webpack: function override(config, env) {
//     console.log("React app rewired works!");
//     config.resolve.fallback = {
//       fs: false
//     };
//     return config;
//   },
//   async rewrites() {
//     return [
//       {
//         source: '/api/:path*',
//         destination: 'http://localhost:3001/api/:path*', // Replace with your backend server URL
//       },
//     ];
//   },
// };

