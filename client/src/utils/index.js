import { surpriseMePrompts } from '../constant'

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.lenght);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt ) return getRandomPrompt(prompt);

    return randomPrompt;
}