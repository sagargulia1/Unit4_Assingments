const mongoose = require("mongoose");


const batchSchema = new mongoose.Schema(
    {
        batchName: {type: String, required: true}
    },
    {
        versionKey: false,
        timestamps: true
    }
)

try{
    const batch = mongoose.model("batch", batchSchema);
}
catch(err) {
    console.log('err', err.message);

}