export interface IPixResponse {
  type: string;
  mensagem?: string;
  pix?: {
    qrCode: {
      imagemQrcode: string;
      qrcode: string;
      imagemSrc: string;
    };
  };
}
