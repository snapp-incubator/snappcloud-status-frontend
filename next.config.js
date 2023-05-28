/** @type {import('next').NextConfig} */

const is_production = process.env.NODE_ENV === 'production';
const backend_url = is_production ? "http://172.30.245.66:8080" : "http://127.0.0.1:8080";

module.exports = {
    env: {
        BACKEND_URL: backend_url,
    },
    output: 'standalone',
    async rewrites() {
        return []
    }
};
