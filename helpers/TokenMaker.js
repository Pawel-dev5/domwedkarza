export default function tokenMaker(length) {
	let string = '';
	const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

	for (let i = 1; i <= length ?? 10; i++) {
		string += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return string;
}
