# mobile-test

## 📋 Table Example

List Test Script :

| Feature | Description                                    | Status  |
| ------- | ---------------------------------------------- | ------- |
| TC-001  | Home Screen After Login                        | ✅ Done |
| TC-002  | Guest Access                                   | ✅ Done |
| TC-003  | Account Information, if checkout must be login | ✅ Done |
| TC-004  | Quota Details, Detail Product is validated     | ✅ Done |
| TC-005  | Logout                                         | ✅ Done |
| TC-006  | Package Catalogue                              | ✅ Done |
| TC-007  | Package Filter                                 | ✅ Done |
| TC-008  | Order Confirmation                             | ✅ Done |

## Installation

Precondition :

1. Download:

- Android Studio

2. Make sure after installed:

- Android SDK
- Android SDK Platform
- Android Emulator
- Platform Tools

3. Environment Variable :

```bash
Add:
ANDROID_HOME
```

```bash
Example:
C:\Users\YOUR_USER\AppData\Local\Android\Sdk
```

4. Add PATH :

```bash
Add:
platform-tools
emulator
tools
tools/bin
```

```bash
Example:
C:\Users\YOUR_USER\AppData\Local\Android\Sdk\platform-tools
```

5. Verify ADB

```bash
adb devices

if success :
List of devices attached
emulator-5554 device
```

Here's how to install my project:

```bash
# Clone my repository
git clone https://github.com/arvi-arkadia/mobile-test.git

# Install dependencies I require
npm install

# Edit utils\driver.ts
# Edit value "appium:udid" into your android device like on step 5
```

## Testing My Project

Run my test suite with:

```bash
# Run Server for automated android
npm run appium

# Run all test on setup file test
npm run android

# After running generate report
npm run allure:generate

# Open Result reporting after test execution
npm run allure:open

## IF CRASH APP
## YOU MUST KILL SERVER APPIUM, AND RESTART AGAIN
## KILL APPS APPIUM SERVER ON YOUR LIST APP
```
