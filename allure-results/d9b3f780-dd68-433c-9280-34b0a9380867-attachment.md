# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\login.spec.ts >> Login Android App
- Location: tests\android\login.spec.ts:4:5

# Error details

```
Error: WebDriverError: Unable to find an active device or emulator with OS 14. The following are available: 13355450 (15) when running "http://127.0.0.1:4723/session" with method "POST"
```

# Test source

```ts
  1  | import { remote, Browser } from 'webdriverio';
  2  | 
  3  | async function createDriver(): Promise<Browser> {
> 4  |   const driver = await remote({
     |                  ^ Error: WebDriverError: Unable to find an active device or emulator with OS 14. The following are available: 13355450 (15) when running "http://127.0.0.1:4723/session" with method "POST"
  5  |     hostname: '127.0.0.1',
  6  |     port: 4723,
  7  |     path: '/',
  8  |     capabilities: {
  9  |       platformName: 'Android',
  10 | 
  11 |       'appium:automationName': 'UiAutomator2',
  12 | 
  13 |       'appium:deviceName': 'Android Device',
  14 | 
  15 |       'appium:platformVersion': '14',
  16 | 
  17 |       'appium:app': './apk/demo.apk',
  18 | 
  19 |       'appium:autoGrantPermissions': true,
  20 | 
  21 |       'appium:noReset': true
  22 | 
  23 |     }
  24 |   });
  25 | 
  26 |   return driver;
  27 | }
  28 | 
  29 | export default createDriver;
```