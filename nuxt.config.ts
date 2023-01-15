// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  server: {
    port: 8000
  },
  css: [
    "~/assets/bootstrap/css/bootstrap.min.css",
    "~/assets/fonts/fontawesome-all.min.css",
    "~/assets/fonts/font-awesome.min.css",
    "~/assets/css/Search-Field-With-Icon.css",
    "~/assets/css/styles.css",
 
  ],

  app:{
    head:{
      title: 'OrderApp',
      meta:[
        {
          name:'description', content: 'Order Application'
        }
      ],
      link:[
        {
          rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap'

        }
      ]
    },

    
    
  },

  

  

});
