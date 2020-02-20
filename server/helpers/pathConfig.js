import fs from "fs";
import path from "path";

// retrieves the contents from a file on the file system
export const getFileContents = (files, folder = "") => {
  // concat inline styles for document <head>
  let flattenedContents = "";
  files.forEach(function(file) {
    flattenedContents += fs.readFileSync(
      path.resolve(__dirname) + folder + file
    );
  });
  return flattenedContents;
};

export const defaultPathConfigLtr = {
  view: "index",
  inlineStyles: getFileContents(
    ["/inline-ltr.css"],
    `/../../${process.env.OUTPUT_FOLDER}`
  ),
  remoteStyles: [
    "https://fonts.googleapis.com/css?family=Noto+Sans:400,700",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
    "https://fonts.googleapis.com/css?family=Muli:800",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "/style-ltr.css"
  ],
  vendorScripts: ["/vendors~main.js"],
  remoteScripts: ["/main.js"]
};

export const defaultPathConfigRtl = {
  view: "index",
  inlineStyles: getFileContents(
    ["/inline-rtl.css"],
    `/../../${process.env.OUTPUT_FOLDER}`
  ),
  remoteStyles: [
    "https://fonts.googleapis.com/css?family=Noto+Sans:400,700",
    "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700",
    "https://fonts.googleapis.com/css?family=Muli:800",
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "/style-rtl.css"
  ],
  vendorScripts: ["/vendors~main.js"],
  remoteScripts: ["/main.js"]
};
