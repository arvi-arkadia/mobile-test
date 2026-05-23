# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\TC-002.spec.ts >> Guest Access
- Location: tests\android\TC-002.spec.ts:10:5

# Error details

```
Error: WebDriverError: Neither ANDROID_HOME nor ANDROID_SDK_ROOT environment variable was exported. Read https://developer.android.com/studio/command-line/variables for more details when running "http://127.0.0.1:4723/session" with method "POST"
```

# Test source

```ts
  1  | import { remote } from 'webdriverio';
  2  | 
  3  | export async function createDriver() {
  4  | 
> 5  |   const driver = await remote({
     |                  ^ Error: WebDriverError: Neither ANDROID_HOME nor ANDROID_SDK_ROOT environment variable was exported. Read https://developer.android.com/studio/command-line/variables for more details when running "http://127.0.0.1:4723/session" with method "POST"
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
  27 |     }
  28 |   });
  29 | 
  30 |   return driver;
  31 | }
```