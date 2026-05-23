# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-003.spec.ts >> Account Information, if checkout must be login
- Location: tests\android\TC-003.spec.ts:12:5

# Error details

```
Error: WebDriverError: The instrumentation process cannot be initialized. Make sure the application under test does not crash and investigate the logcat output. when running "http://127.0.0.1:4723/session" with method "POST"
```

# Test source

```ts
  1  | import { remote } from 'webdriverio';
  2  | 
  3  | export async function createDriver() {
  4  | 
> 5  |   const driver = await remote({
     |                  ^ Error: WebDriverError: The instrumentation process cannot be initialized. Make sure the application under test does not crash and investigate the logcat output. when running "http://127.0.0.1:4723/session" with method "POST"
  6  | 
  7  |     hostname: '127.0.0.1',
  8  | 
  9  |     port: 4723,
  10 | 
  11 |     path: '/',
  12 | 
  13 |     capabilities: {
  14 | 
  15 |       platformName: 'Android',
  16 | 
  17 |       'appium:automationName': 'UiAutomator2',
  18 | 
  19 |       'appium:deviceName': 'Android',
  20 |      
  21 |       "appium:udid": "13355450",
  22 | 
  23 |       'appium:app': 'C:/Code/Github/mobile-test/apk/demo.apk',
  24 | 
  25 |       'appium:autoGrantPermissions': true,
  26 |       
  27 |       // IMPORTANT
  28 |       'appium:appPackage': 'com.saucelabs.mydemoapp.android',
  29 |       'appium:appActivity':
  30 |         'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
  31 | 
  32 |       // stability
  33 |       'appium:noReset': true,
  34 |       'appium:newCommandTimeout': 300,
  35 |       'appium:adbExecTimeout': 1200000,
  36 |       'appium:uiautomator2ServerLaunchTimeout': 1200000,
  37 |       'appium:appWaitDuration': 1200000
  38 |     }
  39 |   });
  40 | 
  41 |   return driver;
  42 | }
```