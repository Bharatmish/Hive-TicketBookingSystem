# User Management Dashboard

This exercise involves building a user management dashboard using ReactJS or NextJS. The aim is to assess your frontend web development skills and to give you a chance to showcase your ability to create a standout project. Please read the task instructions and requirements carefully to ensure you cover all aspects.

## Project Overview

The project involves cloning a landing page and creating a simple ticket booking system. You will be judged based on the following criteria:

1. **Clean and Reusable Code**: Write code that is well-structured and easy to maintain.
2. **Understanding Requirements**: Comprehend and address all requirements and potential corner cases.
3. **Attention to Detail**: Ensure the UI is well-styled and responsive on both desktop and mobile devices.
4. **Creativity**: Showcase your creativity in developing and enhancing the project.
5. **React and Frontend Skills**: Utilize React JSX/TSX syntax, state management, and frontend architecture effectively.

## Task Instructions

1. **Clone the Landing Page**: Create a close match of the landing page at [MJSTK](https://ze-mjstk.netlify.app).
2. **“Discover More” Button**: When clicked, the button should scroll to the main content and reveal the ticket booking system.
3. **Ticket Booking System**:
   - **Number of Guests**: Input box for the number of guests.
   - **Guest Details**: For each guest, provide fields for name and age.
   - **Add Guests**: Enable a button to add guests once all details are filled.
   - **Data Storage**: Use local storage or a state management library (e.g., Redux) to save guest information and calculate ticket prices based on age:
     - Age ≤ 2 years: Free
     - Age > 2 and < 18 years: INR 100
     - Age ≥ 18 and < 60 years: INR 500
     - Age ≥ 60 years: INR 300
   - **Total Price**: Calculate and display the total price for all guests.
   - **Ticket Cards**: Display each ticket with details including ticket ID, total guest count, and guest details. Implement a toggle feature to show/hide guest details.

4. **Technology Preferences**:
   - **ReactJS or NextJS**: NextJS is preferred.
   - **State Management**: Use React Context API or Redux.
   - **Styling**: Prefer Tailwind CSS over Bootstrap or Material UI.

## Requirements

- **No Hardcoded Values**: Avoid static values and ensure dynamic data handling.
- **Best Practices**: Follow best practices in coding, state management, and styling.
- **Navigation**: Use React Router if needed for page navigation.
- **Documentation**: Provide detailed documentation in this README file.