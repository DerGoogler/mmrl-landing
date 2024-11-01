const { publish } = require("gh-pages");
const { config } = require("./package.json");
const { readFileSync, statSync, readdirSync } = require("fs");
const { resolve, basename, extname } = require("path");
require("dotenv").config({ path: resolve(__dirname, "local.properties") });
const { program } = require("commander");
const { spawn } = require("child_process");

program
  .command("website")
  .description("Publishes the app to the provided repo")
  .option("-p, --prerelease", "Publish the app as a prerelease")
  .option("-r, --remote [REMOTE]", "Use another remote", "mmrl-web")
  .option("-b, --branch [BRANCH]", "Use another branch", "master")
  .option("-o, --owner [OWNER]", "Use repo owner", "DerGoogler")
  .option("-n, --name [NAME]", "Use repo name", "mmrl-web")
  .option("-l, --blog <BLOG>", "Add a blog link to the release (Placeholder)")
  .action((opt) => {
    const __dir = ["app/src/main/assets/www"];
    publish(resolve(__dirname, ...__dir), {
      branch: opt.branch,
      repo: `https://github.com/${opt.owner}/${opt.name}.git`,
      dest: opt.prerelease ? "prerelease" : ".",
      nojekyll: true,
      cname: config.cname,
      remote: opt.remote,
      message: "CLI Auto-generated MMRL Web Update",
      user: {
        name: "github-actions[bot]",
        email: "github-actions[bot]@users.noreply.github.com",
      },
      add: true,
    });
  });

program.parse();