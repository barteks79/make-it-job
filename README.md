# MakeITJob - Website for IT developers looking for jobs

<img src="/public/images/offers-fullscreen.jpg" />

## 💻 Tech Stack

<div>
  
  ![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat)
  ![PostgreSQL Badge](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=fff&style=flat)
  ![Drizzle Badge](https://img.shields.io/badge/Drizzle-C5F74F?logo=drizzle&logoColor=000&style=flat)
  ![Better Auth Badge](https://img.shields.io/badge/Better%20Auth-FFF?logo=betterauth&logoColor=000&style=flat)
  ![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
  ![shadcn/ui Badge](https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=flat)
  
</div>

## ⚙️ Installation

> [!WARNING]  
> Application is still in **development**. Some features might not be available or might not work as intended.



#### Follow these steps to run the app on your local environment.

  *You must install* `Node.js`, `Git` *and* `Docker Desktop` *before running scripts below.*
  
  1. Clone the Repository 

     ```bash
     
     git clone https://github.com/barteks79/make-it-job.git
     
     ```
    
  2. Install Dependencies

     ```bash
     
     npm install
     
     ```

  3. Set up variables in `.env` file

     ```env

     # Database
     DATABASE_URL=
     POSTGRES_PASSWORD=
     POSTGRES_DB=

     # Auth
     BETTER_AUTH_SECRET=
     BETTER_AUTH_URL=

     # OAuth
     GOOGLE_CLIENT_ID=
     GOOGLE_CLIENT_SECRET=
     GITHUB_CLIENT_ID=
     GITHUB_CLIENT_SECRET=

     ```

  4. Open `Docker Desktop` and run:

     ```bash

     docker-compose up

     ```

  5. In other terminal, run:

     ```node

     npm run dev

     ```
     
  6. Visit <a src="http://localhost:3000">http://localhost:3000</a> in your browser.
     


      
