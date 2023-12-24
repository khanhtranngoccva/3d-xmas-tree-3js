/** @type {import('next').NextConfig} */
const nextConfig = {
    headers() {
        return [
            {
                source: '/:any*',
                headers: [
                    {
                        key: 'Content-Security-Policy',
                        value: 'frame-ancestors *',
                    },
                ],
            }
        ]
    }
}

module.exports = nextConfig
