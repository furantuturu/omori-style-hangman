import words from '../wordlist.json'

export default function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}