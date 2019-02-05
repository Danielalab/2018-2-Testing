export const addNote = (textNewNote) => {
  return firebase.firestore().collection('notes').add({
    title: textNewNote,
  })
}

export const deleteNote = (idNote) => {
  return firebase.firestore().collection('notes').doc(idNote).delete()
}

export const getNotes = (callback) => {
  firebase.firestore().collection('notes')
    .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
    });
}
