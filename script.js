var containsDuplicate = function(nums) {
  let hash = {};
  for (let num of nums) {
    if (hash[num]) {
      return true; // If the number is already in hash, it's a duplicate
    } else {
      hash[num] = true; // Store the number in hash
    }
  }
  return false; // If no duplicates found
};

// Function to handle form submission
function handleSubmit() {
  const input = document.getElementById("intervalsInput").value;
  // Parse input as an array of numbers
  const nums = input.match(/\d+/g).map(Number); // Extract numbers from input
  const result = containsDuplicate(nums);
  document.getElementById("output").innerText = result ? "true" : "false";
}

// Event listener for the submit button
document.getElementById("submit").addEventListener("click", handleSubmit);

// Event listener for pressing "Enter" on the keyboard
document
  .getElementById("intervalsInput")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default behavior of submitting the form
      handleSubmit(); // Call the handleSubmit function
    }
  });
