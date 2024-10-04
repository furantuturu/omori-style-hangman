import words from '../wordlist.json'

export default function getWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}