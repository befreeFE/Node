
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: String,
    phone: String,
    date: Date
}, { versionKey: false })

studentSchema.index({ id: 1 });

const student = mongoose.model("Student", studentSchema);

export default student