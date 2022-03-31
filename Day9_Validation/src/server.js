const app = requie("./index");
const connect = require("./configs/db");

app.listen(2980, async () => {
    try{
        await connect();

        console.log("listening on port 2980")
    }
    catch(err) {
        console.log(err.message);
    }
})