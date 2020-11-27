function relationToLuke(name) {
	const family = {
		"Darth Vader": "father",
		Leia: "sister",
		Han: "brother in law",
		R2D2: "droid"
	}
	return `Luke, I am your ${family[name]}.`;
}
