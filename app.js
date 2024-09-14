const { createApp, ref } = Vue;

const app = createApp({
  template: `
  <h1> Hola mundo </h1>
  <h2> desde Vue.js</h2>
  `
})

app.mount("#myApp")