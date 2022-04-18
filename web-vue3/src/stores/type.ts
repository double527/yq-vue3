export interface ChinaTotal {
  confirm: number;
  nowConfirm: number;
  noInfectH5: number;
  local_acc_confirm: number;
  noInfect: number;
  heal: number;
  nowSevere: number;
  showLocalConfirm: number;
  localConfirm: number;
  dead: number;
  suspect: number;
  importedCase: number;
  showlocalinfeciton: number;
  localConfirmH5: number;
}

export interface ChinaAdd {
  localConfirmH5: number;
  confirm: number;
  dead: number;
  suspect: number;
  importedCase: number;
  localConfirm: number;
  heal: number;
  nowConfirm: number;
  nowSevere: number;
  noInfect: number;
  noInfectH5: number;
}

export interface ShowAddSwitch {
  nowConfirm: boolean;
  localinfeciton: boolean;
  all: boolean;
  confirm: boolean;
  dead: boolean;
  heal: boolean;
  localConfirm: boolean;
  suspect: boolean;
  nowSevere: boolean;
  importedCase: boolean;
  noInfect: boolean;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface Total {
  nowConfirm: number;
  dead: number;
  heal: number;
  adcode: string;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  confirm: number;
  showRate: boolean;
  showHeal: boolean;
  wzz: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
}

export interface Total {
  adcode: string;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  nowConfirm: number;
  confirm: number;
  heal: number;
  showHeal: boolean;
  provinceLocalConfirm: number;
  dead: number;
  showRate: boolean;
  wzz: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
}

export interface Today {
  confirm: number;
  confirmCuts: number;
  isUpdated: boolean;
}

export interface Total {
  confirm: number;
  dead: number;
  wzz: number;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirm: number;
  adcode: string;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  nowConfirm: number;
  showRate: boolean;
  heal: number;
  showHeal: boolean;
  provinceLocalConfirm: number;
}

export interface Children {
  name: string;
  today: Today;
  total: Total;
}

export interface Today {
  confirmCuts: number;
  isUpdated: boolean;
  tip: string;
  wzz_add: number;
  confirm: number;
}

export interface Children {
  total: Total;
  children: Children[];
  name: string;
  today: Today;
}

export interface AreaTree {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface Diseaseh5Shelf {
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
  date: string;
  syear: number;
  city: string;
  nowConfirm: number;
  dead: number;
  heal: number;
  grade: string;
  sdate: string;
  province: string;
  confirmAdd: number;
  confirm: number;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  statisGradeCityDetail: StatisGradeCityDetail[];
}