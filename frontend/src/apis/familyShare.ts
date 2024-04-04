import { publicRequest } from '@hooks/requestMethods'
import { FamilyTodayConvertReqType, PostTodayReqType } from '@/types/familyShare'

export const familyTodayConvert = async (data: FamilyTodayConvertReqType): Promise<{ image: string }> => {
  return publicRequest.patch(`/haru/convert`, data).then(res => res.data)
}

export const postToday = async (data: PostTodayReqType): Promise<string> => {
  return publicRequest.post(`/haru/records`, data).then(res => res.data)
}
