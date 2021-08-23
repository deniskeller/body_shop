const path = require('path');

const withImages = require('next-images')
// module.exports = withImages()

module.exports = withImages({
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
    prependData: `@import "main.scss";`,
  },
})
