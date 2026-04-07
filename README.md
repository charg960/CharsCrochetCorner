# CSC 319: CharsCrochetCorner (Full-Stack Interactive Project Gallery)
Project contributions from Charlotte Dickson.


## Purpose
To create a web platform for displaying and managing crochet projects, patterns, and tutorials. Built with React, PHP, CSS, and JSON, it combines interactive UI with a simple backend to organize and showcase creative work.

## Overview
This project showcases crochet projects with step-by-step patterns, interactive UI, and data-driven components. It emphasizes React component design, backend integration, and responsive web design.

## Audience:
- Crochet lovers looking for patterns
- Students learning full-stack web development
- Developers exploring React + PHP + JSON integration

# Features
Project Gallery: Browse crochet projects with images, difficulty, materials, and size
Pattern Pages: Step-by-step pattern images for each project
Interactive Navigation: React routing for project details, collections, and tips
Data Management: PHP + JSON backend to fetch project details
Modular Components: Separate React components for top bar, project details, directions, and contact
Tech Stack
Languages: JavaScript, PHP, CSS
Frameworks/Libraries: React, React Router
Data/Storage: JSON files for project data, PHP backend for fetching
Tools: VS Code, Browser DevTools, Localhost server (XAMPP/MAMP)

**Project Structure**
/src
  /components
    - ProjectDetail.js
    - TopBar.js
    - AddProject.js
    - DirectionsPage.js
  /pages
    - Home.js
    - Collections.js
    - AbbreviationsAndTips.js
    - ContactMe.js
  /css
    - App.css
/public
  /images
    - Project images, logos
/phpFiles
  - get_projects.php
  - add_project.php
  - update_project.php
  - delete_project.php
App.js – Main routing and page rendering
get_projects.php – Fetches project data from backend
CSS – Styles UI components and galleries
JSON – Stores project metadata like materials, difficulty, and images

## Usage
- Clone the repository:
git clone https://github.com/CHARG960/CharsCrochetCorner.git
cd CharsCrochetCorner
- Start your PHP server (e.g., XAMPP or MAMP) to serve /phpFiles
- Install React dependencies and start:
npm install
npm start
- Navigate to http://localhost:3000 to explore the crochet project website.

# Contact
Name: Charlotte Dickson
GitHub: CHARG960
LinkedIn: Charlotte Dickson
Email: charlotte.dickson@my.maryvillecollege.edu
