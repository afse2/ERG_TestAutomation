const path = require("path");
module.exports = {
    default: {
        tags: process.env.TAGS,
        formatOptions: {
            snippetInterface: "async-await"
        },
        paths: [
            "src/test/features/"
        ],
        //publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/support/hooks/hooks.ts",
            "src/support/world.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "junit:test-results/cucumber_report.xml",
            "rerun:@rerun.txt"
        ],
        parallel: 1,
    },
    rerun: {
        formatOptions: {
            snippetInterface: "async-await"
        },
        //publishQuiet: true,
        dryRun: false,
        require: [
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts",
            "src/support/world.ts"
        ],
        requireModule: [
            "ts-node/register"
        ],
        format: [
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "junit:test-results/cucumber_report.xml",
            "rerun:@rerun.txt"
        ],
        parallel: 2
    }
}