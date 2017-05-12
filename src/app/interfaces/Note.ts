export class Note {
    title: string;
    body: string;
    id: number;
    date: Date;

    constructor(newTitle, newBody, newId, newDate)
    {
        this.title = newTitle;
        this.body = newBody;
        this.id = newId;
        this.date = newDate;
    }
}