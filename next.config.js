/** @type {import('next').NextConfig} */

const is_production = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        TEH1_BACKEND_URL: is_production ?
            "http://spcld-status-backend-snappcloud-status-backend.snappcloud-monitoring.apps.private.okd4.teh-1.snappcloud.io" :
            "http://127.0.0.1:8080",
        TEH2_BACKEND_URL: is_production ?
            "http://spcld-status-backend-snappcloud-status-backend.snappcloud-monitoring.apps.private.okd4.teh-2.snappcloud.io" :
            "http://127.0.0.1:8080",
        SNAPPGROUP_BACKEND_URL: is_production ?
            "http://spcld-status-backend-snappcloud-status-backend.snappcloud-monitoring.apps.private.snappgroup.teh-1.snappcloud.io" :
            "http://127.0.0.1:8080",
    },
    output: 'standalone',
};
