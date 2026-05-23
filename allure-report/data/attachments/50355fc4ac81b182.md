# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: android\login.spec.ts >> Login Android App
- Location: tests\android\login.spec.ts:9:5

# Error details

```
Error: WebDriverError: The application at 'C:\Users\ARV\apk\demo.apk' does not exist or is not accessible when running "http://127.0.0.1:4723/session" with method "POST"
```

# Test source

```ts
  1  | import { remote } from 'webdriverio';
  2  | 
  3  | export async function createDriver() {
  4  | 
> 5  |   const driver = await remote({
     |                  ^ Error: WebDriverError: The application at 'C:\Users\ARV\apk\demo.apk' does not exist or is not accessible when running "http://127.0.0.1:4723/session" with method "POST"
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
  23 |       'appium:app': './apk/demo.apk',
  24 | 
  25 |       'appium:autoGrantPermissions': true,
  26 | 
  27 |       'appium:noReset': true
  28 |     }
  29 |   });
  30 | 
  31 |   return driver;
  32 | }
```