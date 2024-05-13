OptilLine - Code Optimizer/Debugger
----------------------------------------------------
INTRODUCTION
--------------------------
Optiline is an AI-powered code optimizer/debugger that alters code based on user instructions and preferences. Its purpose is to allow its users to quickly find suggestions on how to fix their code in a single all-encompassing web application and provide a streamlined alternative to existing generative AI tools.

It offers users the ability to debug, optimize, or refactor their code, as well as the option to add inline comments and automatically create a command to download any package dependencies.

INSTALLATION INSTRUCTIONS
---------------------------------------

Ensure the latest versions of nvm and node.js are installed: https://nodejs.org/en/download/

Clone this repository into your local machine from the command line with the following command: 
$ git clone https://github.com/JohnR425/Optiline-1.0.git

Navigate to the folder you cloned the repository to and switch to the Optiline-1.0 directory: 
$cd Optiline-1.0

Then install the required dependencies: $npm install

To run optiline run the command: $npm run testServer

Access the webpage by entering “http://localhost:4999” into your browser’s search bar

CONFIGURATION
--------------------------
Obtain a Google Gemini API Key (May not work with UMass email addresses): https://ai.google.dev/gemini-api/docs/api-key

Then create a .env file in the root directory in Optiline-1.0 with the following line: API_KEY=YOUR_API_KEY


TESTING INSTRUCTIONS
---------------------------------------
From the command line, cd into the Optiline-1.0 directory: $cd Optiline-1.0

Install vitest: $npm i vitest 

For unit testing, run $npm test 


VIDEO 
---------------------------------------
https://drive.google.com/file/d/1eSsH-CfE_1v1DdXLK_eIxmvkeRFrh10R/view?usp=sharing

