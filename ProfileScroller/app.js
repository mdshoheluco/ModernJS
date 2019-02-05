const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Smith',
        age: 29,
        gender: 'female',
        lookingFor: 'male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Austin Smith',
        age: 45,
        gender: 'male',
        lookingFor: 'female',
        location: 'Dallas, TX',
        image: 'https://randomuser.me/api/portraits/men/62.jpg'
    },
    {
        name: 'Sandy Turner',
        age: 36,
        gender: 'female',
        lookingFor: 'male',
        location: 'Oklahoma City, OK',
        image: 'https://randomuser.me/api/portraits/women/62.jpg'
    }
];

// Profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false } :
            { done: true }
        }
    }
}

const profiles = profileIterator(data);

// Call first profile
nextProfile();


// Next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
        document.querySelector('#profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Lookin for: ${currentProfile.lookingFor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;

        document.querySelector('#imageDisplay').innerHTML = `
            <img src="${currentProfile.image}" />
        `;
    }else {
        window.location.reload();
    }

}