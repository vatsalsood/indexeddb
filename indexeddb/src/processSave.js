
export function createDB(dbName) {

    const request = indexedDB.open(dbName);
    request.onupgradeneeded = e => {
        let db = e.target.result;
        let pNotes = db.createObjectStore('personal_notes', { keyPath: "title" });
        let toddNotes = db.createObjectStore('todo_notes', { keyPath: "title" });
        console.log("upgrade called", db);
    }

    request.onsuccess = e => {
        console.log("success called");
    }

    request.onerror = e => {
        debugger;
        console.log("error");
    }
}

export function createTable(tableName, version) {
    const request = indexedDB.open('test' + Math.random(4, 5));
    console.log("request", request);
    console.log("tablename", tableName);
    console.log("version", version)
    request.onupgradeneeded = e => {
        console.log("onupgradeneeded");

        let db = e.target.result;
        let pNotes = db.createObjectStore(tableName, { keyPath: "title" });
    }
    request.onsuccess = e => {
        console.log("success called");
    }
    request.onerror = e => {
        debugger;
        console.log("error");
    }
}

export function addNotes(notes) {
    const request = indexedDB.open('test');

    request.onsuccess = e => {
        let db = e.target.result;

        const tx = db.transaction("personal_notes", "readwrite");
        notes.forEach(note => {
            tx.onerror = e => {
                console.log(`Error ${e.target.error}`);
            }
            const pNotes = tx.objectStore("personal_notes");
            pNotes.add(note);
        });
    }
}


// let submitBtn = document.getElementById('dbBtn');
// let addNoteBtn = document.getElementById('addNote');
// let viewNoteBtn = document.getElementById('viewNotes');
// submitBtn.onclick = () => {
//     createDB(document.getElementById('dbName').value, document.getElementById('dbVersion').value);
// };

// addNoteBtn.onclick = () => {
//     const note = {
//         title: "note" + Math.random(0, 10),
//         text: "this is a note"
//     }
//     const tx = db.transaction("personal_notes", "readwrite");
//     tx.onerror = e => {
//         console.log(`Error ${e.target.error}`);
//     }
//     const pNotes = tx.objectStore("personal_notes");
//     pNotes.add(note);
// };

// viewNoteBtn.onclick = () => {
//     const tx = db.transaction("personal_notes", "readonly");
//     const pNotes = tx.objectStore("personal_notes");
//     const request = pNotes.openCursor();
//     request.onsuccess = e => {
//         let rows = e.target.result;
//         console.log("rows", rows);
//     }
// }