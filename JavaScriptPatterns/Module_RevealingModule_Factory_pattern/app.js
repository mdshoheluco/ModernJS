// Basic structure
// (function() {
//     // Declare private vars and functions

//     return {
//         // Declare public var and functions
//     }
// })();

// Module pattern
const UICtrl = (function() {
    //Decaler private vars and functions
    let text = 'Hello World!';
    const changeText = function() {
        const element = document.querySelector('h1');
        element.textContent = text;
    }

    return {
        // Declare public vars and functions
        callChangeText: function() {
            changeText();
            console.log(text);
        }
    }
})();

// UICtrl.callChangeText();
// Can't access changeText
// UICtrl.changeText();

// REVEALING MODULE PATTERN
const ItemCtrl = (function() {
    // Declate Private vars and functions
    const data = [];

    function add(item) {
        data.push(item);
        console.log('Item added....');
    }

    function get(id) {
        return data.find(item => {
            return item.id === id;
        });
    }

    return {
        add: add,
        get: get
    }
})();

ItemCtrl.add({id: 1, name: 'John'});
console.log(ItemCtrl.get(1).name);

// SINGLETON PATTERN
const Singleton = (function() {
    // Declare private vars and function
    let instance;

    function createInstance() {
        const object = new Object({name: 'John'});
        return object;
    }

    return {
        getInstance: function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
    }

})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();
console.log(instanceA === instanceB);

// Factory Pattern
function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if(type === 'simple') {
            member = new SimpleMembership(name);
        }else if(type === 'standard') {
            member = new StandardMembership(name);
        }else if(type === 'super') {
            member = new SuperMembership(name);
        }

        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}): (${this.cost})`);
        }
        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5';
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$15';
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$25';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Christie Love', 'standard'));
members.push(factory.createMember('Rosie Johnson', 'super'));

members.forEach(member => {
    member.define();
});

