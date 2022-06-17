/*
Descrizione:
Attraverso l’apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
*/

const appVue = new Vue({
    el : "#app",
    data : {
        emailsList : []
    },
    methods : {
        generateEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((axiosResponse) => {
                    this.emailsList.push(axiosResponse.data.response);
                    console.log(this.emailsList);
                    this.printEmails();
                });
        },
        generateEmailsList() {
            for(let i = 0; i < 10; i++) {
                this.generateEmail();
            }
        },
        checkEmailsNumber(listaEmailDaControllare) {
            if (listaEmailDaControllare.length = 10) {
                return true;
            }
            return false;
        },
        printEmails() {
            if (this.checkEmailsNumber(this.emailsList)) {
                const ulListaEmail = document.getElementById("listaEmail");
                this.emailsList.forEach(email => {
                    ulListaEmail.innerHTML += `<li>${email}</li>`;
                }); 
            }
        }
    },
    mounted : function() {
        this.generateEmailsList();
    }
});