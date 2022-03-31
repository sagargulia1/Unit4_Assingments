const mongoose = require("mongoose");


const usersSchema = new mongoose.Schema(
    {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        gender: {type: String, required: true},
        dateOfBirth: {type: dateOfBirth, required: true}
    },
    {
        versionKey: false,
        timestamps: true,
    }
)

try{
    const Users = mongoose.model("users", usersSchema);
}
catch(err) {
    console.log('err', err.message);

}