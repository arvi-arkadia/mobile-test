import { remote } from 'webdriverio';

export async function createDriver() {

  const driver = await remote({

    hostname: '127.0.0.1',

    port: 4723,

    path: '/',

    capabilities: {

      platformName: 'Android',

      'appium:automationName': 'UiAutomator2',

      'appium:deviceName': 'Android',
     
      "appium:udid": "13355450",

      'appium:app': 'C:/Code/Github/mobile-test/apk/demo.apk',

      'appium:autoGrantPermissions': true,
      
      // IMPORTANT
      'appium:appPackage': 'com.saucelabs.mydemoapp.android',
      'appium:appActivity':
        'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',

      // stability
      'appium:noReset': true,
      'appium:newCommandTimeout': 300,
      'appium:adbExecTimeout': 1200000,
      'appium:uiautomator2ServerLaunchTimeout': 1200000,
      'appium:appWaitDuration': 1200000
    }
  });

  return driver;
}