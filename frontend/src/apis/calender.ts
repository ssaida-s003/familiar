import { publicRequest } from '@hooks/requestMethods'
import { DateReqType, FamilyShareRecordResType, QnARecordResType } from '@/types/calender'

export const fetchFamilyShareRecord = async (familyId: number, data: DateReqType): Promise<FamilyShareRecordResType> => {
  return publicRequest.get(`/families/${familyId}/haru/records`, { params: data }).then(res => res.data)
}

export const fetchQnARecord = async (familyId: number, data: DateReqType): Promise<QnARecordResType> => {
  return publicRequest.get(`/families/${familyId}/haru/questions`, { params: data }).then(res => res.data)
}
