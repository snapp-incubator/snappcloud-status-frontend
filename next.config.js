/** @type {import('next').NextConfig} */

const is_production = process.env.NODE_ENV === 'production';
const backend_url = is_production ? "snappcloud-status-backend-server" : "http://127.0.0.1:8080";

module.exports = {
    env: {
        BACKEND_URL: backend_url,
    },
    output: 'standalone',
    async rewrites() {
        return []
    }
};
