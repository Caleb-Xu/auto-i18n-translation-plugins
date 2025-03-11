/*
 * @Author: xiaoshanwen
 * @Date: 2024-04-06 15:47:14
 * @LastEditTime: 2024-04-07 19:40:36
 * @FilePath: /i18n_translation_vite/core/src/constants/translate.ts
 */
import { OriginLangKeyEnum } from 'src/enums/language'

export const REGEX_MAP = {
    [OriginLangKeyEnum.ZH]: /[\u4e00-\u9fff]/,
    [OriginLangKeyEnum.EN]: /[a-zA-Z]/
}
