const OgQuotes = [
  { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
  { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
  { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
  { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
  { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

// siempre usar ref para variables que vayan a cambiar

// v-for básicamente es lo siugiente:
// for (q of quotes){
//   console.log(q.author)
// }

const { createApp, ref, computed } = Vue;
const app = createApp({


  setup() {

    const showAuthor = ref(false);
    const quotes = ref(OgQuotes);
    const newMessage = ref("")

    const totalQuotes = computed(() => {
      return quotes.value.length;
    })

    const handleToggleAuthor = () => {
      showAuthor.value = !showAuthor.value
    }
    const addQuote = () => {
      // así no vale pq quotes es una variable reactiva
      // quotes.unshift("holaa")
      // se debe apuntar al value
      quotes.value.unshift({
        quote: newMessage.value,
        author: "Sebas"
      })
      newMessage.value = ""
    }





    return {
      quotes,
      showAuthor,
      handleToggleAuthor,
      addQuote,
      totalQuotes,
      newMessage,
    }
  }


});


app.mount("#myApp")