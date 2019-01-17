// init github
let github = new GitHub();
// init UI
let ui = new UI();
const searchUser = document.querySelector('#searchUser');
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== '') {
        // Make http call
        github.getUser(userText).then((data) => {
            if(data.profile.message === 'Not Found') {
                // Show an alert 
                ui.showAlert('User not found', 'alert alert-danger');
            }else {
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepo(data.repo);
            }
        });
    }else {
        // Clear profile
        ui.clearProfile();
    }
});