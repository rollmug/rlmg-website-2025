// import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'manage.rlmg.com',
                port: '',
                pathname: '/assets/**/**',
            }
        ],
    }
};

export default nextConfig;