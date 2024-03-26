import { publicRequest } from '@hooks/requestMethods'
import { AiPainterConvertReqType } from '@/types/aiPainter'

export const aiPaintConvert = async (familyId: number, data: AiPainterConvertReqType): Promise<string> => {
  return publicRequest.patch(`/families/${familyId}/drawings/convert`, data).then(res => res.data)
}

export const aiPaintSave = async (familyId: number, formData: FormData): Promise<number> => {
  return publicRequest
    .post(`/families/${familyId}/drawings`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(res => res.data)
}
