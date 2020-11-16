class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if(Person.age > other.age){
      return `${Person.name} is younger than me.`
    } else if (Person.age < other.age) {
      return `${other.name} is older than me.`
    } else {
      return `${other.name} is the same age as me.`
    }

	}
}
