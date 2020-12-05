import { Subject } from "rxjs"

export class Observable {
    constructor() {
        this.subject = new Subject()
    }

    subscribe(observer) {
        return this.subject.subscribe(observer)
    }

    subscribeMany(observerList) {
        return observerList.map(observer => this.subscribe(observer));
    }

    submitValue(value) {
        this.subject.next(value)
    }
}
