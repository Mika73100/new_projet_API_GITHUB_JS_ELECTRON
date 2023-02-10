module.exports = {
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'MIKA73100', // ici mettre son nom github
          name: 'new_projet_API_GITHUB',//ici mettre son nom de ripo
        },
        authToken :'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', //ici mettre son token généré
        prerelease: false,
        draft: true,
      },
    },
  ],
  
};
