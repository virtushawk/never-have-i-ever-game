const possibleQuestions: Array<string> = 
[
    "got a tattoo",
    "done a nude streak in public",
    "stood someone up on a date",
    "had a speeding ticket",
    "ghosted someone",
    "lied to get out of going to work",
    "given a fake name",
    "dumped someone over text",
    "been sick on public transport",
    "lied to someone in this room"
]

export function getQuestion() {
    return possibleQuestions[Math.floor(Math.random() * possibleQuestions.length)];
}