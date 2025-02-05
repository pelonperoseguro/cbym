import Nunjucks from "nunjucks";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css/style.css");
  eleventyConfig.addPassthroughCopy("src/js/index.js");
  eleventyConfig.addPassthroughCopy("src/assets");
  
  eleventyConfig.setServerOptions({
    port:4321,
    showAllHosts: true
  })

  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("src/_includes"),
  );

  eleventyConfig.setLibrary("njk", nunjucksEnvironment);
  eleventyConfig.addWatchTarget("src/css/**/*.css");

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
}

export const config = {
  dir: {
    input: "src",
    output: "docs",
  },
};
