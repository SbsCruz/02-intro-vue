const { createApp, ref } = Vue;

const app = createApp({
  // template: `
  // <h1> {{ message }}</h1> 
  // <h2> desde Vue.js</h2>
  // <p> {{author}}</p>
  // `, // para poner variables en el template, doble llave

  // esta parte se ejecuta una vez la app se monta
  setup() {

    // con esto no se puede cambiar dinámicamente
    // const message = "hola mundo desde setup"

    // para solucionar se usa ref
    const message = ref("hola mundo desde app.js")

    const author = ref("Sebas Cruz")

    // setTimeout(() => {
    //   message.value = "me cambié porque usé ref";
    //   author.value = "perdón, es SEBASTIÁN CRUZ";
    // }, 2000)

    const changeName =() =>{
      message.value = "Hola, me cambié por una función"
      author.value = "Sebastián Cruz"
    }

    return {
      changeName,
      message,
      author,
    }; //siempre exportar lo que se va a mostrar

  }
})

app.mount("#myApp")