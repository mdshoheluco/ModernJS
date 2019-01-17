class GitHub {
    constructor() {
        this.client_id = 'ac3192ddf81a76695e30';
        this.client_secret = 'ee20ea797e40037af5e1d445d4649c8c0efb1cda';
        this.repo_count = 5;
        this.repo_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}?client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repo_count}&sort=${this.repo_sort}?client_id=${this.client_id}?client_secret=${this.client_secret}`);

        
        const profile = await profileResponse.json();
        const repo = await repoResponse.json();

        return {
            profile,
            repo
        }
    }
}