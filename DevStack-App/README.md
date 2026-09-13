# Assignment-5

# Dev Stack Builder

Dev Stack Builder is a simple website where users can explore different technologies and build their own development stack.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- React-Toastify
- JSON
- Vite

## Features

- Users can explore different technologies with their details.
- Users can add and remove technologies from their own stack.
- The website is responsive for mobile, tablet, and desktop.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets me write HTML-like code inside my React components. I use it in my .tsx files to build the UI.

### 2. What is the difference between props and state?

Props help me pass data or functions from one component to another. State stores data that can change in a component.

### 3. What does the useState hook do, and where did you use it in this project?

useState helps me store and update data. I used it in App.tsx to store the technologies added to my stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is commonly used for side effects like fetching data. I did not use it because I used use() and Suspense to load my JSON data.

### 5. Why does every item in a .map() list need a unique key prop?

A unique key helps React know which item is which when the list changes. I used technology.id as the key.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition. I used it in Stack.tsx to show an empty message when no technology is selected and the selected items when technologies are added.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

I pass data and functions from the parent to the child using props. In my project, App.tsx passes functions like onAdd and onRemove to the child components. The child calls these functions when needed.
