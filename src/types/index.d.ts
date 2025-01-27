interface IStringKeyMap {
  [propName: string]: any
}

type supportedPlatforms = 'official' | 'azure' | 'gemini'| 'deepseek' | 'ollama' | 'groq'

type insertTypes = 'replace' |  'append' |  'newLine' | 'NoAction'
