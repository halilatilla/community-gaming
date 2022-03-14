import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** java.math.BigDecimal */
  BigDecimal: any
  /** Date type */
  Date: any
  /** An object scalar */
  Object: any
}

export enum AbiVersion {
  V0 = 'V0',
  V1 = 'V1',
  V2 = 'V2',
}

export enum ActionScheduleType {
  ActionCount = 'ACTION_COUNT',
  DayCount = 'DAY_COUNT',
  Period = 'PERIOD',
}

export type AddTournamentUserPermissionInput = {
  permissionList?: InputMaybe<Array<InputMaybe<TournamentPermissionType>>>
  tournamentId?: InputMaybe<Scalars['String']>
  userEmail?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type AdditionalUserInformation = {
  __typename?: 'AdditionalUserInformation'
  averageTeamSize?: Maybe<Scalars['BigDecimal']>
  favouriteGamesCount?: Maybe<Scalars['Int']>
  joinedTournamentCount?: Maybe<Scalars['Int']>
  organizedTournamentCount?: Maybe<Scalars['Int']>
  teamsCount?: Maybe<Scalars['Int']>
}

export enum Apps {
  Discord = 'DISCORD',
}

export type BattleRoyaleDetails = {
  __typename?: 'BattleRoyaleDetails'
  firstRoundNumberOfGroups?: Maybe<Scalars['Int']>
  gamesPerGroup?: Maybe<Scalars['Int']>
  numberOfRounds?: Maybe<Scalars['Int']>
  rounds?: Maybe<Array<Maybe<Round>>>
  scoringRules?: Maybe<ScoringRules>
}

export type BattleRoyaleDetailsInput = {
  firstRoundNumberOfGroups?: InputMaybe<Scalars['Int']>
  gamesPerGroup?: InputMaybe<Scalars['Int']>
  numberOfRounds?: InputMaybe<Scalars['Int']>
  rounds?: InputMaybe<Array<InputMaybe<RoundInput>>>
  scoringRules?: InputMaybe<ScoringRulesInput>
}

export type BattleRoyaleGame = {
  __typename?: 'BattleRoyaleGame'
  gameStatus?: Maybe<GameStatus>
  id?: Maybe<Scalars['String']>
  map?: Maybe<Scalars['String']>
  scores?: Maybe<Array<Maybe<ParticipantScore>>>
  startDate?: Maybe<Scalars['Date']>
  streamLinks?: Maybe<StreamLinks>
}

export type BattleRoyaleGameMetric = {
  __typename?: 'BattleRoyaleGameMetric'
  metricName?: Maybe<Scalars['String']>
  metricType?: Maybe<MetricType>
  points?: Maybe<Scalars['Int']>
}

export type BattleRoyaleGameMetricInput = {
  metricName?: InputMaybe<Scalars['String']>
  metricType?: InputMaybe<MetricType>
  points?: InputMaybe<Scalars['Int']>
}

export type BattleRoyaleGroup = {
  __typename?: 'BattleRoyaleGroup'
  activeGame?: Maybe<Scalars['String']>
  gameIds?: Maybe<Array<Maybe<Scalars['String']>>>
  groupStatus?: Maybe<GroupStatus>
  id?: Maybe<Scalars['String']>
  noOfWinners?: Maybe<Scalars['Int']>
  participantIds?: Maybe<Array<Maybe<GroupParticipantScore>>>
  roundId?: Maybe<Scalars['String']>
  tournamentId?: Maybe<Scalars['String']>
  upperGroupId?: Maybe<Scalars['String']>
  winnerIds?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type Bracket = {
  __typename?: 'Bracket'
  bracketSize: Scalars['Int']
  bracketStatus: BracketStatus
  lowerBracket: Array<Maybe<Match>>
  upperBracket: Array<Maybe<Match>>
}

export type BracketInformation = {
  __typename?: 'BracketInformation'
  battleRoyaleBracketDetail?: Maybe<BattleRoyaleDetails>
  bracketName?: Maybe<Scalars['String']>
  bracketStartDate?: Maybe<Scalars['Date']>
  bracketStatus?: Maybe<BracketStatus>
  bracketType?: Maybe<BracketType>
  id?: Maybe<Scalars['String']>
  isSelfReportAllowed?: Maybe<Scalars['Boolean']>
  maxParticipantCount?: Maybe<Scalars['Int']>
  participantIds?: Maybe<Array<Maybe<Scalars['String']>>>
  publishBrackets?: Maybe<Scalars['Boolean']>
  roundRobinBracketDetail?: Maybe<RoundRobinBracketDetail>
  swissBracketDetail?: Maybe<SwissBracketDetail>
  winners?: Maybe<Array<Maybe<WinnerData>>>
}

export type BracketInformationInput = {
  battleRoyaleDetails?: InputMaybe<BattleRoyaleDetailsInput>
  bracketName?: InputMaybe<Scalars['String']>
  bracketStartDate?: InputMaybe<Scalars['Date']>
  bracketType?: InputMaybe<BracketType>
  id?: InputMaybe<Scalars['String']>
  isSelfReportAllowed?: InputMaybe<Scalars['Boolean']>
  maxParticipantCount?: InputMaybe<Scalars['Int']>
  roundRobinDetails?: InputMaybe<RoundRobinDetailInput>
  swissDetails?: InputMaybe<SwissDetailInput>
}

export type BracketParticipantGroup = {
  __typename?: 'BracketParticipantGroup'
  bracketId?: Maybe<Scalars['String']>
  groupIndex?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  participantIds?: Maybe<Array<Maybe<Scalars['String']>>>
  scores?: Maybe<Array<Maybe<ParticipantScoreInformation>>>
}

export enum BracketStatus {
  Complete = 'COMPLETE',
  Finalized = 'FINALIZED',
  Finished = 'FINISHED',
  Live = 'LIVE',
  New = 'NEW',
  Seeded = 'SEEDED',
}

export enum BracketType {
  BattleRoyale = 'BATTLE_ROYALE',
  DoubleElimination = 'DOUBLE_ELIMINATION',
  RoundRobin = 'ROUND_ROBIN',
  SingleElimination = 'SINGLE_ELIMINATION',
  Swiss = 'SWISS',
}

export enum ChainType {
  Bsc = 'BSC',
  Mainnet = 'MAINNET',
  Matic = 'MATIC',
  OffChain = 'OFF_CHAIN',
}

export enum CountryCode {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  An = 'AN',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bu = 'BU',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cp = 'CP',
  Cr = 'CR',
  Cs = 'CS',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dg = 'DG',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ea = 'EA',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Ez = 'EZ',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Fx = 'FX',
  Ga = 'GA',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Ic = 'IC',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nt = 'NT',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sf = 'SF',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tp = 'TP',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Uk = 'UK',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zr = 'ZR',
  Zw = 'ZW',
}

export type CurrentUserStatusInTournament = {
  __typename?: 'CurrentUserStatusInTournament'
  isSignedIn: Scalars['Boolean']
  isUserCheckedIn: Scalars['Boolean']
  isUserInWaitlist: Scalars['Boolean']
  isUserOrganizer: Scalars['Boolean']
  isUserParticipant: Scalars['Boolean']
  isUserTeamOwner: Scalars['Boolean']
  isUsersTeamCheckedIn: Scalars['Boolean']
  team?: Maybe<Team>
  userTournamentPermissions: Array<Maybe<TournamentPermissionType>>
}

export type DateRange = {
  max?: InputMaybe<Scalars['Date']>
  min?: InputMaybe<Scalars['Date']>
}

export type DeleteTournamentUserPermissionInput = {
  tournamentId?: InputMaybe<Scalars['String']>
  userEmail?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type DeviceInformationInput = {
  sessionKey?: InputMaybe<Scalars['String']>
}

export type DraftTournamentInput = {
  alias?: InputMaybe<Scalars['String']>
  autoApprovalMinute?: InputMaybe<Scalars['Int']>
  battleRoyaleDetails?: InputMaybe<BattleRoyaleDetailsInput>
  bracketType?: InputMaybe<BracketType>
  buyInFee?: InputMaybe<Scalars['BigDecimal']>
  checkinPeriod?: InputMaybe<Scalars['Int']>
  deadline?: InputMaybe<Scalars['Date']>
  description?: InputMaybe<Scalars['String']>
  esportRegions?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>
  externalDiscordChannelUrl?: InputMaybe<Scalars['String']>
  gameId?: InputMaybe<Scalars['String']>
  isAutoApprovalEnabled?: InputMaybe<Scalars['Boolean']>
  isCheckinRequired?: InputMaybe<Scalars['Boolean']>
  isGameIdRequired?: InputMaybe<Scalars['Boolean']>
  isPrizeTargetInUSD?: InputMaybe<Scalars['Boolean']>
  isRegistrationQuestionsRequired?: InputMaybe<Scalars['Boolean']>
  isSelfReportAllowed?: InputMaybe<Scalars['Boolean']>
  maxTeams?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  organizerCut?: InputMaybe<Scalars['BigDecimal']>
  prizeDistribution?: InputMaybe<Array<InputMaybe<Scalars['BigDecimal']>>>
  prizeTarget?: InputMaybe<Scalars['BigDecimal']>
  registrationQuestions?: InputMaybe<Array<InputMaybe<QuestionInput>>>
  streamLinks?: InputMaybe<StreamLinksInput>
  teamSize?: InputMaybe<Scalars['Int']>
  tokenAddress?: InputMaybe<Scalars['String']>
  tournamentCountries?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>
  tournamentType?: InputMaybe<TournamentType>
  unlisted?: InputMaybe<Scalars['Boolean']>
}

export type Earnings = {
  __typename?: 'Earnings'
  amount?: Maybe<Scalars['Float']>
  tokenId?: Maybe<Scalars['String']>
}

export enum EsportRegion {
  Africa = 'AFRICA',
  EasternEurope = 'EASTERN_EUROPE',
  EastAsia = 'EAST_ASIA',
  Global = 'GLOBAL',
  LatinAmericaAndCaribbean = 'LATIN_AMERICA_AND_CARIBBEAN',
  MiddleEastAndNorthAfrica = 'MIDDLE_EAST_AND_NORTH_AFRICA',
  NorthAmerica = 'NORTH_AMERICA',
  Oceania = 'OCEANIA',
  SoutheastAsia = 'SOUTHEAST_ASIA',
  SouthAsia = 'SOUTH_ASIA',
  Turkey = 'TURKEY',
  WesternEurope = 'WESTERN_EUROPE',
}

export type Game = {
  __typename?: 'Game'
  automatable: Scalars['Boolean']
  createdAt: Scalars['Date']
  id: Scalars['String']
  name: Scalars['String']
  tags?: Maybe<Array<Maybe<GameTag>>>
  updatedAt: Scalars['Date']
  url: Scalars['String']
}

export type GameEarnings = {
  __typename?: 'GameEarnings'
  amount?: Maybe<Scalars['Float']>
  gameId?: Maybe<Scalars['String']>
}

export type GameIdInput = {
  gameId?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export enum GameStatus {
  Complete = 'COMPLETE',
  Live = 'LIVE',
  New = 'NEW',
}

export enum GameTag {
  AutoChess = 'AUTO_CHESS',
  BattleRoyale = 'BATTLE_ROYALE',
  Fighting = 'FIGHTING',
  Fps = 'FPS',
  Mmo = 'MMO',
  Moba = 'MOBA',
  Mobile = 'MOBILE',
  Pvp = 'PVP',
  Racing = 'RACING',
  Rpg = 'RPG',
  Rts = 'RTS',
  Sports = 'SPORTS',
  Tcg = 'TCG',
}

export type GroupMatch = {
  __typename?: 'GroupMatch'
  bracketId?: Maybe<Scalars['String']>
  groupIndex?: Maybe<Scalars['Int']>
  id?: Maybe<Scalars['String']>
  matchResult?: Maybe<Scalars['Object']>
  matchStatus?: Maybe<MatchStatus>
  minusPoints?: Maybe<Array<Maybe<TeamMinusPoint>>>
  roundIndex?: Maybe<Scalars['Int']>
  scores: Array<Maybe<MatchScore>>
  team1Id?: Maybe<Scalars['String']>
  team1ReportedScore: Array<Maybe<MatchScore>>
  team2Id?: Maybe<Scalars['String']>
  team2ReportedScore: Array<Maybe<MatchScore>>
}

export type GroupParticipantScore = {
  __typename?: 'GroupParticipantScore'
  gameScores?: Maybe<Array<Maybe<Scalars['Int']>>>
  isDisqualified?: Maybe<Scalars['Boolean']>
  participantId?: Maybe<Scalars['String']>
  totalScore?: Maybe<Scalars['Int']>
}

export enum GroupStatus {
  Complete = 'COMPLETE',
  Live = 'LIVE',
  New = 'NEW',
}

export type HomepageBannerItem = {
  __typename?: 'HomepageBannerItem'
  buttonText: Scalars['String']
  id: Scalars['String']
  imageUrl: Scalars['String']
  isDeleted: Scalars['Boolean']
  isEnabled: Scalars['Boolean']
  linkUrl: Scalars['String']
  name: Scalars['String']
  order: Scalars['Int']
  subtitle: Scalars['String']
  title: Scalars['String']
}

export type HomepageBannerItemInput = {
  buttonText?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  imageUrl?: InputMaybe<Scalars['String']>
  isDeleted?: InputMaybe<Scalars['Boolean']>
  isEnabled?: InputMaybe<Scalars['Boolean']>
  linkUrl?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  order?: InputMaybe<Scalars['Int']>
  subtitle?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type InvitedUserPermission = {
  __typename?: 'InvitedUserPermission'
  permissionList?: Maybe<Array<Maybe<TournamentPermissionType>>>
  userEmail?: Maybe<Scalars['String']>
}

export type JwtAuthenticationResponse = {
  __typename?: 'JwtAuthenticationResponse'
  accessToken: Scalars['String']
  city?: Maybe<Scalars['String']>
  country?: Maybe<CountryCode>
  email: Scalars['String']
  personalTeamId: Scalars['String']
  publicAddress: Scalars['String']
  roles: Array<Maybe<Role>>
  state?: Maybe<State>
  tokenType: Scalars['String']
  user?: Maybe<UserWithPrivateInfo>
  userAvatar: Scalars['String']
  userId: Scalars['String']
  username: Scalars['String']
  walletType: WalletType
}

export type LeaderboardItem = {
  __typename?: 'LeaderboardItem'
  avatar: Scalars['String']
  country: CountryCode
  earnings?: Maybe<Array<Maybe<Earnings>>>
  earningsUSD: Scalars['Float']
  gameEarnings?: Maybe<Array<Maybe<GameEarnings>>>
  id: Scalars['String']
  tournamentsOrganized: Scalars['Int']
  tournamentsPlayed: Scalars['Int']
  userId: Scalars['String']
  userPublicAddress: Scalars['String']
  username: Scalars['String']
}

export type Match = {
  __typename?: 'Match'
  bracketId?: Maybe<Scalars['String']>
  createdAt: Scalars['Date']
  id: Scalars['String']
  lowerMatchId?: Maybe<Scalars['String']>
  match1Id?: Maybe<Scalars['String']>
  match2Id?: Maybe<Scalars['String']>
  matchStatus?: Maybe<MatchStatus>
  score: Scalars['Object']
  team1Id?: Maybe<Scalars['String']>
  team1Proofs?: Maybe<Array<Maybe<Scalars['String']>>>
  team1ReportedScore: Scalars['Object']
  team2Id?: Maybe<Scalars['String']>
  team2Proofs?: Maybe<Array<Maybe<Scalars['String']>>>
  team2ReportedScore: Scalars['Object']
  tournamentId?: Maybe<Scalars['String']>
  updatedAt: Scalars['Date']
  upperMatchId?: Maybe<Scalars['String']>
  winnerId?: Maybe<Scalars['String']>
}

export type MatchParticipants = {
  team1Id?: InputMaybe<Scalars['String']>
  team2Id?: InputMaybe<Scalars['String']>
}

export type MatchRoomAllRoomInformation = {
  __typename?: 'MatchRoomAllRoomInformation'
  matchRoomInformationList?: Maybe<Array<Maybe<MatchRoomInformation>>>
}

export type MatchRoomDetailOutput = {
  __typename?: 'MatchRoomDetailOutput'
  firstTeam?: Maybe<Team>
  matchId: Scalars['String']
  matchRoomIndex?: Maybe<Scalars['Int']>
  matchStatus?: Maybe<MatchStatus>
  secondTeam?: Maybe<Team>
  teamList?: Maybe<Array<Maybe<Team>>>
  tournamentAlias?: Maybe<Scalars['String']>
  tournamentId?: Maybe<Scalars['String']>
  tournamentName?: Maybe<Scalars['String']>
  tournamentStatus?: Maybe<TournamentStatus>
}

export type MatchRoomInformation = {
  __typename?: 'MatchRoomInformation'
  index?: Maybe<Scalars['Int']>
  matchId?: Maybe<Scalars['String']>
}

export type MatchRoomMessageInput = {
  matchId?: InputMaybe<Scalars['String']>
  message?: InputMaybe<Scalars['String']>
}

export type MatchRoomMessagePayload = {
  __typename?: 'MatchRoomMessagePayload'
  id?: Maybe<Scalars['String']>
  message?: Maybe<Scalars['String']>
  recipientMatchId?: Maybe<Scalars['String']>
  sendingUser?: Maybe<MatchRoomPayloadUser>
  sentDate?: Maybe<Scalars['Date']>
}

export type MatchRoomPayloadUser = {
  __typename?: 'MatchRoomPayloadUser'
  avatar?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  isOrganizer?: Maybe<Scalars['Boolean']>
  teamId?: Maybe<Scalars['String']>
  teamName?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

export type MatchRoomUserStatus = {
  __typename?: 'MatchRoomUserStatus'
  isAllowed?: Maybe<Scalars['Boolean']>
  isOrganizer?: Maybe<Scalars['Boolean']>
}

export type MatchScore = {
  __typename?: 'MatchScore'
  score?: Maybe<ScorePair>
  scoreIndex?: Maybe<Scalars['Int']>
  winnerId?: Maybe<Scalars['String']>
}

export type MatchScoreInput = {
  score?: InputMaybe<ScorePairInput>
  scoreIndex?: InputMaybe<Scalars['Int']>
  winnerId?: InputMaybe<Scalars['String']>
}

export type MatchScoringRule = {
  __typename?: 'MatchScoringRule'
  draw?: Maybe<Scalars['Int']>
  lose?: Maybe<Scalars['Int']>
  win?: Maybe<Scalars['Int']>
}

export type MatchScoringRuleInput = {
  draw?: InputMaybe<Scalars['Int']>
  lose?: InputMaybe<Scalars['Int']>
  win?: InputMaybe<Scalars['Int']>
}

export enum MatchStatus {
  Complete = 'COMPLETE',
  HalfPending = 'HALF_PENDING',
  Mismatch = 'MISMATCH',
  New = 'NEW',
  Pending = 'PENDING',
}

export type MetricScore = {
  __typename?: 'MetricScore'
  metricName?: Maybe<Scalars['String']>
  score?: Maybe<Scalars['Int']>
}

export type MetricScoreInput = {
  metricName?: InputMaybe<Scalars['String']>
  score?: InputMaybe<Scalars['Int']>
}

export enum MetricType {
  Custom = 'CUSTOM',
  Kills = 'KILLS',
}

export type MinusPoint = {
  __typename?: 'MinusPoint'
  evidenceUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  reason?: Maybe<Scalars['String']>
}

export type MinusPointInput = {
  evidenceUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  point?: InputMaybe<Scalars['Int']>
  reason?: InputMaybe<Scalars['String']>
}

export type Mutation = {
  __typename?: 'Mutation'
  acceptInvitation?: Maybe<Scalars['Boolean']>
  addGame?: Maybe<Game>
  addGameBR?: Maybe<BattleRoyaleGroup>
  addHomepageBannerItem?: Maybe<HomepageBannerItem>
  addMinusPointForParticipant?: Maybe<BattleRoyaleGame>
  addMinusPointForParticipantSwiss?: Maybe<GroupMatch>
  addParticipant: Tournament
  addResponse?: Maybe<Array<Maybe<SquadResponseOutput>>>
  addToken?: Maybe<Token>
  addTournamentPermissionForUser?: Maybe<Scalars['String']>
  addUserAction?: Maybe<Scalars['String']>
  assignRoleToUser?: Maybe<User>
  callTournamentOrganizerToMatchRoom?: Maybe<Scalars['String']>
  changeContestants?: Maybe<SeededEliminationBracketInformation>
  changeParticipantsBetweenGroupsRR?: Maybe<Array<Maybe<BracketParticipantGroup>>>
  changeTournamentStatus?: Maybe<Tournament>
  checkInParticipants?: Maybe<Array<Maybe<TeamStatus>>>
  claimAccount?: Maybe<Scalars['Boolean']>
  completeBracket: Bracket
  completeTournament: Tournament
  createQuest?: Maybe<Quest>
  createStripePaymentIntentForEntryFeeTournament?: Maybe<PaymentIntentResponse>
  createTeam?: Maybe<Team>
  createTournament: Tournament
  createTournamentDraft: Tournament
  deleteGameBR?: Maybe<BattleRoyaleGroup>
  deleteHomepageBannerItem?: Maybe<Scalars['Boolean']>
  deleteMinusPointForParticipant?: Maybe<BattleRoyaleGame>
  deleteMinusPointForParticipantSwiss?: Maybe<GroupMatch>
  deleteProof?: Maybe<Match>
  deleteTournament: Tournament
  deleteTournamentPermissionForUser?: Maybe<Scalars['String']>
  determineWinnersBR?: Maybe<Tournament>
  determineWinnersForSwiss: BracketInformation
  determineWinnersRR: BracketInformation
  disqualifyParticipantBR?: Maybe<Array<Maybe<BattleRoyaleGame>>>
  disqualifyParticipantSwiss?: Maybe<BracketParticipantGroup>
  editHomepageBannerItem?: Maybe<HomepageBannerItem>
  editResponse?: Maybe<Array<Maybe<SquadResponseOutput>>>
  exchangeParticipantsBetweenActiveAndWaitlist: Tournament
  exchangeParticipantsBetweenGroups?: Maybe<Array<Maybe<BattleRoyaleGroup>>>
  fillTournamentWithParticipants?: Maybe<Tournament>
  fillUpActiveList: Tournament
  finishGameBR?: Maybe<BattleRoyaleGame>
  finishGroupBR?: Maybe<BattleRoyaleGroup>
  forgotPassword?: Maybe<Scalars['Boolean']>
  generateBracket: SeededEliminationBracketInformation
  generateBracketBR?: Maybe<SeededBattleRoyaleBracketInformation>
  generateBracketRR?: Maybe<BracketInformation>
  generateBracketSwiss?: Maybe<BracketInformation>
  generateNextRoundSwiss?: Maybe<RoundRobinRound>
  getDeviceInformation?: Maybe<Scalars['String']>
  inviteMember?: Maybe<PendingInvites>
  matchScore: SeededEliminationBracketInformation
  modifyTeam?: Maybe<Team>
  newTransaction?: Maybe<Array<Maybe<Transaction>>>
  publishBracketBR?: Maybe<BattleRoyaleDetails>
  rectifyBracketAndDetermineWinners: BracketInformation
  refreshOAuth?: Maybe<Scalars['String']>
  rejectInvitation?: Maybe<Scalars['Boolean']>
  removeDisqualificationOfParticipantSwiss?: Maybe<BracketParticipantGroup>
  removeInvitation?: Maybe<PendingInvites>
  removeMember?: Maybe<Team>
  removeParticipant: Tournament
  reportMatchScoreRR?: Maybe<GroupMatch>
  reportMatchScoreSwiss?: Maybe<GroupMatch>
  resetAllBracketsOfTournament: Array<Maybe<SeededEliminationBracketInformation>>
  resetBracket: Array<Maybe<SeededEliminationBracketInformation>>
  resetBracketRR?: Maybe<BracketInformation>
  resetBracketSwiss?: Maybe<BracketInformation>
  revokeOAuth?: Maybe<Scalars['String']>
  saveGameIds?: Maybe<Array<Maybe<ParticipantStatus>>>
  saveOAuth?: Maybe<Scalars['String']>
  selectAsHigherRankRR?: Maybe<BracketParticipantGroup>
  selectAsHigherRankSwiss?: Maybe<BracketParticipantGroup>
  selectHigherRank?: Maybe<BattleRoyaleGroup>
  selfReport: SeededEliminationBracketInformation
  selfReportMatchScoreRR?: Maybe<GroupMatch>
  selfReportMatchScoreSwiss?: Maybe<GroupMatch>
  selfReportScoreBR?: Maybe<BattleRoyaleGame>
  sendMessageToMatchRoom?: Maybe<MatchRoomMessagePayload>
  sendTournamentNotification: Tournament
  setBracketPublishStatus: SeededEliminationBracketInformation
  setFavoriteGamesForUser?: Maybe<Scalars['Boolean']>
  setNotificationOptionsForUser?: Maybe<Scalars['Boolean']>
  setOrderOfActiveHomepageBannerItems?: Maybe<Array<Maybe<HomepageBannerItem>>>
  setPlayerInformationForUser?: Maybe<Scalars['Boolean']>
  signUpFromDraftUser: JwtAuthenticationResponse
  signUpUser: JwtAuthenticationResponse
  signUpValidation?: Maybe<Scalars['String']>
  softDeleteCurrentUser?: Maybe<Scalars['Boolean']>
  softDeleteTeam?: Maybe<Team>
  startBracket: SeededEliminationBracketInformation
  startGameBR?: Maybe<BattleRoyaleGame>
  startTournament: SeededEliminationBracketInformation
  toggleTournamentFeatured?: Maybe<Tournament>
  toggleTournamentUnlisted?: Maybe<Tournament>
  updateGameBR?: Maybe<BattleRoyaleGame>
  updateMyMetadata?: Maybe<UserWithPrivateInfo>
  updateMyPassword?: Maybe<Scalars['Boolean']>
  updateSquadRoster?: Maybe<Team>
  updateTournament: Tournament
  updateTournamentPermissionForUser?: Maybe<Scalars['String']>
  updateTransactionStatus?: Maybe<Array<Maybe<Transaction>>>
}

export type MutationAcceptInvitationArgs = {
  teamInviteId?: InputMaybe<Scalars['String']>
}

export type MutationAddGameArgs = {
  gameName?: InputMaybe<Scalars['String']>
  imageUrl?: InputMaybe<Scalars['String']>
  tags?: InputMaybe<Array<InputMaybe<GameTag>>>
}

export type MutationAddGameBrArgs = {
  bracketId: Scalars['String']
  groupId: Scalars['String']
  map?: InputMaybe<Scalars['String']>
}

export type MutationAddHomepageBannerItemArgs = {
  homepageBannerItemInput?: InputMaybe<HomepageBannerItemInput>
}

export type MutationAddMinusPointForParticipantArgs = {
  evidenceUrl?: InputMaybe<Scalars['String']>
  gameId: Scalars['String']
  groupId: Scalars['String']
  point: Scalars['Int']
  reason: Scalars['String']
  teamId: Scalars['String']
}

export type MutationAddMinusPointForParticipantSwissArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  teamMinusPoint: TeamMinusPointInput
}

export type MutationAddParticipantArgs = {
  gameIds?: InputMaybe<Array<InputMaybe<GameIdInput>>>
  responses?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  squadIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  substituteIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamId?: InputMaybe<Scalars['String']>
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationAddResponseArgs = {
  data: SquadResponseInput
  tournamentId: Scalars['String']
}

export type MutationAddTokenArgs = {
  newTokenInput?: InputMaybe<NewTokenInput>
}

export type MutationAddTournamentPermissionForUserArgs = {
  input?: InputMaybe<AddTournamentUserPermissionInput>
}

export type MutationAddUserActionArgs = {
  actionDate?: InputMaybe<Scalars['Date']>
  actionType?: InputMaybe<QuestActionType>
  parameter?: InputMaybe<Scalars['String']>
}

export type MutationAssignRoleToUserArgs = {
  roleName?: InputMaybe<RoleName>
  userId?: InputMaybe<Scalars['String']>
}

export type MutationCallTournamentOrganizerToMatchRoomArgs = {
  matchId?: InputMaybe<Scalars['String']>
}

export type MutationChangeContestantsArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  matchId?: InputMaybe<Scalars['String']>
  team1Id?: InputMaybe<Scalars['String']>
  team2Id?: InputMaybe<Scalars['String']>
}

export type MutationChangeParticipantsBetweenGroupsRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  group1Id?: InputMaybe<Scalars['String']>
  group2Id?: InputMaybe<Scalars['String']>
  team1Id?: InputMaybe<Scalars['String']>
  team2Id?: InputMaybe<Scalars['String']>
}

export type MutationChangeTournamentStatusArgs = {
  id?: InputMaybe<Scalars['String']>
  newStatus?: InputMaybe<TournamentStatus>
}

export type MutationCheckInParticipantsArgs = {
  teamId: Scalars['String']
  tournamentId: Scalars['String']
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationClaimAccountArgs = {
  newPassword?: InputMaybe<Scalars['String']>
  token?: InputMaybe<Scalars['String']>
}

export type MutationCompleteBracketArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationCompleteTournamentArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationCreateQuestArgs = {
  quest?: InputMaybe<QuestInput>
}

export type MutationCreateStripePaymentIntentForEntryFeeTournamentArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationCreateTeamArgs = {
  inviteeEmails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  inviteeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  name?: InputMaybe<Scalars['String']>
}

export type MutationCreateTournamentArgs = {
  data?: InputMaybe<NewTournamentInput>
}

export type MutationCreateTournamentDraftArgs = {
  data?: InputMaybe<DraftTournamentInput>
}

export type MutationDeleteGameBrArgs = {
  bracketId: Scalars['String']
  gameId: Scalars['String']
  groupId: Scalars['String']
}

export type MutationDeleteHomepageBannerItemArgs = {
  homepageBannerItemInput?: InputMaybe<HomepageBannerItemInput>
}

export type MutationDeleteMinusPointForParticipantArgs = {
  gameId: Scalars['String']
  groupId: Scalars['String']
  minusPointId: Scalars['String']
  teamId: Scalars['String']
}

export type MutationDeleteMinusPointForParticipantSwissArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  teamMinusPoint: TeamMinusPointInput
}

export type MutationDeleteProofArgs = {
  matchId?: InputMaybe<Scalars['String']>
  url?: InputMaybe<Scalars['String']>
}

export type MutationDeleteTournamentArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationDeleteTournamentPermissionForUserArgs = {
  input?: InputMaybe<DeleteTournamentUserPermissionInput>
}

export type MutationDetermineWinnersBrArgs = {
  bracketId: Scalars['String']
}

export type MutationDetermineWinnersForSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationDetermineWinnersRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationDisqualifyParticipantBrArgs = {
  teamId: Scalars['String']
  tournamentId: Scalars['String']
}

export type MutationDisqualifyParticipantSwissArgs = {
  bracketId: Scalars['String']
  participantId: Scalars['String']
}

export type MutationEditHomepageBannerItemArgs = {
  homepageBannerItemInput?: InputMaybe<HomepageBannerItemInput>
}

export type MutationEditResponseArgs = {
  data: SquadResponseInput
  tournamentId: Scalars['String']
}

export type MutationExchangeParticipantsBetweenActiveAndWaitlistArgs = {
  activeParticipantId?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  waitlistParticipantId?: InputMaybe<Scalars['String']>
}

export type MutationExchangeParticipantsBetweenGroupsArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  group1Id?: InputMaybe<Scalars['String']>
  group2Id?: InputMaybe<Scalars['String']>
  participant1Id?: InputMaybe<Scalars['String']>
  participant2Id?: InputMaybe<Scalars['String']>
}

export type MutationFillTournamentWithParticipantsArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationFillUpActiveListArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationFinishGameBrArgs = {
  bracketId: Scalars['String']
  gameId: Scalars['String']
  groupId: Scalars['String']
}

export type MutationFinishGroupBrArgs = {
  bracketId: Scalars['String']
  groupId: Scalars['String']
}

export type MutationForgotPasswordArgs = {
  email?: InputMaybe<Scalars['String']>
}

export type MutationGenerateBracketArgs = {
  allowCheckedInOnly?: InputMaybe<Scalars['Boolean']>
  bracketId?: InputMaybe<Scalars['String']>
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationGenerateBracketBrArgs = {
  allowCheckedInOnly?: InputMaybe<Scalars['Boolean']>
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationGenerateBracketRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  participantIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationGenerateBracketSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  matchParticipantsList?: InputMaybe<Array<InputMaybe<MatchParticipants>>>
}

export type MutationGenerateNextRoundSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationGetDeviceInformationArgs = {
  data: DeviceInformationInput
}

export type MutationInviteMemberArgs = {
  inviteeIdOrEmail?: InputMaybe<Scalars['String']>
  teamId?: InputMaybe<Scalars['String']>
}

export type MutationMatchScoreArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  team1Score: Scalars['Int']
  team2Score: Scalars['Int']
}

export type MutationModifyTeamArgs = {
  newName?: InputMaybe<Scalars['String']>
  teamId?: InputMaybe<Scalars['String']>
}

export type MutationNewTransactionArgs = {
  chainType?: InputMaybe<ChainType>
  transactionHash?: InputMaybe<Scalars['String']>
  transactionType?: InputMaybe<TransactionType>
}

export type MutationPublishBracketBrArgs = {
  bracketId: Scalars['String']
}

export type MutationRectifyBracketAndDetermineWinnersArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationRefreshOAuthArgs = {
  app: Apps
}

export type MutationRejectInvitationArgs = {
  teamInviteId?: InputMaybe<Scalars['String']>
}

export type MutationRemoveDisqualificationOfParticipantSwissArgs = {
  bracketId: Scalars['String']
  participantId: Scalars['String']
}

export type MutationRemoveInvitationArgs = {
  teamId?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type MutationRemoveMemberArgs = {
  memberId?: InputMaybe<Scalars['String']>
  teamId?: InputMaybe<Scalars['String']>
}

export type MutationRemoveParticipantArgs = {
  teamId?: InputMaybe<Scalars['String']>
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationReportMatchScoreRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  matchId?: InputMaybe<Scalars['String']>
  scores?: InputMaybe<Array<InputMaybe<MatchScoreInput>>>
}

export type MutationReportMatchScoreSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  matchId?: InputMaybe<Scalars['String']>
  scores?: InputMaybe<Array<InputMaybe<MatchScoreInput>>>
}

export type MutationResetAllBracketsOfTournamentArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationResetBracketArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationResetBracketRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationResetBracketSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationRevokeOAuthArgs = {
  app: Apps
}

export type MutationSaveGameIdsArgs = {
  gameIds?: InputMaybe<Array<InputMaybe<GameIdInput>>>
  teamId: Scalars['String']
  tournamentId: Scalars['String']
}

export type MutationSaveOAuthArgs = {
  accessCode: Scalars['String']
  app: Apps
  redirectURI: Scalars['String']
}

export type MutationSelectAsHigherRankRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  groupId?: InputMaybe<Scalars['String']>
  selectedTeamId?: InputMaybe<Scalars['String']>
}

export type MutationSelectAsHigherRankSwissArgs = {
  bracketId: Scalars['String']
  groupId: Scalars['String']
  selectedTeamId: Scalars['String']
}

export type MutationSelectHigherRankArgs = {
  bracketId: Scalars['String']
  groupId: Scalars['String']
  participant1Id: Scalars['String']
  participant2Id: Scalars['String']
}

export type MutationSelfReportArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  team1Score: Scalars['Int']
  team2Score: Scalars['Int']
}

export type MutationSelfReportMatchScoreRrArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  participantId: Scalars['String']
  scores: Array<InputMaybe<MatchScoreInput>>
}

export type MutationSelfReportMatchScoreSwissArgs = {
  bracketId: Scalars['String']
  matchId: Scalars['String']
  participantId: Scalars['String']
  scores: Array<InputMaybe<MatchScoreInput>>
}

export type MutationSelfReportScoreBrArgs = {
  bracketId: Scalars['String']
  gameId: Scalars['String']
  groupId: Scalars['String']
  score?: InputMaybe<ParticipantScoreInput>
}

export type MutationSendMessageToMatchRoomArgs = {
  input: MatchRoomMessageInput
}

export type MutationSendTournamentNotificationArgs = {
  message: Scalars['String']
  tournamentId: Scalars['String']
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationSetBracketPublishStatusArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  publishBracket?: InputMaybe<Scalars['Boolean']>
}

export type MutationSetFavoriteGamesForUserArgs = {
  favoriteGameIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type MutationSetNotificationOptionsForUserArgs = {
  notificationGroupList?: InputMaybe<Array<InputMaybe<NotificationGroup>>>
}

export type MutationSetOrderOfActiveHomepageBannerItemsArgs = {
  homepageBannerItemInputs?: InputMaybe<Array<InputMaybe<HomepageBannerItemInput>>>
}

export type MutationSetPlayerInformationForUserArgs = {
  userPlayerInformationInput?: InputMaybe<UserPlayerInformationInput>
}

export type MutationSignUpFromDraftUserArgs = {
  chainId?: InputMaybe<Scalars['Int']>
  draftUserToken: Scalars['String']
  oAuthDataInput?: InputMaybe<OAuthDataInput>
  publicAddress: Scalars['String']
  signature?: InputMaybe<Scalars['String']>
  signatureRequestMessage?: InputMaybe<Scalars['String']>
  walletType: WalletInputType
}

export type MutationSignUpUserArgs = {
  metadata: NewUserInput
}

export type MutationSignUpValidationArgs = {
  metadata: SignUpValidationInput
}

export type MutationSoftDeleteCurrentUserArgs = {
  password?: InputMaybe<Scalars['String']>
}

export type MutationSoftDeleteTeamArgs = {
  teamId?: InputMaybe<Scalars['String']>
}

export type MutationStartBracketArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type MutationStartGameBrArgs = {
  bracketId: Scalars['String']
  gameId: Scalars['String']
  groupId: Scalars['String']
}

export type MutationStartTournamentArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationToggleTournamentFeaturedArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationToggleTournamentUnlistedArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type MutationUpdateGameBrArgs = {
  bracketId: Scalars['String']
  gameId: Scalars['String']
  groupId: Scalars['String']
  map?: InputMaybe<Scalars['String']>
  scores?: InputMaybe<Array<InputMaybe<ParticipantScoreInput>>>
  startDate?: InputMaybe<Scalars['Date']>
  streamLinks?: InputMaybe<StreamLinksInput>
}

export type MutationUpdateMyMetadataArgs = {
  metadata: UpdateUserInput
}

export type MutationUpdateMyPasswordArgs = {
  newPassword: Scalars['String']
  oldPassword: Scalars['String']
}

export type MutationUpdateSquadRosterArgs = {
  memberIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  substituteIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  teamId: Scalars['String']
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateTournamentArgs = {
  data?: InputMaybe<UpdateTournamentInput>
  tournamentId?: InputMaybe<Scalars['String']>
}

export type MutationUpdateTournamentPermissionForUserArgs = {
  input?: InputMaybe<UpdateTournamentUserPermissionInput>
}

export type MutationUpdateTransactionStatusArgs = {
  idOrHash?: InputMaybe<Scalars['String']>
  transactionStatus?: InputMaybe<TransactionStatus>
}

export type NewTokenInput = {
  chainType?: InputMaybe<ChainType>
  permitSignature?: InputMaybe<Scalars['String']>
  tokenContract?: InputMaybe<Scalars['String']>
  tokenDecimals?: InputMaybe<Scalars['Int']>
  tokenName?: InputMaybe<Scalars['String']>
  tokenSymbol?: InputMaybe<Scalars['String']>
  usdPrice?: InputMaybe<Scalars['Float']>
}

export type NewTournamentInput = {
  alias?: InputMaybe<Scalars['String']>
  autoApprovalMinute?: InputMaybe<Scalars['Int']>
  battleRoyaleDetails?: InputMaybe<BattleRoyaleDetailsInput>
  bracketList?: InputMaybe<Array<InputMaybe<BracketInformationInput>>>
  bracketType?: InputMaybe<BracketType>
  buyInFee?: InputMaybe<Scalars['BigDecimal']>
  checkinPeriod?: InputMaybe<Scalars['Int']>
  deadline?: InputMaybe<Scalars['Date']>
  description?: InputMaybe<Scalars['String']>
  esportRegions?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>
  eventLink?: InputMaybe<Scalars['String']>
  externalBrackets?: InputMaybe<Scalars['Boolean']>
  externalDiscordChannelUrl?: InputMaybe<Scalars['String']>
  gameId?: InputMaybe<Scalars['String']>
  isAutoApprovalEnabled?: InputMaybe<Scalars['Boolean']>
  isCheckinRequired?: InputMaybe<Scalars['Boolean']>
  isGameIdRequired?: InputMaybe<Scalars['Boolean']>
  isOnGslFormat?: InputMaybe<Scalars['Boolean']>
  isRegistrationQuestionsRequired?: InputMaybe<Scalars['Boolean']>
  isSelfReportAllowed?: InputMaybe<Scalars['Boolean']>
  isSubstitutePlayersEnabled?: InputMaybe<Scalars['Boolean']>
  maxSubstitutePlayerCount?: InputMaybe<Scalars['Int']>
  maxTeams?: InputMaybe<Scalars['Int']>
  name?: InputMaybe<Scalars['String']>
  prizeDescription?: InputMaybe<Scalars['String']>
  prizeDistribution?: InputMaybe<Array<InputMaybe<Scalars['BigDecimal']>>>
  prizeTarget?: InputMaybe<Scalars['BigDecimal']>
  registrationQuestions?: InputMaybe<Array<InputMaybe<QuestionInput>>>
  streamLinks?: InputMaybe<StreamLinksInput>
  teamSize?: InputMaybe<Scalars['Int']>
  tokenId?: InputMaybe<Scalars['String']>
  tournamentCountries?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>
  tournamentType?: InputMaybe<TournamentTypeInput>
  unlisted?: InputMaybe<Scalars['Boolean']>
}

export type NewUserInput = {
  chainId: Scalars['Int']
  country: CountryCode
  dob?: InputMaybe<Scalars['Date']>
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  platform: Platform
  publicAddress: Scalars['String']
  signature: Scalars['String']
  signatureRequestMessage: Scalars['String']
  state?: InputMaybe<State>
  username: Scalars['String']
  walletType: WalletInputType
}

export type NonCryptoReward = {
  __typename?: 'NonCryptoReward'
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
}

export type Notification = {
  __typename?: 'Notification'
  createdAt: Scalars['Date']
  id: Scalars['String']
  message: Scalars['String']
  metadata: Scalars['Object']
  type: NotificationType
  url: Scalars['String']
  userId: Scalars['String']
}

export enum NotificationGroup {
  MandatoryUpdateAndTransaction = 'MANDATORY_UPDATE_AND_TRANSACTION',
  NewsletterAndMarketingCommunication = 'NEWSLETTER_AND_MARKETING_COMMUNICATION',
  PlatformCommunication = 'PLATFORM_COMMUNICATION',
  PlatformNotification = 'PLATFORM_NOTIFICATION',
}

export enum NotificationType {
  CheckIn = 'CHECK_IN',
  Error = 'ERROR',
  Info = 'INFO',
  MatchroomReadyAnnouncement = 'MATCHROOM_READY_ANNOUNCEMENT',
  RewardsClaimed = 'REWARDS_CLAIMED',
  TournamentAnnouncement = 'TOURNAMENT_ANNOUNCEMENT',
  TournamentIssued = 'TOURNAMENT_ISSUED',
  TournamentNotification = 'TOURNAMENT_NOTIFICATION',
  Warning = 'WARNING',
}

export type OAuthAppUsername = {
  __typename?: 'OAuthAppUsername'
  app?: Maybe<Apps>
  username?: Maybe<Scalars['String']>
}

export type OAuthDataInput = {
  accessToken?: InputMaybe<Scalars['String']>
  platformUserId?: InputMaybe<Scalars['String']>
  provider?: InputMaybe<Apps>
  refreshToken?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type ParticipantScore = {
  __typename?: 'ParticipantScore'
  isDisqualified?: Maybe<Scalars['Boolean']>
  isOrganizerApprovedScore?: Maybe<Scalars['Boolean']>
  isUserSelfReported?: Maybe<Scalars['Boolean']>
  metricScores?: Maybe<Array<Maybe<MetricScore>>>
  minusPoints?: Maybe<Array<Maybe<MinusPoint>>>
  participantId?: Maybe<Scalars['String']>
  placement?: Maybe<Scalars['Int']>
  score?: Maybe<Scalars['Int']>
}

export type ParticipantScoreInformation = {
  __typename?: 'ParticipantScoreInformation'
  draw?: Maybe<Scalars['Int']>
  isDisqualified?: Maybe<Scalars['Boolean']>
  lose?: Maybe<Scalars['Int']>
  omwRate?: Maybe<Scalars['BigDecimal']>
  oomwRate?: Maybe<Scalars['BigDecimal']>
  participantId?: Maybe<Scalars['String']>
  playedGameCount?: Maybe<Scalars['Int']>
  point?: Maybe<Scalars['Int']>
  scoreAgainst?: Maybe<Scalars['Int']>
  totalMinusPoint?: Maybe<Scalars['Int']>
  totalScore?: Maybe<Scalars['Int']>
  win?: Maybe<Scalars['Int']>
  winRate?: Maybe<Scalars['BigDecimal']>
}

export type ParticipantScoreInput = {
  isDisqualified?: InputMaybe<Scalars['Boolean']>
  isOrganizerApprovedScore?: InputMaybe<Scalars['Boolean']>
  isUserSelfReported?: InputMaybe<Scalars['Boolean']>
  metricScores?: InputMaybe<Array<InputMaybe<MetricScoreInput>>>
  minusPoints?: InputMaybe<Array<InputMaybe<MinusPointInput>>>
  participantId?: InputMaybe<Scalars['String']>
  placement?: InputMaybe<Scalars['Int']>
  score?: InputMaybe<Scalars['Int']>
}

export type ParticipantStatus = {
  __typename?: 'ParticipantStatus'
  gameId?: Maybe<Scalars['String']>
  id: Scalars['String']
  status: ParticipantStatusType
  teamId: Scalars['String']
  tournamentId: Scalars['String']
  userId: Scalars['String']
}

export enum ParticipantStatusType {
  CheckedIn = 'CHECKED_IN',
  Enrolled = 'ENROLLED',
}

export type PaymentIntentResponse = {
  __typename?: 'PaymentIntentResponse'
  clientSecret?: Maybe<Scalars['String']>
  paymentIntentStatus?: Maybe<StripePaymentIntentStatus>
}

export type PendingInvites = {
  __typename?: 'PendingInvites'
  external?: Maybe<Array<Maybe<Scalars['String']>>>
  internal?: Maybe<Array<Maybe<User>>>
}

export enum Platform {
  Default = 'default',
  Nacl = 'nacl',
}

export type PlatformIds = {
  __typename?: 'PlatformIds'
  axieInfinityId?: Maybe<Scalars['String']>
  battlenet?: Maybe<Scalars['String']>
  discord?: Maybe<Scalars['String']>
  godsUnchainedId?: Maybe<Scalars['String']>
  mtgaId?: Maybe<Scalars['String']>
  nintendo?: Maybe<Scalars['String']>
  riot?: Maybe<Scalars['String']>
  skyweaverId?: Maybe<Scalars['String']>
  splinterlandsId?: Maybe<Scalars['String']>
  steam?: Maybe<Scalars['String']>
}

export type PlatformIdsInput = {
  axieInfinityId?: InputMaybe<Scalars['String']>
  battlenet?: InputMaybe<Scalars['String']>
  discord?: InputMaybe<Scalars['String']>
  godsUnchainedId?: InputMaybe<Scalars['String']>
  mtgaId?: InputMaybe<Scalars['String']>
  nintendo?: InputMaybe<Scalars['String']>
  riot?: InputMaybe<Scalars['String']>
  skyweaverId?: InputMaybe<Scalars['String']>
  splinterlandsId?: InputMaybe<Scalars['String']>
  steam?: InputMaybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  countries?: Maybe<Array<Maybe<Scalars['Object']>>>
  currentUserStatusInTournament?: Maybe<CurrentUserStatusInTournament>
  existsByAlias: Scalars['Boolean']
  findTournamentsByBool: Array<Maybe<Tournament>>
  findTournamentsByString: Array<Maybe<Tournament>>
  game?: Maybe<Game>
  games?: Maybe<Array<Maybe<Game>>>
  getActiveHomepageBannerItems?: Maybe<Array<Maybe<HomepageBannerItem>>>
  getAdditionalUserInformation?: Maybe<AdditionalUserInformation>
  getAdminHomepageBannerItems?: Maybe<Array<Maybe<HomepageBannerItem>>>
  getAllMatchRoomInformation: MatchRoomAllRoomInformation
  getAllNotNewBracketsForTournament?: Maybe<Array<Maybe<SeededEliminationBracketInformation>>>
  getAllTeamCheckInStatusesByTournament?: Maybe<Array<Maybe<TeamStatus>>>
  getBracket: SeededEliminationBracketInformation
  getBracketBR?: Maybe<SeededBattleRoyaleBracketInformation>
  getBracketMatches?: Maybe<Array<Maybe<Match>>>
  getContractDevFee?: Maybe<Scalars['Float']>
  getDailyQuest?: Maybe<Quest>
  getEnrolledTournaments?: Maybe<Array<Maybe<EnrolledTournament>>>
  getGameTags?: Maybe<Array<Maybe<GameTag>>>
  getGamesBR?: Maybe<Array<Maybe<BattleRoyaleGame>>>
  getGamesByTags?: Maybe<Array<Maybe<Game>>>
  getGroupsBR?: Maybe<Array<Maybe<BattleRoyaleGroup>>>
  getGroupsRR?: Maybe<Array<Maybe<BracketParticipantGroup>>>
  getInvite?: Maybe<TeamInvite>
  getIsUserAllowedToAccessMatchRoom: MatchRoomUserStatus
  getMatch?: Maybe<Match>
  getMatchRoomDetail: MatchRoomDetailOutput
  getMatchRoomMessages?: Maybe<Array<Maybe<MatchRoomMessagePayload>>>
  getMatchesCount?: Maybe<Scalars['Int']>
  getMyActiveTeams?: Maybe<Array<Maybe<Team>>>
  getMyOwnedTeams?: Maybe<Array<Maybe<Team>>>
  getMyPendingTransactions?: Maybe<Array<Maybe<Transaction>>>
  getMyTeamInvites?: Maybe<Array<Maybe<TeamInvite>>>
  getMyTeams?: Maybe<Array<Maybe<Team>>>
  getMyTransactions?: Maybe<Array<Maybe<Transaction>>>
  getNewcomerQuest?: Maybe<Quest>
  getNonCryptoRewards?: Maybe<Array<Maybe<NonCryptoReward>>>
  getParticipantListForSeedingBracket: Array<Maybe<Team>>
  getParticipantStatusByTournamentAndUserId?: Maybe<ParticipantStatus>
  getParticipantStatusesByTeam?: Maybe<Array<Maybe<ParticipantStatus>>>
  getParticipantStatusesByTournament?: Maybe<Array<Maybe<ParticipantStatus>>>
  getPendingInvitees?: Maybe<PendingInvites>
  getQuest?: Maybe<Quest>
  getQuestionsResponsesByTeamIdAndTournamentId?: Maybe<Array<Maybe<SquadResponseOutputMap>>>
  getQuests?: Maybe<Array<Maybe<Quest>>>
  getRegistrationQuestions?: Maybe<RegistrationQuestions>
  getRegistrationQuestionsResponses?: Maybe<Array<Maybe<SquadResponseOutput>>>
  getRegistrationQuestionsResponsesByTeamIdAndTournamentId?: Maybe<SquadResponse>
  getRewardsByUser?: Maybe<Array<Maybe<UserRewards>>>
  getRoundRR?: Maybe<RoundRobinRound>
  getRoundSwiss?: Maybe<RoundRobinRound>
  getScoreboardSwiss?: Maybe<BracketParticipantGroup>
  getSinceCreatedAt?: Maybe<Array<Maybe<UserWithPrivateInfo>>>
  getTeam?: Maybe<Team>
  getTeamCheckInStatusByTournamentIdAndTeamId?: Maybe<TeamStatus>
  getTeamMatches?: Maybe<TeamBracketMatches>
  getTeamsCount?: Maybe<Scalars['Int']>
  getTournamentMatches?: Maybe<Array<Maybe<Match>>>
  getTournamentPlayersWithPrivateInfo?: Maybe<Array<Maybe<UserWithPrivateInfo>>>
  getTournamentUserPermissionList?: Maybe<TournamentUserPermissionOutput>
  getTournamentsCount?: Maybe<Scalars['Int']>
  getUserEarning?: Maybe<UserEarning>
  getUserLatestQuests?: Maybe<UserLatestQuestsResponse>
  getUserQuests?: Maybe<UserQuestsResponse>
  getUsersCount?: Maybe<Scalars['Int']>
  leaderboard?: Maybe<Array<Maybe<LeaderboardItem>>>
  leaderboardByCountry?: Maybe<Array<Maybe<LeaderboardItem>>>
  leaderboardByGame?: Maybe<Array<Maybe<LeaderboardItem>>>
  leaderboardByToken?: Maybe<Array<Maybe<LeaderboardItem>>>
  listedPastTournaments: Array<Maybe<Tournament>>
  listedTournaments: Array<Maybe<Tournament>>
  myProfile: UserWithPrivateInfo
  notification?: Maybe<Notification>
  notifications?: Maybe<Array<Maybe<Notification>>>
  searchForEnrolledTournaments?: Maybe<Array<Maybe<TournamentSearchContent>>>
  searchForTournamentsInCheckIn?: Maybe<Array<Maybe<TournamentSearchContent>>>
  searchTournaments?: Maybe<TournamentSearchResults>
  searchUsers?: Maybe<Array<Maybe<UserSearchResult>>>
  signInUser?: Maybe<JwtAuthenticationResponse>
  states?: Maybe<Array<Maybe<Scalars['Object']>>>
  tokens?: Maybe<Array<Maybe<Token>>>
  tournament?: Maybe<Tournament>
  tournaments: Array<Maybe<Tournament>>
  user?: Maybe<User>
  users?: Maybe<Array<Maybe<User>>>
  winnersVerifier: Scalars['String']
}

export type QueryCurrentUserStatusInTournamentArgs = {
  tournamentIdOrAlias?: InputMaybe<Scalars['String']>
}

export type QueryExistsByAliasArgs = {
  alias: Scalars['String']
}

export type QueryFindTournamentsByBoolArgs = {
  count?: InputMaybe<Scalars['Int']>
  fieldData?: InputMaybe<Scalars['Boolean']>
  fieldName?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortDirection>
  sortBy?: InputMaybe<Scalars['String']>
}

export type QueryFindTournamentsByStringArgs = {
  count?: InputMaybe<Scalars['Int']>
  fieldData?: InputMaybe<Scalars['String']>
  fieldName?: InputMaybe<Scalars['String']>
  offset?: InputMaybe<Scalars['Int']>
  sort?: InputMaybe<SortDirection>
  sortBy?: InputMaybe<Scalars['String']>
}

export type QueryGameArgs = {
  id: Scalars['String']
}

export type QueryGamesArgs = {
  count?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryGetAdminHomepageBannerItemsArgs = {
  fetchOnlyEnabled?: InputMaybe<Scalars['Boolean']>
}

export type QueryGetAllMatchRoomInformationArgs = {
  matchId?: InputMaybe<Scalars['String']>
}

export type QueryGetAllNotNewBracketsForTournamentArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type QueryGetAllTeamCheckInStatusesByTournamentArgs = {
  tournamentId: Scalars['String']
}

export type QueryGetBracketArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type QueryGetBracketBrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type QueryGetBracketMatchesArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type QueryGetContractDevFeeArgs = {
  contractAddress?: InputMaybe<Scalars['String']>
}

export type QueryGetEnrolledTournamentsArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryGetGamesBrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  gameIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetGamesByTagsArgs = {
  tags?: InputMaybe<Array<InputMaybe<GameTag>>>
}

export type QueryGetGroupsBrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetGroupsRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type QueryGetInviteArgs = {
  inviteId?: InputMaybe<Scalars['String']>
}

export type QueryGetIsUserAllowedToAccessMatchRoomArgs = {
  matchId?: InputMaybe<Scalars['String']>
}

export type QueryGetMatchArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryGetMatchRoomDetailArgs = {
  matchId?: InputMaybe<Scalars['String']>
}

export type QueryGetMatchRoomMessagesArgs = {
  matchId?: InputMaybe<Scalars['String']>
}

export type QueryGetParticipantListForSeedingBracketArgs = {
  allowCheckedInOnly?: InputMaybe<Scalars['Boolean']>
  bracketId: Scalars['String']
}

export type QueryGetParticipantStatusByTournamentAndUserIdArgs = {
  tournamentId: Scalars['String']
  userId: Scalars['String']
}

export type QueryGetParticipantStatusesByTeamArgs = {
  teamId: Scalars['String']
}

export type QueryGetParticipantStatusesByTournamentArgs = {
  teamId?: InputMaybe<Scalars['String']>
  tournamentId: Scalars['String']
  userIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export type QueryGetPendingInviteesArgs = {
  teamId: Scalars['String']
}

export type QueryGetQuestArgs = {
  questId?: InputMaybe<Scalars['String']>
}

export type QueryGetQuestionsResponsesByTeamIdAndTournamentIdArgs = {
  teamId: Scalars['String']
  tournamentId: Scalars['String']
}

export type QueryGetQuestsArgs = {
  count: Scalars['Int']
  offset: Scalars['Int']
  questFilter?: InputMaybe<QuestFilterInput>
  sort?: InputMaybe<SortDirection>
  sortBy?: InputMaybe<Scalars['String']>
}

export type QueryGetRegistrationQuestionsArgs = {
  registrationQuestionsId: Scalars['String']
}

export type QueryGetRegistrationQuestionsResponsesArgs = {
  tournamentId: Scalars['String']
}

export type QueryGetRegistrationQuestionsResponsesByTeamIdAndTournamentIdArgs = {
  teamId: Scalars['String']
  tournamentId: Scalars['String']
}

export type QueryGetRewardsByUserArgs = {
  userId: Scalars['String']
}

export type QueryGetRoundRrArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  roundIndex?: InputMaybe<Scalars['Int']>
}

export type QueryGetRoundSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
  roundIndex?: InputMaybe<Scalars['Int']>
}

export type QueryGetScoreboardSwissArgs = {
  bracketId?: InputMaybe<Scalars['String']>
}

export type QueryGetSinceCreatedAtArgs = {
  date?: InputMaybe<Scalars['Date']>
}

export type QueryGetTeamArgs = {
  id: Scalars['String']
}

export type QueryGetTeamCheckInStatusByTournamentIdAndTeamIdArgs = {
  teamId: Scalars['String']
  tournamentId: Scalars['String']
}

export type QueryGetTeamMatchesArgs = {
  teamId?: InputMaybe<Scalars['String']>
  tournamentId?: InputMaybe<Scalars['String']>
}

export type QueryGetTournamentMatchesArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type QueryGetTournamentPlayersWithPrivateInfoArgs = {
  tournamentIdOrAlias?: InputMaybe<Scalars['String']>
}

export type QueryGetTournamentUserPermissionListArgs = {
  tournamentId?: InputMaybe<Scalars['String']>
}

export type QueryGetUserEarningArgs = {
  userId?: InputMaybe<Scalars['String']>
}

export type QueryLeaderboardByCountryArgs = {
  countryCode?: InputMaybe<CountryCode>
}

export type QueryLeaderboardByGameArgs = {
  gameId?: InputMaybe<Scalars['String']>
}

export type QueryLeaderboardByTokenArgs = {
  tokenId?: InputMaybe<Scalars['String']>
}

export type QueryListedPastTournamentsArgs = {
  count?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryListedTournamentsArgs = {
  count?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QueryNotificationArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type QueryNotificationsArgs = {
  count?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
}

export type QuerySearchForEnrolledTournamentsArgs = {
  tournamentStatuses?: InputMaybe<Array<InputMaybe<TournamentStatus>>>
  userId?: InputMaybe<Scalars['String']>
}

export type QuerySearchForTournamentsInCheckInArgs = {
  userId?: InputMaybe<Scalars['String']>
}

export type QuerySearchTournamentsArgs = {
  filter?: InputMaybe<TournamentFilter>
  pageNumber?: InputMaybe<Scalars['Int']>
  pageSize?: InputMaybe<Scalars['Int']>
}

export type QuerySearchUsersArgs = {
  keyword?: InputMaybe<Scalars['String']>
}

export type QuerySignInUserArgs = {
  password?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type QueryTournamentArgs = {
  id: Scalars['String']
}

export type QueryTournamentsArgs = {
  count: Scalars['Int']
  offset: Scalars['Int']
  sort?: InputMaybe<SortDirection>
  sortBy?: InputMaybe<Scalars['String']>
}

export type QueryUserArgs = {
  id?: InputMaybe<Scalars['String']>
}

export type Quest = {
  __typename?: 'Quest'
  actions?: Maybe<Array<Maybe<QuestAction>>>
  completedCount?: Maybe<Scalars['Int']>
  endDate?: Maybe<Scalars['Date']>
  iconUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  prerequisiteQuestId?: Maybe<Scalars['String']>
  reward?: Maybe<QuestReward>
  startDate?: Maybe<Scalars['Date']>
  type?: Maybe<QuestType>
  userFilter?: Maybe<QuestUserFilter>
}

export type QuestAction = {
  __typename?: 'QuestAction'
  actionFilterParam?: Maybe<Scalars['String']>
  actionType?: Maybe<QuestActionType>
  endDate?: Maybe<Scalars['Date']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  reward?: Maybe<QuestReward>
  schedule?: Maybe<QuestActionSchedule>
  startDate?: Maybe<Scalars['Date']>
}

export type QuestActionInput = {
  actionFilterParam?: InputMaybe<Scalars['String']>
  actionType?: InputMaybe<QuestActionType>
  endDate?: InputMaybe<Scalars['Date']>
  name?: InputMaybe<Scalars['String']>
  reward?: InputMaybe<QuestRewardInput>
  schedule?: InputMaybe<QuestActionScheduleInput>
  startDate?: InputMaybe<Scalars['Date']>
}

export type QuestActionSchedule = {
  __typename?: 'QuestActionSchedule'
  actionCount?: Maybe<Scalars['Int']>
  dayCount?: Maybe<Scalars['Int']>
  period?: Maybe<SchedulePeriod>
  type?: Maybe<ActionScheduleType>
}

export type QuestActionScheduleInput = {
  actionCount?: InputMaybe<Scalars['Int']>
  dayCount?: InputMaybe<Scalars['Int']>
  period?: InputMaybe<SchedulePeriod>
  type?: InputMaybe<ActionScheduleType>
}

export enum QuestActionType {
  Login = 'LOGIN',
  TeamCreate = 'TEAM_CREATE',
  TeamInviteMember = 'TEAM_INVITE_MEMBER',
  VisitExternal = 'VISIT_EXTERNAL',
  VisitInternal = 'VISIT_INTERNAL',
}

export type QuestFilterInput = {
  actionType?: InputMaybe<QuestActionType>
  name?: InputMaybe<Scalars['String']>
  questType?: InputMaybe<QuestType>
  rewardType?: InputMaybe<QuestRewardType>
  status?: InputMaybe<QuestStatusType>
}

export type QuestInput = {
  actions?: InputMaybe<Array<InputMaybe<QuestActionInput>>>
  endDate?: InputMaybe<Scalars['Date']>
  iconUrl?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  prerequisiteQuestId?: InputMaybe<Scalars['String']>
  reward?: InputMaybe<QuestRewardInput>
  startDate?: InputMaybe<Scalars['Date']>
  type?: InputMaybe<QuestType>
  userFilter?: InputMaybe<QuestUserFilterInput>
}

export type QuestReward = {
  __typename?: 'QuestReward'
  amount?: Maybe<Scalars['BigDecimal']>
  currencyId?: Maybe<Scalars['String']>
  type?: Maybe<QuestRewardType>
}

export type QuestRewardInput = {
  amount?: InputMaybe<Scalars['BigDecimal']>
  currencyId?: InputMaybe<Scalars['String']>
  type?: InputMaybe<QuestRewardType>
}

export enum QuestRewardType {
  CgToken = 'CG_TOKEN',
  Coin = 'COIN',
  Nft = 'NFT',
  None = 'NONE',
  NonCrypto = 'NON_CRYPTO',
}

export enum QuestStatusType {
  Active = 'ACTIVE',
  Passive = 'PASSIVE',
}

export type QuestSummaries = {
  __typename?: 'QuestSummaries'
  actionName?: Maybe<Scalars['String']>
  currentCount?: Maybe<Scalars['Int']>
  targetCount?: Maybe<Scalars['Int']>
}

export enum QuestType {
  Daily = 'DAILY',
  Sponsored = 'SPONSORED',
  Standard = 'STANDARD',
}

export type QuestUserActionFilter = {
  __typename?: 'QuestUserActionFilter'
  actionFilterParams?: Maybe<Scalars['String']>
  actionType?: Maybe<QuestActionType>
  endDate?: Maybe<Scalars['Date']>
  startDate?: Maybe<Scalars['Date']>
}

export type QuestUserActionFilterInput = {
  actionFilterParams?: InputMaybe<Scalars['String']>
  actionType?: InputMaybe<QuestActionType>
  endDate?: InputMaybe<Scalars['Date']>
  startDate?: InputMaybe<Scalars['Date']>
}

export type QuestUserFilter = {
  __typename?: 'QuestUserFilter'
  userActionFilters?: Maybe<Array<Maybe<QuestUserActionFilter>>>
  userCountry?: Maybe<Array<Maybe<CountryCode>>>
  userFavoriteGame?: Maybe<Scalars['String']>
  userRole?: Maybe<RoleName>
  userType?: Maybe<QuestUserType>
  users?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type QuestUserFilterInput = {
  userActionFilters?: InputMaybe<Array<InputMaybe<QuestUserActionFilterInput>>>
  userCountry?: InputMaybe<Array<InputMaybe<CountryCode>>>
  userFavoriteGame?: InputMaybe<Scalars['String']>
  userRole?: InputMaybe<RoleName>
  userType?: InputMaybe<QuestUserType>
  users?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
}

export enum QuestUserType {
  ActiveUser = 'ACTIVE_USER',
  Newcomer = 'NEWCOMER',
  PremiumUser = 'PREMIUM_USER',
  SpecificUsers = 'SPECIFIC_USERS',
}

export type Question = {
  __typename?: 'Question'
  isPublic?: Maybe<Scalars['Boolean']>
  options?: Maybe<Array<Maybe<Scalars['String']>>>
  question?: Maybe<Scalars['String']>
  required?: Maybe<Scalars['Boolean']>
  type?: Maybe<Scalars['String']>
}

export type QuestionAnswer = {
  __typename?: 'QuestionAnswer'
  answer?: Maybe<Scalars['String']>
  question?: Maybe<Scalars['String']>
  questionType?: Maybe<Scalars['String']>
}

export type QuestionInput = {
  isPublic?: InputMaybe<Scalars['Boolean']>
  options?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  question?: InputMaybe<Scalars['String']>
  required?: InputMaybe<Scalars['Boolean']>
  type?: InputMaybe<Scalars['String']>
}

export type RegistrationQuestions = {
  __typename?: 'RegistrationQuestions'
  id: Scalars['String']
  questions?: Maybe<Array<Maybe<Question>>>
  responses?: Maybe<Array<Maybe<SquadResponse>>>
  tournamentId: Scalars['String']
}

export type Reward = {
  __typename?: 'Reward'
  amount: Scalars['BigDecimal']
  amountInFloat: Scalars['BigDecimal']
  claimed: Scalars['Boolean']
  token?: Maybe<Token>
  tokenId: Scalars['String']
  tokenNFTIndex: Scalars['Int']
  tournament?: Maybe<Tournament>
  tournamentId: Scalars['String']
  userId: Scalars['String']
}

export type Role = {
  __typename?: 'Role'
  id: Scalars['String']
  name: RoleName
}

export enum RoleName {
  RoleAdmin = 'ROLE_ADMIN',
  RoleCgorganizer = 'ROLE_CGORGANIZER',
  RoleOrganizer = 'ROLE_ORGANIZER',
  RolePlayer = 'ROLE_PLAYER',
}

export type Round = {
  __typename?: 'Round'
  groupIds?: Maybe<Array<Maybe<Scalars['String']>>>
  maxParticipantsPerGroup?: Maybe<Scalars['Int']>
  roundStatus?: Maybe<RoundStatus>
}

export type RoundInput = {
  groupIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  maxParticipantsPerGroup?: InputMaybe<Scalars['Int']>
  roundStatus?: InputMaybe<RoundStatus>
}

export type RoundRobinBracketDetail = {
  __typename?: 'RoundRobinBracketDetail'
  activeRoundIndex?: Maybe<Scalars['Int']>
  gamesPerRound?: Maybe<Scalars['Int']>
  numberOfGroups?: Maybe<Scalars['Int']>
  playTimePerTeams?: Maybe<Scalars['Int']>
  roundRobinScoringRule?: Maybe<MatchScoringRule>
  teamsPerGroup?: Maybe<Scalars['Int']>
  totalRoundCount?: Maybe<Scalars['Int']>
}

export type RoundRobinDetailInput = {
  gamesPerRound?: InputMaybe<Scalars['Int']>
  numberOfGroups?: InputMaybe<Scalars['Int']>
  playTimePerTeams?: InputMaybe<Scalars['Int']>
  roundRobinScoringRule?: InputMaybe<RoundRobinScoringRuleInput>
  teamsPerGroup?: InputMaybe<Scalars['Int']>
}

export type RoundRobinRound = {
  __typename?: 'RoundRobinRound'
  bracketId?: Maybe<Scalars['String']>
  groupMatches?: Maybe<Array<Maybe<Array<Maybe<GroupMatch>>>>>
  roundIndex?: Maybe<Scalars['Int']>
  roundStatus?: Maybe<RoundStatus>
}

export type RoundRobinScoringRuleInput = {
  draw?: InputMaybe<Scalars['Int']>
  lose?: InputMaybe<Scalars['Int']>
  win?: InputMaybe<Scalars['Int']>
}

export enum RoundStatus {
  Complete = 'COMPLETE',
  Live = 'LIVE',
  New = 'NEW',
}

export enum SchedulePeriod {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Weekly = 'WEEKLY',
  Yearly = 'YEARLY',
}

export type ScorePair = {
  __typename?: 'ScorePair'
  first?: Maybe<Scalars['Int']>
  second?: Maybe<Scalars['Int']>
}

export type ScorePairInput = {
  first?: InputMaybe<Scalars['Int']>
  second?: InputMaybe<Scalars['Int']>
}

export type ScoringRules = {
  __typename?: 'ScoringRules'
  basePoint?: Maybe<Scalars['Int']>
  otherMetrics?: Maybe<Array<Maybe<BattleRoyaleGameMetric>>>
  placementScores?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ScoringRulesInput = {
  basePoint?: InputMaybe<Scalars['Int']>
  otherMetrics?: InputMaybe<Array<InputMaybe<BattleRoyaleGameMetricInput>>>
  placementScores?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type SeededBattleRoyaleBracketInformation = {
  __typename?: 'SeededBattleRoyaleBracketInformation'
  battleRoyaleDetails?: Maybe<BattleRoyaleDetails>
  bracketInformation?: Maybe<BracketInformation>
  id?: Maybe<Scalars['String']>
}

export type SeededEliminationBracketInformation = {
  __typename?: 'SeededEliminationBracketInformation'
  bracketInformation?: Maybe<BracketInformation>
  eliminationBracketDetail?: Maybe<Bracket>
  id?: Maybe<Scalars['String']>
}

export type SignUpValidationInput = {
  country: CountryCode
  dob: Scalars['Date']
  email: Scalars['String']
  name: Scalars['String']
  password: Scalars['String']
  platform: Platform
  state?: InputMaybe<State>
  username: Scalars['String']
}

export type SocialLinks = {
  __typename?: 'SocialLinks'
  facebook?: Maybe<Scalars['String']>
  instagram?: Maybe<Scalars['String']>
  twitch?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type SocialsInput = {
  facebook?: InputMaybe<Scalars['String']>
  instagram?: InputMaybe<Scalars['String']>
  twitch?: InputMaybe<Scalars['String']>
  twitter?: InputMaybe<Scalars['String']>
  youtube?: InputMaybe<Scalars['String']>
}

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

export type SquadResponse = {
  __typename?: 'SquadResponse'
  answers?: Maybe<Array<Maybe<Scalars['Object']>>>
  teamId?: Maybe<Scalars['String']>
}

export type SquadResponseInput = {
  answers?: InputMaybe<Array<InputMaybe<Scalars['Object']>>>
  teamId?: InputMaybe<Scalars['String']>
}

export type SquadResponseOutput = {
  __typename?: 'SquadResponseOutput'
  registrationQuestionId?: Maybe<Scalars['String']>
  responses?: Maybe<Array<Maybe<QuestionAnswer>>>
  teamId?: Maybe<Scalars['String']>
}

export type SquadResponseOutputMap = {
  __typename?: 'SquadResponseOutputMap'
  id?: Maybe<Scalars['String']>
  squadResponseOutput?: Maybe<SquadResponseOutput>
}

export enum State {
  Ak = 'AK',
  Al = 'AL',
  Ar = 'AR',
  As = 'AS',
  Az = 'AZ',
  Ca = 'CA',
  Co = 'CO',
  Ct = 'CT',
  Dc = 'DC',
  De = 'DE',
  Fl = 'FL',
  Fm = 'FM',
  Ga = 'GA',
  Gu = 'GU',
  Hi = 'HI',
  Ia = 'IA',
  Id = 'ID',
  Il = 'IL',
  In = 'IN',
  Ks = 'KS',
  Ky = 'KY',
  La = 'LA',
  Ma = 'MA',
  Md = 'MD',
  Me = 'ME',
  Mh = 'MH',
  Mi = 'MI',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Ms = 'MS',
  Mt = 'MT',
  Nc = 'NC',
  Nd = 'ND',
  Ne = 'NE',
  Nh = 'NH',
  Nj = 'NJ',
  Nm = 'NM',
  Nv = 'NV',
  Ny = 'NY',
  Oh = 'OH',
  Ok = 'OK',
  Or = 'OR',
  Pa = 'PA',
  Pr = 'PR',
  Pw = 'PW',
  Ri = 'RI',
  Sc = 'SC',
  Sd = 'SD',
  Tn = 'TN',
  Tx = 'TX',
  Ut = 'UT',
  Va = 'VA',
  Vi = 'VI',
  Vt = 'VT',
  Wa = 'WA',
  Wi = 'WI',
  Wv = 'WV',
  Wy = 'WY',
}

export type StreamLinks = {
  __typename?: 'StreamLinks'
  dlive?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  theta?: Maybe<Scalars['String']>
  trovo?: Maybe<Scalars['String']>
  twitch?: Maybe<Scalars['String']>
  youtube?: Maybe<Scalars['String']>
}

export type StreamLinksInput = {
  dlive?: InputMaybe<Scalars['String']>
  facebook?: InputMaybe<Scalars['String']>
  theta?: InputMaybe<Scalars['String']>
  trovo?: InputMaybe<Scalars['String']>
  twitch?: InputMaybe<Scalars['String']>
  youtube?: InputMaybe<Scalars['String']>
}

export enum StripePaymentIntentStatus {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded',
}

export type SwissBracketDetail = {
  __typename?: 'SwissBracketDetail'
  activeRoundIndex?: Maybe<Scalars['Int']>
  gamesPerRound?: Maybe<Scalars['Int']>
  numberOfTeams?: Maybe<Scalars['Int']>
  playTimePerTeams?: Maybe<Scalars['Int']>
  roundCount?: Maybe<Scalars['Int']>
  swissScoringRule?: Maybe<MatchScoringRule>
}

export type SwissDetailInput = {
  gamesPerRound?: InputMaybe<Scalars['Int']>
  numberOfTeams?: InputMaybe<Scalars['Int']>
  playTimePerTeams?: InputMaybe<Scalars['Int']>
  roundCount?: InputMaybe<Scalars['Int']>
  swissScoringRule?: InputMaybe<MatchScoringRuleInput>
}

export type Team = {
  __typename?: 'Team'
  avatar: Scalars['String']
  cover: Scalars['String']
  id: Scalars['String']
  locked: Scalars['Boolean']
  members: Array<Maybe<User>>
  name: Scalars['String']
  owner: User
  parentTeamId?: Maybe<Scalars['String']>
  substitutes?: Maybe<Array<Maybe<User>>>
}

export type TeamBracketMatches = {
  __typename?: 'TeamBracketMatches'
  bracket?: Maybe<Bracket>
  bracketInformation?: Maybe<BracketInformation>
}

export type TeamInvite = {
  __typename?: 'TeamInvite'
  createdAt: Scalars['Date']
  external: Scalars['Boolean']
  id: Scalars['String']
  teamId: Scalars['String']
  userId: Scalars['String']
}

export type TeamMinusPoint = {
  __typename?: 'TeamMinusPoint'
  evidenceUrl?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  participantId?: Maybe<Scalars['String']>
  point?: Maybe<Scalars['Int']>
  reason?: Maybe<Scalars['String']>
}

export type TeamMinusPointInput = {
  evidenceUrl?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['String']>
  participantId?: InputMaybe<Scalars['String']>
  point?: InputMaybe<Scalars['Int']>
  reason?: InputMaybe<Scalars['String']>
}

export type TeamStatus = {
  __typename?: 'TeamStatus'
  memberStatuses?: Maybe<Array<Maybe<ParticipantStatus>>>
  teamId: Scalars['String']
  teamStatus: ParticipantStatusType
}

export type Token = {
  __typename?: 'Token'
  address?: Maybe<Scalars['String']>
  chain?: Maybe<ChainType>
  createdAt?: Maybe<Scalars['Date']>
  decimals?: Maybe<Scalars['Int']>
  id: Scalars['String']
  logo?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  permitSignature?: Maybe<Scalars['String']>
  symbol?: Maybe<Scalars['String']>
  tokenVersion?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['Date']>
  usdPrice?: Maybe<Scalars['Float']>
}

export type Tournament = {
  __typename?: 'Tournament'
  abiVersion: AbiVersion
  alias: Scalars['String']
  autoApprovalMinute?: Maybe<Scalars['Int']>
  automateMatchResults: Scalars['Boolean']
  battleRoyaleDetails?: Maybe<BattleRoyaleDetails>
  battleRoyaleGames?: Maybe<Array<Maybe<BattleRoyaleGame>>>
  battleRoyaleGroups?: Maybe<Array<Maybe<BattleRoyaleGroup>>>
  bracketList: Array<Maybe<BracketInformation>>
  bracketSize: Scalars['Int']
  bracketType: BracketType
  buyInFee: Scalars['BigDecimal']
  buyInFeeDecimal?: Maybe<Scalars['Float']>
  capRegistration: Scalars['Boolean']
  cgSignature: Scalars['String']
  cgVerifiedWinners?: Maybe<Array<Maybe<Scalars['String']>>>
  chainType: ChainType
  checkinPeriod: Scalars['Int']
  contractVersion: Scalars['Int']
  contributors: Scalars['Object']
  contributorsRestricted: Scalars['Boolean']
  coverImage: Scalars['String']
  createdAt: Scalars['Date']
  deadline: Scalars['Date']
  description: Scalars['String']
  esportRegions?: Maybe<Array<Maybe<EsportRegion>>>
  eventLink: Scalars['String']
  externalBrackets: Scalars['Boolean']
  externalDiscordChannelUrl: Scalars['String']
  featured: Scalars['Boolean']
  game: Game
  id: Scalars['String']
  isAutoApprovalEnabled: Scalars['Boolean']
  isCheckinRequired: Scalars['Boolean']
  isGameIdRequired: Scalars['Boolean']
  isOnGslFormat: Scalars['Boolean']
  isPrizeTargetInUSD: Scalars['Boolean']
  isRegistrationQuestionsRequired: Scalars['Boolean']
  isSelfReportAllowed: Scalars['Boolean']
  isSubstitutePlayersEnabled: Scalars['Boolean']
  matchIds?: Maybe<Array<Maybe<Scalars['String']>>>
  matchLIds?: Maybe<Array<Maybe<Scalars['String']>>>
  matches?: Maybe<Array<Maybe<Match>>>
  matchesL?: Maybe<Array<Maybe<Match>>>
  maxSubstitutePlayerCount: Scalars['Int']
  maxTeams: Scalars['Int']
  name: Scalars['String']
  organizerCut: Scalars['BigDecimal']
  owner: User
  participants: Array<Maybe<Team>>
  participantsCount: Scalars['Int']
  payoutTransactionHash: Scalars['String']
  prize: Scalars['BigDecimal']
  prizeDescription: Scalars['String']
  prizeDistribution?: Maybe<Array<Maybe<Scalars['BigDecimal']>>>
  prizeTarget: Scalars['BigDecimal']
  publishBrackets: Scalars['Boolean']
  registrationQuestions?: Maybe<RegistrationQuestions>
  registrationQuestionsId?: Maybe<Scalars['String']>
  streamLinks: StreamLinks
  teamSize: Scalars['Int']
  thumbnail: Scalars['String']
  token?: Maybe<Token>
  tournamentId: Scalars['Int']
  tournamentMetadata?: Maybe<TournamentMetadata>
  tournamentStatus: TournamentStatus
  tournamentType: TournamentType
  unlisted: Scalars['Boolean']
  updatedAt: Scalars['Date']
  waitlistParticipants: Array<Maybe<Team>>
  waitlistParticipantsCount: Scalars['Int']
  whitelistedContributors: Array<Maybe<Scalars['String']>>
  winners?: Maybe<Array<Maybe<WinnerData>>>
}

export type TournamentFilter = {
  bracketTypes?: InputMaybe<Array<InputMaybe<BracketType>>>
  cryptoPayoutsOnly?: InputMaybe<Scalars['Boolean']>
  deadlineRange?: InputMaybe<DateRange>
  esportRegions?: InputMaybe<Array<InputMaybe<EsportRegion>>>
  freeToEnter?: InputMaybe<Scalars['Boolean']>
  gameId?: InputMaybe<Scalars['String']>
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  maxTeams?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  tags?: InputMaybe<Array<InputMaybe<GameTag>>>
  teamSize?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  tokenId?: InputMaybe<Scalars['String']>
  tournamentStatuses?: InputMaybe<Array<InputMaybe<TournamentStatus>>>
}

export type TournamentMetadata = {
  __typename?: 'TournamentMetadata'
  id: Scalars['String']
  tournamentCountries?: Maybe<Array<Maybe<Scalars['Object']>>>
  tournamentId: Scalars['String']
}

export enum TournamentPermissionType {
  EditTournament = 'EDIT_TOURNAMENT',
  MakeAnnouncement = 'MAKE_ANNOUNCEMENT',
  ModerateBracket = 'MODERATE_BRACKET',
  PublishBracket = 'PUBLISH_BRACKET',
  ReportMatch = 'REPORT_MATCH',
  SendMessageMatchRoom = 'SEND_MESSAGE_MATCH_ROOM',
  StartTournament = 'START_TOURNAMENT',
}

export type TournamentReward = {
  __typename?: 'TournamentReward'
  date?: Maybe<Scalars['Date']>
  game?: Maybe<Game>
  position?: Maybe<Scalars['Int']>
  reward?: Maybe<Reward>
}

export type TournamentSearchContent = {
  __typename?: 'TournamentSearchContent'
  alias: Scalars['String']
  automateMatchResults: Scalars['Boolean']
  bracketList: Array<Maybe<BracketInformation>>
  bracketType: BracketType
  buyInFee: Scalars['BigDecimal']
  capRegistration: Scalars['Boolean']
  chainType: ChainType
  checkinPeriod: Scalars['Int']
  contractVersion: Scalars['Int']
  coverImage: Scalars['String']
  createdAt: Scalars['Date']
  deadline: Scalars['Date']
  esportRegions: Array<Maybe<EsportRegion>>
  eventLink: Scalars['String']
  featured: Scalars['Boolean']
  game?: Maybe<Game>
  id: Scalars['String']
  isCheckinRequired: Scalars['Boolean']
  isPrizeTargetInUSD: Scalars['Boolean']
  maxTeams: Scalars['Int']
  name: Scalars['String']
  owner?: Maybe<User>
  participantsCount: Scalars['Int']
  prize: Scalars['BigDecimal']
  prizeTarget: Scalars['BigDecimal']
  teamSize: Scalars['Int']
  thumbnail: Scalars['String']
  token?: Maybe<Token>
  tournamentId: Scalars['Int']
  tournamentStatus: TournamentStatus
  tournamentType: TournamentType
  unlisted: Scalars['Boolean']
  updatedAt: Scalars['Date']
  waitlistParticipantsCount: Scalars['Int']
}

export type TournamentSearchResults = {
  __typename?: 'TournamentSearchResults'
  content: Array<Maybe<TournamentSearchContent>>
  isEmpty: Scalars['Boolean']
  isFirst: Scalars['Boolean']
  isLast: Scalars['Boolean']
  numberOfElements: Scalars['Int']
  pageNumber: Scalars['Int']
  size: Scalars['Int']
  totalElements: Scalars['Int']
  totalPages: Scalars['Int']
}

export enum TournamentStatus {
  Complete = 'COMPLETE',
  Deleted = 'DELETED',
  Draft = 'DRAFT',
  Finalized = 'FINALIZED',
  Finished = 'FINISHED',
  Live = 'LIVE',
  New = 'NEW',
}

export enum TournamentType {
  BuyIn = 'BUY_IN',
  FiatBuyIn = 'FIAT_BUY_IN',
  OffChain = 'OFF_CHAIN',
  PrizePool = 'PRIZE_POOL',
}

export enum TournamentTypeInput {
  FiatBuyIn = 'FIAT_BUY_IN',
  OffChain = 'OFF_CHAIN',
}

export type TournamentUserPermissionOutput = {
  __typename?: 'TournamentUserPermissionOutput'
  invitedUserPermissionList?: Maybe<Array<Maybe<InvitedUserPermission>>>
  tournamentId?: Maybe<Scalars['String']>
  userPermissionList?: Maybe<Array<Maybe<UserPermission>>>
}

export type Transaction = {
  __typename?: 'Transaction'
  chain?: Maybe<ChainType>
  createdAt?: Maybe<Scalars['Date']>
  hash: Scalars['String']
  id: Scalars['String']
  status?: Maybe<TransactionStatus>
  type?: Maybe<TransactionType>
  updatedAt?: Maybe<Scalars['Date']>
  userId: Scalars['String']
}

export enum TransactionStatus {
  Complete = 'COMPLETE',
  Failed = 'FAILED',
  Pending = 'PENDING',
}

export enum TransactionType {
  TournamentContribution = 'TOURNAMENT_CONTRIBUTION',
  TournamentContributionApproval = 'TOURNAMENT_CONTRIBUTION_APPROVAL',
  TournamentContributorWhitelist = 'TOURNAMENT_CONTRIBUTOR_WHITELIST',
  TournamentEnrollment = 'TOURNAMENT_ENROLLMENT',
  TournamentEnrollmentApproval = 'TOURNAMENT_ENROLLMENT_APPROVAL',
  TournamentFinalized = 'TOURNAMENT_FINALIZED',
  TournamentIssued = 'TOURNAMENT_ISSUED',
  TournamentPayouts = 'TOURNAMENT_PAYOUTS',
  TournamentRetraction = 'TOURNAMENT_RETRACTION',
  TournamentUnenrollment = 'TOURNAMENT_UNENROLLMENT',
  WalletClaim = 'WALLET_CLAIM',
  WalletWithdrawal = 'WALLET_WITHDRAWAL',
}

export type UpdateTournamentInput = {
  automateMatchResults?: InputMaybe<Scalars['Boolean']>
  battleRoyaleDetails?: InputMaybe<BattleRoyaleDetailsInput>
  bracketList?: InputMaybe<Array<InputMaybe<BracketInformationInput>>>
  bracketType?: InputMaybe<BracketType>
  capRegistration?: InputMaybe<Scalars['Boolean']>
  checkinPeriod?: InputMaybe<Scalars['Int']>
  deadline?: InputMaybe<Scalars['Date']>
  description?: InputMaybe<Scalars['String']>
  esportRegions?: InputMaybe<Array<InputMaybe<EsportRegion>>>
  eventLink?: InputMaybe<Scalars['String']>
  externalBrackets?: InputMaybe<Scalars['Boolean']>
  externalDiscordChannelUrl?: InputMaybe<Scalars['String']>
  isCheckinRequired?: InputMaybe<Scalars['Boolean']>
  isGameIdRequired?: InputMaybe<Scalars['Boolean']>
  isPrizeTargetInUSD?: InputMaybe<Scalars['Boolean']>
  isRegistrationQuestionsRequired?: InputMaybe<Scalars['Boolean']>
  isSelfReportAllowed?: InputMaybe<Scalars['Boolean']>
  name?: InputMaybe<Scalars['String']>
  prizeDescription?: InputMaybe<Scalars['String']>
  prizeTarget?: InputMaybe<Scalars['BigDecimal']>
  publishBrackets?: InputMaybe<Scalars['Boolean']>
  registrationQuestions?: InputMaybe<Array<InputMaybe<QuestionInput>>>
  streamLinks?: InputMaybe<StreamLinksInput>
  tokenId?: InputMaybe<Scalars['String']>
  tournamentCountries?: InputMaybe<Array<InputMaybe<CountryCode>>>
  unlisted?: InputMaybe<Scalars['Boolean']>
}

export type UpdateTournamentUserPermissionInput = {
  permissionList?: InputMaybe<Array<InputMaybe<TournamentPermissionType>>>
  tournamentId?: InputMaybe<Scalars['String']>
  userEmail?: InputMaybe<Scalars['String']>
  userId?: InputMaybe<Scalars['String']>
}

export type UpdateUserInput = {
  city?: InputMaybe<Scalars['String']>
  country?: InputMaybe<CountryCode>
  dateOfBirth?: InputMaybe<Scalars['Date']>
  email?: InputMaybe<Scalars['String']>
  name?: InputMaybe<Scalars['String']>
  platformIds?: InputMaybe<PlatformIdsInput>
  socials?: InputMaybe<SocialsInput>
  state?: InputMaybe<State>
  summary?: InputMaybe<Scalars['String']>
  username?: InputMaybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  appUsernames?: Maybe<Array<Maybe<OAuthAppUsername>>>
  avatar: Scalars['String']
  city: Scalars['String']
  country: CountryCode
  coverImage: Scalars['String']
  createdAt: Scalars['Date']
  favoriteGameIds: Array<Maybe<Scalars['String']>>
  id: Scalars['String']
  notificationGroups: Array<Maybe<NotificationGroup>>
  personalTeamId: Scalars['String']
  platform: Scalars['String']
  platformIds: PlatformIds
  publicAddress: Scalars['String']
  roles: Array<Maybe<Role>>
  socialLinks: SocialLinks
  softDeleted: Scalars['Boolean']
  state?: Maybe<State>
  summary: Scalars['String']
  teams: Array<Maybe<Team>>
  updatedAt: Scalars['Date']
  username: Scalars['String']
  walletType: WalletType
}

export type UserActionProgress = {
  __typename?: 'UserActionProgress'
  currentCount?: Maybe<Scalars['Int']>
  endDate?: Maybe<Scalars['Date']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  startDate?: Maybe<Scalars['Date']>
  status?: Maybe<UserActionStatus>
  targetCount?: Maybe<Scalars['Int']>
}

export enum UserActionStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Missed = 'MISSED',
}

export type UserEarning = {
  __typename?: 'UserEarning'
  earnings?: Maybe<Array<Maybe<Earnings>>>
  earningsUSD: Scalars['Float']
  gameEarnings?: Maybe<Array<Maybe<GameEarnings>>>
}

export type UserLatestQuestsResponse = {
  __typename?: 'UserLatestQuestsResponse'
  questSummaries?: Maybe<Array<Maybe<QuestSummaries>>>
}

export type UserPermission = {
  __typename?: 'UserPermission'
  permissionList?: Maybe<Array<Maybe<TournamentPermissionType>>>
  userAvatar?: Maybe<Scalars['String']>
  userId?: Maybe<Scalars['String']>
  userName?: Maybe<Scalars['String']>
}

export type UserPlayerInformationInput = {
  platformIds?: InputMaybe<PlatformIdsInput>
  socials?: InputMaybe<SocialsInput>
  summary?: InputMaybe<Scalars['String']>
}

export enum UserQuestStatus {
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  Missed = 'MISSED',
  New = 'NEW',
}

export type UserQuests = {
  __typename?: 'UserQuests'
  questIconUrl?: Maybe<Scalars['String']>
  questId?: Maybe<Scalars['String']>
  questName?: Maybe<Scalars['String']>
  questStatus?: Maybe<UserQuestStatus>
  userActionProgresses?: Maybe<Array<Maybe<UserActionProgress>>>
}

export type UserQuestsResponse = {
  __typename?: 'UserQuestsResponse'
  dailyQuest?: Maybe<UserQuests>
  sponsoredQuests?: Maybe<Array<Maybe<UserQuests>>>
  standardQuests?: Maybe<Array<Maybe<UserQuests>>>
}

export type UserRewards = {
  __typename?: 'UserRewards'
  rewards?: Maybe<Array<Maybe<TournamentReward>>>
  tokenId: Scalars['String']
  totalAmount: Scalars['BigDecimal']
  totalAmountInFloat: Scalars['BigDecimal']
}

export type UserSearchResult = {
  __typename?: 'UserSearchResult'
  avatar: Scalars['String']
  createdAt: Scalars['Date']
  id: Scalars['String']
  personalTeamId: Scalars['String']
  publicAddress: Scalars['String']
  softDeleted: Scalars['Boolean']
  summary: Scalars['String']
  updatedAt: Scalars['Date']
  username: Scalars['String']
  walletType: WalletType
}

export type UserWithPrivateInfo = {
  __typename?: 'UserWithPrivateInfo'
  appUsernames?: Maybe<Array<Maybe<OAuthAppUsername>>>
  avatar: Scalars['String']
  city: Scalars['String']
  country: CountryCode
  coverImage: Scalars['String']
  createdAt: Scalars['Date']
  dob: Scalars['Date']
  email: Scalars['String']
  id: Scalars['String']
  name: Scalars['String']
  notificationGroups: Array<Maybe<NotificationGroup>>
  personalTeamId: Scalars['String']
  platform: Scalars['String']
  platformIds: PlatformIds
  publicAddress: Scalars['String']
  roles: Array<Maybe<Role>>
  socialLinks: SocialLinks
  softDeleted: Scalars['Boolean']
  state?: Maybe<State>
  summary: Scalars['String']
  teams: Array<Maybe<Team>>
  updatedAt: Scalars['Date']
  username: Scalars['String']
  walletType: WalletType
}

export enum WalletInputType {
  Arkane = 'ARKANE',
  Magic = 'MAGIC',
  Walletconnect = 'WALLETCONNECT',
  Web3Browser = 'WEB3_BROWSER',
}

export enum WalletType {
  Arkane = 'ARKANE',
  Authereum = 'AUTHEREUM',
  Fortmatic = 'FORTMATIC',
  Magic = 'MAGIC',
  Manual = 'MANUAL',
  Mewconnect = 'MEWCONNECT',
  NoWallet = 'NO_WALLET',
  Portis = 'PORTIS',
  Torus = 'TORUS',
  Walletconnect = 'WALLETCONNECT',
  Web3Browser = 'WEB3_BROWSER',
}

export type WinnerData = {
  __typename?: 'WinnerData'
  teamId: Scalars['String']
  teamPosition: Scalars['Int']
  userId: Scalars['String']
}

export type EnrolledTournament = {
  __typename?: 'enrolledTournament'
  team?: Maybe<Team>
  tournament?: Maybe<Tournament>
}

export type GetAllTournamentsQueryVariables = Exact<{
  count: Scalars['Int']
  offset: Scalars['Int']
}>

export type GetAllTournamentsQuery = {
  __typename?: 'Query'
  listedTournaments: Array<{
    __typename?: 'Tournament'
    id: string
    name: string
    deadline: any
    waitlistParticipantsCount: number
    owner: { __typename?: 'User'; id: string; username: string; avatar: string }
  } | null>
}

export const GetAllTournamentsDocument = gql`
  query getAllTournaments($count: Int!, $offset: Int!) {
    listedTournaments(count: $count, offset: $offset) {
      id
      name
      deadline
      waitlistParticipantsCount
      owner {
        id
        username
        avatar
      }
    }
  }
`

/**
 * __useGetAllTournamentsQuery__
 *
 * To run a query within a React component, call `useGetAllTournamentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTournamentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTournamentsQuery({
 *   variables: {
 *      count: // value for 'count'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetAllTournamentsQuery(
  baseOptions: Apollo.QueryHookOptions<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>(GetAllTournamentsDocument, options)
}
export function useGetAllTournamentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>(
    GetAllTournamentsDocument,
    options,
  )
}
export type GetAllTournamentsQueryHookResult = ReturnType<typeof useGetAllTournamentsQuery>
export type GetAllTournamentsLazyQueryHookResult = ReturnType<typeof useGetAllTournamentsLazyQuery>
export type GetAllTournamentsQueryResult = Apollo.QueryResult<GetAllTournamentsQuery, GetAllTournamentsQueryVariables>
