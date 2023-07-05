/** @type {import('next').NextConfig} */

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    TEH1_BACKEND_URL: isProduction ? process.env.TEH1_BACKEND_URL : '' ,
    TEH2_BACKEND_URL: isProduction ? process.env.TEH2_BACKEND_URL : '',
    SNAPPGROUP_BACKEND_URL: isProduction ? process.env.SNAPPGROUP_BACKEND_URL : '',
  },
  output: 'standalone',
};
