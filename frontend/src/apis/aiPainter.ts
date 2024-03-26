import { publicRequest } from '@hooks/requestMethods'
import { AiPainterConvertReqType, AiPainterSaveReqType, getPaintResType } from '@/types/aiPainter'

export const aiPaintConvert = async (familyId: number, data: AiPainterConvertReqType): Promise<string> => {
  return publicRequest.patch(`/families/${familyId}/drawings/convert`, data).then(res => res.data)
}

export const aiPaintSave = async (familyId: number, data: AiPainterSaveReqType): Promise<number> => {
  return publicRequest.post(`/families/${familyId}/drawings`, data).then(res => res.data)
}

export const getAllPaintSave = async (familyId: number): Promise<getPaintResType[]> => {
  return publicRequest.get(`/families/${familyId}/drawings`).then(res => res.data)
}
