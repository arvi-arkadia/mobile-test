# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\login.spec.ts >> Login Android App
- Location: tests\android\login.spec.ts:4:5

# Error details

```
Error: WebDriverError: The application at 'C:\Code\Github\mobile-test\apps\demo.apk' does not exist or is not accessible when running "http://127.0.0.1:4723/session" with method "POST"
```

# Test source

```ts
  1  | import { remote, Browser } from 'webdriverio';
  2  | import path from 'path';
  3  | 
  4  | async function createDriver(): Promise<Browser> {
> 5  |   const driver = await remote({
     |                  ^ Error: WebDriverError: The application at 'C:\Code\Github\mobile-test\apps\demo.apk' does not exist or is not accessible when running "http://127.0.0.1:4723/session" with method "POST"
  6  |     hostname: '127.0.0.1',
  7  |     port: 4723,
  8  |     path: '/',
  9  |     capabilities: {
  10 |       platformName: 'Android',
  11 | 
  12 |       'appium:automationName': 'UiAutomator2',
  13 | 
  14 |       'appium:deviceName': 'Android Device',
  15 | 
  16 |       "appium:udid": "13355450",
  17 | 
  18 |       'appium:app': path.resolve('./apps/demo.apk'),
  19 |      
  20 |       'appium:autoGrantPermissions': true,
  21 | 
  22 |       'appium:noReset': true,
  23 | 
  24 |     }
  25 |   });
  26 | 
  27 |   return driver;
  28 | }
  29 | 
  30 | export default createDriver;
```