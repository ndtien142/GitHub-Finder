class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(data) {
    this.profile.innerHTML = `
    	<div class="card card-body">
        <div class="row">
        	<div class="col-md-3">
            <img src="${data.avatar_url}" alt="nike" class="img-fluid mb-2">
            <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block">View profile</a>
          </div>
          <div class="col-md-9">
        		<span class="badge badge-primary">Public repos: ${data.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${data.public_gists}</span>
            <span class="badge badge-success">Followers: ${data.followers}</span>
            <span class="badge badge-info">Following: ${data.following}</span>
            <br><br>
            <ul class="list-group">
		        	<li class="list-group-item">Company: ${data.company}</li>
              <li class="list-group-item">Website/Blog: ${data.blog}</li>
              <li class="list-group-item">Location: ${data.location}</li>
              <li class="list-group-item">Member Since: ${data.created_at}</li>
            </ul>
          </div>
      	</div>
      </div>
    	<h3 class="page-heading mb-3">Latest repos</h3>
    	<div id="repos"></div>
      `;
  }
}
