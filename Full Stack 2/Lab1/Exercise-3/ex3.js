const say = require("say");

say.speak("Hello");

say.stop();

say.speak("Hello?", "Alex", 0.5);

function sorryDave() {
  say.speak("I'm sorry, Dave");
}
setTimeout(sorryDave, 5000);
