Учебный проект по созданию приложения на vue + vuetify
https://medium.com/javascript-in-plain-english/implement-movie-app-with-vue-vuetify-axios-open-movie-database-api-d12290318cf9

1. Creating API
	vue create movie-app
	Please pick a preset: default
	Pick the package manager ....: NPM

2. Add vuetify
	vue add vuetify
	Choose a preset: Default
3. Start server
	npm run serve
4. Install vue router
	npm install vue-router
5. Creating and installation router
    create file src/router/index.js
6.  Link the router to the app
    import router from ‘./router’ into src/main.js
    
7.  Install Axios
    npm install axios --save
8.  Creating and mounting latestMovie component
    create src/components/LatestMovie.vue
    import it into file src/router/index.js
        import LatestMovie from '@/components/LatestMovie'
    add the link to LatestMovie component if index.js
9.  Getting api key from 
    http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkaGRkZGQCAw8QDxYCHwBnZGRkZAIFDxYCHgdWaXNpYmxlaGQCBw8WAh8BZ2QCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQtwYXRyZW9uQWNjdAUIZnJlZUFjY3Q70lz2duvFWpi7KjqMV5Bfeiu%2F8XZfNDl5GeZkBw9M5A%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAjUveXue3qLFY2FjQgdgUYHmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYphdL1XrNEjnC%2FKjNya%2Bmqh8hRPnM5dWgso2y7bj7kVNLSFbtYIt24Lw6ktxrd5Z67%2F4LFSTzFfbXTFN5VgQX9Nbzfg78Z8BXhXifTCAVkevd%2FM3%2B1LlDH%2BEpR4wCViK8IATPCorai%2FJA3cV0kG3vG6P&at=freeAcct&Email2=transpmailbox%40gmail.com&FirstName=Yuriy&LastName=Yakhnitsa&TextArea1=Studying+project%2C+just+to+use+in+localhost%3A8080+for+personal+needs.&Button1=Submit
    
10. Environment variable installation
    create file .env.development.local
    creating variables OMDb_API_KEY, OMDb_API_I
    !!!Mark variables as VUE_APP_(SOME NAME) - without VUE_APP -it`s not working
    use variables in the code like process.env.VUE_APP_OMDb_API_KEY
11. Extract axios default URL in main.js
    import axios from 'axios' 
    axios.defaults.baseURL = 'http://www.omdbapi.com/?apikey=xxxxxx&page=1&type=movie&Content-Type=application/json'
    
    TODO:
    - Создать header component
    - Настроить поиск
    - Выделить Movie component
   


# movie-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
