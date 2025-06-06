# Strawberry Merchandise Store

Welcome to the Strawberry Merchandise Store project! This is a front-end web application built to showcase and promote strawberry-themed products. The goal was to create a visually appealing and responsive single-page application using modern web technologies. This project serves as a practice exercise to improve my front-end development skills, focusing on React, Vite, Tailwind CSS, and Material-UI (MUI) icons.

## Project Overview

The Strawberry Merchandise Store is a sleek, modern web page designed to advertise strawberries for a fictional store. It features a bold gradient background, a prominent strawberry image, a navigation bar, and a sidebar with social media icons. The design emphasizes clean aesthetics, responsiveness, and user interaction, with a hamburger menu to toggle the sidebar on smaller screens.

You can view the live deployed site here: [Strawberry Store](https://strawberry-iog.pages.dev/)

## Features

- **Responsive Design**: The layout adapts seamlessly across mobile, tablet, and desktop devices using Tailwind CSS's utility classes.
- **Interactive Navigation**: A navigation bar with a hamburger menu that toggles a sidebar for additional navigation options.
- **Social Media Integration**: A sidebar with MUI icons linking to GitHub, Instagram, and LinkedIn profiles.
- **Custom Styling**: Tailwind CSS is used for styling, with custom text and image shadow effects defined in `index.css`.
- **Dynamic Components**: React components like `Navbar`, `CentralComponent`, and `SideBar` work together to create a cohesive user experience.
- **Bold Visuals**: A gradient background and a large strawberry image create an eye-catching focal point, with a prominent "berries" text overlay.

## Technologies Used

- **React**: For building reusable UI components and managing state (e.g., sidebar toggle).
- **Vite**: As the build tool for fast development and optimized production builds.
- **Tailwind CSS**: For utility-first styling, enabling rapid design with responsive layouts.
- **Material-UI (MUI) Icons**: For clean, modern social media icons in the sidebar.
- **TypeScript**: Used in `.tsx` files for type-safe React components.
- **Cloudflare Pages**: For deploying the static site, making it accessible online.

## File Structure

- **`Main.tsx`**: The main component that orchestrates the page layout, including the navbar, central content, and sidebar.
- **`Navbar.tsx`**: A navigation bar component with a hamburger menu to toggle the sidebar.
- **`CentralComponent`**: Displays the core content, including a strawberry image, text, and a "Shop Now" button.
- **`SideBar`**: A sidebar component with social media icons (GitHub, Instagram, LinkedIn).
- **`index.css`**: Custom CSS for text and image shadow effects, layered on top of Tailwind CSS.
- **`App.tsx`**: The root component that renders the `Main` component.

## Installation and Setup

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd strawberry-store
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## Deployment

The project is deployed using **Cloudflare Pages**. The live site can be accessed at: [https://strawberry-iog.pages.dev/](https://strawberry-iog.pages.dev/).

To deploy your own version:
1. Push your code to a GitHub repository.
2. Connect the repository to Cloudflare Pages.
3. Configure the build settings (e.g., `npm run build` for Vite).
4. Deploy and access the generated URL.

## Lessons Learned

- **React Component Structure**: Practiced creating modular, reusable components like `Navbar` and `SideBar`.
- **Tailwind CSS**: Gained experience with utility-first CSS to build responsive layouts quickly.
- **State Management**: Used React's `useState` hook to manage the sidebar's visibility.
- **MUI Icons**: Learned to integrate Material-UI icons for a polished look.
- **Vite**: Explored Vite's fast development server and optimized build process.
- **Deployment**: Successfully deployed a static site using Cloudflare Pages.

## Future Improvements

- Add a product catalog with strawberry-themed merchandise (e.g., images, descriptions, prices).
- Implement a shopping cart feature using React state or a library like Redux.
- Enhance accessibility with ARIA labels and keyboard navigation.
- Add animations for smoother transitions (e.g., sidebar slide-in effect).
- Integrate a backend to handle real product data and purchases.

## Contributing

This is a personal practice project, but feedback is welcome! Feel free to open an issue or submit a pull request with suggestions or improvements.

## Acknowledgments

- Thanks to the React and Vite communities for their excellent documentation.
- Tailwind CSS for making styling intuitive and efficient.
- Material-UI for providing high-quality icons.
- Cloudflare Pages for seamless deployment.

Happy coding, and enjoy the strawberries! 🍓