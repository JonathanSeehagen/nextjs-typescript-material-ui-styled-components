module.exports = {
  presets: ["next/babel"],
  plugins: [["styled-components", { "ssr": true }]]
};

// Para que o node entenda o styled-components
// e possa renderiza-lo do lado do servidor (SSR).
