const greeting = "Hello, Zed!"; // String
let count = 42; // Number
const PI = 3.14159; // Float
const isActive = true; // Boolean
const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; /* RegExp */

const mixedArray = [1, "two", { label: "three" }, [4, 5]];

const user = {
  name: "ZedUser",
  age: 28,
  preferences: {
    theme: "dark",
    fontSize: 14,
  },
  tags: ["developer", "designer"],
};

function calculateTotal(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i].price;
  }
  return sum;
}

const formatName = ({ first, last }) => `${first} ${last}`;
