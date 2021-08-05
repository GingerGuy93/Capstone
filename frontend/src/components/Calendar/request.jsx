let todayStr = Date.now()
let eventGuid = 0
let eventDb = [
    {
        id: createEventId(),
        title: 'All-day event',
        start: todayStr
    },
    {
        id: createEventId(),
        title: 'Timed event',
        start: todayStr + 'T12:00:00'
    }
]
const DELAY = 200
let simulateErrors = false

document.addEventListener('keypress', (ev) => {
    alert('You pressed the key "e". Will begin to simulate errors.')
    simulateErrors = true
}
)

export default function requestEventCreate(plainEventObject) {
    console.log('[STUB] requesting event create:', plainEventObject)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (simulateErrors) {
                reject(new Error('error'))
            } else {
                let newEventId = createEventId()
                let objWithId = {...plainEventObject, id: newEventId}
                eventDb.push(objWithId)
                resolve(newEventId)
            }
        }, DELAY)
    })
}

export function createEventId() {
    return String(eventGuid++);
}