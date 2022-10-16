'use strict'

import { update, onValue } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js'

export class FireSocket {
    //---Event---
    onclose = () => { }
    onerror = () => { }
    onmessage = () => { }
    onopen = () => { }

    //---Method---
    close(code = 1000, reason = '') {
        this.onclose({
            code, reason,
            wasClean: true
        })
    }

    send(data) {
        update(this.reference, { data: data })
            .catch((error) => this.onerror(error))
    }

    //---***---
    constructor(reference) {
        this.reference = reference

        onValue(this.reference, (snapshot) => {
            const data = snapshot.val()
            this.onmessage(data)
        })

        this.onopen()
    }
}