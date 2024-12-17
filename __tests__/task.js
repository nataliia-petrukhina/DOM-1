const rewire = require("rewire");
const fs = require("fs");
const path = require("path");

describe("Guessing Game", () => {
  let dom = null;

  it("`randomNumber` returns a random number between 1 and 10", () => {
    // read file index.js using fs
    const jsString = fs.readFileSync(
      path.join(__dirname, "../index.js"),
      "utf8"
    );
    // add alert and prompt functions to text
    const text =
      "\nconst alert = (text) => {console.log(text)};\nconst prompt = (text) => {console.log(text); return 5};\n" +
      jsString;
    //write text to temp file
    fs.writeFileSync(path.join(__dirname, "../index_temp.js"), text);
    // rewire temp file
    dom = rewire(path.join(__dirname, "../index_temp.js"));
    // get randomNumber function
    const randomNumber = dom.__get__("randomNumber");
    expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).toContain(randomNumber());

    const arr = [];
    // do 5 atemps
    for (let i = 0; i < 5; i++) {
      // get randomNumber function
      const randomNumber = dom.__get__("randomNumber");
      // get random value
      const value = randomNumber();
      // check if value is random
      arr.push(value);
    }
    // check if array has at least one different element
    let check = false;
    for (let i = 0; i < arr.length - 1; i++) {
      for (let x = i + 1; x < arr.length; x++) {
        if (arr[i] !== arr[x]) {
          check = true;
        }
      }
    }
    expect(check).toBe(true);
  });
  it("three atemps should be available", () => {
    // read file index.js using fs
    const jsString = fs.readFileSync(
      path.join(__dirname, "../index.js"),
      "utf8"
    );
    // add alert and prompt functions to text
    const text =
      "\nconst alert = (text) => {console.log(text)};\nlet counter = 0;\nconst prompt = (text) => {console.log(text);counter++; return 15};\n" +
      jsString;
    //write text to temp file
    fs.writeFileSync(path.join(__dirname, "../index_temp.js"), text);
    // rewire temp file
    dom = rewire(path.join(__dirname, "../index_temp.js"));
    // get counter function
    const counter = dom.__get__("counter");
    // mock prompt function
    // check if prompt will be called 3 times
    expect(counter).toBe(3);
  });
  it("success message is displayed upon correct guess", () => {
    // spy on console.log
    console.log = jest.fn();

    // read file index.js using fs
    const jsString = fs.readFileSync(
      path.join(__dirname, "../index.js"),
      "utf8"
    );
    // add alert and prompt functions to text

    const text =
      'Math.floor = function(n) {return 1}\n const alert = (text) => {console.log("loog:" + text)};\nlet counter = 0;\nconst prompt = (text) => {console.log(text);counter++; return 2};\n' +
      jsString;

    // rewire temp file
    eval(text);
    const answer = console.log.mock.calls.find(
      (call) => call.join(" ").substring(0, 5) === "loog:"
    );

    // check if prompt will be called 3 times
    expect(answer.join().toLowerCase()).toContain("success");
  });
  it("failure message is displayed upon three incorrect guesses", () => {
    // spy on console.log
    console.log = jest.fn();

    // read file index.js using fs
    const jsString = fs.readFileSync(
      path.join(__dirname, "../index.js"),
      "utf8"
    );
    // add alert and prompt functions to text

    const text =
      'Math.floor = function(n) {return 1}\n const alert = (text) => {console.log("loog:" + text)};\nlet counter = 0;\nconst prompt = (text) => {console.log(text);counter++; return 15};\n' +
      jsString;

    // rewire temp file
    eval(text);
    const answer = console.log.mock.calls.find(
      (call) => call.join(" ").substring(0, 5) === "loog:"
    );

    // check if prompt will be called 3 times
    const counter = dom.__get__("counter");
    expect(counter).toBe(3);
    expect(answer.join().toLowerCase()).toContain("sorry");
  });
  afterAll(() => {
    // delete temp file
    fs.unlinkSync(path.join(__dirname, "../index_temp.js"));
  });
});
