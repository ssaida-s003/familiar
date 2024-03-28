import { publicRequest } from '@hooks/requestMethods'
import { FamilyShareRecordResType, QnARecordResType } from '@/types/calender'

export const fetchFamilyShareRecord = async (familyId: number, data: string): Promise<FamilyShareRecordResType> => {
  return publicRequest.patch(`/families/${familyId}/haru/records`, data).then(res => res.data)
}

export const fetchQnARecord = async (familyId: number, data: string): Promise<QnARecordResType> => {
  return publicRequest.patch(`/families/${familyId}/haru/questions`, data).then(res => res.data)
}
