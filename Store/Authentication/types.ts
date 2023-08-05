import {Response} from '../Response/types';

export type UserAuthen = {
  id: string;
  userName: string;
  email: string;
  fullName: string;
  jwtToken: string;
  refreshToken: string;
};

export type AuthPayload = {
  payload: Response<UserAuthen>;
};

export type AuthenProfile = {
  id: string;
  idDonVi: number;
  idPhongBan: number;
  idChucVu: number;
  isAdmin: boolean;
  isOutSide: boolean;
  fullName: string;
  anhDaiDien?: any;
  menus: number[];
  permissions?: any;
};

export type AuthenDonVi = {
  idDonVi: number;
  idDonViCha: number;
  maLoaiDonVi: string;
  maDonVi: string;
  tenDonVi: string;
  tenTat: string;
  diaChi: string;
  dienThoai: string;
  hrmsIdDonVi: number;
  hrmsMaDonVi: string;
  suDung: boolean;
  thuTu: number;
  level: number;
};

export type UserInfo = {
  id: string;
  userName: string;
  firstName: string;
  lastName: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: any;
  idDonVi: number;
  maDonVi: string;
  maLoaiDonVi: string;
  idPhongBan: number;
  maLoaiPhongBan: string;
  tenPhongBan: string;
  idChucVu: number;
  maLoaiChucVu: string;
  tenChucVu: string;
  accountType: number;
  isAdmin: boolean;
  isActive: boolean;
  roles: string[];
  userDoffice: any;
  userHrms: any;
};
