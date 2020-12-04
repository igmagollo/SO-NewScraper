export class Observer {
    constructor(partialObserverGetter) {
        this.partialObserverGetter = partialObserverGetter
    }

    observer() {
        const _args = [...arguments]
        return this.partialObserverGetter.apply(null, _args)
    }
}
