#!/usr/bin/env node

import prompts from "prompts";
import fs from "fs-extra";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Enter your project name:",
      validate: name => (name ? true : "Project name cannot be empty."),
    },
  ]);

  const projectName = response.projectName;
  const projectPath = path.join(process.cwd(), projectName);

  try {
    console.log(`\nCreating project directory: ${projectName}`);
    fs.ensureDirSync(projectPath);

    console.log("\nScaffolding project...");
    const templatePath = path.join(__dirname, "template");
    fs.copySync(templatePath, projectPath);

    console.log("\nInstalling dependencies...");
    execSync("npm install", { stdio: "inherit", cwd: projectPath });

    console.log("\nProject setup complete!");
    console.log(`\nTo get started:\n  cd ${projectName}\n  npm run dev`);
  } catch (error) {
    console.error("Error creating project:", error.message);
  }
})();
