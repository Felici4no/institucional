import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/projetos/caso-01",
        destination: "/projetos/onboarding-remoto",
        permanent: true,
      },
      {
        source: "/projetos/dolarizando-se",
        destination: "/projetos/onboarding-remoto",
        permanent: true,
      },
      {
        source: "/projetos/caso-02",
        destination: "/projetos/gerarcontrato",
        permanent: true,
      },
      {
        source: "/projetos/caso-03",
        destination: "/projetos/ecosimulator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
