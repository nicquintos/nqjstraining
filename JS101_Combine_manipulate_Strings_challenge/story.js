const noun = prompt('provide a noun: ');
const adj = prompt('provide an adjective: ');
const verb = prompt('provide a verb: ');

const storyMsg = `<p>There once was a ${noun} who would ${verb} so ${adj} daily.</p>`;

document.querySelector('main').innerHTML = storyMsg;