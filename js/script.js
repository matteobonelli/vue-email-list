const {createApp} = Vue

createApp({
    data() {
        return {
            emails : [],
            apiURL : 'https://flynn.boolean.careers/exercises/api/',
            apiEndPoint : 'random/mail'
        }
    },
    methods : {
        getEmailAdress(){
            for(let i = 0; i < 10; i++){
                axios.get(`${apiURL}${apiEndPoint}`).then((res) => {
                    this.emails.push(res.data.response)
                })
            }
            
        }
    },
}).mount('#app')