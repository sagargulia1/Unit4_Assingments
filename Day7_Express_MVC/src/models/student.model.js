const mongoose = require("mongoose");



// Student schema

const studentSchema = new mongoose.Schema(
    {
        rollId: {type:String, required: true},
        currentBatch: {type:String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

try{
    const student = mongoose.model("student", "studentSchema");
}
catch(err) {
    console.log('err', err.message);

}