import calculator2 from 'ic:canisters/calculator2';

calculator2.greet(window.prompt("Enter your name:")).then(greeting => {
  window.alert(greeting);
});
