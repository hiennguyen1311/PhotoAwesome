export interface IColor {
  white: string;
  primary: string;
  black: string;
  transparent: string;
  inactive: string;
  blueMalibu: string
}

export interface ImageCloudinary {
  public_id: string;
  version: number;
  width: number;
  height: number;
  format: 'jpg' | 'png';
  resource_type: 'image' | 'video';
  created_at: string;
  tags: any[];
  bytes: string;
  type: string;
  etag: string;
  url: string;
  secure_url: string;
  original_filename: string;
}

export interface ISetting {
  imageColumn: number;
}
