// Import necessary modules  
import fs from "fs";
import path from "path";

/**
 * Asynchronously reads directories and files recursively under the given path, excluding "node_modules".
 *
 * @param {string} dirPath - The path to the directory to read.
 * @returns {Promise<Object>} - A promise that resolves to an object where the keys are directory names and values are objects containing subdirectories and files.
 */
async function readDirectoriesAndFilesRecursively(dirPath) {
  try {
    const files = await fs.promises.readdir(dirPath, { withFileTypes: true });
    const result = { directories: {}, files: [] };

    for (const file of files) {
      if (file.isDirectory() && file.name !== "node_modules") {
        const subDirPath = path.join(dirPath, file.name);
        result.directories[file.name] = await readDirectoriesAndFilesRecursively(subDirPath); // Recursively read subdirectories
      } else if (file.isFile()) {
        result.files.push(file.name); // Add file to the list
      }
    }

    return result;
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return { directories: {}, files: [] }; // Return empty structure on error
  }
}

/**
 * Writes the directory structure and files to an HTML file with headings and subheadings, recursively.
 * Hyperlinks all .js, .ts, and .tsx files with their relative paths.
 *
 * @param {string} parentDir - The parent directory name.
 * @param {Object} structure - The object containing the directory structure and files.
 * @param {fs.WriteStream} fileStream - The write stream for the HTML file.
 * @param {number} depth - The current depth of the directory tree (used for indentation).
 * @param {string} currentPath - The current relative path for proper hyperlinking.
 */
function writeStructureAndFilesToHTML(parentDir, structure, fileStream, depth = 1, currentPath = "") {
  const relativePath = path.join(currentPath, parentDir);

  if (depth === 1) {
    fileStream.write(`<h1>${parentDir.toUpperCase()}</h1>\n<ul>\n`); // Write parent directory as a heading
  } else {
    fileStream.write(`<li><strong>${parentDir}</strong>\n<ul>\n`); // Write subdirectory
  }

  // List files in the current directory
  if (structure.files.length > 0) {
    for (const file of structure.files) {
      const filePath = path.join(relativePath, file);
      if (file.endsWith(".js") || file.endsWith(".ts") || file.endsWith(".tsx")) {
        // Hyperlink .js, .ts, and .tsx files with relative path
        fileStream.write(`<li><a href="${filePath}">${file}</a></li>\n`);
      } else {
        fileStream.write(`<li>${file}</li>\n`); // Write other files as list items
      }
    }
  }

  // Recursively write subdirectories and their files
  for (const [dir, subStructure] of Object.entries(structure.directories)) {
    writeStructureAndFilesToHTML(dir, subStructure, fileStream, depth + 1, relativePath);
  }

  fileStream.write("</ul>\n");
  if (depth > 1) {
    fileStream.write("</li>\n"); // Close list item for subdirectories
  }
}

/**
 * Main function to read and write directory structure and files recursively under 'backend' and 'frontend' to an HTML file.
 * Hyperlinks all .js, .ts, and .tsx files.
 */
async function main() {
  const baseDirs = ["backend", "frontend"];
  const filePath = path.join(process.cwd(), "directory_structure.html"); // Output HTML file

  // Create a writable stream
  const fileStream = fs.createWriteStream(filePath, { flags: "w" });

  // Write HTML boilerplate
  fileStream.write(`<!DOCTYPE html>\n<html>\n<head>\n<title>Directory Structure</title>\n</head>\n<body>\n`);

  for (const dir of baseDirs) {
    try {
      const structure = await readDirectoriesAndFilesRecursively(dir);
      writeStructureAndFilesToHTML(dir, structure, fileStream);
    } catch (error) {
      console.error(`Failed to process directory ${dir}:`, error);
    }
  }

  // Close HTML tags
  fileStream.write(`</body>\n</html>\n`);

  fileStream.end(() => {
    console.log("Directory structure with files written to directory_structure.html");
  });
}

// Run the main function
main();
