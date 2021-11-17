console.log('JS OK');

var app = new Vue ({
    el: "#app",
    data: {

        user: {
            name: 'Stefano',
            avatar: '_5',
        },

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],

        activeChat: 0,

        newMessage: '',

    },
    methods : {
        setChat (index) {
            this.activeChat = index
            this.scrollToEnd();
        },

        lastAccess(array) {
            let last = '';
            for (let i = 0; i < array.length; i++) {
                if (array[i].status === 'received') {
                   last = array[i].date;
               } 
            }
            return last;
        },

        lastMessage(array) {
            let last_message = array[array.length - 1].text;
            return last_message;
        },

        nowDateTime() {
            const now =dayjs().format('DD/MM/YYYY HH:mm:ss');
            return now;
        },

        addResponse (array) {
            //(function(){ alert("Hello"); }, 3000)
            setTimeout (() => {
                array.push({
                    date: this.nowDateTime(),
                    text: 'ok',
                    status: 'received'
                })

                //scroll to bottom
                this.scrollToEnd();
            },
                2000);
        },

        addMessage() {
            if (this.newMessage !=='') {
                console.log(this.newMessage);

                //aggiunta message in messages
                this.contacts[this.activeChat].messages.push({
                    date: this.nowDateTime(),
                    text: this.newMessage,
                    status: 'sent'
                });

                //add response
                this.addResponse(this.contacts[this.activeChat].messages);

                //scroll to bottom
                this.scrollToEnd();

                //clean up
                this.newMessage='';

                //set focus
                console.log(this.$refs);
                this.$refs.messageInput.focus()
            }
        },

        scrollToEnd() {
            setTimeout(() => {
                let container = document.querySelector(".overflow-scroll");
                let scrollHeight = container.scrollHeight;
                container.scrollTop = scrollHeight;
            }, 0);
        },
    }
})