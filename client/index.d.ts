type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProduct = {
  id: string
  name: string
  price: number
  image_url: Url
  description: string
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  length: number
  data: TProduct[]
  error?: string
}
