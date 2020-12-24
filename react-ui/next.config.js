const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALAYZE === 'true'
})

module.exports = withBundleAnalyzer({
    images: {
        domains: ['pointo.com.tr']
    }
});

