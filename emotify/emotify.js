function emotify(str) {
	const emoticons = {
		"Make me smile": ":D",
		"Make me grin": ":)",
		"Make me sad": ":(",
		"Make me mad": ":P"
	}
	return `Make me ${emoticons[str]}`;
}

function emotify(str) {
	let [first, mid, last] = str.split(" ");

	let emotify = {
		"smile": ":D",
		"grin": ":)",
		"sad": ":(",
		"mad": ":P"
	}

	return `Make me ${emotify[last]}`;
}
