import {
  availableAPIs,
  availableModels,
  availableModelsForGemini,
  availableModelsForGroq,
  availableModelsForOllama,
  availableModelsForDeepseek,
  languageMap
} from './constant'

export interface Auth {
  type: supportedPlatforms
  [propName: string]: any
}

export function checkAuth(auth: Auth): boolean {
  return (
    auth &&
    ((auth.type === 'official' && !!auth.apiKey) ||
      (auth.type === 'azure' && !!auth.azureAPIKey) ||
      (auth.type === 'gemini' && !!auth.geminiAPIKey) ||
      (auth.type === 'groq' && !!auth.groqAPIKey) ||
      (auth.type === 'deepseek' && !!auth.deepseekAPIKey) ||
      (auth.type === 'ollama')
  )
}

export function forceNumber(val: any) {
  return Number(val) || 0
}

export function getOptionList(
  map: Record<string, string>,
  from: 'key' | 'value' = 'key',
  isUseValueAsLabel = false
) {
  return from === 'key'
    ? Object.keys(map).map(key => ({
        label: isUseValueAsLabel ? map[key] : key,
        value: map[key]
      }))
    : Object.values(map).map(key => ({
        label: key,
        value: key
      }))
}

const localLanguageList = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '简体中文',
    value: 'zh-cn'
  }
]

export const optionLists = {
  localLanguageList,
  apiList: getOptionList(availableAPIs),
  replyLanguageList: getOptionList(languageMap, 'value'),
  officialModelList: getOptionList(availableModels),
  geminiModelList: getOptionList(availableModelsForGemini),
  deepseekModelList: getOptionList(availableModelsForDeepseek),
  ollamaModelList: getOptionList(availableModelsForOllama),
  groqModelList: getOptionList(availableModelsForGroq)
}

export function getLabel(key: string) {
  return `${key}Label`
}

export function getPlaceholder(key: string) {
  return `${key}Placeholder`
}
