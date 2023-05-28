import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.belajar.app',
  appName: 'ng-fe-belajar',
  webDir: 'dist/ng-fe-belajar',
  server: {
    androidScheme: 'https'
  }
};

export default config;
