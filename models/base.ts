export interface BaseModel {
  id: number;
  created_at: Date;
  updated_at: Date;
}

export interface SuccessResponse {
  success: boolean;
}

export interface BaseResponse<T> {
  message: string;
  body?: T;
}
