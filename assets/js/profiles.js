import { users } from "/assets/data/users.js"

const profileList = document.getElementById('profileList');

users.forEach(user => {
    const card = document.createElement('div');
    card.className = 'profile-card';
    card.innerHTML = `
        <img src="${user.profilePic}" alt="${user.name}">
        <div class="profile-info">
            <a href="${user.youtube}" target="_blank">${user.name}</a><span class="username">(${user.username})</span>
            <p>${user.description}</p>
        </div>
    `;
    profileList.appendChild(card);
});
