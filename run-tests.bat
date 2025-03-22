@echo off
echo Running Playwright tests...

REM Run Playwright tests
npx playwright test tests/NaukriProfileUpdate.spec.js --project=firefox --reporter=dot

REM Pause to keep the terminal window open after tests complete
pause
