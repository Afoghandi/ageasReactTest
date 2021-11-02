import mongoose from 'mongoose';

const noteSchema = mongoose.Schema({
    title: String,
    body: String,
}, {
    timestamps: true,
});

const NoteMessage = mongoose.model('NoteMessage', noteSchema);

export default NoteMessage;