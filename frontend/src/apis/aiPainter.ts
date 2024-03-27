import { publicRequest } from '@hooks/requestMethods'
import { AiPainterConvertReqType, AiPainterSaveReqType, getPaintResType } from '@/types/aiPainter'

export const aiPaintConvert = async (familyId: number, data: AiPainterConvertReqType): Promise<string> => {
  return publicRequest.post(`/families/${familyId}/drawings/convert`, data).then(res => res.data)
}

export const aiPaintSave = async (familyId: number, data: AiPainterSaveReqType): Promise<number> => {
  return publicRequest.post(`/families/${familyId}/drawings`, data).then(res => res.data)
}

export const getAllPaint = async (familyId: number): Promise<getPaintResType[]> => {
  return publicRequest.get(`/families/${familyId}/drawings`).then(res => res.data)
}

export const selectWallPaper = async (familyId: number, drawingId: number, isWallpaper: boolean): Promise<number> => {
  return publicRequest.get(`/families/${familyId}/drawings/${drawingId}/wallpaper?isWallpaper=${isWallpaper}`).then(res => res.data)
}

export const deletePaint = async (familyId: number, drawingId: number): Promise<null> => {
  return publicRequest.delete(`/families/${familyId}/drawings${drawingId}`).then(res => res.data)
}
