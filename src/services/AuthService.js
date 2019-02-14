const TOKEN_ID = 'token_id';

export function login(input) {
	let username = input.username;
	setIdToken(username);
}

export function setIdToken(tokenId) {
	localStorage.setItem(TOKEN_ID, tokenId);
	window.location.replace('/');
}

export function getIdToken() {
	return localStorage.getItem(TOKEN_ID);
}

export function isLoggedIn() {
	const idToken = getIdToken();
	return !!idToken;
}

export function logout() {
	localStorage.removeItem(TOKEN_ID);
	window.location.replace('/');
}
