const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    images: {
        domains: ['images.ctfassets.net']
    },
    assetPrefix: isProd ? '/raclim.github.io/' : ''
}