/** @type {import('next').NextConfig} */

const is_production = process.env.NODE_ENV === 'production';
const backend_url = is_production ? "http://snappcloud-status-backend-mohammadne-playground.apps.private.okd4.teh-1.snappcloud.io" : "http://127.0.0.1:8080";

module.exports = {
    env: {
        BACKEND_URL: backend_url,
    },
    output: 'standalone',
};
