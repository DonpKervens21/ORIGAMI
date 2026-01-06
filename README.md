# Origami - Playwright Testing Project

## Description

Origami is an end-to-end (E2E) automated testing project developed with Playwright. The project implements the Page Object Model (POM) pattern to keep the code organized and reusable. Currently includes authentication tests and login/logout flows.

## Technologies Used

- **[Playwright](https://playwright.dev/)** - E2E test automation framework
- **Node.js** - JavaScript runtime environment
- **dotenv** - Environment variables management
- **JavaScript (ES6+)** - Programming language

## Prerequisites

Before installing and running this project, make sure you have installed:

- **Node.js** (version 16 or higher)
  - You can download it from [nodejs.org](https://nodejs.org/)
  - Verify your version by running: `node --version`
- **npm** (comes included with Node.js)
  - Verify your version by running: `npm --version`

### Verify Installation

Open your terminal and run:

```bash
node --version "^25.0.3"
npm --version
```

## Installation

### Step 1: Clone the Repository

If you have the repository on Git, clone it:

```bash
git clone <repository-url>
cd Origami
```

If you already have the project downloaded, navigate to the project folder:

```bash
cd Origami
```

### Step 2: Install Dependencies

Run the following command to install all necessary dependencies:

```bash
npm install
```

This command will install:
- `@playwright/test` - Testing framework
- `@types/node` - TypeScript types for Node.js
- `dotenv` - Environment variables handling

### Step 3: Install Playwright Browsers

After installing npm dependencies, you need to install the browsers that Playwright will use for testing:

```bash
npx playwright install
```

This command will download and install:
- Chromium
- Firefox
- WebKit (Safari)

### Step 4: Install System Dependencies (Optional)

If you encounter issues installing browsers, you may need to install additional system dependencies. Run:

```bash
npx playwright install-deps
```

## Configuration

### Environment Variables

The project uses environment variables to configure URLs and credentials. You must create a `.env` file in the project root.

1. Create a file named `.env` in the project root folder:

```bash
touch .env
```

On Windows (PowerShell):

```powershell
New-Item -Path .env -ItemType File
```

2. Add the following variables with your corresponding values:

```env
BASE_URL=https://your-test-url.com
USER_NAME=your_username
PASSWORD=your_password
INVALID_USER=invalid_user
INVALID_PASS=invalid_password
```

 ** Important:** Never commit the `.env` file to the repository. Make sure it's in your `.gitignore`
 
 (Due to this being a test, the .env file will be uploaded, but it is not recommended.)

## Running Tests

### Run All Tests

To run all tests in the project:

```bash
npx playwright test
```

### Run Tests in Visual Mode

By default, Playwright is configured to run in visual mode (with visible browser). If you want to run in headless mode (without browser), edit `playwright.config.js` and change `headless: false` to `headless: true`.

### Run a Specific Test

To run a specific test file:

```bash
npx playwright test tests/loginPageTest.spec.js
```

### Run Tests in a Specific Browser

To run tests only in Chrome:

```bash
npx playwright test --project=chromium
```

For Firefox:

```bash
npx playwright test --project=firefox
```

For WebKit (Safari):

```bash
npx playwright test --project=webkit
```

### Run in Debug Mode

To run tests in debug mode (with Playwright inspector):

```bash
npx playwright test --debug
```

### View Test Report

After running tests, you can view a detailed HTML report:

```bash
npx playwright show-report
```

This command will open the generated HTML report in your default browser.

## Project Structure

```
Origami/
│
├── data/                  # Test data files
│   └── data.json
│
├── pages/                 # Page Object Models (POM)
│   ├── basePage.js       # Base class with common methods
│   ├── loginPage.js      # Login page
│   ├── dashBoardPage.js  # Dashboard page
│   └── logoutPage.js     # Logout page
│
├── tests/                 # Test files
│   └── loginPageTest.spec.js
│
├── playwright-report/     # Generated HTML reports
│   └── index.html
│
├── test-results/          # Test results and screenshots
│
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Implemented Test Cases

The project includes the following test cases:

- **TC-1**: Successful login with valid credentials
- **TC-2**: Login with invalid username
- **TC-3**: Login with invalid password

## Useful Commands

### Generate test code

Playwright includes an interactive test code generator:

```bash
npx playwright codegen <url>
```

This will open the browser and Playwright's code generator.

### Run tests in UI mode

For an interactive graphical interface:

```bash
npx playwright test --ui
```

### View traces of failed tests

```bash
npx playwright show-trace trace.zip
```

## Troubleshooting

### Error: "Cannot find module"

If you receive this error, make sure you have run:

```bash
npm install
```

### Error: "Executable doesn't exist"

If browsers were not installed correctly:

```bash
npx playwright install --force
```

### Error: Environment variables not found

Make sure to:
1. Create the `.env` file in the project root
2. Add all necessary variables
3. Verify there are no spaces before or after the `=` sign

## Additional Notes

- The project is configured to run tests in parallel by default
- HTML reports are automatically generated after each run
- Screenshots and videos are automatically saved when a test fails

## Author

Kervens Termitus
