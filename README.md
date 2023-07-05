# Service Health

This page provides status information on the services that are part of SnappCloud. It allows users to check the current status of the listed services. If you encounter an issue that is not listed here, please contact our Support team for assistance.

## Contents

- [Introduction](#introduction)
- [Service Status](#service-status)
- [Environment Variables](#environment-variables)
- [Launching the Code](#launching-the-code)
- [Contact](#contact)
- [Additional Resources](#additional-resources)

## Introduction

The Service Health page is designed to keep users informed about the status of the services offered by SnappCloud. It serves as a central location to monitor any ongoing issues or disruptions in service. By regularly checking this page, users can stay updated and be aware of any potential impacts on their workflows or applications.

## Service Status

The current status of each service is displayed on this page. It indicates whether the service is operating normally or experiencing any known issues or outages. The list is continuously updated to reflect the most recent information.

## Environment Variables

The following environment variables are used in the SnappCloud services:

- `TEH1_BACKEND_URL`: The URL for TEH1 backend.
- `TEH2_BACKEND_URL`: The URL for TEH2 backend.
- `SNAPPGROUP_BACKEND_URL`: The URL for SNAPPGROUP backend.

Make sure to properly configure these environment variables in your deployment or application setup. To set up the environment variables, you can create a file named `.env` in the root directory of your project. You can use the provided `.env.example` file as a template. Rename the `.env.example` file to `.env` and update the values of the environment variables as required.

## Launching the Code

To launch the code and start the SnappCloud services, ensure that you have set up the necessary environment variables in the `.env` file. Then, follow the instructions provided in the documentation to run the code and deploy the services.

## Contact

If you encounter an issue that is not listed on the Service Health page or require further assistance, please contact our Support team. They will promptly address your concerns and provide the necessary support to resolve any service-related problems.

- Support Team: [https://docs.snappcloud.io/docs/support](https://docs.snappcloud.io/docs/support)

## Additional Resources

For additional information about the services offered by SnappCloud, please refer to our comprehensive documentation available at [https://docs.snappcloud.io/](https://docs.snappcloud.io/). The documentation covers various aspects of our services, including setup instructions, troubleshooting guides, and best practices.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More about this Framework

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
