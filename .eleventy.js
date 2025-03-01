
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("scripts");
  return {
      dir: {
          input: ".", // Use the root directory instead of "src"
          output: "_site",
      },
  };
};
