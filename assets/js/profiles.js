import { users } from "/assets/data/users.js"

const profileList = document.getElementById('profileList');

// simple. just grab the user list and then add the profile card.
users.forEach(user => {
    const card = document.createElement('div');
    let verified = '<div class="tooltip" data-tooltip="Unverified" style="border-radius: 40%; padding: 2px; padding-bottom: 6px; width: 10px; text-align: center; height: 18px;"></div>'
    card.className = 'profile-card';
    if (user.verified === true) {
        verified = `
            <div class="tooltip" data-tooltip="Verified" style="border-radius: 40%; padding: 2px; padding-bottom: 6px; width: 18px; text-align: center; height: 18px;">
                <span style="font-size: 15px; font-family: 'Miiverse Symbols'; color: limegreen;">v</span>
            </div>
        `;
    }
    card.innerHTML = `
        <a href="${user.youtube}" target="_blank"><img src="${user.profilePic}" alt="${user.name}"></a>
        <div class="profile-info">
            <a href="${user.youtube}" target="_blank">${user.name}</a>${verified}<span class="username">(${user.username})</span>
            <p>${user.description}</p>
        </div>
    `;
    profileList.appendChild(card);
});
