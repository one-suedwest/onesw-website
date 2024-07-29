import { existsSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load the JSON file
import redirects from './redirects.json' with { type: "json" };

// Define the target directory

// __filename and __dirname equivalents in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pagesDir = join(__dirname, 'src', 'pages');

function createFiles() {
    // Ensure the target directory exists
    if (!existsSync(pagesDir)){
        return;
    }

    // Define the template content
    const template = (link) => `---
import Redirect from "../components/Redirect.astro";
---

<Redirect to="${link.to}" />
    `;

    // Generate files for each link
    redirects.forEach((link, index) => {
        const fileName = `${link.path}.astro`;
        const filePath = join(pagesDir, fileName);
        writeFileSync(filePath, template(link), 'utf8');
        console.log(`Created ${filePath}`);
    });
}

createFiles();
