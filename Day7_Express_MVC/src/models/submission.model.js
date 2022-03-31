const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
    {
        evaluationId: {type:String, required: true},
        studentId: {type:String, required: true},
        marks: {type:String, required: true},
    },
    {
        versionKey: false,
        timestamps: true
    }
)


try{
    const submission = mongoose.model("submission", submissionSchema);
}
catch(err) {
    console.log('err', err.message);

}