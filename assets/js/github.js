class GitHub {
  constructor() {
    this.client_id = "4ca0c337b45700b26ee8";
    this.client_secret = "5b6d4deea1f718e5baedf1f6cd14fd0d964d1ff0";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileData = await profileResponse.json();
    return {
      profile: profileData,
    };
  }
}
