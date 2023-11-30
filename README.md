[DEMO LINK](https://oksana-kyryienko.github.io/insart_test_task_currency/)

On each 5th api request - imitate server error (create counter, store it in localStorage). After - reset value in localStortage. On error case - hide table, show error message.
Use SWR for data fetching (https://www.npmjs.com/package/swr)
Buy/Sell cells must be editable, on cell hover - edit icon appears, edit icon onClick - appears editable input with two save/cancel icons, input value validations - input value must be +- 10%  + initial currency value from api, otherwise - save icon must be disabled.
Create currency converter: two input fields and appropriate dropdown with currencies(UAH, CZK), calculate button, currency for calculations - get actual (can be changed in the table) value from cell with currency
Example - in the mockups 
Technology stack:
React 
State management - zustand
Cache layer - SWR
Ui framework - bootstrap
Unit tests - jest
ESLINT

