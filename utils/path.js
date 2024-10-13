// creating a helper folder for storing the  path and access it from anywhere

const path = require('path'); // Import the path module to work with file and directory paths

const rootDir = path.dirname(require.main.filename); // Get the directory of the main entry file (project root directory)

module.exports = rootDir; // Export the root directory so it can be used in other files
