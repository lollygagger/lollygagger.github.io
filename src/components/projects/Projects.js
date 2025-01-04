const projects = {

    "personal-site": {
        name: "Personal Site",
        description: "This website!",
        repoLink: "https://github.com/lollygagger/lollygagger.github.io",
        liveLink: "https://maxburdett.com",
        startDate: "December 2024",
        endDate: "Present",
        skills: [
            "Javascript",
            "ReactJS",
            "Cloudflare Hosting",
            "Website Deployment"
        ]
    },

    "educe": {
        name: "Educe.club",
        description: "Educe is an application for idea management. It allows users to store ideas in cards which are grouped into rows and columns to allow ideas to connect to other ideas. Educe is my senior project and I have been working on this with a team of 4 other developers gathering requirements from our sponsors and following strict software processes to quickly develop the application.",
        liveLink:"https://educe.club",
        startDate: "August 2024",
        endDate: "Present",
        skills: [
            "Leadership",
            "Project Management",
            "Agile",
            "Scrum",
            "ReactJS",
            "TypeScript",
            "AWS Amplify",
            "AWS Cognito",
            "GraphQL"
        ]
    },

    "food-in-sight": {
        name: "Food In-Sight",
        description: "An AWS powered application used for analyzing foods and warning users about possible issues with their dietary restrictions",
        repoLink: "https://github.com/lollygagger/Food-In-Sight",
        startDate: "August 2024",
        endDate: "December 2024",
        skills: [
            "Leadership",
            "Terraform",
            "Infrastructure As Code(IAC)",
            "ReactJS",
            "TypeScript",
            "Vite",
            "AWS S3",
            "AWS Lambda",
            "AWS API Gateway",
            "DynamoDB",
            "AWS Rekognition",
            "Machine Learning",
            "AWS Textract",
            "AWS Translate",
            "AWS Cognito",
            "AWS Amplify"
        ]
    },

    "expense-tracker": {
        name: "Expense Tracker",
        description: "An application I made for testing deployment with AWS Amplify. This is a basic application for tracking expenses and displaying the data neatly",
        repoLink: "https://github.com/lollygagger/ExpenseTracker",
        startDate: "September 2024",
        endDate: "October 2024",
        skills: [
            "AWS Amplify",
            "TypeScript",
            "ReactJS",
            "AWS Cognito"
        ]
    },

    "dbmdbms": {
        name: "DBMDBMS (Da Best Multiple Database Management System)",
        description: "DBDBMS was a project created for BrickHack X which start off with a joke question: \"Whats the best way to use AI to orchestrate databases?\" " +
            "From that question we created a DBMS powered entirely through GPT-4. This system would take in the type of " +
            "data that you wished to store, feed that data into a custom GPT to determine the best type of database to store " +
            "the data in, look to see if there was an existing database of that type, if there was not then it would use " +
            "our custom database startup service automatically spin up a VM using Proxmox, download the required packages " +
            "to start up the database then host it all automatically. If there was already a database of that type it would" +
            "simply add the data to the database. While this idea was ridiculous it actually worked and we were able to " +
            "semi consistently query data. This application also allowed queries to be made from plain english where we would " +
            "automatically detect the type of data that you were trying to query and we would form a query for you in the appropriate " +
            "format for the database that we determined the data should be stored in.",
        repoLink: "https://github.com/RubbaBoy/DBMDBMS",
        liveLink: "https://devpost.com/software/dbmdbms",
        startDate: "February 2024",
        endDate: "February 2024",
        skills: [
            "Database management",
            "VM Orchestration",
            "Proxmox",
            "ChatGPT API",
        ]
    },

    "open-source-audience": {
        name: "Open Source Audience",
        description: "Have you ever wanted a live sitcom audience everywhere you go? If so you need Open Source Audience! " +
            "This was a project created for a hackathon where we used OpenAi services to listen, transcribe, analyze, and react " +
            "to conversation in real time. While listening to your conversation if Open Source Audience detected a joke, it would then " +
            "rate the joke on a scale of 1-10 and play recordings of live studio audiences depending on the rating.",
        repoLink: "https://github.com/RubbaBoy/open-source-audience",
        startDate: "September 2023",
        endDate: "September 2023",
        skills: [
            "ChatGPT API",
            "OpenAI Speech-to-text",
            "Python"
        ]
    },

    "rate-my-classmate": {
        name: "Rate My Classmate",
        description: "With all the group projects that students are expected to do, there shouldn't have to be any guessing about the " +
            "quality of your groupmates. Rate My Classmate provides a service for rating your classmates just like Ratemyprofessor.com" +
            "to make sure that you don't get stuck doing a group project by yourself. This project was a class project. " +
            "During this project I acted as Project Manager leading scrum meetings and making sure that we followed agile practices. " +
            "While I was the project manager I also was programming and I lead the development of the backend API",
        repoLink: "https://github.com/jqm4954/rate-my-classmate",
        liveLink: "https://rate-my-classmate.vercel.app/",
        startDate: "January 2023",
        endDate: "May 2023",
        skills: [
            "TypeScript",
            "Next.js",
            "ReactJS",
            "Reactstrap",
            "CI/CD Pipelines",
            "Vercel Deployment"
        ]
    },

    "hot-foods": {
        name: "Hot Foods",
        description: "",
        repoLink: "https://github.com/RubbaBoy/hot_foods",
        liveLink: "https://devpost.com/software/hot-foods",
        startDate: "February 2023",
        endDate: "February 2023",
        skills: [
            ""
        ]
    },

    "net-nutrition-scraper": {
        name: "Net Nutrition Scraper",
        description: "A scraper that I made for my project Hot Foods in order to automatically scrape information from RIT's food " +
            "database every day to populate the database needed for Hot Foods.",
        repoLink: "https://github.com/lollygagger/NetNutritionScraper",
        startDate: "February 2023",
        endDate: "February 2023",
        skills: [
            "Java",
            "Gradle",
            "Selenium",
            "Web Scraping"
        ]
    },

    "music-maps": {
        name: "Music Maps",
        description: "",
        repoLink: "https://github.com/RubbaBoy/MusicMap",
        liveLink: "https://devpost.com/software/music-map-oc2gwx",
        startDate: "November 2022",
        endDate: "November 2022",
        skills: [
            ""
        ]
    },

    "circle-work": {
        name: "Circle Work",
        description: "",
        repoLink: "https://github.com/RubbaBoy/CircleWork",
        liveLink: "https://devpost.com/software/circle-work",
        startDate: "March 2022",
        endDate: "March 2022",
        skills: [
            ""
        ]
    },

    "streaming-with-strangers": {
        name: "Streaming With Strangers",
        description: "",
        repoLink: "https://github.com/RubbaBoy/streaming_with_strangers",
        liveLink: "https://devpost.com/software/streaming-with-strangers",
        startDate: "February 2022",
        endDate: "February 2022",
        skills: [
            ""
        ]
    },


    "cards-against-humanity": {
        name: "Cards Against Humanity",
        description: "A react implementation of Cards Against Humanity for improving my proficiency with react and javascript",
        repoLink: "https://github.com/lollygagger/Cards-Against-Humanity",
        startDate: "December 2021",
        endDate: "February 2022",
        skills: [
            "ReactJS",
            "Javascript",
            "GUI Design(UI/UX)",
            "Python",
            "Flask",
            "SQL",
            "psycopg2"
        ]
    },

    "venmo-data-parsing": {
        name: "Venmo Data Parsing",
        description: "basic application to parse out venmo data from generated CSV",
        repoLink: "https://github.com/lollygagger/venmo-data-parsing",
        startDate: "August 2021",
        endDate: "December 2021",
        skills: [
            "Python",
            "CSV Parsing"
        ]
    }

}

export default projects
