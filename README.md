I began by analyzing the project requirements and planning the necessary steps for implementation.

Environment Setup
I initialized a new React Vite application and installed several key libraries:

Tailwind CSS for utility-first styling

Lucide icons, which I preferred over react-icons due to their clean and consistent design

React Query combined with Axios for efficient data fetching and caching

Design Inspiration
Before diving into development, I spent some time exploring design ideas on Dribbble, Google, and various existing websites. Once I found a concept that stood out, I began working on the implementation.

Theme Switcher
The first component I built was the theme switcher, since I wanted users to be able to toggle between dark and light modes from the start.

Layout & Title
With the theme switcher in place, I moved on to designing the layout. I also focused on the page title, which is a key visual element and often the first thing users see.

Skip Card Component
Next, I started working on the Skip Card component. I drew inspiration from multiple designs I found during research and tailored it to include important features, such as warnings for skips.

Once the card design felt solid, I took time to refactor the code—focusing on reusability and readability, which is crucial in larger applications.

Data Fetching
With the UI foundation ready, I implemented data fetching using React Query and Axios. I created a generic API utility class to streamline fetching data for different entities.

Using Postman, I examined the API response structure and built a corresponding Skip entity. I noticed that certain information like price with VAT and image URLs wasn't explicitly provided, so I created a separate type to handle computed fields.

To optimize performance, I used the useMemo hook to compute values like image URLs and prices with VAT only when the data changes, avoiding unnecessary recalculations on every render.

Skip Restrictions
Once the data was displayed on the Skip Cards, I added conditions to disable selection for certain skips based on the allows heavy waste flag.

Drawer Implementation
With the cards working as expected, I moved on to implementing the drawer, which was a new challenge for me. I searched for examples online, found a basic implementation, and adapted it to our needs. I had to modify the layers to ensure users could still interact with skip cards even when the drawer was open.

State Management with Context
To handle skip selection and share data between components (like the drawer), I created a Skip Context. This allowed me to avoid prop drilling and even persist selected skip data in local storage for a better user experience.

I applied the same context approach for theme management, allowing users’ theme preferences to be saved and restored.

Stepper Navigation
With the core logic in place, I developed the header stepper to show user progress through the booking process. I started from an online example and adjusted it to fit our needs—especially making it responsive for mobile devices.

Responsive Design
Although I hadn't mentioned it earlier, I follow a mobile-first development approach. Tailwind CSS made it seamless to ensure the entire application looks and works well across different screen sizes.

Thanks for reading! 
This project gave me the opportunity to apply both design and development skills, and I'm proud of the result.
