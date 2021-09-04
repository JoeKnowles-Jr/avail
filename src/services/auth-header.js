export default function authHeader() {
    // const user = JSON.parse(localStorage.getItem('user'));
    const user = null;

    if (user && user.accessToken) {
        // for Node.js Express back-end
        console.log(user);
        return { 'x-access-token': user.accessToken };
    } else {
        return {};
    }
}



// Authorization:Bearer {token}
