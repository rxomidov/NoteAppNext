async function getNote(noteId: string) {
    const res = await fetch(`${process.env.HOST}notes/${noteId}`, {
        next: { revalidate: 10 },
    });
    const data = await res.json();
    return data;
}

import Link from "next/link";

export default async function NotePage({ params }: any) {
    const note = await getNote(params.id);

    return <Note note={note} />;
}

function Note({ note }: any) {
    const { id, title, body } = note || {};

    return (
        <Link href={`notes/${id}`}>
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </Link>
    );
}
