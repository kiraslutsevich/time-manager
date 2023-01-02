export enum EnvTypeENUM {
  development = 'development',
  staging = 'staging',
  production = 'production',
}

export const envType = process.env.REACT_APP_ENV || process.env.NODE_ENV || EnvTypeENUM.development;
export const isDev = envType === EnvTypeENUM.development;
export const isProd = envType === EnvTypeENUM.production;
export const isStage = envType === EnvTypeENUM.staging;

const config = {
  apiUrl: 'http://localhost:4000/',
  maxNumberOfAttempts: 10,
};

switch (envType) {
  case EnvTypeENUM.production:
    config.apiUrl = 'http://localhost:4000/';
    break;

  case EnvTypeENUM.staging:
    config.apiUrl = 'https://hrm-product-demo.fusion-tech.pro/';
    break;
}

export default config;
