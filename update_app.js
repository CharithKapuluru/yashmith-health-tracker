const fs = require('fs');

// Read filtered conditions
const filteredConditions = JSON.parse(fs.readFileSync('filtered_conditions.json', 'utf-8'));

// Read current app.js
let appContent = fs.readFileSync('app.js', 'utf-8');

// Find and replace the conditionsDatabase
const conditionsStart = appContent.indexOf('const conditionsDatabase = [');
const conditionsEnd = appContent.indexOf('];', conditionsStart) + 2;

const beforeConditions = appContent.substring(0, conditionsStart);
const afterConditions = appContent.substring(conditionsEnd);

// Create new conditionsDatabase string
const newConditionsDb = `const conditionsDatabase = ${JSON.stringify(filteredConditions, null, 2)};`;

// Combine
const newAppContent = beforeConditions + newConditionsDb + '\n\n// Total: ' + filteredConditions.length + ' common conditions' + afterConditions.substring(afterConditions.indexOf('\n'));

// Write back
fs.writeFileSync('app.js', newAppContent);

console.log(`Updated app.js with ${filteredConditions.length} common conditions`);
