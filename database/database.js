const mongoose = require('mongoose');

mongoose.connect('mongodb://Josx:Leonel1988@cluster0-shard-00-00.0ujvm.mongodb.net:27017,cluster0-shard-00-01.0ujvm.mongodb.net:27017,cluster0-shard-00-02.0ujvm.mongodb.net:27017/memesmaniatic?ssl=true&replicaSet=atlas-rbkj17-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(m => {
    console.log('DB conectada')
}).catch(e => console.error(e));