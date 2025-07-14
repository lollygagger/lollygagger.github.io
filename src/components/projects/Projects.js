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

    "interview-prep-RAG-pipeline": {
        name: "Interview Prep RAG Pipeline",
        description: "An interview preparation Retrieval-Augmented Generation (RAG) pipeline that ingests interview prep" +
            " documents, indexes them with embeddings, and enables precise, context-aware question answering on the prep" +
            " material via a locally hosted LLM such as Llama3.",
        repoLink: "https://github.com/lollygagger/Interview-Prep-RAG/",
        startDate: "July 2025",
        skills: [
            "Python",
            "Ollama",
            "Langchain",
            "FAISS",
            "HuggingFace",
            "RAG Pipeline",
            "AI"
        ]
    },

    "MISHA": {
        name: "Multispectral Imaging System for Historical Artifacts(MISHA)",
        description: "MISHA is RIT's budget multispectral imaging platform. I have been developing new features such as adding support for true color capture and a transmissive light.",
        repoLink: "https://github.com/palimpsest-pursuers",
        startDate: "January 2025",
        endDate: "July 2025",
        skills: [
            "Python",
            "Imaging systems",
            "Image Processing",
            "PyQt"
        ]
    },

    "qpm": {
        name: "Qilletni Package Manager",
        description: "A package manager and registry for the Qilletni programming language.",
        repoLink: "https://github.com/lollygagger/QilletniPackageManager",
        startDate: "February 2024",
        endDate: "Present",
        skills: [
            "Java",
            "Cloudflare R2 Buckets",
            "Package Management",
            "Versioning",
            "Registry Management",
            "Lockfile Generation & Maintenance"
        ]
    },

    "qpm-metadata-signer-api": {
        name: "QPM metadata/signer API",
        description: "A RESTful service for securely generating pre-signed urls and managing a metadata database for " +
            "tracking download data, existing packages with their metadata, and sub-dependency relationships between packages",
        repoLink: "https://github.com/lollygagger/QilletniPackageManager-Signer-API",
        startDate: "February 2025",
        endDate: "Present",
        skills: [
            "Python",
            "Flask",
            "Docker containerization",
            "REST APIs",
            "PostgreSQL",
            "Cloudflare R2"
        ]
    },

    "educe": {
        name: "Educe.club",
        description: "Educe is an application for idea management. It allows users to store ideas in cards which are grouped into rows and columns to allow ideas to connect to other ideas. Educe is my senior project and I have been working on this with a team of 4 other developers gathering requirements from our sponsors and following strict software processes to quickly develop the application.",
        liveLink:"https://educe.club",
        startDate: "August 2024",
        endDate: "July 2025",
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

    "BeatDocs": {
        name: "BeatDocs",
        description: "BeatDocs is a browser extension for turning google docs into a fully functional step sequencer." +
            "It supports creating custom synths, custom effects, and external sampling to allow for extensive customization" +
            "and limitless creativity. With 5 pre-made synths and 10 pre-made effects its easy to get started making music!",
        repoLink: "https://github.com/lollygagger/BeatDocs",
        liveLink: "https://devpost.com/software/beatdocs",
        startDate: "February 2025",
        skills: [
            "TypeScript",
            "Browser Extension Development",
            "tone.js",
            "Google Docs API"
        ]
    },


    "food-in-sight": {
        name: "Food In-Sight",
        description: "An AWS powered application used for analyzing foods and warning users about possible issues with " +
            "their dietary restrictions. Food In Sight allows users to either scan food labels to look for any conflicts " +
            "with their dietary restrictions or just take a picture of their food and use our custom trained Rekognition " +
            "model to determine the ingredients present. ",
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
        description: "An application I made for testing deployment with AWS Amplify. This is a basic application for tracking expenses and displaying the data neatly.",
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
        skills: [
            "ChatGPT API",
            "OpenAI Speech-to-text",
            "Python"
        ]
    },

    "rate-my-classmate": {
        name: "Rate My Classmate",
        description: "With all the group projects that students are expected to do, there shouldn't have to be any guessing about the " +
            "quality of your groupmates. Rate My Classmate provides a service for rating your classmates just like Ratemyprofessor.com " +
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
        description: "Many students struggle with what to eat at RIT, to help this we made Hot Foods. Hot foods gets the " +
            "latest options from RIT dining every morning using the Net Nutrition Scraper project and presents them to " +
            "users as options for what to eat. Food options are provided in a swiping style interface with nutrition and " +
            "allergen information present for each item. User's previous swiping choices are remembered and using a basic " +
            "regression algorithm Hot Foods is able to remember what people like to provide personalized suggestions.",
        repoLink: "https://github.com/RubbaBoy/hot_foods",
        liveLink: "https://devpost.com/software/hot-foods",
        startDate: "February 2023",
        skills: [
            "Java",
            "Spring Boot",
            "Full Stack Development",
            "Web and Mobile Applications",
            "API Development",
            "PostgreSQL",
            "Machine Learning",
            "Big Data"
        ]
    },

    "net-nutrition-scraper": {
        name: "Net Nutrition Scraper",
        description: "A scraper that I made for my project Hot Foods in order to automatically scrape information from RIT's food " +
            "database every day to populate the database needed for Hot Foods.",
        repoLink: "https://github.com/lollygagger/NetNutritionScraper",
        startDate: "February 2023",
        skills: [
            "Java",
            "Gradle",
            "Selenium",
            "Web Scraping",
            "Big Data"
        ]
    },

    "music-maps": {
        name: "Music Maps",
        description: "Music Maps allows you to visualize music listening data. Connect with your friends and see their " +
            "listening activity on the map or just look at the local, regional, state, country, and global listening trends. " +
            "Music Maps combines location and listening data to help you see what people are listening to anywhere in the world. " +
            "Music Maps connects with both spotify and apple music to allow for all listeners to join the map regardless of their " +
            "preferred streaming service.",
        repoLink: "https://github.com/RubbaBoy/MusicMap",
        liveLink: "https://devpost.com/software/music-map-oc2gwx",
        startDate: "November 2022",
        skills: [
            "Python",
            "Flask",
            "API Development",
            "Web and Mobile Applications",
            "Geolocation data",
            "Data Visualization",
            "Big Data",
            "Full Stack Development",
            "PostgreSQL"
        ]
    },

    "circle-work": {
        name: "Circle Work",
        description: "Do you struggle with motivation? Try Circle Work, an intuitive community platform for getting stuff " +
            "done. Circle work allows you to join a 'circle' of friends who all commit to completing their tasks. At the " +
            "start of every month, you put in $1 as a financial incentive to complete your work. If you finish all your tasks " +
            "you get your dollar back but if you don't then the dollar is added to a pool to donate to charity. Circle Work " +
            "combines intrinsic and extrinsic motivation to push users to complete everything they need to and to maintain " +
            "health and productive habits. If you and your circle have the highest task completion percentage of the month " +
            "then you get to pick one of our pre-approved charities to send the money to!",
        repoLink: "https://github.com/RubbaBoy/CircleWork",
        liveLink: "https://devpost.com/software/circle-work",
        startDate: "March 2022",
        skills: [
            "Java",
            "Spring Boot",
            "Full Stack Development",
            "Web and Mobile Applications",
            "API Development",
            "PostgreSQL"

        ]
    },

    "streaming-with-strangers": {
        name: "Streaming With Strangers",
        description: "How much time do you spend watching TV alone? Have you ever wanted to watch with more people at the " +
            "same time? Streaming with strangers is a new streaming app that allows strangers to watch movies and shows together " +
            "with a shared playback and a live chat to talk about what you're watching. ",
        repoLink: "https://github.com/RubbaBoy/streaming_with_strangers",
        liveLink: "https://devpost.com/software/streaming-with-strangers",
        startDate: "February 2022",
        skills: [
            "ReactJS",
            "Javascript",
            "GUI Design(UI/UX)",
            "Python",
            "Flask",
            "SQL",
            "psycopg2",
            "PostgreSQL",
            "Video Streaming",
            "Real Time Messaging"
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
            "psycopg2",
            "PostgreSQL",
        ]
    },

    "venmo-data-parsing": {
        name: "Venmo Data Parsing",
        description: "basic application to parse out venmo data from generated CSV. This project allows users to visualize " +
            "where most of their money is being sent to and where most of their money is coming from.",
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
