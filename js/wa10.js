const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: the alien decided to stretch his tentacles and explore. When they got to the Earthling :inserty:, he stared at the menu for a few minutes, then ordered 12 :insertz: for themselves. The employee who took their order was not surprised — :insertx: had an insatiable appetite for an alien.";
const insertX = ["Groot", "E.T.", "Yoda"];
const insertY = ["food court", "farmer's market", "In-N-Out"];
const insertZ = ["hot dogs", "milkshakes", "french fries"];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.0714286) + ' stone'; 
    const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';

    newStory = newStory.replace('300 pounds', weight);
    newStory = newStory.replace('94 fahrenheit', temperature);
  }


  story.textContent = newStory;
  story.style.visibility = 'visible';
}
