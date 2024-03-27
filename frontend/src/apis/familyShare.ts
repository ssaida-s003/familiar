import { publicRequest } from '@hooks/requestMethods'
import { PostTodayReqType } from '@/types/familyShare'

export const postToday = async (data: PostTodayReqType): Promise<string> => {
  return publicRequest.post(`/haru/records`, data).then(res => res.data)
}
