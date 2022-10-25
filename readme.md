# FireSocket
use firebase real-time database like WebSocket
## Usage
```new FireSocket(databaseRef)```

```
<script>
    import { FireSocket } from "./firesocket.js"

    import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js'
    import { getDatabase, ref, update, onValue } from 'https://www.gstatic.com/firebasejs/9.11.0/firebase-database.js'

    const firebaseConfig = {
        databaseURL: "https://DATABASE_NAME.firebaseio.com",
    }

    const app = initializeApp(firebaseConfig);

    const database = getDatabase(app);

    const refer = ref(database, 'sockets/')

    var sock = new FireSocket(refer)

    sock.onopen = (e) => { console.log("open", e) }
    sock.onmessage = (e) => { console.log("message", e) }
    sock.send("hi")
</script>
```