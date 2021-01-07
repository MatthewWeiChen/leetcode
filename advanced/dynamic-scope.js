const a = function () {
  console.log("a", this);
  const b = function () {
    console.log("b", this);
    const c = {
      hi: function () {
        console.log("c", this);
      },
    };
    c.hi();
  };
  b();
};
a();

const obj = {
  name: "Billy",
  sing() {
    console.log("a", this); //this refers to the object
    var anotherFunc = function () {
      console.log("b", this); //this refers to the window object
    };
    anotherFunc();
  },
};
