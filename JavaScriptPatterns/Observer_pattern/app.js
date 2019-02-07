function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribe to ${fn.name}`);
    },

    unsubscribe: function(fn) {
        // Filter out from the list whatever matches the callback function. If there is so match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter((item) => {
            if(item != fn) {
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function() {
        this.observers.forEach((item) => {
            item.call();
        });
    }
}

const click = new EventObserver();

// Event listeners
document.querySelector('.sub-ms').addEventListener('click', () => {
    click.subscribe(getCurMiliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', () => {
    click.unsubscribe(getCurMiliseconds);
});

document.querySelector('.fire').addEventListener('click', () => {
    click.fire();
});

// Click Handler
const getCurMiliseconds = function() {
    console.log(`Current Miliseconds: ${new Date().getMilliseconds()}`);
}