// --- JavaScript Functions with Scope, Parameters, Return Values ---

let isFishSwimming = false;

// Function to log animation action
function logAnimation(action, elementName) {
  console.log(`Action: ${action} on ${elementName}`);
}

// Function that toggles a CSS class and returns new state
function toggleAnimation(element, className) {
  element.classList.toggle(className);
  return element.classList.contains(className);
}

// Function that updates button text
function updateButton(button, newText) {
  button.textContent = newText;
}

// --- Combining CSS + JavaScript ---
const fish = document.querySelector('.fish');
const shell = document.querySelector('.shell');
const fishButton = document.getElementById('fishButton');
const shellButton = document.getElementById('shellButton');

// Fish animation control
fishButton.addEventListener('click', () => {
  isFishSwimming = toggleAnimation(fish, 'swim');
  logAnimation('toggle', 'fish');
  updateButton(fishButton, isFishSwimming ? 'Stop the Fish 🐟' : 'Make the Fish Swim!');
});

// Shell animation control
shellButton.addEventListener('click', () => {
  const isOpen = toggleAnimation(shell, 'open');
  logAnimation('toggle', 'shell');
  updateButton(shellButton, isOpen ? 'Close the Shell 🐚' : 'Open the Shell');
});
