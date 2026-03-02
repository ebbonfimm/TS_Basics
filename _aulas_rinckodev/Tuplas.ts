// tuplas

type NameList = string[]  // This is an array

type CalendarDate = [day: number, month: number, year: number]  // This is an tuple

const list: NameList = []
list.push("Weedub");

const date: CalendarDate = [27, 2, 2026]
// const date = [2, 1, 3]  // Inferiu errado neste caso

// function createDate(...date: CalendarDate) {
function createDate(date: CalendarDate) {
    const [ day, month, year ] = date;
}

createDate(date)
// createDate(date)