const mongoose = require("mongoose");

const evaluationSchema = new mongoose.Schema(
    {
        dateOfEvaluation: {type:Date, required: true},
        instructor: {type:String, required: true},
        batchId: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: false
    }

)

try{
    const evaluation = mongoose.model("evaluation", evaluationSchema);
}
catch(err) {
    console.log('err', err.message);

}