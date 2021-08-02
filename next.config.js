const debug = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
        domains: ['images.ctfassets.net']
    },
    assetPrefix: !debug ? '/raclim.github.io/' : ''
}