import Link from "next/link";
import CreateNote from "./CreateNote";
import styles from "./Notes.module.css";

async function getNotes() {
    const res = await fetch(`${process.env.HOST}notes`);
    const data = await res.json();
    return data.rows as any[];
}

export default async function NotePages() {
    const notes = await getNotes();

    return (
        <div>
            <h1>Notes</h1>
            <div className={styles.grid}>
                {notes?.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}
            </div>

            <CreateNote />
        </div>
    );
}

function Note({ note }: any) {
    const { id, title, body } = note || {};

    return (
        <Link href={`notes/${id}`}>
            <div className={styles.note}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </Link>
    );
}
