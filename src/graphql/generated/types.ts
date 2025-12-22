import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  CustomJSON: { input: any; output: any };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  JSONObject: { input: any; output: any };
};

export type Ad = {
  __typename?: 'Ad';
  active: Scalars['Boolean']['output'];
  advertiser: Advertiser;
  advertiserId: Scalars['String']['output'];
  advertiserName?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  monthlyBudget?: Maybe<Scalars['Int']['output']>;
  priority: Scalars['Int']['output'];
  selectedEduInstitutes?: Maybe<Array<EduInstituteSelectOption>>;
  targetGenders?: Maybe<Array<Gender>>;
  title: Scalars['String']['output'];
  type: AdType;
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  validity: DateRange;
  visibility?: Maybe<Array<AdVisibility>>;
};

export enum AdType {
  Banner = 'BANNER',
  ListingCard = 'LISTING_CARD',
}

export enum AdVisibility {
  BannerSingle = 'BANNER_SINGLE',
  BannerSlider = 'BANNER_SLIDER',
  ListingCards = 'LISTING_CARDS',
}

export type Address = {
  __typename?: 'Address';
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  addressType: AddressType;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNo: Scalars['String']['output'];
  state: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type AddressCreateInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType: Scalars['String']['input'];
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type AddressLookup = {
  addressId: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AddressNullableCompositeFilter = {
  equals?: InputMaybe<AddressObjectEqualityInput>;
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AddressObjectEqualityInput = {
  address1: Scalars['String']['input'];
  address2?: InputMaybe<Scalars['String']['input']>;
  addressType: AddressType;
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phoneNo: Scalars['String']['input'];
  state: Scalars['String']['input'];
  zip: Scalars['String']['input'];
};

export type AddressOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AddressOrderByInput = {
  address1?: InputMaybe<SortOrder>;
  address2?: InputMaybe<SortOrder>;
  addressType?: InputMaybe<SortOrder>;
  city?: InputMaybe<SortOrder>;
  country?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  phoneNo?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export enum AddressType {
  College = 'COLLEGE',
  Public = 'PUBLIC',
  Residence = 'RESIDENCE',
}

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  address1?: InputMaybe<StringFilter>;
  address2?: InputMaybe<StringNullableFilter>;
  addressType?: InputMaybe<EnumAddressTypeFilter>;
  city?: InputMaybe<StringFilter>;
  country?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  phoneNo?: InputMaybe<StringFilter>;
  state?: InputMaybe<StringFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type AddressWithId = {
  __typename?: 'AddressWithId';
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  addressType: AddressType;
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNo: Scalars['String']['output'];
  state: Scalars['String']['output'];
  zip: Scalars['String']['output'];
};

export type Admin = {
  __typename?: 'Admin';
  countryCode: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  institutionInvoices?: Maybe<Array<InstitutionInvoice>>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  roles?: Maybe<Array<AdminRole>>;
  sessions?: Maybe<Array<AdminSession>>;
  username: Scalars['String']['output'];
};

export type AdminLogin = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AdminLoginResponse = {
  __typename?: 'AdminLoginResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type AdminNote = {
  __typename?: 'AdminNote';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  note: Scalars['String']['output'];
  noteBy: Scalars['String']['output'];
};

export type AdminNoteObjectEqualityInput = {
  createdAt: Scalars['DateTime']['input'];
  id: Scalars['String']['input'];
  note: Scalars['String']['input'];
  noteBy: Scalars['String']['input'];
};

export type AdminNoteOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>;
  isNot?: InputMaybe<AdminWhereInput>;
};

export enum AdminRole {
  Admin = 'ADMIN',
  Analyst = 'ANALYST',
  Manager = 'MANAGER',
  Marketer = 'MARKETER',
  SuperAdmin = 'SUPER_ADMIN',
  Support = 'SUPPORT',
}

export type AdminSession = {
  __typename?: 'AdminSession';
  lastSeen: Scalars['DateTime']['output'];
  started: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};

export type AdminSessionObjectEqualityInput = {
  lastSeen: Scalars['DateTime']['input'];
  started: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
  valid: Scalars['Boolean']['input'];
};

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>;
  NOT?: InputMaybe<Array<AdminWhereInput>>;
  OR?: InputMaybe<Array<AdminWhereInput>>;
  countryCode?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  institutionInvoices?: InputMaybe<InstitutionInvoiceListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  roles?: InputMaybe<EnumAdminRoleNullableListFilter>;
  sessions?: InputMaybe<Array<AdminSessionObjectEqualityInput>>;
  username?: InputMaybe<StringFilter>;
};

export type Advertiser = {
  __typename?: 'Advertiser';
  active: Scalars['Boolean']['output'];
  address1: Scalars['String']['output'];
  address2?: Maybe<Scalars['String']['output']>;
  ads?: Maybe<Array<Ad>>;
  city: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  companyWebsiteUrl: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  logo: Scalars['String']['output'];
  pointOfContact: AdvertiserPoc;
  state: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  zip: Scalars['String']['output'];
};

export type AdvertiserPoc = {
  __typename?: 'AdvertiserPOC';
  email: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type AlreadyRequestedPayout = {
  __typename?: 'AlreadyRequestedPayout';
  dated: Scalars['DateTime']['output'];
  status: Scalars['Boolean']['output'];
};

export type AltSignup = {
  __typename?: 'AltSignup';
  emailClaimed: Scalars['String']['output'];
  idProof: Scalars['String']['output'];
  remarks: Scalars['String']['output'];
  status: AltSignupStatus;
  tempEmailAllotted: Scalars['String']['output'];
  uploadedAt: Scalars['DateTime']['output'];
};

export type AltSignupNullableCompositeFilter = {
  equals?: InputMaybe<AltSignupObjectEqualityInput>;
  is?: InputMaybe<AltSignupWhereInput>;
  isNot?: InputMaybe<AltSignupWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AltSignupObjectEqualityInput = {
  emailClaimed: Scalars['String']['input'];
  idProof: Scalars['String']['input'];
  remarks: Scalars['String']['input'];
  status: AltSignupStatus;
  tempEmailAllotted: Scalars['String']['input'];
  uploadedAt: Scalars['DateTime']['input'];
};

export type AltSignupOrderByInput = {
  emailClaimed?: InputMaybe<SortOrder>;
  idProof?: InputMaybe<SortOrder>;
  remarks?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  tempEmailAllotted?: InputMaybe<SortOrder>;
  uploadedAt?: InputMaybe<SortOrder>;
};

export enum AltSignupStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export type AltSignupWhereInput = {
  AND?: InputMaybe<Array<AltSignupWhereInput>>;
  NOT?: InputMaybe<Array<AltSignupWhereInput>>;
  OR?: InputMaybe<Array<AltSignupWhereInput>>;
  emailClaimed?: InputMaybe<StringFilter>;
  idProof?: InputMaybe<StringFilter>;
  remarks?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumAltSignupStatusFilter>;
  tempEmailAllotted?: InputMaybe<StringFilter>;
  uploadedAt?: InputMaybe<DateTimeFilter>;
};

export type AppPopupFilters = {
  __typename?: 'AppPopupFilters';
  userGender: UserGenderFilter;
};

export type AuthDto = {
  __typename?: 'AuthDto';
  accessToken: Scalars['String']['output'];
};

export enum Availability {
  All = 'ALL',
  Friday = 'FRIDAY',
  Monday = 'MONDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY',
  Thursday = 'THURSDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
}

export type BannedWord = {
  __typename?: 'BannedWord';
  active: Scalars['Boolean']['output'];
  category: BannedWordsCategory;
  categoryId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
  word: Scalars['String']['output'];
};

export type BannedWordListRelationFilter = {
  every?: InputMaybe<BannedWordWhereInput>;
  none?: InputMaybe<BannedWordWhereInput>;
  some?: InputMaybe<BannedWordWhereInput>;
};

export type BannedWordOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BannedWordWhereInput = {
  AND?: InputMaybe<Array<BannedWordWhereInput>>;
  NOT?: InputMaybe<Array<BannedWordWhereInput>>;
  OR?: InputMaybe<Array<BannedWordWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  category?: InputMaybe<BannedWordsCategoryRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  word?: InputMaybe<StringFilter>;
};

export type BannedWordsCategory = {
  __typename?: 'BannedWordsCategory';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  severity: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  words?: Maybe<Array<BannedWord>>;
};

export type BannedWordsCategoryOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  severity?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  words?: InputMaybe<BannedWordOrderByRelationAggregateInput>;
};

export type BannedWordsCategoryRelationFilter = {
  is?: InputMaybe<BannedWordsCategoryWhereInput>;
  isNot?: InputMaybe<BannedWordsCategoryWhereInput>;
};

export type BannedWordsCategoryWhereInput = {
  AND?: InputMaybe<Array<BannedWordsCategoryWhereInput>>;
  NOT?: InputMaybe<Array<BannedWordsCategoryWhereInput>>;
  OR?: InputMaybe<Array<BannedWordsCategoryWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  severity?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  words?: InputMaybe<BannedWordListRelationFilter>;
};

export type BannerImage = {
  __typename?: 'BannerImage';
  CTAPayload: Scalars['String']['output'];
  CTAType: CtaType;
  name: Scalars['String']['output'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export enum BooleanChoice {
  No = 'NO',
  Yes = 'YES',
}

export type Brand = {
  __typename?: 'Brand';
  ProductListing?: Maybe<Array<ProductListing>>;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  featured: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type BrandNullableRelationFilter = {
  is?: InputMaybe<BrandWhereInput>;
  isNot?: InputMaybe<BrandWhereInput>;
};

export type BrandOrderByWithRelationInput = {
  ProductListing?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  featured?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type BrandWhereInput = {
  AND?: InputMaybe<Array<BrandWhereInput>>;
  NOT?: InputMaybe<Array<BrandWhereInput>>;
  OR?: InputMaybe<Array<BrandWhereInput>>;
  ProductListing?: InputMaybe<ProductListingListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featured?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum CtaType {
  ExternalUrl = 'EXTERNAL_URL',
  Navigation = 'NAVIGATION',
}

export type CampaignDto = {
  __typename?: 'CampaignDto';
  campaignDuration: Scalars['Int']['output'];
  campaignEndAt: Scalars['Int']['output'];
  campaignImage?: Maybe<Scalars['String']['output']>;
  campaignStartAt: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  eventDayTime: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  localistId?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationCoordinates?: Maybe<Scalars['String']['output']>;
  showOnApp: Scalars['Boolean']['output'];
  tag: Tag;
  title: Scalars['String']['output'];
  type: Array<CampaignType>;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type CampaignFilterInput = {
  isShownOnApp?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CampaignPaginatedResponse = {
  __typename?: 'CampaignPaginatedResponse';
  campaigns: Array<CampaignDto>;
  totalCount: Scalars['Int']['output'];
};

export enum CampaignType {
  Banner = 'BANNER',
  Listing = 'LISTING',
  Popup = 'POPUP',
}

export type CampaignWhereInput = {
  AND?: InputMaybe<Array<CampaignWhereInput>>;
  NOT?: InputMaybe<Array<CampaignWhereInput>>;
  OR?: InputMaybe<Array<CampaignWhereInput>>;
  campaignDuration?: InputMaybe<IntFilter>;
  campaignEndAt?: InputMaybe<IntFilter>;
  campaignImage?: InputMaybe<StringNullableFilter>;
  campaignStartAt?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventDayTime?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  localistId?: InputMaybe<StringNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  locationCoordinates?: InputMaybe<StringNullableFilter>;
  showOnApp?: InputMaybe<BoolFilter>;
  tag?: InputMaybe<EnumTagFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumCampaignTypeNullableListFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type CampaignWithAnalyticsDto = {
  __typename?: 'CampaignWithAnalyticsDto';
  campaignDuration: Scalars['Int']['output'];
  campaignEndAt: Scalars['Int']['output'];
  campaignImage?: Maybe<Scalars['String']['output']>;
  campaignStartAt: Scalars['Int']['output'];
  clicks: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  ctr: Scalars['Int']['output'];
  eventDayTime: Scalars['Int']['output'];
  female: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  localistId?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locationCoordinates?: Maybe<Scalars['String']['output']>;
  male: Scalars['Int']['output'];
  showOnApp: Scalars['Boolean']['output'];
  tag: Tag;
  title: Scalars['String']['output'];
  type: Array<CampaignType>;
  uniqueImpression: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  userId: Scalars['String']['output'];
};

export type CampusChat = {
  __typename?: 'CampusChat';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  eduInstitute: EduInstitute;
  eduInstituteId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: CampusChatType;
  updatedAt: Scalars['DateTime']['output'];
};

export type CampusChatComment = {
  __typename?: 'CampusChatComment';
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  text: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type CampusChatListRelationFilter = {
  every?: InputMaybe<CampusChatWhereInput>;
  none?: InputMaybe<CampusChatWhereInput>;
  some?: InputMaybe<CampusChatWhereInput>;
};

export type CampusChatOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CampusChatReaction = {
  __typename?: 'CampusChatReaction';
  createdAt: Scalars['DateTime']['output'];
  type: ReactionType;
  userId: Scalars['String']['output'];
};

export type CampusChatReplyNotficationPayload = {
  __typename?: 'CampusChatReplyNotficationPayload';
  commentExcerpt: Scalars['String']['output'];
  commentId: Scalars['String']['output'];
  commentedBy: Scalars['String']['output'];
  messageId: Scalars['String']['output'];
};

export enum CampusChatReportAction {
  NoAction = 'NO_ACTION',
  Removed = 'REMOVED',
  WarningIssued = 'WARNING_ISSUED',
}

export type CampusChatReportStatus = {
  __typename?: 'CampusChatReportStatus';
  action?: Maybe<CampusChatReportAction>;
  reviewed: Scalars['Boolean']['output'];
  reviewedAt?: Maybe<Scalars['DateTime']['output']>;
  reviewedBy?: Maybe<Scalars['String']['output']>;
};

export enum CampusChatType {
  Academics = 'ACADEMICS',
  Announcements = 'ANNOUNCEMENTS',
  BuySell = 'BUY_SELL',
  Custom = 'CUSTOM',
  Events = 'EVENTS',
  General = 'GENERAL',
  Housing = 'HOUSING',
  JobsAndInternships = 'JOBS_AND_INTERNSHIPS',
  LostAndFound = 'LOST_AND_FOUND',
  Sports = 'SPORTS',
  StudentBusiness = 'STUDENT_BUSINESS',
}

export type CampusChatWhereInput = {
  AND?: InputMaybe<Array<CampusChatWhereInput>>;
  NOT?: InputMaybe<Array<CampusChatWhereInput>>;
  OR?: InputMaybe<Array<CampusChatWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  eduInstitute?: InputMaybe<EduInstituteRelationFilter>;
  eduInstituteId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumCampusChatTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CatalogueCategory = {
  __typename?: 'CatalogueCategory';
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Charges = {
  __typename?: 'Charges';
  lateFee?: Maybe<Scalars['Float']['output']>;
  serviceFee?: Maybe<Scalars['Float']['output']>;
  tax?: Maybe<Scalars['Float']['output']>;
};

export type ChargesCreateInput = {
  lateFee?: InputMaybe<Scalars['Float']['input']>;
  serviceFee?: InputMaybe<Scalars['Float']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
};

export type ChargesNullableCompositeFilter = {
  equals?: InputMaybe<ChargesObjectEqualityInput>;
  is?: InputMaybe<ChargesWhereInput>;
  isNot?: InputMaybe<ChargesWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChargesObjectEqualityInput = {
  lateFee?: InputMaybe<Scalars['Float']['input']>;
  serviceFee?: InputMaybe<Scalars['Float']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
};

export type ChargesWhereInput = {
  AND?: InputMaybe<Array<ChargesWhereInput>>;
  NOT?: InputMaybe<Array<ChargesWhereInput>>;
  OR?: InputMaybe<Array<ChargesWhereInput>>;
  lateFee?: InputMaybe<FloatNullableFilter>;
  serviceFee?: InputMaybe<FloatNullableFilter>;
  tax?: InputMaybe<FloatNullableFilter>;
};

export type Choice = {
  __typename?: 'Choice';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Color = {
  __typename?: 'Color';
  ProductListing?: Maybe<Array<ProductListing>>;
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  hex: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ColorNullableRelationFilter = {
  is?: InputMaybe<ColorWhereInput>;
  isNot?: InputMaybe<ColorWhereInput>;
};

export type ColorOrderByWithRelationInput = {
  ProductListing?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  hex?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ColorValue = {
  __typename?: 'ColorValue';
  hex: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ColorWhereInput = {
  AND?: InputMaybe<Array<ColorWhereInput>>;
  NOT?: InputMaybe<Array<ColorWhereInput>>;
  OR?: InputMaybe<Array<ColorWhereInput>>;
  ProductListing?: InputMaybe<ProductListingListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  hex?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type CommentPoster = {
  __typename?: 'CommentPoster';
  displayPicture: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type CommunicationPreference = {
  __typename?: 'CommunicationPreference';
  chatMessages: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  eventReminders: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  medium: CommunicationType;
  productUpdates: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type CommunicationPreferenceListRelationFilter = {
  every?: InputMaybe<CommunicationPreferenceWhereInput>;
  none?: InputMaybe<CommunicationPreferenceWhereInput>;
  some?: InputMaybe<CommunicationPreferenceWhereInput>;
};

export type CommunicationPreferenceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommunicationPreferenceWhereInput = {
  AND?: InputMaybe<Array<CommunicationPreferenceWhereInput>>;
  NOT?: InputMaybe<Array<CommunicationPreferenceWhereInput>>;
  OR?: InputMaybe<Array<CommunicationPreferenceWhereInput>>;
  chatMessages?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  eventReminders?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  medium?: InputMaybe<EnumCommunicationTypeFilter>;
  productUpdates?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum CommunicationType {
  Email = 'EMAIL',
  Push = 'PUSH',
  Sms = 'SMS',
}

export type Conversation = {
  __typename?: 'Conversation';
  consumersLastSeen?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  deliveryConfirmedBySeller?: Maybe<Scalars['Boolean']['output']>;
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  initiatedBy: Scalars['String']['output'];
  lastMessageId?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  participantIds?: Maybe<Array<Scalars['String']['output']>>;
  participants?: Maybe<Array<User>>;
  payload?: Maybe<Scalars['String']['output']>;
  paymentLinkCount?: Maybe<Scalars['Int']['output']>;
  paymentLinkSent?: Maybe<Scalars['Boolean']['output']>;
  preferredAddressId?: Maybe<Scalars['String']['output']>;
  preferredPaymentMethod?: Maybe<Scalars['String']['output']>;
  product: ProductListing;
  productId: Scalars['String']['output'];
  providersLastSeen?: Maybe<Scalars['String']['output']>;
  type: ConversationType;
  updatedAt: Scalars['DateTime']['output'];
  valid: Scalars['Boolean']['output'];
};

export type ConversationListRelationFilter = {
  every?: InputMaybe<ConversationWhereInput>;
  none?: InputMaybe<ConversationWhereInput>;
  some?: InputMaybe<ConversationWhereInput>;
};

export type ConversationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ConversationOrderByWithRelationInput = {
  consumersLastSeen?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deliveryConfirmedBySeller?: InputMaybe<SortOrder>;
  enabled?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initiatedBy?: InputMaybe<SortOrder>;
  lastMessageId?: InputMaybe<SortOrder>;
  orderId?: InputMaybe<SortOrder>;
  participantIds?: InputMaybe<SortOrder>;
  participants?: InputMaybe<UserOrderByRelationAggregateInput>;
  payload?: InputMaybe<SortOrder>;
  paymentLinkCount?: InputMaybe<SortOrder>;
  paymentLinkSent?: InputMaybe<SortOrder>;
  preferredAddressId?: InputMaybe<SortOrder>;
  preferredPaymentMethod?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductListingOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  providersLastSeen?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export enum ConversationType {
  OutsideRadius = 'OUTSIDE_RADIUS',
  Rent = 'RENT',
  SameRadius = 'SAME_RADIUS',
}

export type ConversationWhereInput = {
  AND?: InputMaybe<Array<ConversationWhereInput>>;
  NOT?: InputMaybe<Array<ConversationWhereInput>>;
  OR?: InputMaybe<Array<ConversationWhereInput>>;
  consumersLastSeen?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deliveryConfirmedBySeller?: InputMaybe<BoolNullableFilter>;
  enabled?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  initiatedBy?: InputMaybe<StringFilter>;
  lastMessageId?: InputMaybe<StringNullableFilter>;
  orderId?: InputMaybe<StringNullableFilter>;
  participantIds?: InputMaybe<StringNullableListFilter>;
  participants?: InputMaybe<UserListRelationFilter>;
  payload?: InputMaybe<StringNullableFilter>;
  paymentLinkCount?: InputMaybe<IntNullableFilter>;
  paymentLinkSent?: InputMaybe<BoolNullableFilter>;
  preferredAddressId?: InputMaybe<StringNullableFilter>;
  preferredPaymentMethod?: InputMaybe<StringNullableFilter>;
  product?: InputMaybe<ProductListingRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  providersLastSeen?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<EnumConversationTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type CounterSellerOfferBubble = {
  __typename?: 'CounterSellerOfferBubble';
  headerText: Scalars['String']['output'];
  offerPrice: Scalars['Float']['output'];
};

export type CreateAdminInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type CreateBannedWord = {
  active: Scalars['Boolean']['input'];
  categoryId: Scalars['String']['input'];
  word: Scalars['String']['input'];
};

export type CreateBannedWordCategory = {
  active: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  severity: Scalars['Int']['input'];
};

export type CreateCampaignInput = {
  campaignEndAt: Scalars['Int']['input'];
  campaignImage?: InputMaybe<Scalars['String']['input']>;
  campaignStartAt: Scalars['Int']['input'];
  eventDayTime: Scalars['Int']['input'];
  localistId?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  locationCoordinates?: InputMaybe<Scalars['String']['input']>;
  showOnApp: Scalars['Boolean']['input'];
  tag: Tag;
  title: Scalars['String']['input'];
  type: Array<CampaignType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type CreateInstitutionInvoice = {
  chargesType?: InputMaybe<ChargesCreateInput>;
  dueAt: Scalars['DateTime']['input'];
  institutionId: Scalars['ID']['input'];
  items?: InputMaybe<Array<InvoiceItemCreateInput>>;
};

export type CreateReportInput = {
  institutionId: Scalars['ID']['input'];
  reportedEntity: ReportedEntityType;
  reportedId: Scalars['ID']['input'];
  reporterId: Scalars['ID']['input'];
  reporterNotes?: InputMaybe<Scalars['String']['input']>;
  type: ReportType;
};

export type CreateSupportRequestInput = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
};

export type CustomDomains = {
  __typename?: 'CustomDomains';
  dnsRecords?: Maybe<Array<DnsRecordsType>>;
  name: Scalars['String']['output'];
};

export type CustomDomainsCreateInput = {
  dnsRecords: Array<DnsRecordsTypeCreateInput>;
  name: Scalars['String']['input'];
};

export type CustomDomainsObjectEqualityInput = {
  dnsRecords?: InputMaybe<Array<DnsRecordsTypeObjectEqualityInput>>;
  name: Scalars['String']['input'];
};

export type CustomDomainsOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DmProductBubble = {
  __typename?: 'DMProductBubble';
  image: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  text: Scalars['String']['output'];
};

export type DmStoryShareBubble = {
  __typename?: 'DMStoryShareBubble';
  text: Scalars['String']['output'];
  thumbnail: Scalars['String']['output'];
};

export type DmTextBubble = {
  __typename?: 'DMTextBubble';
  text: Scalars['String']['output'];
};

export enum DmType {
  ProductBubble = 'PRODUCT_BUBBLE',
  StoryShare = 'STORY_SHARE',
  Text = 'TEXT',
}

export type DnsRecordsType = {
  __typename?: 'DNSRecordsType';
  name: Scalars['String']['output'];
  ttl: Scalars['Int']['output'];
  type: RecordType;
  value: Scalars['String']['output'];
  verifiedAt: Scalars['String']['output'];
};

export type DnsRecordsTypeCreateInput = {
  name: Scalars['String']['input'];
  type: RecordType;
  value: Scalars['String']['input'];
};

export type DnsRecordsTypeObjectEqualityInput = {
  name: Scalars['String']['input'];
  ttl: Scalars['Int']['input'];
  type: RecordType;
  value: Scalars['String']['input'];
  verifiedAt: Scalars['String']['input'];
};

export type DateRange = {
  __typename?: 'DateRange';
  endDate: Scalars['DateTime']['output'];
  startDate: Scalars['DateTime']['output'];
};

export type DateRangeCompositeFilter = {
  equals?: InputMaybe<DateRangeObjectEqualityInput>;
  is?: InputMaybe<DateRangeWhereInput>;
  isNot?: InputMaybe<DateRangeWhereInput>;
};

export type DateRangeObjectEqualityInput = {
  endDate: Scalars['DateTime']['input'];
  startDate: Scalars['DateTime']['input'];
};

export type DateRangeWhereInput = {
  AND?: InputMaybe<Array<DateRangeWhereInput>>;
  NOT?: InputMaybe<Array<DateRangeWhereInput>>;
  OR?: InputMaybe<Array<DateRangeWhereInput>>;
  endDate?: InputMaybe<DateTimeFilter>;
  startDate?: InputMaybe<DateTimeFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type Deal = {
  __typename?: 'Deal';
  active: Scalars['Boolean']['output'];
  business: DealBusinessDetails;
  content: DealTextContent;
  couponCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  savedUserIds?: Maybe<Array<Scalars['String']['output']>>;
  savedUsers?: Maybe<Array<User>>;
  selectedEduInstitutes?: Maybe<Array<EduInstituteSelectOption>>;
  type: DealType;
  updatedAt: Scalars['DateTime']['output'];
  url?: Maybe<Scalars['String']['output']>;
  validity: DateRange;
};

export type DealBusinessDetails = {
  __typename?: 'DealBusinessDetails';
  address: Scalars['String']['output'];
  logo: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type DealBusinessDetailsCompositeFilter = {
  equals?: InputMaybe<DealBusinessDetailsObjectEqualityInput>;
  is?: InputMaybe<DealBusinessDetailsWhereInput>;
  isNot?: InputMaybe<DealBusinessDetailsWhereInput>;
};

export type DealBusinessDetailsObjectEqualityInput = {
  address: Scalars['String']['input'];
  logo: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type DealBusinessDetailsWhereInput = {
  AND?: InputMaybe<Array<DealBusinessDetailsWhereInput>>;
  NOT?: InputMaybe<Array<DealBusinessDetailsWhereInput>>;
  OR?: InputMaybe<Array<DealBusinessDetailsWhereInput>>;
  address?: InputMaybe<StringFilter>;
  logo?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type DealListRelationFilter = {
  every?: InputMaybe<DealWhereInput>;
  none?: InputMaybe<DealWhereInput>;
  some?: InputMaybe<DealWhereInput>;
};

export type DealMeetupOfferBubble = {
  __typename?: 'DealMeetupOfferBubble';
  headerText: Scalars['String']['output'];
  meetupPreference: DealMeetupPreference;
  offerPrice: Scalars['Float']['output'];
};

export type DealMeetupPreference = {
  __typename?: 'DealMeetupPreference';
  days: Scalars['String']['output'];
  location: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

export type DealOfferBubble = {
  __typename?: 'DealOfferBubble';
  buyerAddressId: Scalars['String']['output'];
  headerText: Scalars['String']['output'];
  offerPrice: Scalars['Float']['output'];
  product: ProductBubble;
  sellerAddressId: Scalars['String']['output'];
  shippingFee: Scalars['Float']['output'];
  totalPrice: Scalars['Float']['output'];
};

export type DealOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type DealTextContent = {
  __typename?: 'DealTextContent';
  heading: Scalars['String']['output'];
  paragraph: Scalars['String']['output'];
  pointers: Scalars['String']['output'];
};

export type DealTextContentCompositeFilter = {
  equals?: InputMaybe<DealTextContentObjectEqualityInput>;
  is?: InputMaybe<DealTextContentWhereInput>;
  isNot?: InputMaybe<DealTextContentWhereInput>;
};

export type DealTextContentObjectEqualityInput = {
  heading: Scalars['String']['input'];
  paragraph: Scalars['String']['input'];
  pointers: Scalars['String']['input'];
};

export type DealTextContentWhereInput = {
  AND?: InputMaybe<Array<DealTextContentWhereInput>>;
  NOT?: InputMaybe<Array<DealTextContentWhereInput>>;
  OR?: InputMaybe<Array<DealTextContentWhereInput>>;
  heading?: InputMaybe<StringFilter>;
  paragraph?: InputMaybe<StringFilter>;
  pointers?: InputMaybe<StringFilter>;
};

export enum DealType {
  WithoutCoupon = 'WITHOUT_COUPON',
  WithCoupon = 'WITH_COUPON',
}

export type DealWhereInput = {
  AND?: InputMaybe<Array<DealWhereInput>>;
  NOT?: InputMaybe<Array<DealWhereInput>>;
  OR?: InputMaybe<Array<DealWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  business?: InputMaybe<DealBusinessDetailsCompositeFilter>;
  content?: InputMaybe<DealTextContentCompositeFilter>;
  couponCode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  savedUserIds?: InputMaybe<StringNullableListFilter>;
  savedUsers?: InputMaybe<UserListRelationFilter>;
  selectedEduInstitutes?: InputMaybe<
    Array<EduInstituteSelectOptionObjectEqualityInput>
  >;
  type?: InputMaybe<EnumDealTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringNullableFilter>;
  validity?: InputMaybe<DateRangeCompositeFilter>;
};

export type DeleteCommentInput = {
  commentId: Scalars['String']['input'];
};

export type DirectMessage = {
  __typename?: 'DirectMessage';
  clientId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['JSON']['output'];
  personalDmId: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  type: DmType;
  updatedAt: Scalars['DateTime']['output'];
};

export type DirectMessageInput = {
  clientId: Scalars['String']['input'];
  payload: Scalars['CustomJSON']['input'];
  recipientId?: InputMaybe<Scalars['String']['input']>;
  type: DmType;
};

export type DirectMessageOrderByWithRelationInput = {
  clientId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  personalDmId?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type DirectMessageWhereInput = {
  AND?: InputMaybe<Array<DirectMessageWhereInput>>;
  NOT?: InputMaybe<Array<DirectMessageWhereInput>>;
  OR?: InputMaybe<Array<DirectMessageWhereInput>>;
  clientId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  personalDmId?: InputMaybe<StringFilter>;
  senderId?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumDmTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type EduInstitute = {
  __typename?: 'EduInstitute';
  active?: Maybe<Scalars['Boolean']['output']>;
  address: Scalars['String']['output'];
  campusChats?: Maybe<Array<CampusChat>>;
  city: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  domain: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isRegistered?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  passCode?: Maybe<Scalars['String']['output']>;
  productListings?: Maybe<Array<ProductListing>>;
  slug?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  students?: Maybe<Array<User>>;
  updatedAt: Scalars['DateTime']['output'];
  zip: Scalars['String']['output'];
};

export type EduInstituteNullableRelationFilter = {
  is?: InputMaybe<EduInstituteWhereInput>;
  isNot?: InputMaybe<EduInstituteWhereInput>;
};

export type EduInstituteOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  address?: InputMaybe<SortOrder>;
  campusChats?: InputMaybe<CampusChatOrderByRelationAggregateInput>;
  city?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  domain?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isRegistered?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  passCode?: InputMaybe<SortOrder>;
  productListings?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  slug?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  students?: InputMaybe<UserOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  zip?: InputMaybe<SortOrder>;
};

export type EduInstituteRelationFilter = {
  is?: InputMaybe<EduInstituteWhereInput>;
  isNot?: InputMaybe<EduInstituteWhereInput>;
};

export type EduInstituteSelectOption = {
  __typename?: 'EduInstituteSelectOption';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type EduInstituteSelectOptionObjectEqualityInput = {
  label: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type EduInstituteWhereInput = {
  AND?: InputMaybe<Array<EduInstituteWhereInput>>;
  NOT?: InputMaybe<Array<EduInstituteWhereInput>>;
  OR?: InputMaybe<Array<EduInstituteWhereInput>>;
  active?: InputMaybe<BoolNullableFilter>;
  address?: InputMaybe<StringFilter>;
  campusChats?: InputMaybe<CampusChatListRelationFilter>;
  city?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  domain?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  isRegistered?: InputMaybe<BoolNullableFilter>;
  location?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringFilter>;
  passCode?: InputMaybe<StringNullableFilter>;
  productListings?: InputMaybe<ProductListingListRelationFilter>;
  slug?: InputMaybe<StringNullableFilter>;
  state?: InputMaybe<StringFilter>;
  students?: InputMaybe<UserListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  zip?: InputMaybe<StringFilter>;
};

export type EduIntituteWithJustName = {
  __typename?: 'EduIntituteWithJustName';
  name: Scalars['String']['output'];
};

export type EnumAddressTypeFilter = {
  equals?: InputMaybe<AddressType>;
  in?: InputMaybe<Array<AddressType>>;
  not?: InputMaybe<NestedEnumAddressTypeFilter>;
  notIn?: InputMaybe<Array<AddressType>>;
};

export type EnumAdminRoleNullableListFilter = {
  equals?: InputMaybe<Array<AdminRole>>;
  has?: InputMaybe<AdminRole>;
  hasEvery?: InputMaybe<Array<AdminRole>>;
  hasSome?: InputMaybe<Array<AdminRole>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumAltSignupStatusFilter = {
  equals?: InputMaybe<AltSignupStatus>;
  in?: InputMaybe<Array<AltSignupStatus>>;
  not?: InputMaybe<NestedEnumAltSignupStatusFilter>;
  notIn?: InputMaybe<Array<AltSignupStatus>>;
};

export type EnumAvailabilityNullableListFilter = {
  equals?: InputMaybe<Array<Availability>>;
  has?: InputMaybe<Availability>;
  hasEvery?: InputMaybe<Array<Availability>>;
  hasSome?: InputMaybe<Array<Availability>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumCampaignTypeNullableListFilter = {
  equals?: InputMaybe<Array<CampaignType>>;
  has?: InputMaybe<CampaignType>;
  hasEvery?: InputMaybe<Array<CampaignType>>;
  hasSome?: InputMaybe<Array<CampaignType>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumCampusChatTypeFilter = {
  equals?: InputMaybe<CampusChatType>;
  in?: InputMaybe<Array<CampusChatType>>;
  not?: InputMaybe<NestedEnumCampusChatTypeFilter>;
  notIn?: InputMaybe<Array<CampusChatType>>;
};

export type EnumCommunicationTypeFilter = {
  equals?: InputMaybe<CommunicationType>;
  in?: InputMaybe<Array<CommunicationType>>;
  not?: InputMaybe<NestedEnumCommunicationTypeFilter>;
  notIn?: InputMaybe<Array<CommunicationType>>;
};

export type EnumConversationTypeFilter = {
  equals?: InputMaybe<ConversationType>;
  in?: InputMaybe<Array<ConversationType>>;
  not?: InputMaybe<NestedEnumConversationTypeFilter>;
  notIn?: InputMaybe<Array<ConversationType>>;
};

export type EnumDmTypeFilter = {
  equals?: InputMaybe<DmType>;
  in?: InputMaybe<Array<DmType>>;
  not?: InputMaybe<NestedEnumDmTypeFilter>;
  notIn?: InputMaybe<Array<DmType>>;
};

export type EnumDealTypeFilter = {
  equals?: InputMaybe<DealType>;
  in?: InputMaybe<Array<DealType>>;
  not?: InputMaybe<NestedEnumDealTypeFilter>;
  notIn?: InputMaybe<Array<DealType>>;
};

export type EnumGatewayFilter = {
  equals?: InputMaybe<Gateway>;
  in?: InputMaybe<Array<Gateway>>;
  not?: InputMaybe<NestedEnumGatewayFilter>;
  notIn?: InputMaybe<Array<Gateway>>;
};

export type EnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type EnumInitiatedFromNullableFilter = {
  equals?: InputMaybe<InitiatedFrom>;
  in?: InputMaybe<Array<InitiatedFrom>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumInitiatedFromNullableFilter>;
  notIn?: InputMaybe<Array<InitiatedFrom>>;
};

export type EnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type EnumMessageStateNullableFilter = {
  equals?: InputMaybe<MessageState>;
  in?: InputMaybe<Array<MessageState>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumMessageStateNullableFilter>;
  notIn?: InputMaybe<Array<MessageState>>;
};

export type EnumMessageTypeFilter = {
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
};

export type EnumOrderNotificationTypeNullableFilter = {
  equals?: InputMaybe<OrderNotificationType>;
  in?: InputMaybe<Array<OrderNotificationType>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumOrderNotificationTypeNullableFilter>;
  notIn?: InputMaybe<Array<OrderNotificationType>>;
};

export type EnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type EnumOrderTypeFilter = {
  equals?: InputMaybe<OrderType>;
  in?: InputMaybe<Array<OrderType>>;
  not?: InputMaybe<NestedEnumOrderTypeFilter>;
  notIn?: InputMaybe<Array<OrderType>>;
};

export type EnumPlatformNullableFilter = {
  equals?: InputMaybe<Platform>;
  in?: InputMaybe<Array<Platform>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumPlatformNullableFilter>;
  notIn?: InputMaybe<Array<Platform>>;
};

export type EnumPreferredGenderNullableFilter = {
  equals?: InputMaybe<PreferredGender>;
  in?: InputMaybe<Array<PreferredGender>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumPreferredGenderNullableFilter>;
  notIn?: InputMaybe<Array<PreferredGender>>;
};

export type EnumProductConditionFilter = {
  equals?: InputMaybe<ProductCondition>;
  in?: InputMaybe<Array<ProductCondition>>;
  not?: InputMaybe<NestedEnumProductConditionFilter>;
  notIn?: InputMaybe<Array<ProductCondition>>;
};

export type EnumProductDeliveryModeFilter = {
  equals?: InputMaybe<ProductDeliveryMode>;
  in?: InputMaybe<Array<ProductDeliveryMode>>;
  not?: InputMaybe<NestedEnumProductDeliveryModeFilter>;
  notIn?: InputMaybe<Array<ProductDeliveryMode>>;
};

export type EnumProductDeliveryModeNullableFilter = {
  equals?: InputMaybe<ProductDeliveryMode>;
  in?: InputMaybe<Array<ProductDeliveryMode>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumProductDeliveryModeNullableFilter>;
  notIn?: InputMaybe<Array<ProductDeliveryMode>>;
};

export type EnumProductListingTypeFilter = {
  equals?: InputMaybe<ProductListingType>;
  in?: InputMaybe<Array<ProductListingType>>;
  not?: InputMaybe<NestedEnumProductListingTypeFilter>;
  notIn?: InputMaybe<Array<ProductListingType>>;
};

export type EnumProductReportActionNullableFilter = {
  equals?: InputMaybe<ProductReportAction>;
  in?: InputMaybe<Array<ProductReportAction>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumProductReportActionNullableFilter>;
  notIn?: InputMaybe<Array<ProductReportAction>>;
};

export type EnumProductReportReasonFilter = {
  equals?: InputMaybe<ProductReportReason>;
  in?: InputMaybe<Array<ProductReportReason>>;
  not?: InputMaybe<NestedEnumProductReportReasonFilter>;
  notIn?: InputMaybe<Array<ProductReportReason>>;
};

export type EnumReportStatusFilter = {
  equals?: InputMaybe<ReportStatus>;
  in?: InputMaybe<Array<ReportStatus>>;
  not?: InputMaybe<NestedEnumReportStatusFilter>;
  notIn?: InputMaybe<Array<ReportStatus>>;
};

export type EnumReportTypeFilter = {
  equals?: InputMaybe<ReportType>;
  in?: InputMaybe<Array<ReportType>>;
  not?: InputMaybe<NestedEnumReportTypeFilter>;
  notIn?: InputMaybe<Array<ReportType>>;
};

export type EnumReportedEntityTypeFilter = {
  equals?: InputMaybe<ReportedEntityType>;
  in?: InputMaybe<Array<ReportedEntityType>>;
  not?: InputMaybe<NestedEnumReportedEntityTypeFilter>;
  notIn?: InputMaybe<Array<ReportedEntityType>>;
};

export type EnumRoleNullableListFilter = {
  equals?: InputMaybe<Array<Role>>;
  has?: InputMaybe<Role>;
  hasEvery?: InputMaybe<Array<Role>>;
  hasSome?: InputMaybe<Array<Role>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EnumSellerPayoutStatusFilter = {
  equals?: InputMaybe<SellerPayoutStatus>;
  in?: InputMaybe<Array<SellerPayoutStatus>>;
  not?: InputMaybe<NestedEnumSellerPayoutStatusFilter>;
  notIn?: InputMaybe<Array<SellerPayoutStatus>>;
};

export type EnumShippingChargePayerNullableFilter = {
  equals?: InputMaybe<ShippingChargePayer>;
  in?: InputMaybe<Array<ShippingChargePayer>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumShippingChargePayerNullableFilter>;
  notIn?: InputMaybe<Array<ShippingChargePayer>>;
};

export type EnumSupportTicketParticipantFilter = {
  equals?: InputMaybe<SupportTicketParticipant>;
  in?: InputMaybe<Array<SupportTicketParticipant>>;
  not?: InputMaybe<NestedEnumSupportTicketParticipantFilter>;
  notIn?: InputMaybe<Array<SupportTicketParticipant>>;
};

export type EnumSupportTicketTypeFilter = {
  equals?: InputMaybe<SupportTicketType>;
  in?: InputMaybe<Array<SupportTicketType>>;
  not?: InputMaybe<NestedEnumSupportTicketTypeFilter>;
  notIn?: InputMaybe<Array<SupportTicketType>>;
};

export type EnumTagFilter = {
  equals?: InputMaybe<Tag>;
  in?: InputMaybe<Array<Tag>>;
  not?: InputMaybe<NestedEnumTagFilter>;
  notIn?: InputMaybe<Array<Tag>>;
};

export type EventDto = {
  __typename?: 'EventDto';
  address?: Maybe<Scalars['String']['output']>;
  allows_attendance: Scalars['Boolean']['output'];
  allows_reviews: Scalars['Boolean']['output'];
  campus_id?: Maybe<Scalars['Float']['output']>;
  city_id?: Maybe<Scalars['Float']['output']>;
  conference_event_id?: Maybe<Scalars['Float']['output']>;
  created_at: Scalars['String']['output'];
  created_by?: Maybe<Scalars['Float']['output']>;
  custom_fields: Scalars['JSON']['output'];
  description: Scalars['String']['output'];
  description_text: Scalars['String']['output'];
  detail_views: Scalars['Float']['output'];
  directions?: Maybe<Scalars['String']['output']>;
  event_instances: Array<EventInstanceDto>;
  experience: Scalars['String']['output'];
  facebook_id?: Maybe<Scalars['String']['output']>;
  featured: Scalars['Boolean']['output'];
  filters: Scalars['JSON']['output'];
  first_date: Scalars['String']['output'];
  free: Scalars['Boolean']['output'];
  geo: EventGeoDto;
  has_register: Scalars['Boolean']['output'];
  hashtag?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords: Array<Scalars['String']['output']>;
  kind: Scalars['String']['output'];
  last_date: Scalars['String']['output'];
  localist_ics_url: Scalars['String']['output'];
  localist_url: Scalars['String']['output'];
  location: Scalars['String']['output'];
  location_name: Scalars['String']['output'];
  neighborhood_id?: Maybe<Scalars['Float']['output']>;
  photo_id?: Maybe<Scalars['Float']['output']>;
  photo_url: Scalars['String']['output'];
  private: Scalars['Boolean']['output'];
  recurring: Scalars['Boolean']['output'];
  rejected: Scalars['Boolean']['output'];
  room_number?: Maybe<Scalars['String']['output']>;
  school_id: Scalars['Float']['output'];
  sponsored: Scalars['Boolean']['output'];
  status: Scalars['String']['output'];
  stream_embed_code?: Maybe<Scalars['String']['output']>;
  stream_info?: Maybe<Scalars['String']['output']>;
  stream_url?: Maybe<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  ticket_cost?: Maybe<Scalars['String']['output']>;
  ticket_url?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updated_at: Scalars['String']['output'];
  updated_by?: Maybe<Scalars['Float']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  urlname: Scalars['String']['output'];
  user_id?: Maybe<Scalars['Float']['output']>;
  venue_id?: Maybe<Scalars['Float']['output']>;
  venue_url?: Maybe<Scalars['String']['output']>;
  verified: Scalars['Boolean']['output'];
};

export type EventGeoDto = {
  __typename?: 'EventGeoDto';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type EventInstanceDto = {
  __typename?: 'EventInstanceDto';
  all_day: Scalars['Boolean']['output'];
  end?: Maybe<Scalars['String']['output']>;
  event_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  num_attending: Scalars['Float']['output'];
  ranking: Scalars['Float']['output'];
  start: Scalars['String']['output'];
};

export type EventResponse = {
  __typename?: 'EventResponse';
  date: Scalars['JSON']['output'];
  events: Array<EventDto>;
  page: Scalars['JSON']['output'];
};

export type FeaturedBrandType = {
  __typename?: 'FeaturedBrandType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<ProductListing>;
};

export type FeaturedProductCategory = {
  __typename?: 'FeaturedProductCategory';
  image: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type FeaturedProductCategoryNullableCompositeFilter = {
  equals?: InputMaybe<FeaturedProductCategoryObjectEqualityInput>;
  is?: InputMaybe<FeaturedProductCategoryWhereInput>;
  isNot?: InputMaybe<FeaturedProductCategoryWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedProductCategoryObjectEqualityInput = {
  image: Scalars['String']['input'];
  status: Scalars['Boolean']['input'];
};

export type FeaturedProductCategoryOrderByInput = {
  image?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type FeaturedProductCategoryWhereInput = {
  AND?: InputMaybe<Array<FeaturedProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<FeaturedProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<FeaturedProductCategoryWhereInput>>;
  image?: InputMaybe<StringFilter>;
  status?: InputMaybe<BoolFilter>;
};

export type FeaturedProductType = {
  __typename?: 'FeaturedProductType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<ProductListing>;
};

export type FetchCommentsInput = {
  productListingId: Scalars['String']['input'];
};

export type FetchNotification = {
  __typename?: 'FetchNotification';
  unReadMessages: Array<UnreadMessages>;
};

export type FilterChoice = {
  __typename?: 'FilterChoice';
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FilterChoiceObjectEqualityInput = {
  name: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type FindAdminByEmailInput = {
  email: Scalars['String']['input'];
};

export type FindAdminByIdInput = {
  id: Scalars['ID']['input'];
};

export type FlagCommentInput = {
  commentId: Scalars['String']['input'];
};

export type FloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export enum Gateway {
  Stripe = 'STRIPE',
}

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type GenderWise = {
  __typename?: 'GenderWise';
  female: Scalars['Int']['output'];
  male: Scalars['Int']['output'];
};

export type GetChatMessagesInput = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  limit?: Scalars['Int']['input'];
  personalDMId: Scalars['String']['input'];
};

export type GetMessageByIdInput = {
  id: Scalars['ID']['input'];
};

export type GetUniversityCampaignsInput = {
  institutionId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  timeframe?: InputMaybe<TimeframeFilter>;
};

export type Hobby = {
  __typename?: 'Hobby';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userIds?: Maybe<Array<Scalars['String']['output']>>;
  users?: Maybe<Array<User>>;
};

export type HobbyListRelationFilter = {
  every?: InputMaybe<HobbyWhereInput>;
  none?: InputMaybe<HobbyWhereInput>;
  some?: InputMaybe<HobbyWhereInput>;
};

export type HobbyOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type HobbyWhereInput = {
  AND?: InputMaybe<Array<HobbyWhereInput>>;
  NOT?: InputMaybe<Array<HobbyWhereInput>>;
  OR?: InputMaybe<Array<HobbyWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userIds?: InputMaybe<StringNullableListFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type HomepageTrendingProductsType = {
  __typename?: 'HomepageTrendingProductsType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  products: Array<ProductListing>;
};

export type Image = {
  __typename?: 'Image';
  mainImage?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Int']['output']>;
};

export type ImageInput = {
  mainImage: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  order: Scalars['Float']['input'];
};

export type ImageObjectEqualityInput = {
  mainImage?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  order?: InputMaybe<Scalars['Int']['input']>;
};

export type ImageOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ImageOutput = {
  __typename?: 'ImageOutput';
  mainImage: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Float']['output'];
};

export type ImageStoryPayload = {
  __typename?: 'ImageStoryPayload';
  fontColor?: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  textHexCode?: Maybe<Scalars['String']['output']>;
  textPosX?: Maybe<Scalars['String']['output']>;
  textPosY?: Maybe<Scalars['String']['output']>;
};

export type InfoSystemMessage = {
  __typename?: 'InfoSystemMessage';
  icon: SystemIcons;
  text1: Scalars['String']['output'];
  text2: Scalars['String']['output'];
};

export enum InitiatedFrom {
  App = 'APP',
  UniversityWeb = 'UNIVERSITY_WEB',
}

export type Institution = {
  __typename?: 'Institution';
  archived: Scalars['Boolean']['output'];
  blocked: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  customDomains?: Maybe<Array<CustomDomains>>;
  id: Scalars['ID']['output'];
  institutionInvoices?: Maybe<Array<InstitutionInvoice>>;
  institutionName: Scalars['String']['output'];
  institutionPayments?: Maybe<Array<InstitutionPayment>>;
  liveUrl?: Maybe<Scalars['String']['output']>;
  localistCalendarUrl?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  passCode: Scalars['String']['output'];
  sandboxUrl?: Maybe<Scalars['String']['output']>;
  schoolColor?: Maybe<Scalars['String']['output']>;
  secondarySchoolColor?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<Session>>;
  showCampusChat: Scalars['Boolean']['output'];
  showDummyData?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  tertiarySchoolColor?: Maybe<Scalars['String']['output']>;
  universityLoginUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
};

export type InstitutionInvoice = {
  __typename?: 'InstitutionInvoice';
  admin: Admin;
  adminId: Scalars['String']['output'];
  chargesType?: Maybe<Charges>;
  createdAt: Scalars['DateTime']['output'];
  dueAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  institution: Institution;
  institutionId: Scalars['String']['output'];
  items?: Maybe<Array<InvoiceItem>>;
  paidAt?: Maybe<Scalars['Int']['output']>;
  status: InvoiceStatus;
  total: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type InstitutionInvoiceListRelationFilter = {
  every?: InputMaybe<InstitutionInvoiceWhereInput>;
  none?: InputMaybe<InstitutionInvoiceWhereInput>;
  some?: InputMaybe<InstitutionInvoiceWhereInput>;
};

export type InstitutionInvoiceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InstitutionInvoiceWhereInput = {
  AND?: InputMaybe<Array<InstitutionInvoiceWhereInput>>;
  NOT?: InputMaybe<Array<InstitutionInvoiceWhereInput>>;
  OR?: InputMaybe<Array<InstitutionInvoiceWhereInput>>;
  admin?: InputMaybe<AdminRelationFilter>;
  adminId?: InputMaybe<StringFilter>;
  chargesType?: InputMaybe<ChargesNullableCompositeFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  dueAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  institution?: InputMaybe<InstitutionRelationFilter>;
  institutionId?: InputMaybe<StringFilter>;
  items?: InputMaybe<Array<InvoiceItemObjectEqualityInput>>;
  paidAt?: InputMaybe<IntNullableFilter>;
  status?: InputMaybe<EnumInvoiceStatusFilter>;
  total?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InstitutionOrderByWithRelationInput = {
  archived?: InputMaybe<SortOrder>;
  blocked?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  customDomains?: InputMaybe<CustomDomainsOrderByCompositeAggregateInput>;
  id?: InputMaybe<SortOrder>;
  institutionInvoices?: InputMaybe<InstitutionInvoiceOrderByRelationAggregateInput>;
  institutionName?: InputMaybe<SortOrder>;
  institutionPayments?: InputMaybe<InstitutionPaymentOrderByRelationAggregateInput>;
  liveUrl?: InputMaybe<SortOrder>;
  localistCalendarUrl?: InputMaybe<SortOrder>;
  logo?: InputMaybe<SortOrder>;
  passCode?: InputMaybe<SortOrder>;
  sandboxUrl?: InputMaybe<SortOrder>;
  schoolColor?: InputMaybe<SortOrder>;
  secondarySchoolColor?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByCompositeAggregateInput>;
  showCampusChat?: InputMaybe<SortOrder>;
  showDummyData?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SortOrder>;
  tertiarySchoolColor?: InputMaybe<SortOrder>;
  universityLoginUrl?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type InstitutionPayment = {
  __typename?: 'InstitutionPayment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  gateway: Gateway;
  id: Scalars['ID']['output'];
  institution: Institution;
  institutionId: Scalars['String']['output'];
  invoiceId: Scalars['String']['output'];
  methodDescription?: Maybe<Scalars['String']['output']>;
  receiptUrl?: Maybe<Scalars['String']['output']>;
  stripePaymentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type InstitutionPaymentListRelationFilter = {
  every?: InputMaybe<InstitutionPaymentWhereInput>;
  none?: InputMaybe<InstitutionPaymentWhereInput>;
  some?: InputMaybe<InstitutionPaymentWhereInput>;
};

export type InstitutionPaymentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type InstitutionPaymentWhereInput = {
  AND?: InputMaybe<Array<InstitutionPaymentWhereInput>>;
  NOT?: InputMaybe<Array<InstitutionPaymentWhereInput>>;
  OR?: InputMaybe<Array<InstitutionPaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  gateway?: InputMaybe<EnumGatewayFilter>;
  id?: InputMaybe<StringFilter>;
  institution?: InputMaybe<InstitutionRelationFilter>;
  institutionId?: InputMaybe<StringFilter>;
  invoiceId?: InputMaybe<StringFilter>;
  methodDescription?: InputMaybe<StringNullableFilter>;
  receiptUrl?: InputMaybe<StringNullableFilter>;
  stripePaymentId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type InstitutionRelationFilter = {
  is?: InputMaybe<InstitutionWhereInput>;
  isNot?: InputMaybe<InstitutionWhereInput>;
};

export type InstitutionWhereInput = {
  AND?: InputMaybe<Array<InstitutionWhereInput>>;
  NOT?: InputMaybe<Array<InstitutionWhereInput>>;
  OR?: InputMaybe<Array<InstitutionWhereInput>>;
  archived?: InputMaybe<BoolFilter>;
  blocked?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  customDomains?: InputMaybe<Array<CustomDomainsObjectEqualityInput>>;
  id?: InputMaybe<StringFilter>;
  institutionInvoices?: InputMaybe<InstitutionInvoiceListRelationFilter>;
  institutionName?: InputMaybe<StringFilter>;
  institutionPayments?: InputMaybe<InstitutionPaymentListRelationFilter>;
  liveUrl?: InputMaybe<StringNullableFilter>;
  localistCalendarUrl?: InputMaybe<StringNullableFilter>;
  logo?: InputMaybe<StringNullableFilter>;
  passCode?: InputMaybe<StringFilter>;
  sandboxUrl?: InputMaybe<StringNullableFilter>;
  schoolColor?: InputMaybe<StringNullableFilter>;
  secondarySchoolColor?: InputMaybe<StringNullableFilter>;
  sessions?: InputMaybe<Array<SessionObjectEqualityInput>>;
  showCampusChat?: InputMaybe<BoolFilter>;
  showDummyData?: InputMaybe<BoolNullableFilter>;
  slug?: InputMaybe<StringFilter>;
  tertiarySchoolColor?: InputMaybe<StringNullableFilter>;
  universityLoginUrl?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type InvoiceItem = {
  __typename?: 'InvoiceItem';
  amount: Scalars['Float']['output'];
  description?: Maybe<Scalars['String']['output']>;
  key: Scalars['String']['output'];
};

export type InvoiceItemCreateInput = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};

export type InvoiceItemObjectEqualityInput = {
  amount: Scalars['Float']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  key: Scalars['String']['input'];
};

export enum InvoiceStatus {
  Overdue = 'OVERDUE',
  Pending = 'PENDING',
  Received = 'RECEIVED',
}

export type JsonFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type JsonNullableFilter = {
  equals?: InputMaybe<Scalars['JSON']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<Scalars['JSON']['input']>;
};

export type ListingSettingData = {
  __typename?: 'ListingSettingData';
  colors: Array<ColorValue>;
  conditions: Array<NameAndImagePair>;
  creditProcessing: Scalars['Float']['output'];
  id: Scalars['ID']['output'];
  meetupPreferences: Array<Scalars['String']['output']>;
  productDeliveryModes: Array<Scalars['String']['output']>;
  reasonsForSelling: Array<Scalars['String']['output']>;
  sellerFees: Scalars['Float']['output'];
  taxes: Scalars['Float']['output'];
  weightCategories: Array<WeightCategory>;
};

export type LocalOrderHandedOverMessage = {
  __typename?: 'LocalOrderHandedOverMessage';
  buyerDescription: Scalars['String']['output'];
  buyerHeading: Scalars['String']['output'];
  sellerDescription: Scalars['String']['output'];
  sellerHeading: Scalars['String']['output'];
};

export type LocalOrderUpdateMessage = {
  __typename?: 'LocalOrderUpdateMessage';
  description: Scalars['String']['output'];
  heading: Scalars['String']['output'];
};

export type LoggedInUser = {
  __typename?: 'LoggedInUser';
  about?: Maybe<Scalars['String']['output']>;
  blackListed: Scalars['Boolean']['output'];
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  displayPicture?: Maybe<Scalars['String']['output']>;
  eduInstitute?: Maybe<EduInstitute>;
  eduInstituteId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followingIDs?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Gender>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  lastName: Scalars['String']['output'];
  personalEmail?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  savedDealIds?: Maybe<Array<Scalars['String']['output']>>;
  shoppingPreferenceIds?: Maybe<Array<Scalars['String']['output']>>;
  sizes?: Maybe<Sizes>;
  updatedAt: Scalars['DateTime']['output'];
  wishlistIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type LoginInstitutionDto = {
  passCode: Scalars['String']['input'];
  slug: Scalars['String']['input'];
};

export type LoginRequest = {
  deviceModel: Scalars['String']['input'];
  deviceToken: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  platform: Platform;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String']['output'];
  loggedIn: Scalars['Boolean']['output'];
  msg: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type MarkTicketAsResolvedInput = {
  ticketId: Scalars['String']['input'];
};

export type MarketplaceListingType = {
  __typename?: 'MarketplaceListingType';
  active: Scalars['Boolean']['output'];
  archived: Scalars['Boolean']['output'];
  blackListed: Scalars['Boolean']['output'];
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ProductCategory>;
  categoryId: Scalars['String']['output'];
  categoryPreferredGender?: Maybe<PreferredGender>;
  color?: Maybe<Color>;
  colorId?: Maybe<Scalars['String']['output']>;
  conversations?: Maybe<Array<Conversation>>;
  createdAt: Scalars['DateTime']['output'];
  deletedByAdminAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  extendedData?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  legacyHash?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Array<MediaItem>>;
  price: Scalars['Float']['output'];
  priceString?: Maybe<Scalars['String']['output']>;
  productCondition: ProductCondition;
  productDeliveryMode?: Maybe<ProductDeliveryMode>;
  reasonForSelling?: Maybe<Scalars['String']['output']>;
  rentingPreference?: Maybe<RentingPreference>;
  reports?: Maybe<Array<ProductReport>>;
  selectedCategoryFilters?: Maybe<Scalars['JSON']['output']>;
  shippingChargePayer?: Maybe<ShippingChargePayer>;
  shippingEnabled: Scalars['Boolean']['output'];
  shippingFrom?: Maybe<Scalars['String']['output']>;
  soldOut: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: ProductListingType;
  updatedAt: Scalars['DateTime']['output'];
  uploader: User;
  uploaderEduInstitute?: Maybe<EduInstitute>;
  uploaderEduInstituteId?: Maybe<Scalars['String']['output']>;
  uploaderId?: Maybe<Scalars['String']['output']>;
  weightCategory?: Maybe<WeightCategory>;
  weightCategoryId?: Maybe<Scalars['String']['output']>;
  wishlistedBy?: Maybe<Array<User>>;
  wishlistedUserIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type MediaItem = {
  __typename?: 'MediaItem';
  name: Scalars['String']['output'];
  thumb: Scalars['Boolean']['output'];
  type: MediaType;
};

export type MediaItemCreateInput = {
  name: Scalars['String']['input'];
  thumb: Scalars['Boolean']['input'];
  type: MediaType;
};

export type MediaItemObjectEqualityInput = {
  name: Scalars['String']['input'];
  thumb: Scalars['Boolean']['input'];
  type: MediaType;
};

export type MediaItemOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum MediaType {
  Image = 'IMAGE',
  Video = 'VIDEO',
}

export type Message = {
  __typename?: 'Message';
  actions?: Maybe<MessageActions>;
  clientId: Scalars['String']['output'];
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['JSON']['output'];
  senderId: Scalars['String']['output'];
  state?: Maybe<MessageState>;
  type: MessageType;
  updatedAt: Scalars['DateTime']['output'];
};

export type MessageAction = {
  __typename?: 'MessageAction';
  label: Scalars['String']['output'];
  type: MessageActionType;
};

export type MessageActionObjectEqualityInput = {
  label: Scalars['String']['input'];
  type: MessageActionType;
};

export type MessageActionOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum MessageActionType {
  AcceptRequest = 'ACCEPT_REQUEST',
  CounterRequest = 'COUNTER_REQUEST',
  RejectRequest = 'REJECT_REQUEST',
  WithdrawRequest = 'WITHDRAW_REQUEST',
}

export type MessageActions = {
  __typename?: 'MessageActions';
  receiverActions?: Maybe<Array<MessageAction>>;
  senderActions?: Maybe<Array<MessageAction>>;
};

export type MessageActionsNullableCompositeFilter = {
  equals?: InputMaybe<MessageActionsObjectEqualityInput>;
  is?: InputMaybe<MessageActionsWhereInput>;
  isNot?: InputMaybe<MessageActionsWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MessageActionsObjectEqualityInput = {
  receiverActions?: InputMaybe<Array<MessageActionObjectEqualityInput>>;
  senderActions?: InputMaybe<Array<MessageActionObjectEqualityInput>>;
};

export type MessageActionsOrderByInput = {
  receiverActions?: InputMaybe<MessageActionOrderByCompositeAggregateInput>;
  senderActions?: InputMaybe<MessageActionOrderByCompositeAggregateInput>;
};

export type MessageActionsWhereInput = {
  AND?: InputMaybe<Array<MessageActionsWhereInput>>;
  NOT?: InputMaybe<Array<MessageActionsWhereInput>>;
  OR?: InputMaybe<Array<MessageActionsWhereInput>>;
  receiverActions?: InputMaybe<Array<MessageActionObjectEqualityInput>>;
  senderActions?: InputMaybe<Array<MessageActionObjectEqualityInput>>;
};

export type MessageOrderByWithRelationInput = {
  actions?: InputMaybe<MessageActionsOrderByInput>;
  clientId?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  senderId?: InputMaybe<SortOrder>;
  state?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum MessageState {
  Accepted = 'ACCEPTED',
  Countered = 'COUNTERED',
  Initial = 'INITIAL',
  Rejected = 'REJECTED',
  Withdrawn = 'WITHDRAWN',
}

export enum MessageType {
  CounterSellerOfferBubble = 'COUNTER_SELLER_OFFER_BUBBLE',
  DealMeetupOfferBubble = 'DEAL_MEETUP_OFFER_BUBBLE',
  DealOfferBubble = 'DEAL_OFFER_BUBBLE',
  Image = 'IMAGE',
  InfoSystemMessage = 'INFO_SYSTEM_MESSAGE',
  LocalOrderHandedOverMessage = 'LOCAL_ORDER_HANDED_OVER_MESSAGE',
  LocalOrderUpdateMessage = 'LOCAL_ORDER_UPDATE_MESSAGE',
  OrderUpdateSystemMessage = 'ORDER_UPDATE_SYSTEM_MESSAGE',
  PaymentConfirmationSystemMessage = 'PAYMENT_CONFIRMATION_SYSTEM_MESSAGE',
  PaymentLinkMessage = 'PAYMENT_LINK_MESSAGE',
  PaymentLinkUpdateMessage = 'PAYMENT_LINK_UPDATE_MESSAGE',
  ProductBubble = 'PRODUCT_BUBBLE',
  RentOfferBubble = 'RENT_OFFER_BUBBLE',
  Text = 'TEXT',
}

export type MessageWhereInput = {
  AND?: InputMaybe<Array<MessageWhereInput>>;
  NOT?: InputMaybe<Array<MessageWhereInput>>;
  OR?: InputMaybe<Array<MessageWhereInput>>;
  actions?: InputMaybe<MessageActionsNullableCompositeFilter>;
  clientId?: InputMaybe<StringFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  senderId?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumMessageStateNullableFilter>;
  type?: InputMaybe<EnumMessageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addNewProduct: ProductListing;
  addUserAddress: AddressWithId;
  adminLogin: AdminLoginResponse;
  archiveInstitution: Institution;
  blackListUser: User;
  blockProductListing: ProductListing;
  createBannedWord: BannedWord;
  createBannedWordCategory: BannedWordsCategory;
  createCampaign: CampaignDto;
  createInvoice: InstitutionInvoice;
  createReport: Report;
  createSupportRequest: SupportRequestDto;
  createSupportTicket: SupportTicket;
  createUniversityAdmin: UniversityAdmin;
  deleteAComment: ProductCommentExtendedObj;
  deleteBannedWord: BannedWord;
  deleteBannedWordCategory: BannedWordsCategory;
  deleteOneProductListing: ProductListing;
  deleteUserAddress: Scalars['String']['output'];
  flagAComment: ProductCommentExtendedObj;
  generateDNSValue: Scalars['String']['output'];
  login: LoginResponse;
  loginInstitution: AuthDto;
  markSupportTicketAsResolved: SupportTicket;
  postACommentReply: ProductCommentExtendedObj;
  publishAComment: ProductCommentExtendedObj;
  registerInstitution: Institution;
  removeBlackListedUser: User;
  sendDirectMessage: DirectMessage;
  sendSupportMessage: SupportTicket;
  toggleWishlistStatus: Array<Scalars['String']['output']>;
  updateBannedWord: BannedWord;
  updateBannedWordCategory: BannedWordsCategory;
  updateCampaign: CampaignDto;
  updateInstitution: Institution;
  updateInstitutionPassword: Institution;
  updateInstitutionSetting: Institution;
  updateInvoice: InstitutionInvoice;
  updateProductMedia: ProductListing;
  updateProductOnSale: ProductListing;
  updateProductShippingDetailsAndPrice: ProductListing;
  updateRentingAvailability: ProductListing;
  updateRentingMeetupPreference: ProductListing;
  updateReport: Report;
  updateSoldOutStatus: ProductListing;
  updateUserAddress: AddressWithId;
  updateUserDisplayPicture: UpdateUserDpResponse;
  updateUserImages: UpdateUserImagesResponse;
  updateUserInfoInput: UpdateUserInfoResponse;
  updateUserProfile: User;
  updateUserSizes: SizesOutput;
  verifyAndUpdateDNS: Institution;
};

export type MutationAddNewProductArgs = {
  data: ProductListingInput;
};

export type MutationAddUserAddressArgs = {
  data: AddressCreateInput;
};

export type MutationAdminLoginArgs = {
  input: AdminLogin;
};

export type MutationArchiveInstitutionArgs = {
  id: Scalars['String']['input'];
};

export type MutationBlackListUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationBlockProductListingArgs = {
  id: Scalars['String']['input'];
};

export type MutationCreateBannedWordArgs = {
  input: CreateBannedWord;
};

export type MutationCreateBannedWordCategoryArgs = {
  input: CreateBannedWordCategory;
};

export type MutationCreateCampaignArgs = {
  createCampaignInput: CreateCampaignInput;
};

export type MutationCreateInvoiceArgs = {
  input: CreateInstitutionInvoice;
};

export type MutationCreateReportArgs = {
  data: CreateReportInput;
};

export type MutationCreateSupportRequestArgs = {
  inputs: CreateSupportRequestInput;
};

export type MutationCreateSupportTicketArgs = {
  data: SupportTicketInput;
};

export type MutationCreateUniversityAdminArgs = {
  input: CreateAdminInput;
};

export type MutationDeleteACommentArgs = {
  input: DeleteCommentInput;
};

export type MutationDeleteBannedWordArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteBannedWordCategoryArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteOneProductListingArgs = {
  id: Scalars['String']['input'];
};

export type MutationDeleteUserAddressArgs = {
  addressId: Scalars['String']['input'];
};

export type MutationFlagACommentArgs = {
  data: FlagCommentInput;
};

export type MutationGenerateDnsValueArgs = {
  name: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  data: LoginRequest;
};

export type MutationLoginInstitutionArgs = {
  loginInstitutionDto: LoginInstitutionDto;
};

export type MutationMarkSupportTicketAsResolvedArgs = {
  data: MarkTicketAsResolvedInput;
};

export type MutationPostACommentReplyArgs = {
  input: ProductCommentReplyInput;
};

export type MutationPublishACommentArgs = {
  input: ProductCommentInput;
};

export type MutationRegisterInstitutionArgs = {
  input: RegisterInstitution;
};

export type MutationRemoveBlackListedUserArgs = {
  id: Scalars['String']['input'];
};

export type MutationSendDirectMessageArgs = {
  input: DirectMessageInput;
};

export type MutationSendSupportMessageArgs = {
  data: SendSupportMessageInput;
};

export type MutationToggleWishlistStatusArgs = {
  productId: Scalars['String']['input'];
};

export type MutationUpdateBannedWordArgs = {
  input: UpdateBannedWord;
};

export type MutationUpdateBannedWordCategoryArgs = {
  input: UpdateBannedWordCategory;
};

export type MutationUpdateCampaignArgs = {
  campaignId: Scalars['ID']['input'];
  updateCampaignInput: UpdateCampaignInput;
};

export type MutationUpdateInstitutionArgs = {
  input: UpdateInstitutionInput;
};

export type MutationUpdateInstitutionPasswordArgs = {
  input: UpdateInstitutionPassword;
};

export type MutationUpdateInstitutionSettingArgs = {
  input: UpdateInstitutionSettingInput;
};

export type MutationUpdateInvoiceArgs = {
  input: UpdateInstitutionInvoice;
};

export type MutationUpdateProductMediaArgs = {
  data: ProductMediaInput;
};

export type MutationUpdateProductOnSaleArgs = {
  data: UpdateProductOnSaleInput;
};

export type MutationUpdateProductShippingDetailsAndPriceArgs = {
  data: UpdateProductShippingAndPriceInput;
};

export type MutationUpdateRentingAvailabilityArgs = {
  data: UpdateRentingAvailabilityInput;
};

export type MutationUpdateRentingMeetupPreferenceArgs = {
  data: UpdateRentingMeetupPreferenceInput;
};

export type MutationUpdateReportArgs = {
  data: UpdateReportInput;
};

export type MutationUpdateSoldOutStatusArgs = {
  data: ProductSoldOutStatusInput;
};

export type MutationUpdateUserAddressArgs = {
  data: AddressCreateInput;
};

export type MutationUpdateUserDisplayPictureArgs = {
  data: UserDp;
};

export type MutationUpdateUserImagesArgs = {
  data: UpdateUserImagesInput;
};

export type MutationUpdateUserInfoInputArgs = {
  data: UpdateUserInfoInput;
};

export type MutationUpdateUserProfileArgs = {
  data: UpdateUserProfileInput;
};

export type MutationUpdateUserSizesArgs = {
  data: SizesInput;
};

export type MutationVerifyAndUpdateDnsArgs = {
  institutionId: Scalars['String']['input'];
};

export type MyListing = {
  __typename?: 'MyListing';
  count: Scalars['Int']['output'];
  products: Array<ProductListing>;
};

export type MyListingsFilter = {
  type: ProductListingTypeFilter;
};

export type NameAndImage = {
  __typename?: 'NameAndImage';
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type NameAndImagePair = {
  __typename?: 'NameAndImagePair';
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumAddressTypeFilter = {
  equals?: InputMaybe<AddressType>;
  in?: InputMaybe<Array<AddressType>>;
  not?: InputMaybe<NestedEnumAddressTypeFilter>;
  notIn?: InputMaybe<Array<AddressType>>;
};

export type NestedEnumAltSignupStatusFilter = {
  equals?: InputMaybe<AltSignupStatus>;
  in?: InputMaybe<Array<AltSignupStatus>>;
  not?: InputMaybe<NestedEnumAltSignupStatusFilter>;
  notIn?: InputMaybe<Array<AltSignupStatus>>;
};

export type NestedEnumCampusChatTypeFilter = {
  equals?: InputMaybe<CampusChatType>;
  in?: InputMaybe<Array<CampusChatType>>;
  not?: InputMaybe<NestedEnumCampusChatTypeFilter>;
  notIn?: InputMaybe<Array<CampusChatType>>;
};

export type NestedEnumCommunicationTypeFilter = {
  equals?: InputMaybe<CommunicationType>;
  in?: InputMaybe<Array<CommunicationType>>;
  not?: InputMaybe<NestedEnumCommunicationTypeFilter>;
  notIn?: InputMaybe<Array<CommunicationType>>;
};

export type NestedEnumConversationTypeFilter = {
  equals?: InputMaybe<ConversationType>;
  in?: InputMaybe<Array<ConversationType>>;
  not?: InputMaybe<NestedEnumConversationTypeFilter>;
  notIn?: InputMaybe<Array<ConversationType>>;
};

export type NestedEnumDmTypeFilter = {
  equals?: InputMaybe<DmType>;
  in?: InputMaybe<Array<DmType>>;
  not?: InputMaybe<NestedEnumDmTypeFilter>;
  notIn?: InputMaybe<Array<DmType>>;
};

export type NestedEnumDealTypeFilter = {
  equals?: InputMaybe<DealType>;
  in?: InputMaybe<Array<DealType>>;
  not?: InputMaybe<NestedEnumDealTypeFilter>;
  notIn?: InputMaybe<Array<DealType>>;
};

export type NestedEnumGatewayFilter = {
  equals?: InputMaybe<Gateway>;
  in?: InputMaybe<Array<Gateway>>;
  not?: InputMaybe<NestedEnumGatewayFilter>;
  notIn?: InputMaybe<Array<Gateway>>;
};

export type NestedEnumGenderNullableFilter = {
  equals?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumGenderNullableFilter>;
  notIn?: InputMaybe<Array<Gender>>;
};

export type NestedEnumInitiatedFromNullableFilter = {
  equals?: InputMaybe<InitiatedFrom>;
  in?: InputMaybe<Array<InitiatedFrom>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumInitiatedFromNullableFilter>;
  notIn?: InputMaybe<Array<InitiatedFrom>>;
};

export type NestedEnumInvoiceStatusFilter = {
  equals?: InputMaybe<InvoiceStatus>;
  in?: InputMaybe<Array<InvoiceStatus>>;
  not?: InputMaybe<NestedEnumInvoiceStatusFilter>;
  notIn?: InputMaybe<Array<InvoiceStatus>>;
};

export type NestedEnumMessageStateNullableFilter = {
  equals?: InputMaybe<MessageState>;
  in?: InputMaybe<Array<MessageState>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumMessageStateNullableFilter>;
  notIn?: InputMaybe<Array<MessageState>>;
};

export type NestedEnumMessageTypeFilter = {
  equals?: InputMaybe<MessageType>;
  in?: InputMaybe<Array<MessageType>>;
  not?: InputMaybe<NestedEnumMessageTypeFilter>;
  notIn?: InputMaybe<Array<MessageType>>;
};

export type NestedEnumOrderNotificationTypeNullableFilter = {
  equals?: InputMaybe<OrderNotificationType>;
  in?: InputMaybe<Array<OrderNotificationType>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumOrderNotificationTypeNullableFilter>;
  notIn?: InputMaybe<Array<OrderNotificationType>>;
};

export type NestedEnumOrderStatusFilter = {
  equals?: InputMaybe<OrderStatus>;
  in?: InputMaybe<Array<OrderStatus>>;
  not?: InputMaybe<NestedEnumOrderStatusFilter>;
  notIn?: InputMaybe<Array<OrderStatus>>;
};

export type NestedEnumOrderTypeFilter = {
  equals?: InputMaybe<OrderType>;
  in?: InputMaybe<Array<OrderType>>;
  not?: InputMaybe<NestedEnumOrderTypeFilter>;
  notIn?: InputMaybe<Array<OrderType>>;
};

export type NestedEnumPlatformNullableFilter = {
  equals?: InputMaybe<Platform>;
  in?: InputMaybe<Array<Platform>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumPlatformNullableFilter>;
  notIn?: InputMaybe<Array<Platform>>;
};

export type NestedEnumPreferredGenderNullableFilter = {
  equals?: InputMaybe<PreferredGender>;
  in?: InputMaybe<Array<PreferredGender>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumPreferredGenderNullableFilter>;
  notIn?: InputMaybe<Array<PreferredGender>>;
};

export type NestedEnumProductConditionFilter = {
  equals?: InputMaybe<ProductCondition>;
  in?: InputMaybe<Array<ProductCondition>>;
  not?: InputMaybe<NestedEnumProductConditionFilter>;
  notIn?: InputMaybe<Array<ProductCondition>>;
};

export type NestedEnumProductDeliveryModeFilter = {
  equals?: InputMaybe<ProductDeliveryMode>;
  in?: InputMaybe<Array<ProductDeliveryMode>>;
  not?: InputMaybe<NestedEnumProductDeliveryModeFilter>;
  notIn?: InputMaybe<Array<ProductDeliveryMode>>;
};

export type NestedEnumProductDeliveryModeNullableFilter = {
  equals?: InputMaybe<ProductDeliveryMode>;
  in?: InputMaybe<Array<ProductDeliveryMode>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumProductDeliveryModeNullableFilter>;
  notIn?: InputMaybe<Array<ProductDeliveryMode>>;
};

export type NestedEnumProductListingTypeFilter = {
  equals?: InputMaybe<ProductListingType>;
  in?: InputMaybe<Array<ProductListingType>>;
  not?: InputMaybe<NestedEnumProductListingTypeFilter>;
  notIn?: InputMaybe<Array<ProductListingType>>;
};

export type NestedEnumProductReportActionNullableFilter = {
  equals?: InputMaybe<ProductReportAction>;
  in?: InputMaybe<Array<ProductReportAction>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumProductReportActionNullableFilter>;
  notIn?: InputMaybe<Array<ProductReportAction>>;
};

export type NestedEnumProductReportReasonFilter = {
  equals?: InputMaybe<ProductReportReason>;
  in?: InputMaybe<Array<ProductReportReason>>;
  not?: InputMaybe<NestedEnumProductReportReasonFilter>;
  notIn?: InputMaybe<Array<ProductReportReason>>;
};

export type NestedEnumReportStatusFilter = {
  equals?: InputMaybe<ReportStatus>;
  in?: InputMaybe<Array<ReportStatus>>;
  not?: InputMaybe<NestedEnumReportStatusFilter>;
  notIn?: InputMaybe<Array<ReportStatus>>;
};

export type NestedEnumReportTypeFilter = {
  equals?: InputMaybe<ReportType>;
  in?: InputMaybe<Array<ReportType>>;
  not?: InputMaybe<NestedEnumReportTypeFilter>;
  notIn?: InputMaybe<Array<ReportType>>;
};

export type NestedEnumReportedEntityTypeFilter = {
  equals?: InputMaybe<ReportedEntityType>;
  in?: InputMaybe<Array<ReportedEntityType>>;
  not?: InputMaybe<NestedEnumReportedEntityTypeFilter>;
  notIn?: InputMaybe<Array<ReportedEntityType>>;
};

export type NestedEnumSellerPayoutStatusFilter = {
  equals?: InputMaybe<SellerPayoutStatus>;
  in?: InputMaybe<Array<SellerPayoutStatus>>;
  not?: InputMaybe<NestedEnumSellerPayoutStatusFilter>;
  notIn?: InputMaybe<Array<SellerPayoutStatus>>;
};

export type NestedEnumShippingChargePayerNullableFilter = {
  equals?: InputMaybe<ShippingChargePayer>;
  in?: InputMaybe<Array<ShippingChargePayer>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedEnumShippingChargePayerNullableFilter>;
  notIn?: InputMaybe<Array<ShippingChargePayer>>;
};

export type NestedEnumSupportTicketParticipantFilter = {
  equals?: InputMaybe<SupportTicketParticipant>;
  in?: InputMaybe<Array<SupportTicketParticipant>>;
  not?: InputMaybe<NestedEnumSupportTicketParticipantFilter>;
  notIn?: InputMaybe<Array<SupportTicketParticipant>>;
};

export type NestedEnumSupportTicketTypeFilter = {
  equals?: InputMaybe<SupportTicketType>;
  in?: InputMaybe<Array<SupportTicketType>>;
  not?: InputMaybe<NestedEnumSupportTicketTypeFilter>;
  notIn?: InputMaybe<Array<SupportTicketType>>;
};

export type NestedEnumTagFilter = {
  equals?: InputMaybe<Tag>;
  in?: InputMaybe<Array<Tag>>;
  not?: InputMaybe<NestedEnumTagFilter>;
  notIn?: InputMaybe<Array<Tag>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type OfferNotificationPayload = {
  __typename?: 'OfferNotificationPayload';
  conversationId: Scalars['String']['output'];
  otherParticipantFullName: Scalars['String']['output'];
  otherParticipantUserId: Scalars['String']['output'];
  type: OfferNotificationType;
};

export enum OfferNotificationType {
  Accepted = 'ACCEPTED',
  Countered = 'COUNTERED',
  Received = 'RECEIVED',
  Rejected = 'REJECTED',
  Withdrawn = 'WITHDRAWN',
}

export type Order = {
  __typename?: 'Order';
  consumerId: Scalars['String']['output'];
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['JSON']['output'];
  payment?: Maybe<Payment>;
  paymentId: Scalars['String']['output'];
  payout: OrderPayout;
  productId: Scalars['String']['output'];
  productSnapshot: ProductListingSnapshot;
  providerId: Scalars['String']['output'];
  rentingDetails?: Maybe<RentOrder>;
  shipment?: Maybe<Shipment>;
  status: OrderStatus;
  supportTickets?: Maybe<Array<SupportTicket>>;
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderExtendedObj = {
  __typename?: 'OrderExtendedObj';
  calculatedOrderId?: Maybe<Scalars['String']['output']>;
  consumer: UserDetailsObj;
  consumerId: Scalars['String']['output'];
  conversationId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  payload: Scalars['String']['output'];
  payment?: Maybe<Payment>;
  paymentId: Scalars['String']['output'];
  payout: OrderPayout;
  productId: Scalars['String']['output'];
  productSnapshot: ProductListingSnapshot;
  provider: UserDetailsObj;
  providerId: Scalars['String']['output'];
  rentingDetails?: Maybe<RentOrder>;
  shipment?: Maybe<Shipment>;
  status: OrderStatus;
  supportTickets?: Maybe<Array<SupportTicket>>;
  type: OrderType;
  updatedAt: Scalars['DateTime']['output'];
};

export type OrderFilterInput = {
  type?: InputMaybe<OrderFilterType>;
};

export enum OrderFilterType {
  All = 'ALL',
  Bought = 'BOUGHT',
  MyListings = 'MY_LISTINGS',
  Rented = 'RENTED',
}

export type OrderNotificationPayload = {
  __typename?: 'OrderNotificationPayload';
  conversationId: Scalars['String']['output'];
  listingTitle: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  type: OrderNotificationType;
};

export enum OrderNotificationType {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
  Delivered = 'DELIVERED',
  DeliveryAttempted = 'DELIVERY_ATTEMPTED',
  InTransit = 'IN_TRANSIT',
  LabelGenerated = 'LABEL_GENERATED',
}

export type OrderNullableRelationFilter = {
  is?: InputMaybe<OrderWhereInput>;
  isNot?: InputMaybe<OrderWhereInput>;
};

export type OrderOrderByWithRelationInput = {
  consumerId?: InputMaybe<SortOrder>;
  conversationId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  payload?: InputMaybe<SortOrder>;
  payment?: InputMaybe<PaymentOrderByWithRelationInput>;
  paymentId?: InputMaybe<SortOrder>;
  payout?: InputMaybe<OrderPayoutOrderByInput>;
  productId?: InputMaybe<SortOrder>;
  productSnapshot?: InputMaybe<ProductListingSnapshotOrderByInput>;
  providerId?: InputMaybe<SortOrder>;
  rentingDetails?: InputMaybe<RentOrderOrderByInput>;
  shipment?: InputMaybe<ShipmentOrderByInput>;
  status?: InputMaybe<SortOrder>;
  supportTickets?: InputMaybe<SupportTicketOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type OrderPayout = {
  __typename?: 'OrderPayout';
  creditedAt?: Maybe<Scalars['DateTime']['output']>;
  payoutId?: Maybe<Scalars['String']['output']>;
  status: SellerPayoutStatus;
};

export type OrderPayoutCompositeFilter = {
  equals?: InputMaybe<OrderPayoutObjectEqualityInput>;
  is?: InputMaybe<OrderPayoutWhereInput>;
  isNot?: InputMaybe<OrderPayoutWhereInput>;
};

export type OrderPayoutObjectEqualityInput = {
  creditedAt?: InputMaybe<Scalars['DateTime']['input']>;
  payoutId?: InputMaybe<Scalars['String']['input']>;
  status: SellerPayoutStatus;
};

export type OrderPayoutOrderByInput = {
  creditedAt?: InputMaybe<SortOrder>;
  payoutId?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
};

export type OrderPayoutWhereInput = {
  AND?: InputMaybe<Array<OrderPayoutWhereInput>>;
  NOT?: InputMaybe<Array<OrderPayoutWhereInput>>;
  OR?: InputMaybe<Array<OrderPayoutWhereInput>>;
  creditedAt?: InputMaybe<DateTimeNullableFilter>;
  payoutId?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumSellerPayoutStatusFilter>;
};

export type OrderSearchInput = {
  filter?: InputMaybe<OrderFilterInput>;
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Confirmed = 'CONFIRMED',
}

export enum OrderType {
  Buy = 'BUY',
  Rent = 'RENT',
}

export type OrderUpdateSystemMessage = {
  __typename?: 'OrderUpdateSystemMessage';
  icon1: SystemIcons;
  icon2: SystemIcons;
  icon3: SystemIcons;
  text1: Scalars['String']['output'];
  text2: Scalars['String']['output'];
  text3: Scalars['String']['output'];
  trackingNumber: Scalars['String']['output'];
};

export type OrderWhereInput = {
  AND?: InputMaybe<Array<OrderWhereInput>>;
  NOT?: InputMaybe<Array<OrderWhereInput>>;
  OR?: InputMaybe<Array<OrderWhereInput>>;
  consumerId?: InputMaybe<StringFilter>;
  conversationId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  payload?: InputMaybe<JsonFilter>;
  payment?: InputMaybe<PaymentNullableRelationFilter>;
  paymentId?: InputMaybe<StringFilter>;
  payout?: InputMaybe<OrderPayoutCompositeFilter>;
  productId?: InputMaybe<StringFilter>;
  productSnapshot?: InputMaybe<ProductListingSnapshotCompositeFilter>;
  providerId?: InputMaybe<StringFilter>;
  rentingDetails?: InputMaybe<RentOrderNullableCompositeFilter>;
  shipment?: InputMaybe<ShipmentNullableCompositeFilter>;
  status?: InputMaybe<EnumOrderStatusFilter>;
  supportTickets?: InputMaybe<SupportTicketListRelationFilter>;
  type?: InputMaybe<EnumOrderTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PackageDimensions = {
  __typename?: 'PackageDimensions';
  height: Scalars['Float']['output'];
  length: Scalars['Float']['output'];
  unit: Scalars['String']['output'];
  width: Scalars['Float']['output'];
};

export type PackageDimensionsCompositeFilter = {
  equals?: InputMaybe<PackageDimensionsObjectEqualityInput>;
  is?: InputMaybe<PackageDimensionsWhereInput>;
  isNot?: InputMaybe<PackageDimensionsWhereInput>;
};

export type PackageDimensionsNullableCompositeFilter = {
  equals?: InputMaybe<PackageDimensionsObjectEqualityInput>;
  is?: InputMaybe<PackageDimensionsWhereInput>;
  isNot?: InputMaybe<PackageDimensionsWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackageDimensionsObjectEqualityInput = {
  height: Scalars['Float']['input'];
  length: Scalars['Float']['input'];
  unit: Scalars['String']['input'];
  width: Scalars['Float']['input'];
};

export type PackageDimensionsOrderByInput = {
  height?: InputMaybe<SortOrder>;
  length?: InputMaybe<SortOrder>;
  unit?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type PackageDimensionsWhereInput = {
  AND?: InputMaybe<Array<PackageDimensionsWhereInput>>;
  NOT?: InputMaybe<Array<PackageDimensionsWhereInput>>;
  OR?: InputMaybe<Array<PackageDimensionsWhereInput>>;
  height?: InputMaybe<FloatFilter>;
  length?: InputMaybe<FloatFilter>;
  unit?: InputMaybe<StringFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type PackageWeight = {
  __typename?: 'PackageWeight';
  unit: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type PackageWeightCompositeFilter = {
  equals?: InputMaybe<PackageWeightObjectEqualityInput>;
  is?: InputMaybe<PackageWeightWhereInput>;
  isNot?: InputMaybe<PackageWeightWhereInput>;
};

export type PackageWeightNullableCompositeFilter = {
  equals?: InputMaybe<PackageWeightObjectEqualityInput>;
  is?: InputMaybe<PackageWeightWhereInput>;
  isNot?: InputMaybe<PackageWeightWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PackageWeightObjectEqualityInput = {
  unit: Scalars['String']['input'];
  value: Scalars['Float']['input'];
};

export type PackageWeightOrderByInput = {
  unit?: InputMaybe<SortOrder>;
  value?: InputMaybe<SortOrder>;
};

export type PackageWeightWhereInput = {
  AND?: InputMaybe<Array<PackageWeightWhereInput>>;
  NOT?: InputMaybe<Array<PackageWeightWhereInput>>;
  OR?: InputMaybe<Array<PackageWeightWhereInput>>;
  unit?: InputMaybe<StringFilter>;
  value?: InputMaybe<FloatFilter>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['DateTime']['output'];
  gateway: Gateway;
  id: Scalars['ID']['output'];
  methodDescription: Scalars['String']['output'];
  order?: Maybe<Order>;
  stripePaymentId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type PaymentConfirmationSystemMessage = {
  __typename?: 'PaymentConfirmationSystemMessage';
  conversationType?: Maybe<ConversationType>;
  icon: SystemIcons;
  localTxn?: Maybe<Scalars['Boolean']['output']>;
  note: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  shippingAddress: Scalars['String']['output'];
  text1: Scalars['String']['output'];
  text2: Scalars['String']['output'];
};

export type PaymentLinkMessage = {
  __typename?: 'PaymentLinkMessage';
  amount: Scalars['String']['output'];
  disclaimerText: Scalars['String']['output'];
  mainText: Scalars['String']['output'];
};

export enum PaymentLinkStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
}

export type PaymentLinkUpdateMessage = {
  __typename?: 'PaymentLinkUpdateMessage';
  amount: Scalars['String']['output'];
  status: PaymentLinkStatus;
};

export type PaymentNullableRelationFilter = {
  is?: InputMaybe<PaymentWhereInput>;
  isNot?: InputMaybe<PaymentWhereInput>;
};

export type PaymentOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  gateway?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  methodDescription?: InputMaybe<SortOrder>;
  order?: InputMaybe<OrderOrderByWithRelationInput>;
  stripePaymentId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PaymentWhereInput = {
  AND?: InputMaybe<Array<PaymentWhereInput>>;
  NOT?: InputMaybe<Array<PaymentWhereInput>>;
  OR?: InputMaybe<Array<PaymentWhereInput>>;
  amount?: InputMaybe<FloatFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  gateway?: InputMaybe<EnumGatewayFilter>;
  id?: InputMaybe<StringFilter>;
  methodDescription?: InputMaybe<StringFilter>;
  order?: InputMaybe<OrderNullableRelationFilter>;
  stripePaymentId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Payout = {
  __typename?: 'Payout';
  alreadyRequestedPayout?: Maybe<AlreadyRequestedPayout>;
  buyerName: Scalars['String']['output'];
  creditedAt?: Maybe<Scalars['DateTime']['output']>;
  eligibilityCriteria?: Maybe<Scalars['String']['output']>;
  eligible: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  orderDate: Scalars['DateTime']['output'];
  orderType: OrderType;
  payoutAmount: Scalars['String']['output'];
  platformFee: Scalars['String']['output'];
  productMedia: Array<MediaItem>;
  productName: Scalars['String']['output'];
  sameEduInstitute: Scalars['Boolean']['output'];
  status: SellerPayoutStatus;
  taxes: Scalars['String']['output'];
  transactedAt: Scalars['String']['output'];
};

export type PayoutFilterInput = {
  orderType?: InputMaybe<OrderFilterType>;
};

export type PayoutNotificationPayload = {
  __typename?: 'PayoutNotificationPayload';
  conversationId: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  payoutID: Scalars['String']['output'];
  type: PayoutNotificationType;
};

export enum PayoutNotificationType {
  Processed = 'PROCESSED',
}

export type PayoutSearchInput = {
  filter?: InputMaybe<PayoutFilterInput>;
};

export type PersonalDm = {
  __typename?: 'PersonalDM';
  consumersLastSeen?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  initiatedBy: Scalars['String']['output'];
  initiatedFrom?: Maybe<InitiatedFrom>;
  lastMessageId?: Maybe<Scalars['String']['output']>;
  participantEduIds?: Maybe<Array<Scalars['String']['output']>>;
  participantIds?: Maybe<Array<Scalars['String']['output']>>;
  participants?: Maybe<Array<User>>;
  payload?: Maybe<Scalars['String']['output']>;
  providersLastSeen?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  valid: Scalars['Boolean']['output'];
};

export type PersonalDmListRelationFilter = {
  every?: InputMaybe<PersonalDmWhereInput>;
  none?: InputMaybe<PersonalDmWhereInput>;
  some?: InputMaybe<PersonalDmWhereInput>;
};

export type PersonalDmOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PersonalDmOrderByWithRelationInput = {
  consumersLastSeen?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  enabled?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  initiatedBy?: InputMaybe<SortOrder>;
  initiatedFrom?: InputMaybe<SortOrder>;
  lastMessageId?: InputMaybe<SortOrder>;
  participantEduIds?: InputMaybe<SortOrder>;
  participantIds?: InputMaybe<SortOrder>;
  participants?: InputMaybe<UserOrderByRelationAggregateInput>;
  payload?: InputMaybe<SortOrder>;
  providersLastSeen?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  valid?: InputMaybe<SortOrder>;
};

export type PersonalDmWhereInput = {
  AND?: InputMaybe<Array<PersonalDmWhereInput>>;
  NOT?: InputMaybe<Array<PersonalDmWhereInput>>;
  OR?: InputMaybe<Array<PersonalDmWhereInput>>;
  consumersLastSeen?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  enabled?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  initiatedBy?: InputMaybe<StringFilter>;
  initiatedFrom?: InputMaybe<EnumInitiatedFromNullableFilter>;
  lastMessageId?: InputMaybe<StringNullableFilter>;
  participantEduIds?: InputMaybe<StringNullableListFilter>;
  participantIds?: InputMaybe<StringNullableListFilter>;
  participants?: InputMaybe<UserListRelationFilter>;
  payload?: InputMaybe<StringNullableFilter>;
  providersLastSeen?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  valid?: InputMaybe<BoolFilter>;
};

export type PersonalDmWithReceiverAndLastMessage = {
  __typename?: 'PersonalDMWithReceiverAndLastMessage';
  consumersLastSeen?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  enabled: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  initiatedBy: Scalars['String']['output'];
  initiatedFrom?: Maybe<InitiatedFrom>;
  lastMessage: DirectMessage;
  lastMessageId?: Maybe<Scalars['String']['output']>;
  participantEduIds?: Maybe<Array<Scalars['String']['output']>>;
  participantIds?: Maybe<Array<Scalars['String']['output']>>;
  participants?: Maybe<Array<User>>;
  payload?: Maybe<Scalars['String']['output']>;
  providersLastSeen?: Maybe<Scalars['String']['output']>;
  receiver?: Maybe<User>;
  updatedAt: Scalars['DateTime']['output'];
  valid: Scalars['Boolean']['output'];
};

export enum Platform {
  Android = 'ANDROID',
  Ios = 'IOS',
  Web = 'WEB',
}

export enum PreferredGender {
  All = 'ALL',
  Men = 'MEN',
  Women = 'WOMEN',
}

export type ProductBubble = {
  __typename?: 'ProductBubble';
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  image: Scalars['String']['output'];
  mediaType: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type ProductCardDetails = {
  __typename?: 'ProductCardDetails';
  id: Scalars['ID']['output'];
  media: Array<MediaItem>;
  price: Scalars['Float']['output'];
  priceString?: Maybe<Scalars['String']['output']>;
  shippingEnabled: Scalars['Boolean']['output'];
  soldOut: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: ProductListingType;
  uploader?: Maybe<Uploader>;
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  active: Scalars['Boolean']['output'];
  children?: Maybe<Array<ProductCategory>>;
  createdAt: Scalars['DateTime']['output'];
  featured?: Maybe<FeaturedProductCategory>;
  filters?: Maybe<Array<ProductCategoryAppFilters>>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<ProductCategory>;
  parentId?: Maybe<Scalars['String']['output']>;
  preferredGender?: Maybe<PreferredGender>;
  productListings?: Maybe<Array<ProductListing>>;
  shippable: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type ProductCategoryAppFilters = {
  __typename?: 'ProductCategoryAppFilters';
  choices?: Maybe<Array<FilterChoice>>;
  id: Scalars['String']['output'];
  infoImage: Scalars['String']['output'];
  name: Scalars['String']['output'];
  selectionType: SelectionChoice;
};

export type ProductCategoryAppFiltersObjectEqualityInput = {
  choices?: InputMaybe<Array<FilterChoiceObjectEqualityInput>>;
  id: Scalars['String']['input'];
  infoImage: Scalars['String']['input'];
  name: Scalars['String']['input'];
  selectionType: SelectionChoice;
};

export type ProductCategoryAppFiltersOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductCategoryListRelationFilter = {
  every?: InputMaybe<ProductCategoryWhereInput>;
  none?: InputMaybe<ProductCategoryWhereInput>;
  some?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryNullableRelationFilter = {
  is?: InputMaybe<ProductCategoryWhereInput>;
  isNot?: InputMaybe<ProductCategoryWhereInput>;
};

export type ProductCategoryOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductCategoryOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  children?: InputMaybe<ProductCategoryOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  featured?: InputMaybe<FeaturedProductCategoryOrderByInput>;
  filters?: InputMaybe<ProductCategoryAppFiltersOrderByCompositeAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  parent?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  parentId?: InputMaybe<SortOrder>;
  preferredGender?: InputMaybe<SortOrder>;
  productListings?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  shippable?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ProductCategoryWhereInput = {
  AND?: InputMaybe<Array<ProductCategoryWhereInput>>;
  NOT?: InputMaybe<Array<ProductCategoryWhereInput>>;
  OR?: InputMaybe<Array<ProductCategoryWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  children?: InputMaybe<ProductCategoryListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  featured?: InputMaybe<FeaturedProductCategoryNullableCompositeFilter>;
  filters?: InputMaybe<Array<ProductCategoryAppFiltersObjectEqualityInput>>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  parent?: InputMaybe<ProductCategoryNullableRelationFilter>;
  parentId?: InputMaybe<StringNullableFilter>;
  preferredGender?: InputMaybe<EnumPreferredGenderNullableFilter>;
  productListings?: InputMaybe<ProductListingListRelationFilter>;
  shippable?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductComment = {
  __typename?: 'ProductComment';
  archived: Scalars['Boolean']['output'];
  children?: Maybe<Array<ProductComment>>;
  createdAt: Scalars['DateTime']['output'];
  flagged: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  parent?: Maybe<ProductComment>;
  parentId?: Maybe<Scalars['String']['output']>;
  productListingId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ProductCommentExtendedObj = {
  __typename?: 'ProductCommentExtendedObj';
  archived: Scalars['Boolean']['output'];
  children: Array<ProductCommentExtendedObj>;
  createdAt: Scalars['DateTime']['output'];
  flagged: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  parent?: Maybe<ProductComment>;
  parentId?: Maybe<Scalars['String']['output']>;
  postedBy: CommentPoster;
  productListingId?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type ProductCommentInput = {
  body: Scalars['String']['input'];
  parentCommentId?: InputMaybe<Scalars['String']['input']>;
  productListingId: Scalars['String']['input'];
};

export type ProductCommentReplyInput = {
  body: Scalars['String']['input'];
  parentCommentId: Scalars['String']['input'];
  productListingId: Scalars['String']['input'];
};

export enum ProductCondition {
  Fabulous = 'FABULOUS',
  Good = 'GOOD',
  New = 'NEW',
  Okayish = 'OKAYISH',
}

export enum ProductDeliveryMode {
  AskBuyerToPick = 'ASK_BUYER_TO_PICK',
  DropToBuyer = 'DROP_TO_BUYER',
  MeetAtPublicPlace = 'MEET_AT_PUBLIC_PLACE',
}

export type ProductFilterInput = {
  brandId?: InputMaybe<Scalars['ID']['input']>;
  categoryIds?: InputMaybe<Array<Scalars['ID']['input']>>;
  eduInstituteId?: InputMaybe<Scalars['ID']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<ProductListingType>;
};

export type ProductListing = {
  __typename?: 'ProductListing';
  active: Scalars['Boolean']['output'];
  archived: Scalars['Boolean']['output'];
  blackListed: Scalars['Boolean']['output'];
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['String']['output']>;
  category?: Maybe<ProductCategory>;
  categoryId: Scalars['String']['output'];
  categoryPreferredGender?: Maybe<PreferredGender>;
  color?: Maybe<Color>;
  colorId?: Maybe<Scalars['String']['output']>;
  conversations?: Maybe<Array<Conversation>>;
  createdAt: Scalars['DateTime']['output'];
  deletedByAdminAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  extendedData?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['ID']['output'];
  legacyHash?: Maybe<Scalars['String']['output']>;
  media?: Maybe<Array<MediaItem>>;
  price: Scalars['Float']['output'];
  priceString?: Maybe<Scalars['String']['output']>;
  productCondition: ProductCondition;
  productDeliveryMode?: Maybe<ProductDeliveryMode>;
  reasonForSelling?: Maybe<Scalars['String']['output']>;
  rentingPreference?: Maybe<RentingPreference>;
  reports?: Maybe<Array<ProductReport>>;
  selectedCategoryFilters?: Maybe<Scalars['JSON']['output']>;
  shippingChargePayer?: Maybe<ShippingChargePayer>;
  shippingEnabled: Scalars['Boolean']['output'];
  shippingFrom?: Maybe<Scalars['String']['output']>;
  soldOut: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  type: ProductListingType;
  updatedAt: Scalars['DateTime']['output'];
  uploader?: Maybe<User>;
  uploaderEduInstitute?: Maybe<EduInstitute>;
  uploaderEduInstituteId?: Maybe<Scalars['String']['output']>;
  uploaderId?: Maybe<Scalars['String']['output']>;
  weightCategory?: Maybe<WeightCategory>;
  weightCategoryId?: Maybe<Scalars['String']['output']>;
  wishlistedBy?: Maybe<Array<User>>;
  wishlistedUserIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type ProductListingInput = {
  brandId?: InputMaybe<Scalars['String']['input']>;
  categoryId: Scalars['String']['input'];
  colorId?: InputMaybe<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  media: Array<MediaItemCreateInput>;
  price: Scalars['Float']['input'];
  priceString?: InputMaybe<Scalars['String']['input']>;
  productCondition: ProductCondition;
  productDeliveryMode: ProductDeliveryMode;
  reasonForSelling?: InputMaybe<Scalars['String']['input']>;
  rentingPreference?: InputMaybe<RentingPreferenceInput>;
  selectedCategoryFilters?: InputMaybe<Scalars['String']['input']>;
  shippingChargePayer?: InputMaybe<ShippingChargePayer>;
  shippingEnabled: Scalars['Boolean']['input'];
  shippingFrom?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: ProductListingType;
  weightCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type ProductListingListRelationFilter = {
  every?: InputMaybe<ProductListingWhereInput>;
  none?: InputMaybe<ProductListingWhereInput>;
  some?: InputMaybe<ProductListingWhereInput>;
};

export type ProductListingOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ProductListingOrderByWithRelationInput = {
  active?: InputMaybe<SortOrder>;
  archived?: InputMaybe<SortOrder>;
  blackListed?: InputMaybe<SortOrder>;
  brand?: InputMaybe<BrandOrderByWithRelationInput>;
  brandId?: InputMaybe<SortOrder>;
  category?: InputMaybe<ProductCategoryOrderByWithRelationInput>;
  categoryId?: InputMaybe<SortOrder>;
  categoryPreferredGender?: InputMaybe<SortOrder>;
  color?: InputMaybe<ColorOrderByWithRelationInput>;
  colorId?: InputMaybe<SortOrder>;
  conversations?: InputMaybe<ConversationOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  deletedByAdminAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extendedData?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  legacyHash?: InputMaybe<SortOrder>;
  media?: InputMaybe<MediaItemOrderByCompositeAggregateInput>;
  price?: InputMaybe<SortOrder>;
  priceString?: InputMaybe<SortOrder>;
  productCondition?: InputMaybe<SortOrder>;
  productDeliveryMode?: InputMaybe<SortOrder>;
  reasonForSelling?: InputMaybe<SortOrder>;
  rentingPreference?: InputMaybe<RentingPreferenceOrderByInput>;
  reports?: InputMaybe<ProductReportOrderByRelationAggregateInput>;
  selectedCategoryFilters?: InputMaybe<SortOrder>;
  shippingChargePayer?: InputMaybe<SortOrder>;
  shippingEnabled?: InputMaybe<SortOrder>;
  shippingFrom?: InputMaybe<SortOrder>;
  soldOut?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  uploader?: InputMaybe<UserOrderByWithRelationInput>;
  uploaderEduInstitute?: InputMaybe<EduInstituteOrderByWithRelationInput>;
  uploaderEduInstituteId?: InputMaybe<SortOrder>;
  uploaderId?: InputMaybe<SortOrder>;
  weightCategory?: InputMaybe<WeightCategoryOrderByWithRelationInput>;
  weightCategoryId?: InputMaybe<SortOrder>;
  wishlistedBy?: InputMaybe<UserOrderByRelationAggregateInput>;
  wishlistedUserIds?: InputMaybe<SortOrder>;
};

export type ProductListingRelationFilter = {
  is?: InputMaybe<ProductListingWhereInput>;
  isNot?: InputMaybe<ProductListingWhereInput>;
};

export type ProductListingSnapshot = {
  __typename?: 'ProductListingSnapshot';
  brandName?: Maybe<Scalars['String']['output']>;
  colorName?: Maybe<Scalars['String']['output']>;
  deliveryMode: ProductDeliveryMode;
  media?: Maybe<Array<MediaItem>>;
  packageDimensions?: Maybe<PackageDimensions>;
  packageWeight?: Maybe<PackageWeight>;
  price: Scalars['String']['output'];
  productCondition: Scalars['String']['output'];
  shippingFrom?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: ProductListingType;
};

export type ProductListingSnapshotCompositeFilter = {
  equals?: InputMaybe<ProductListingSnapshotObjectEqualityInput>;
  is?: InputMaybe<ProductListingSnapshotWhereInput>;
  isNot?: InputMaybe<ProductListingSnapshotWhereInput>;
};

export type ProductListingSnapshotObjectEqualityInput = {
  brandName?: InputMaybe<Scalars['String']['input']>;
  colorName?: InputMaybe<Scalars['String']['input']>;
  deliveryMode: ProductDeliveryMode;
  media?: InputMaybe<Array<MediaItemObjectEqualityInput>>;
  packageDimensions?: InputMaybe<PackageDimensionsObjectEqualityInput>;
  packageWeight?: InputMaybe<PackageWeightObjectEqualityInput>;
  price: Scalars['String']['input'];
  productCondition: Scalars['String']['input'];
  shippingFrom?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: ProductListingType;
};

export type ProductListingSnapshotOrderByInput = {
  brandName?: InputMaybe<SortOrder>;
  colorName?: InputMaybe<SortOrder>;
  deliveryMode?: InputMaybe<SortOrder>;
  media?: InputMaybe<MediaItemOrderByCompositeAggregateInput>;
  packageDimensions?: InputMaybe<PackageDimensionsOrderByInput>;
  packageWeight?: InputMaybe<PackageWeightOrderByInput>;
  price?: InputMaybe<SortOrder>;
  productCondition?: InputMaybe<SortOrder>;
  shippingFrom?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
};

export type ProductListingSnapshotWhereInput = {
  AND?: InputMaybe<Array<ProductListingSnapshotWhereInput>>;
  NOT?: InputMaybe<Array<ProductListingSnapshotWhereInput>>;
  OR?: InputMaybe<Array<ProductListingSnapshotWhereInput>>;
  brandName?: InputMaybe<StringNullableFilter>;
  colorName?: InputMaybe<StringNullableFilter>;
  deliveryMode?: InputMaybe<EnumProductDeliveryModeFilter>;
  media?: InputMaybe<Array<MediaItemObjectEqualityInput>>;
  packageDimensions?: InputMaybe<PackageDimensionsNullableCompositeFilter>;
  packageWeight?: InputMaybe<PackageWeightNullableCompositeFilter>;
  price?: InputMaybe<StringFilter>;
  productCondition?: InputMaybe<StringFilter>;
  shippingFrom?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumProductListingTypeFilter>;
};

export enum ProductListingType {
  Rent = 'RENT',
  Sale = 'SALE',
}

export enum ProductListingTypeFilter {
  All = 'ALL',
  Rent = 'RENT',
  Sale = 'SALE',
}

export type ProductListingWhereInput = {
  AND?: InputMaybe<Array<ProductListingWhereInput>>;
  NOT?: InputMaybe<Array<ProductListingWhereInput>>;
  OR?: InputMaybe<Array<ProductListingWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  archived?: InputMaybe<BoolFilter>;
  blackListed?: InputMaybe<BoolFilter>;
  brand?: InputMaybe<BrandNullableRelationFilter>;
  brandId?: InputMaybe<StringNullableFilter>;
  category?: InputMaybe<ProductCategoryNullableRelationFilter>;
  categoryId?: InputMaybe<StringFilter>;
  categoryPreferredGender?: InputMaybe<EnumPreferredGenderNullableFilter>;
  color?: InputMaybe<ColorNullableRelationFilter>;
  colorId?: InputMaybe<StringNullableFilter>;
  conversations?: InputMaybe<ConversationListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deletedByAdminAt?: InputMaybe<StringNullableFilter>;
  description?: InputMaybe<StringFilter>;
  extendedData?: InputMaybe<JsonNullableFilter>;
  id?: InputMaybe<StringFilter>;
  legacyHash?: InputMaybe<StringNullableFilter>;
  media?: InputMaybe<Array<MediaItemObjectEqualityInput>>;
  price?: InputMaybe<FloatFilter>;
  priceString?: InputMaybe<StringNullableFilter>;
  productCondition?: InputMaybe<EnumProductConditionFilter>;
  productDeliveryMode?: InputMaybe<EnumProductDeliveryModeNullableFilter>;
  reasonForSelling?: InputMaybe<StringNullableFilter>;
  rentingPreference?: InputMaybe<RentingPreferenceNullableCompositeFilter>;
  reports?: InputMaybe<ProductReportListRelationFilter>;
  selectedCategoryFilters?: InputMaybe<JsonNullableFilter>;
  shippingChargePayer?: InputMaybe<EnumShippingChargePayerNullableFilter>;
  shippingEnabled?: InputMaybe<BoolFilter>;
  shippingFrom?: InputMaybe<StringNullableFilter>;
  soldOut?: InputMaybe<BoolFilter>;
  title?: InputMaybe<StringFilter>;
  type?: InputMaybe<EnumProductListingTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  uploader?: InputMaybe<UserNullableRelationFilter>;
  uploaderEduInstitute?: InputMaybe<EduInstituteNullableRelationFilter>;
  uploaderEduInstituteId?: InputMaybe<StringNullableFilter>;
  uploaderId?: InputMaybe<StringNullableFilter>;
  weightCategory?: InputMaybe<WeightCategoryNullableRelationFilter>;
  weightCategoryId?: InputMaybe<StringNullableFilter>;
  wishlistedBy?: InputMaybe<UserListRelationFilter>;
  wishlistedUserIds?: InputMaybe<StringNullableListFilter>;
};

export type ProductListingWithCount = {
  __typename?: 'ProductListingWithCount';
  count: Scalars['Int']['output'];
  listings: Array<ProductListing>;
};

export type ProductMediaInput = {
  id: Scalars['ID']['input'];
  media: Array<MediaItemCreateInput>;
};

export type ProductReport = {
  __typename?: 'ProductReport';
  createdAt: Scalars['DateTime']['output'];
  details?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  product: ProductListing;
  productId: Scalars['String']['output'];
  reason: ProductReportReason;
  reporter: User;
  reporterId: Scalars['String']['output'];
  status: ProductReportStatus;
  updatedAt: Scalars['DateTime']['output'];
};

export enum ProductReportAction {
  NoAction = 'NO_ACTION',
  Removed = 'REMOVED',
  WarningIssued = 'WARNING_ISSUED',
}

export type ProductReportListRelationFilter = {
  every?: InputMaybe<ProductReportWhereInput>;
  none?: InputMaybe<ProductReportWhereInput>;
  some?: InputMaybe<ProductReportWhereInput>;
};

export type ProductReportOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum ProductReportReason {
  Counterfeit = 'COUNTERFEIT',
  Harassment = 'HARASSMENT',
  InappropriateContent = 'INAPPROPRIATE_CONTENT',
  IncorrectCategory = 'INCORRECT_CATEGORY',
  Misleading = 'MISLEADING',
  Other = 'OTHER',
  ProhibitedItem = 'PROHIBITED_ITEM',
  Spam = 'SPAM',
}

export type ProductReportStatus = {
  __typename?: 'ProductReportStatus';
  action?: Maybe<ProductReportAction>;
  reviewed: Scalars['Boolean']['output'];
  reviewedAt?: Maybe<Scalars['DateTime']['output']>;
  reviewedBy?: Maybe<Scalars['String']['output']>;
};

export type ProductReportStatusCompositeFilter = {
  equals?: InputMaybe<ProductReportStatusObjectEqualityInput>;
  is?: InputMaybe<ProductReportStatusWhereInput>;
  isNot?: InputMaybe<ProductReportStatusWhereInput>;
};

export type ProductReportStatusObjectEqualityInput = {
  action?: InputMaybe<ProductReportAction>;
  reviewed: Scalars['Boolean']['input'];
  reviewedAt?: InputMaybe<Scalars['DateTime']['input']>;
  reviewedBy?: InputMaybe<Scalars['String']['input']>;
};

export type ProductReportStatusWhereInput = {
  AND?: InputMaybe<Array<ProductReportStatusWhereInput>>;
  NOT?: InputMaybe<Array<ProductReportStatusWhereInput>>;
  OR?: InputMaybe<Array<ProductReportStatusWhereInput>>;
  action?: InputMaybe<EnumProductReportActionNullableFilter>;
  reviewed?: InputMaybe<BoolFilter>;
  reviewedAt?: InputMaybe<DateTimeNullableFilter>;
  reviewedBy?: InputMaybe<StringNullableFilter>;
};

export type ProductReportWhereInput = {
  AND?: InputMaybe<Array<ProductReportWhereInput>>;
  NOT?: InputMaybe<Array<ProductReportWhereInput>>;
  OR?: InputMaybe<Array<ProductReportWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  details?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductListingRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  reason?: InputMaybe<EnumProductReportReasonFilter>;
  reporter?: InputMaybe<UserRelationFilter>;
  reporterId?: InputMaybe<StringFilter>;
  status?: InputMaybe<ProductReportStatusCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type ProductSearchInput = {
  filter?: InputMaybe<ProductFilterInput>;
  keywords: Scalars['String']['input'];
  limit: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
  sortBy?: InputMaybe<ProductSortByInput>;
};

export type ProductShareCampusChatPayload = {
  __typename?: 'ProductShareCampusChatPayload';
  mediaItem: MediaItem;
  price: Scalars['Float']['output'];
  priceString: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: ProductListingType;
};

export type ProductSoldOutStatusInput = {
  id: Scalars['ID']['input'];
  soldOut: Scalars['Boolean']['input'];
};

export type ProductSortByInput = {
  newest?: InputMaybe<Scalars['Boolean']['input']>;
  priceHighToLow?: InputMaybe<Scalars['Boolean']['input']>;
  priceLowToHigh?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublicEduInstitutes = {
  __typename?: 'PublicEduInstitutes';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type PublicInstitution = {
  __typename?: 'PublicInstitution';
  id: Scalars['ID']['output'];
  institutionName: Scalars['String']['output'];
  localistCalendarUrl?: Maybe<Scalars['String']['output']>;
  logo?: Maybe<Scalars['String']['output']>;
  schoolColor?: Maybe<Scalars['String']['output']>;
  secondarySchoolColor?: Maybe<Scalars['String']['output']>;
  showCampusChat: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type PushNotificationCampaignFilters = {
  __typename?: 'PushNotificationCampaignFilters';
  userBoughtEver?: Maybe<BooleanChoice>;
  userGender: UserGenderFilter;
  userListed?: Maybe<UserListedFilter>;
  userRentedEver?: Maybe<BooleanChoice>;
};

export type PushNotificationData = {
  __typename?: 'PushNotificationData';
  body: Scalars['String']['output'];
  cardImage?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  allInstitutionsPayments: Array<InstitutionPayment>;
  checkIfLocalistCampaignIsAlreadyImported?: Maybe<
    Array<Scalars['String']['output']>
  >;
  conversations: Array<Conversation>;
  doAddressLookup: AddressWithId;
  fetchAddressBook: Array<AddressWithId>;
  fetchAllEduInstitutes: Array<Choice>;
  fetchAllEduInstitutesAdmin: Array<EduInstitute>;
  fetchAllPublicEduInstitutes: Array<PublicEduInstitutes>;
  fetchAllTimePopularCategories: Array<ProductCategory>;
  fetchBrands: Array<Brand>;
  fetchCategories: Array<ProductCategory>;
  fetchChatById: PersonalDmWithReceiverAndLastMessage;
  fetchChatMessages: Array<DirectMessage>;
  fetchHomeTrendingProductsV2: HomepageTrendingProductsType;
  fetchHomepageBrands: Array<Brand>;
  fetchHomepageCategoriesV2: Array<ProductCategory>;
  fetchHomepageEventsV2: FeaturedBrandType;
  fetchHomepageFeaturedBrandsV2: Array<FeaturedBrandType>;
  fetchHomepageLatestProductsV2: FeaturedProductType;
  fetchHomepageMarketplaceListingV2: Array<MarketplaceListingType>;
  fetchHomepageRentalListingsV2: Array<ProductListing>;
  fetchListingSettings: ListingSettingData;
  fetchLoggedInUniWebUser: Institution;
  fetchLoggedInUser: LoggedInUser;
  fetchMyListings: MyListing;
  fetchMyPersonalDMs: Array<PersonalDmWithReceiverAndLastMessage>;
  fetchNotifications: FetchNotification;
  fetchOrderDetails: OrderExtendedObj;
  fetchOrders: Array<OrderExtendedObj>;
  fetchPayouts: Array<Payout>;
  fetchPreOccupiedTimestampRanges: Array<TimestampRange>;
  fetchProductListing?: Maybe<ProductListing>;
  fetchProductListingComments: Array<ProductCommentExtendedObj>;
  fetchRecentlyViewedProducts: Array<ProductCardDetails>;
  fetchRelatedProducts: Array<ProductCardDetails>;
  fetchSellerProfile: SellerProfile;
  fetchShoppingPreferences: Array<ShoppingPreference>;
  fetchSupportTicket: SupportTicket;
  fetchSupportTickets: Array<SupportTicket>;
  fetchTrendingStudentsV2: Array<TrendingStudent>;
  fetchWishlist: Array<ProductListing>;
  findAdminByEmail: UniversityAdmin;
  findAdminById: UniversityAdmin;
  getActiveConversationsForProductListing: Array<Scalars['String']['output']>;
  getAdminById: Admin;
  getAllCampaigns: Array<CampaignDto>;
  getAllEvents: EventResponse;
  getBannedWords: Array<BannedWord>;
  getBannedWordsCategories: Array<BannedWordsCategory>;
  getCampaignById: CampaignWithAnalyticsDto;
  getCampaignsByInstitutionId: CampaignPaginatedResponse;
  getDirectMessagesById: Array<DirectMessage>;
  getEvent?: Maybe<EventResponse>;
  getInstitutionById: Institution;
  getInstitutionBySlug?: Maybe<Institution>;
  getInstitutions?: Maybe<Array<Institution>>;
  getMessageById: PersonalDm;
  getPersonalMessages: Array<PersonalDm>;
  getPublicBannedWords: Array<BannedWord>;
  getPublicInstitutionById: PublicInstitution;
  getRecordCount: Scalars['Int']['output'];
  getReports: Array<Report>;
  getSupportRequestList: Array<SupportRequestDto>;
  getUniversityStats: UniversityStats;
  institutionInvoices: Array<InstitutionInvoice>;
  institutionPayments: Array<InstitutionPayment>;
  invoices: Array<InstitutionInvoice>;
  me: Institution;
  messages: Array<Message>;
  orders: Array<Order>;
  payments: Array<Payment>;
  productListings: Array<ProductListing>;
  searchProductsWithoutAuth: ProductListingWithCount;
  users: Array<User>;
};

export type QueryAllInstitutionsPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstitutionPaymentWhereInput>;
};

export type QueryCheckIfLocalistCampaignIsAlreadyImportedArgs = {
  localistIds: Array<Scalars['String']['input']>;
};

export type QueryConversationsArgs = {
  orderBy?: InputMaybe<ConversationOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ConversationWhereInput>;
};

export type QueryDoAddressLookupArgs = {
  data: AddressLookup;
};

export type QueryFetchAllTimePopularCategoriesArgs = {
  listingType: ProductListingType;
};

export type QueryFetchChatByIdArgs = {
  personalDMId: Scalars['String']['input'];
};

export type QueryFetchChatMessagesArgs = {
  input: GetChatMessagesInput;
};

export type QueryFetchHomeTrendingProductsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchHomepageEventsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchHomepageFeaturedBrandsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchHomepageLatestProductsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchHomepageMarketplaceListingV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchHomepageRentalListingsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFetchMyListingsArgs = {
  data?: InputMaybe<MyListingsFilter>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type QueryFetchOrderDetailsArgs = {
  orderId: Scalars['String']['input'];
};

export type QueryFetchOrdersArgs = {
  input: OrderSearchInput;
};

export type QueryFetchPayoutsArgs = {
  input: PayoutSearchInput;
};

export type QueryFetchPreOccupiedTimestampRangesArgs = {
  listingId: Scalars['String']['input'];
};

export type QueryFetchProductListingArgs = {
  listingId: Scalars['String']['input'];
};

export type QueryFetchProductListingCommentsArgs = {
  data: FetchCommentsInput;
};

export type QueryFetchRecentlyViewedProductsArgs = {
  productIds: Array<Scalars['String']['input']>;
};

export type QueryFetchRelatedProductsArgs = {
  data: RelatedProductsCriteria;
};

export type QueryFetchSellerProfileArgs = {
  id: Scalars['ID']['input'];
};

export type QueryFetchSupportTicketArgs = {
  ticketId: Scalars['String']['input'];
};

export type QueryFetchTrendingStudentsV2Args = {
  eduInstituteId: Scalars['String']['input'];
};

export type QueryFindAdminByEmailArgs = {
  input: FindAdminByEmailInput;
};

export type QueryFindAdminByIdArgs = {
  input: FindAdminByIdInput;
};

export type QueryGetActiveConversationsForProductListingArgs = {
  listingId: Scalars['String']['input'];
};

export type QueryGetAllCampaignsArgs = {
  filters?: InputMaybe<CampaignFilterInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CampaignWhereInput>;
};

export type QueryGetBannedWordsArgs = {
  orderBy?: InputMaybe<BannedWordsCategoryOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannedWordWhereInput>;
};

export type QueryGetBannedWordsCategoriesArgs = {
  orderBy?: InputMaybe<BannedWordsCategoryOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannedWordsCategoryWhereInput>;
};

export type QueryGetCampaignByIdArgs = {
  campaignId: Scalars['String']['input'];
};

export type QueryGetCampaignsByInstitutionIdArgs = {
  input: GetUniversityCampaignsInput;
};

export type QueryGetDirectMessagesByIdArgs = {
  id: Scalars['String']['input'];
  orderBy?: InputMaybe<DirectMessageOrderByWithRelationInput>;
  where?: InputMaybe<DirectMessageWhereInput>;
};

export type QueryGetEventArgs = {
  id: Scalars['String']['input'];
};

export type QueryGetInstitutionByIdArgs = {
  institutionId: Scalars['ID']['input'];
};

export type QueryGetInstitutionBySlugArgs = {
  slug: Scalars['String']['input'];
};

export type QueryGetInstitutionsArgs = {
  orderBy?: InputMaybe<InstitutionOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstitutionWhereInput>;
};

export type QueryGetMessageByIdArgs = {
  data: GetMessageByIdInput;
};

export type QueryGetPersonalMessagesArgs = {
  orderBy?: InputMaybe<PersonalDmOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PersonalDmWhereInput>;
};

export type QueryGetPublicBannedWordsArgs = {
  orderBy?: InputMaybe<BannedWordsCategoryOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BannedWordWhereInput>;
};

export type QueryGetPublicInstitutionByIdArgs = {
  institutionId: Scalars['ID']['input'];
};

export type QueryGetRecordCountArgs = {
  input: RecordCountInput;
};

export type QueryGetReportsArgs = {
  orderBy?: InputMaybe<ReportOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReportWhereInput>;
};

export type QueryGetSupportRequestListArgs = {
  filters?: InputMaybe<SupportRequestFilterInput>;
};

export type QueryInstitutionInvoicesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstitutionInvoiceWhereInput>;
};

export type QueryInstitutionPaymentsArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstitutionPaymentWhereInput>;
};

export type QueryInvoicesArgs = {
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<InstitutionInvoiceWhereInput>;
};

export type QueryMessagesArgs = {
  orderBy?: InputMaybe<MessageOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<MessageWhereInput>;
};

export type QueryOrdersArgs = {
  orderBy?: InputMaybe<OrderOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<OrderWhereInput>;
};

export type QueryPaymentsArgs = {
  orderBy?: InputMaybe<PaymentOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PaymentWhereInput>;
};

export type QueryProductListingsArgs = {
  orderBy?: InputMaybe<ProductListingOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ProductListingWhereInput>;
};

export type QuerySearchProductsWithoutAuthArgs = {
  input: ProductSearchInput;
};

export type QueryUsersArgs = {
  orderBy?: InputMaybe<UserOrderByWithRelationInput>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export enum ReactionType {
  Angry = 'ANGRY',
  Laugh = 'LAUGH',
  Like = 'LIKE',
  Love = 'LOVE',
  Sad = 'SAD',
  Wow = 'WOW',
}

export type RecordCountInput = {
  modelName: Scalars['String']['input'];
  where?: InputMaybe<Scalars['JSONObject']['input']>;
};

export enum RecordType {
  Cname = 'CNAME',
  Txt = 'TXT',
}

export type RegisterInstitution = {
  customDomains?: InputMaybe<Array<CustomDomainsCreateInput>>;
  id: Scalars['ID']['input'];
  liveUrl?: InputMaybe<Scalars['String']['input']>;
  localistCalendarUrl?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sandboxUrl?: InputMaybe<Scalars['String']['input']>;
  schoolColor?: InputMaybe<Scalars['String']['input']>;
  secondarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  showDummyData?: InputMaybe<Scalars['Boolean']['input']>;
  slug: Scalars['String']['input'];
  tertiarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  universityLoginUrl?: InputMaybe<Scalars['String']['input']>;
};

export type RelatedProductsCriteria = {
  categoryId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
};

export type RentDateTime = {
  __typename?: 'RentDateTime';
  date: Scalars['String']['output'];
  time: Scalars['String']['output'];
};

export type RentOfferBubble = {
  __typename?: 'RentOfferBubble';
  address: Scalars['String']['output'];
  addressIdSelected: Scalars['String']['output'];
  buyerFee: Scalars['String']['output'];
  consideredWeeks: Scalars['String']['output'];
  deliveryMode: Scalars['String']['output'];
  duration: Scalars['String']['output'];
  end: RentDateTime;
  endDateTime: Scalars['String']['output'];
  headerText: Scalars['String']['output'];
  product: ProductBubble;
  start: RentDateTime;
  startDateTime: Scalars['String']['output'];
  totalPrice: Scalars['String']['output'];
  totalPriceWithBuyerFee: Scalars['String']['output'];
  userIdHavingAddress: Scalars['String']['output'];
};

export type RentOrder = {
  __typename?: 'RentOrder';
  completionImages?: Maybe<Array<Scalars['String']['output']>>;
  endDate?: Maybe<Scalars['String']['output']>;
  initialImages?: Maybe<Array<Scalars['String']['output']>>;
  startDate?: Maybe<Scalars['String']['output']>;
};

export type RentOrderNullableCompositeFilter = {
  equals?: InputMaybe<RentOrderObjectEqualityInput>;
  is?: InputMaybe<RentOrderWhereInput>;
  isNot?: InputMaybe<RentOrderWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentOrderObjectEqualityInput = {
  completionImages?: InputMaybe<Array<Scalars['String']['input']>>;
  endDate?: InputMaybe<Scalars['String']['input']>;
  initialImages?: InputMaybe<Array<Scalars['String']['input']>>;
  startDate?: InputMaybe<Scalars['String']['input']>;
};

export type RentOrderOrderByInput = {
  completionImages?: InputMaybe<SortOrder>;
  endDate?: InputMaybe<SortOrder>;
  initialImages?: InputMaybe<SortOrder>;
  startDate?: InputMaybe<SortOrder>;
};

export type RentOrderWhereInput = {
  AND?: InputMaybe<Array<RentOrderWhereInput>>;
  NOT?: InputMaybe<Array<RentOrderWhereInput>>;
  OR?: InputMaybe<Array<RentOrderWhereInput>>;
  completionImages?: InputMaybe<StringNullableListFilter>;
  endDate?: InputMaybe<StringNullableFilter>;
  initialImages?: InputMaybe<StringNullableListFilter>;
  startDate?: InputMaybe<StringNullableFilter>;
};

export type RentalNotificationPayload = {
  __typename?: 'RentalNotificationPayload';
  conversationId: Scalars['String']['output'];
  listingTitle: Scalars['String']['output'];
  orderId: Scalars['String']['output'];
  type: RentalNotificationType;
};

export enum RentalNotificationType {
  Ended = 'ENDED',
  Started = 'STARTED',
}

export type RentingPreference = {
  __typename?: 'RentingPreference';
  addressDescription?: Maybe<Scalars['String']['output']>;
  addressId?: Maybe<Scalars['String']['output']>;
  availability?: Maybe<Array<Availability>>;
};

export type RentingPreferenceInput = {
  addressDescription?: InputMaybe<Scalars['String']['input']>;
  addressId?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<Array<Availability>>;
};

export type RentingPreferenceNullableCompositeFilter = {
  equals?: InputMaybe<RentingPreferenceObjectEqualityInput>;
  is?: InputMaybe<RentingPreferenceWhereInput>;
  isNot?: InputMaybe<RentingPreferenceWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RentingPreferenceObjectEqualityInput = {
  addressDescription?: InputMaybe<Scalars['String']['input']>;
  addressId?: InputMaybe<Scalars['String']['input']>;
  availability?: InputMaybe<Array<Availability>>;
};

export type RentingPreferenceOrderByInput = {
  addressDescription?: InputMaybe<SortOrder>;
  addressId?: InputMaybe<SortOrder>;
  availability?: InputMaybe<SortOrder>;
};

export type RentingPreferenceWhereInput = {
  AND?: InputMaybe<Array<RentingPreferenceWhereInput>>;
  NOT?: InputMaybe<Array<RentingPreferenceWhereInput>>;
  OR?: InputMaybe<Array<RentingPreferenceWhereInput>>;
  addressDescription?: InputMaybe<StringNullableFilter>;
  addressId?: InputMaybe<StringNullableFilter>;
  availability?: InputMaybe<EnumAvailabilityNullableListFilter>;
};

export type Report = {
  __typename?: 'Report';
  adminNotes?: Maybe<Array<AdminNote>>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  institutionId: Scalars['String']['output'];
  reportedEntity: ReportedEntityType;
  reportedId: Scalars['String']['output'];
  reporterId: Scalars['String']['output'];
  reporterNotes?: Maybe<Scalars['String']['output']>;
  status: ReportStatus;
  type: ReportType;
  updatedAt: Scalars['DateTime']['output'];
};

export type ReportOrderByWithRelationInput = {
  adminNotes?: InputMaybe<AdminNoteOrderByCompositeAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  institutionId?: InputMaybe<SortOrder>;
  reportedEntity?: InputMaybe<SortOrder>;
  reportedId?: InputMaybe<SortOrder>;
  reporterId?: InputMaybe<SortOrder>;
  reporterNotes?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum ReportStatus {
  ActionTaken = 'ACTION_TAKEN',
  InProgress = 'IN_PROGRESS',
  Received = 'RECEIVED',
}

export enum ReportType {
  Harrasment = 'HARRASMENT',
  InappropriateContent = 'INAPPROPRIATE_CONTENT',
  Misleading = 'MISLEADING',
  Other = 'OTHER',
  ProhibitedItem = 'PROHIBITED_ITEM',
  Spam = 'SPAM',
}

export type ReportWhereInput = {
  AND?: InputMaybe<Array<ReportWhereInput>>;
  NOT?: InputMaybe<Array<ReportWhereInput>>;
  OR?: InputMaybe<Array<ReportWhereInput>>;
  adminNotes?: InputMaybe<Array<AdminNoteObjectEqualityInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  institutionId?: InputMaybe<StringFilter>;
  reportedEntity?: InputMaybe<EnumReportedEntityTypeFilter>;
  reportedId?: InputMaybe<StringFilter>;
  reporterId?: InputMaybe<StringFilter>;
  reporterNotes?: InputMaybe<StringNullableFilter>;
  status?: InputMaybe<EnumReportStatusFilter>;
  type?: InputMaybe<EnumReportTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export enum ReportedEntityType {
  CampusChat = 'CAMPUS_CHAT',
  Chat = 'CHAT',
  ListingChat = 'LISTING_CHAT',
  Product = 'PRODUCT',
  User = 'USER',
}

export enum Role {
  User = 'USER',
}

export type RumieStory = {
  __typename?: 'RumieStory';
  archived: Scalars['Boolean']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['CustomJSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  eduInstitute: EduInstitute;
  eduInstituteId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media: StoryMedia;
  type: StoryType;
  userId: Scalars['String']['output'];
  viewCount: Scalars['Int']['output'];
  viewed?: Maybe<Scalars['Boolean']['output']>;
};

export enum SelectionChoice {
  Multiple = 'MULTIPLE',
  Single = 'SINGLE',
}

export type SellerCatalogue = {
  __typename?: 'SellerCatalogue';
  listingCategories?: Maybe<Array<CatalogueCategory>>;
  productListings: Array<ProductListing>;
};

export enum SellerPayoutStatus {
  Cancelled = 'CANCELLED',
  Complete = 'COMPLETE',
  Pending = 'PENDING',
  Sent = 'SENT',
}

export type SellerProfile = {
  __typename?: 'SellerProfile';
  id: Scalars['ID']['output'];
  sellerCatalogue: SellerCatalogue;
  sellerInfo: SellerProfileInfo;
};

export type SellerProfileInfo = {
  __typename?: 'SellerProfileInfo';
  bio: Scalars['String']['output'];
  displayPicture: Scalars['String']['output'];
  eduInstituteName: Scalars['String']['output'];
  hits: Scalars['String']['output'];
  hobbies: Array<Hobby>;
  id: Scalars['ID']['output'];
  images: Array<Scalars['String']['output']>;
  instagramUsername?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  noOfUploadedItems: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  verified: Scalars['Boolean']['output'];
};

export type SendSupportMessageInput = {
  message: Scalars['String']['input'];
  ticketId: Scalars['String']['input'];
};

export type Session = {
  __typename?: 'Session';
  deviceModel: Scalars['String']['output'];
  lastSeen: Scalars['DateTime']['output'];
  started: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};

export type SessionObjectEqualityInput = {
  deviceModel: Scalars['String']['input'];
  lastSeen: Scalars['DateTime']['input'];
  started: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
  valid: Scalars['Boolean']['input'];
};

export type SessionOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type Shipment = {
  __typename?: 'Shipment';
  events?: Maybe<Scalars['JSON']['output']>;
  from?: Maybe<Address>;
  labelDownloadlink?: Maybe<Scalars['String']['output']>;
  labelId?: Maybe<Scalars['String']['output']>;
  shippingCharge?: Maybe<Scalars['Float']['output']>;
  shippingChargePayer?: Maybe<ShippingChargePayer>;
  status?: Maybe<OrderNotificationType>;
  status_description?: Maybe<Scalars['String']['output']>;
  to?: Maybe<Address>;
  trackingNumber?: Maybe<Scalars['String']['output']>;
};

export type ShipmentNullableCompositeFilter = {
  equals?: InputMaybe<ShipmentObjectEqualityInput>;
  is?: InputMaybe<ShipmentWhereInput>;
  isNot?: InputMaybe<ShipmentWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShipmentObjectEqualityInput = {
  events?: InputMaybe<Scalars['JSON']['input']>;
  from?: InputMaybe<AddressObjectEqualityInput>;
  labelDownloadlink?: InputMaybe<Scalars['String']['input']>;
  labelId?: InputMaybe<Scalars['String']['input']>;
  shippingCharge?: InputMaybe<Scalars['Float']['input']>;
  shippingChargePayer?: InputMaybe<ShippingChargePayer>;
  status?: InputMaybe<OrderNotificationType>;
  status_description?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<AddressObjectEqualityInput>;
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
};

export type ShipmentOrderByInput = {
  events?: InputMaybe<SortOrder>;
  from?: InputMaybe<AddressOrderByInput>;
  labelDownloadlink?: InputMaybe<SortOrder>;
  labelId?: InputMaybe<SortOrder>;
  shippingCharge?: InputMaybe<SortOrder>;
  shippingChargePayer?: InputMaybe<SortOrder>;
  status?: InputMaybe<SortOrder>;
  status_description?: InputMaybe<SortOrder>;
  to?: InputMaybe<AddressOrderByInput>;
  trackingNumber?: InputMaybe<SortOrder>;
};

export type ShipmentWhereInput = {
  AND?: InputMaybe<Array<ShipmentWhereInput>>;
  NOT?: InputMaybe<Array<ShipmentWhereInput>>;
  OR?: InputMaybe<Array<ShipmentWhereInput>>;
  events?: InputMaybe<JsonNullableFilter>;
  from?: InputMaybe<AddressNullableCompositeFilter>;
  labelDownloadlink?: InputMaybe<StringNullableFilter>;
  labelId?: InputMaybe<StringNullableFilter>;
  shippingCharge?: InputMaybe<FloatNullableFilter>;
  shippingChargePayer?: InputMaybe<EnumShippingChargePayerNullableFilter>;
  status?: InputMaybe<EnumOrderNotificationTypeNullableFilter>;
  status_description?: InputMaybe<StringNullableFilter>;
  to?: InputMaybe<AddressNullableCompositeFilter>;
  trackingNumber?: InputMaybe<StringNullableFilter>;
};

export enum ShippingChargePayer {
  Buyer = 'BUYER',
  Seller = 'SELLER',
}

export type ShoppingPreference = {
  __typename?: 'ShoppingPreference';
  active: Scalars['Boolean']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userIds?: Maybe<Array<Scalars['String']['output']>>;
  users?: Maybe<Array<User>>;
};

export type ShoppingPreferenceListRelationFilter = {
  every?: InputMaybe<ShoppingPreferenceWhereInput>;
  none?: InputMaybe<ShoppingPreferenceWhereInput>;
  some?: InputMaybe<ShoppingPreferenceWhereInput>;
};

export type ShoppingPreferenceOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShoppingPreferenceWhereInput = {
  AND?: InputMaybe<Array<ShoppingPreferenceWhereInput>>;
  NOT?: InputMaybe<Array<ShoppingPreferenceWhereInput>>;
  OR?: InputMaybe<Array<ShoppingPreferenceWhereInput>>;
  active?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userIds?: InputMaybe<StringNullableListFilter>;
  users?: InputMaybe<UserListRelationFilter>;
};

export type Sizes = {
  __typename?: 'Sizes';
  lowerWear: Scalars['String']['output'];
  shoes: Scalars['String']['output'];
  upperWear: Scalars['String']['output'];
};

export type SizesInput = {
  lowerWear: Scalars['String']['input'];
  shoes: Scalars['String']['input'];
  upperWear: Scalars['String']['input'];
};

export type SizesNullableCompositeFilter = {
  equals?: InputMaybe<SizesObjectEqualityInput>;
  is?: InputMaybe<SizesWhereInput>;
  isNot?: InputMaybe<SizesWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SizesObjectEqualityInput = {
  lowerWear: Scalars['String']['input'];
  shoes: Scalars['String']['input'];
  upperWear: Scalars['String']['input'];
};

export type SizesOrderByInput = {
  lowerWear?: InputMaybe<SortOrder>;
  shoes?: InputMaybe<SortOrder>;
  upperWear?: InputMaybe<SortOrder>;
};

export type SizesOutput = {
  __typename?: 'SizesOutput';
  lowerWear: Scalars['String']['output'];
  shoes: Scalars['String']['output'];
  upperWear: Scalars['String']['output'];
};

export type SizesWhereInput = {
  AND?: InputMaybe<Array<SizesWhereInput>>;
  NOT?: InputMaybe<Array<SizesWhereInput>>;
  OR?: InputMaybe<Array<SizesWhereInput>>;
  lowerWear?: InputMaybe<StringFilter>;
  shoes?: InputMaybe<StringFilter>;
  upperWear?: InputMaybe<StringFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StoryMedia = {
  __typename?: 'StoryMedia';
  duration?: Maybe<Scalars['Int']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  type: StoryType;
  url: Scalars['String']['output'];
};

export type StoryProductPayload = {
  __typename?: 'StoryProductPayload';
  fontColor?: Maybe<Scalars['String']['output']>;
  image: Scalars['String']['output'];
  productId: Scalars['String']['output'];
  textHexCode?: Maybe<Scalars['String']['output']>;
  textPosX?: Maybe<Scalars['String']['output']>;
  textPosY?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export enum StoryType {
  Image = 'IMAGE',
  Product = 'PRODUCT',
  Video = 'VIDEO',
}

export type StoryWithStats = {
  __typename?: 'StoryWithStats';
  archived: Scalars['Boolean']['output'];
  backgroundColor?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['CustomJSON']['output']>;
  createdAt: Scalars['DateTime']['output'];
  eduInstitute: EduInstitute;
  eduInstituteId: Scalars['String']['output'];
  expiresAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  media: StoryMedia;
  reactionCount: Scalars['Int']['output'];
  type: StoryType;
  userId: Scalars['String']['output'];
  viewCount: Scalars['Int']['output'];
  viewed?: Maybe<Scalars['Boolean']['output']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableListFilter = {
  equals?: InputMaybe<Array<Scalars['String']['input']>>;
  has?: InputMaybe<Scalars['String']['input']>;
  hasEvery?: InputMaybe<Array<Scalars['String']['input']>>;
  hasSome?: InputMaybe<Array<Scalars['String']['input']>>;
  isEmpty?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Student = {
  __typename?: 'Student';
  displayPicture: Scalars['String']['output'];
  eduInstituteName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['String']['output'];
};

export type SupportMessage = {
  __typename?: 'SupportMessage';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  sender: SupportTicketParticipant;
  text: Scalars['String']['output'];
};

export type SupportMessageObjectEqualityInput = {
  createdAt: Scalars['DateTime']['input'];
  id: Scalars['String']['input'];
  sender: SupportTicketParticipant;
  text: Scalars['String']['input'];
};

export type SupportRequestDto = {
  __typename?: 'SupportRequestDto';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  status: SupportStatusType;
  ticketId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type SupportRequestFilterInput = {
  status?: InputMaybe<SupportStatusType>;
};

/** The types of the status of support request */
export enum SupportStatusType {
  Closed = 'CLOSED',
  InProgress = 'IN_PROGRESS',
  Open = 'OPEN',
}

export type SupportTicket = {
  __typename?: 'SupportTicket';
  adminLastSeen?: Maybe<Scalars['String']['output']>;
  associatedUserId: Scalars['String']['output'];
  concernedId?: Maybe<Scalars['String']['output']>;
  concernedOrder?: Maybe<Order>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  initiator: SupportTicketParticipant;
  issue: Scalars['String']['output'];
  messages?: Maybe<Array<SupportMessage>>;
  resolved: Scalars['Boolean']['output'];
  type: SupportTicketType;
  updatedAt: Scalars['DateTime']['output'];
  userLastSeen?: Maybe<Scalars['String']['output']>;
};

export type SupportTicketInput = {
  concernedId?: InputMaybe<Scalars['String']['input']>;
  issue: Scalars['String']['input'];
  message: Scalars['String']['input'];
  type: SupportTicketType;
};

export type SupportTicketListRelationFilter = {
  every?: InputMaybe<SupportTicketWhereInput>;
  none?: InputMaybe<SupportTicketWhereInput>;
  some?: InputMaybe<SupportTicketWhereInput>;
};

export type SupportTicketOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export enum SupportTicketParticipant {
  Admin = 'ADMIN',
  User = 'USER',
}

export enum SupportTicketType {
  General = 'General',
  OrderRelated = 'OrderRelated',
  ProductRelated = 'ProductRelated',
}

export type SupportTicketWhereInput = {
  AND?: InputMaybe<Array<SupportTicketWhereInput>>;
  NOT?: InputMaybe<Array<SupportTicketWhereInput>>;
  OR?: InputMaybe<Array<SupportTicketWhereInput>>;
  adminLastSeen?: InputMaybe<StringNullableFilter>;
  associatedUserId?: InputMaybe<StringFilter>;
  concernedId?: InputMaybe<StringNullableFilter>;
  concernedOrder?: InputMaybe<OrderNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  initiator?: InputMaybe<EnumSupportTicketParticipantFilter>;
  issue?: InputMaybe<StringFilter>;
  messages?: InputMaybe<Array<SupportMessageObjectEqualityInput>>;
  resolved?: InputMaybe<BoolFilter>;
  type?: InputMaybe<EnumSupportTicketTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userLastSeen?: InputMaybe<StringNullableFilter>;
};

export enum SystemIcons {
  Offer = 'OFFER',
  Package = 'PACKAGE',
  RumieHat = 'RUMIE_HAT',
  Usps = 'USPS',
}

export type SystemNotificationPayload = {
  __typename?: 'SystemNotificationPayload';
  conversationId?: Maybe<Scalars['String']['output']>;
  orderId?: Maybe<Scalars['String']['output']>;
  payoutID?: Maybe<Scalars['String']['output']>;
  type: SystemNotificationType;
  userID?: Maybe<Scalars['String']['output']>;
};

export enum SystemNotificationType {
  ConversationRelated = 'CONVERSATION_RELATED',
  OrderRelated = 'ORDER_RELATED',
  PayoutRelated = 'PAYOUT_RELATED',
  ProfileRelated = 'PROFILE_RELATED',
}

export enum Tag {
  Event = 'EVENT',
  Resources = 'RESOURCES',
  Sport = 'SPORT',
}

export type TextCampusChatPayload = {
  __typename?: 'TextCampusChatPayload';
  text: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
};

export enum TimeframeFilter {
  All = 'ALL',
  NextMonth = 'NEXT_MONTH',
  ThisMonth = 'THIS_MONTH',
  ThisWeek = 'THIS_WEEK',
}

export type TimestampRange = {
  __typename?: 'TimestampRange';
  end: Scalars['String']['output'];
  start: Scalars['String']['output'];
};

export type TrendingStudent = {
  __typename?: 'TrendingStudent';
  productListings: Array<ProductListing>;
  student: TrendingStudentInfo;
};

export type TrendingStudentInfo = {
  __typename?: 'TrendingStudentInfo';
  displayPicture: Scalars['String']['output'];
  eduInstituteName: Scalars['String']['output'];
  fullName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type UniversityAdmin = {
  __typename?: 'UniversityAdmin';
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  sessions?: Maybe<Array<Session>>;
  updatedAt: Scalars['DateTime']['output'];
  userName: Scalars['String']['output'];
  userType: UniversityAdminType;
};

export enum UniversityAdminType {
  Admin = 'ADMIN',
  Institution = 'INSTITUTION',
}

export type UniversityStats = {
  __typename?: 'UniversityStats';
  genderWise: GenderWise;
  impression: Array<Scalars['Int']['output']>;
  listing: Scalars['Int']['output'];
  totalCampaign: Scalars['Int']['output'];
};

export type UniversityWebmasterSessions = {
  __typename?: 'UniversityWebmasterSessions';
  lastSeen: Scalars['DateTime']['output'];
  started: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};

export type UnreadMessages = {
  __typename?: 'UnreadMessages';
  chat: UnreadMessagesChat;
  messages: Array<DirectMessage>;
  participant: UnreadMessagesParticipant;
};

export type UnreadMessagesChat = {
  __typename?: 'UnreadMessagesChat';
  id: Scalars['String']['output'];
};

export type UnreadMessagesParticipant = {
  __typename?: 'UnreadMessagesParticipant';
  displayPicture: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export type UpdateBannedWord = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  categoryId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  word?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBannedWordCategory = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  severity?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateCampaignInput = {
  campaignEndAt: Scalars['Int']['input'];
  campaignImage?: InputMaybe<Scalars['String']['input']>;
  campaignStartAt: Scalars['Int']['input'];
  eventDayTime: Scalars['Int']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  locationCoordinates?: InputMaybe<Scalars['String']['input']>;
  showOnApp: Scalars['Boolean']['input'];
  tag: Tag;
  title: Scalars['String']['input'];
  type: Array<CampaignType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInstitutionData = {
  archived?: InputMaybe<Scalars['Boolean']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  customDomains?: InputMaybe<Array<CustomDomainsCreateInput>>;
  institutionName?: InputMaybe<Scalars['String']['input']>;
  liveUrl?: InputMaybe<Scalars['String']['input']>;
  localistCalendarUrl?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  passCode?: InputMaybe<Scalars['String']['input']>;
  sandboxUrl?: InputMaybe<Scalars['String']['input']>;
  schoolColor?: InputMaybe<Scalars['String']['input']>;
  secondarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  showCampusChat?: InputMaybe<Scalars['Boolean']['input']>;
  showDummyData?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tertiarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  universityLoginUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInstitutionInput = {
  data: UpdateInstitutionData;
  institutionId: Scalars['ID']['input'];
};

export type UpdateInstitutionInvoice = {
  chargesType?: InputMaybe<ChargesCreateInput>;
  dueAt?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['ID']['input'];
  institutionId?: InputMaybe<Scalars['ID']['input']>;
  items?: InputMaybe<Array<InvoiceItemCreateInput>>;
};

export type UpdateInstitutionPassword = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type UpdateInstitutionSettingInput = {
  institutionName?: InputMaybe<Scalars['String']['input']>;
  localistCalendarUrl?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['String']['input']>;
  schoolColor?: InputMaybe<Scalars['String']['input']>;
  secondarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  showCampusChat?: InputMaybe<Scalars['Boolean']['input']>;
  tertiarySchoolColor?: InputMaybe<Scalars['String']['input']>;
  universityLoginUrl?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductOnSaleInput = {
  brandId: Scalars['String']['input'];
  colorId: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  priceString?: InputMaybe<Scalars['String']['input']>;
  productCondition: ProductCondition;
  reasonsForSelling: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type UpdateProductShippingAndPriceInput = {
  id: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  shippingEnabled: Scalars['Boolean']['input'];
  shippingFrom?: InputMaybe<Scalars['String']['input']>;
  weightCategoryId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRentingAvailabilityInput = {
  availability: Array<Availability>;
  id: Scalars['ID']['input'];
};

export type UpdateRentingMeetupPreferenceInput = {
  addressDescription?: InputMaybe<Scalars['String']['input']>;
  addressId: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  productDeliveryMode: ProductDeliveryMode;
};

export type UpdateReportInput = {
  note: Scalars['String']['input'];
  noteById: Scalars['ID']['input'];
  reportId: Scalars['ID']['input'];
  status: ReportStatus;
};

export type UpdateUserDpResponse = {
  __typename?: 'UpdateUserDPResponse';
  displayPicture: Scalars['String']['output'];
};

export type UpdateUserImagesInput = {
  images: Array<ImageInput>;
};

export type UpdateUserImagesResponse = {
  __typename?: 'UpdateUserImagesResponse';
  images: Array<ImageOutput>;
};

export type UpdateUserInfoInput = {
  about: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  personalEmail: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};

export type UpdateUserInfoResponse = {
  __typename?: 'UpdateUserInfoResponse';
  about: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
  personalEmail: Scalars['String']['output'];
  phoneNumber: Scalars['String']['output'];
};

export type UpdateUserProfileInput = {
  displayPicture?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
};

export type Uploader = {
  __typename?: 'Uploader';
  eduInstitute?: Maybe<UploaderEduInstitute>;
};

export type UploaderEduInstitute = {
  __typename?: 'UploaderEduInstitute';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']['output']>;
  addedManually?: Maybe<Scalars['Boolean']['output']>;
  addressBook?: Maybe<Array<Address>>;
  altSignup?: Maybe<AltSignup>;
  blackListed: Scalars['Boolean']['output'];
  communicationPrefrences?: Maybe<Array<CommunicationPreference>>;
  conversationIds?: Maybe<Array<Scalars['String']['output']>>;
  conversations?: Maybe<Array<Conversation>>;
  countryCode: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  deactivated?: Maybe<Scalars['Boolean']['output']>;
  displayPicture?: Maybe<Scalars['String']['output']>;
  dmIds?: Maybe<Array<Scalars['String']['output']>>;
  eduInstitute?: Maybe<EduInstitute>;
  eduInstituteId?: Maybe<Scalars['String']['output']>;
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  followedBy?: Maybe<Array<User>>;
  followedByIDs?: Maybe<Array<Scalars['String']['output']>>;
  following?: Maybe<Array<User>>;
  followingIDs?: Maybe<Array<Scalars['String']['output']>>;
  gender?: Maybe<Gender>;
  hobbies?: Maybe<Array<Hobby>>;
  hobbyIds?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Image>>;
  instagramUsername?: Maybe<Scalars['String']['output']>;
  isParent?: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  legacyId?: Maybe<Scalars['String']['output']>;
  orderIds?: Maybe<Array<Scalars['String']['output']>>;
  password?: Maybe<Scalars['String']['output']>;
  personalDMs?: Maybe<Array<PersonalDm>>;
  personalEmail?: Maybe<Scalars['String']['output']>;
  personalMessageIds?: Maybe<Array<Scalars['String']['output']>>;
  phoneNumber: Scalars['String']['output'];
  phoneNumberVerified: Scalars['Boolean']['output'];
  productListings?: Maybe<Array<ProductListing>>;
  referralRockCode?: Maybe<Scalars['String']['output']>;
  referrer?: Maybe<Scalars['String']['output']>;
  registrationPlatform?: Maybe<Platform>;
  reportedProducts?: Maybe<Array<ProductReport>>;
  roles?: Maybe<Array<Role>>;
  savedDealIds?: Maybe<Array<Scalars['String']['output']>>;
  savedDeals?: Maybe<Array<Deal>>;
  sessions?: Maybe<Array<UserSession>>;
  shoppingPreferenceIds?: Maybe<Array<Scalars['String']['output']>>;
  shoppingPreferences?: Maybe<Array<ShoppingPreference>>;
  signupV?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Sizes>;
  stripe?: Maybe<UserStripe>;
  updatedAt: Scalars['DateTime']['output'];
  wishlist?: Maybe<Array<ProductListing>>;
  wishlistIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type UserDp = {
  displayPicture: Scalars['String']['input'];
};

export type UserDetailsObj = {
  __typename?: 'UserDetailsObj';
  displayPicture: Scalars['String']['output'];
  eduInstitute?: Maybe<EduIntituteWithJustName>;
  eduInstituteId?: Maybe<Scalars['String']['output']>;
  firstName: Scalars['String']['output'];
  id: Scalars['String']['output'];
  lastName: Scalars['String']['output'];
};

export enum UserGenderFilter {
  All = 'ALL',
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
}

export type UserListRelationFilter = {
  every?: InputMaybe<UserWhereInput>;
  none?: InputMaybe<UserWhereInput>;
  some?: InputMaybe<UserWhereInput>;
};

export enum UserListedFilter {
  No = 'NO',
  OnlyMarketplace = 'ONLY_MARKETPLACE',
  OnlyRentals = 'ONLY_RENTALS',
  Yes = 'YES',
}

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  about?: InputMaybe<SortOrder>;
  addedManually?: InputMaybe<SortOrder>;
  addressBook?: InputMaybe<AddressOrderByCompositeAggregateInput>;
  altSignup?: InputMaybe<AltSignupOrderByInput>;
  blackListed?: InputMaybe<SortOrder>;
  communicationPrefrences?: InputMaybe<CommunicationPreferenceOrderByRelationAggregateInput>;
  conversationIds?: InputMaybe<SortOrder>;
  conversations?: InputMaybe<ConversationOrderByRelationAggregateInput>;
  countryCode?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  deactivated?: InputMaybe<SortOrder>;
  displayPicture?: InputMaybe<SortOrder>;
  dmIds?: InputMaybe<SortOrder>;
  eduInstitute?: InputMaybe<EduInstituteOrderByWithRelationInput>;
  eduInstituteId?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  followedBy?: InputMaybe<UserOrderByRelationAggregateInput>;
  followedByIDs?: InputMaybe<SortOrder>;
  following?: InputMaybe<UserOrderByRelationAggregateInput>;
  followingIDs?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  hobbies?: InputMaybe<HobbyOrderByRelationAggregateInput>;
  hobbyIds?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  images?: InputMaybe<ImageOrderByCompositeAggregateInput>;
  instagramUsername?: InputMaybe<SortOrder>;
  isParent?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  legacyId?: InputMaybe<SortOrder>;
  orderIds?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  personalDMs?: InputMaybe<PersonalDmOrderByRelationAggregateInput>;
  personalEmail?: InputMaybe<SortOrder>;
  personalMessageIds?: InputMaybe<SortOrder>;
  phoneNumber?: InputMaybe<SortOrder>;
  phoneNumberVerified?: InputMaybe<SortOrder>;
  productListings?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  referralRockCode?: InputMaybe<SortOrder>;
  referrer?: InputMaybe<SortOrder>;
  registrationPlatform?: InputMaybe<SortOrder>;
  reportedProducts?: InputMaybe<ProductReportOrderByRelationAggregateInput>;
  roles?: InputMaybe<SortOrder>;
  savedDealIds?: InputMaybe<SortOrder>;
  savedDeals?: InputMaybe<DealOrderByRelationAggregateInput>;
  sessions?: InputMaybe<UserSessionOrderByCompositeAggregateInput>;
  shoppingPreferenceIds?: InputMaybe<SortOrder>;
  shoppingPreferences?: InputMaybe<ShoppingPreferenceOrderByRelationAggregateInput>;
  signupV?: InputMaybe<SortOrder>;
  sizes?: InputMaybe<SizesOrderByInput>;
  stripe?: InputMaybe<UserStripeOrderByInput>;
  updatedAt?: InputMaybe<SortOrder>;
  wishlist?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  wishlistIds?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserSession = {
  __typename?: 'UserSession';
  deviceModel: Scalars['String']['output'];
  lastSeen: Scalars['DateTime']['output'];
  platform: Platform;
  pushToken?: Maybe<Scalars['String']['output']>;
  started: Scalars['DateTime']['output'];
  token: Scalars['String']['output'];
  valid: Scalars['Boolean']['output'];
};

export type UserSessionObjectEqualityInput = {
  deviceModel: Scalars['String']['input'];
  lastSeen: Scalars['DateTime']['input'];
  platform: Platform;
  pushToken?: InputMaybe<Scalars['String']['input']>;
  started: Scalars['DateTime']['input'];
  token: Scalars['String']['input'];
  valid: Scalars['Boolean']['input'];
};

export type UserSessionOrderByCompositeAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserStripe = {
  __typename?: 'UserStripe';
  customerId?: Maybe<Scalars['String']['output']>;
  expressAccountId?: Maybe<Scalars['String']['output']>;
  onboardingComplete?: Maybe<Scalars['Boolean']['output']>;
};

export type UserStripeNullableCompositeFilter = {
  equals?: InputMaybe<UserStripeObjectEqualityInput>;
  is?: InputMaybe<UserStripeWhereInput>;
  isNot?: InputMaybe<UserStripeWhereInput>;
  isSet?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserStripeObjectEqualityInput = {
  customerId?: InputMaybe<Scalars['String']['input']>;
  expressAccountId?: InputMaybe<Scalars['String']['input']>;
  onboardingComplete?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserStripeOrderByInput = {
  customerId?: InputMaybe<SortOrder>;
  expressAccountId?: InputMaybe<SortOrder>;
  onboardingComplete?: InputMaybe<SortOrder>;
};

export type UserStripeWhereInput = {
  AND?: InputMaybe<Array<UserStripeWhereInput>>;
  NOT?: InputMaybe<Array<UserStripeWhereInput>>;
  OR?: InputMaybe<Array<UserStripeWhereInput>>;
  customerId?: InputMaybe<StringNullableFilter>;
  expressAccountId?: InputMaybe<StringNullableFilter>;
  onboardingComplete?: InputMaybe<BoolNullableFilter>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  about?: InputMaybe<StringNullableFilter>;
  addedManually?: InputMaybe<BoolNullableFilter>;
  addressBook?: InputMaybe<Array<AddressObjectEqualityInput>>;
  altSignup?: InputMaybe<AltSignupNullableCompositeFilter>;
  blackListed?: InputMaybe<BoolFilter>;
  communicationPrefrences?: InputMaybe<CommunicationPreferenceListRelationFilter>;
  conversationIds?: InputMaybe<StringNullableListFilter>;
  conversations?: InputMaybe<ConversationListRelationFilter>;
  countryCode?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  deactivated?: InputMaybe<BoolNullableFilter>;
  displayPicture?: InputMaybe<StringNullableFilter>;
  dmIds?: InputMaybe<StringNullableListFilter>;
  eduInstitute?: InputMaybe<EduInstituteNullableRelationFilter>;
  eduInstituteId?: InputMaybe<StringNullableFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  followedBy?: InputMaybe<UserListRelationFilter>;
  followedByIDs?: InputMaybe<StringNullableListFilter>;
  following?: InputMaybe<UserListRelationFilter>;
  followingIDs?: InputMaybe<StringNullableListFilter>;
  gender?: InputMaybe<EnumGenderNullableFilter>;
  hobbies?: InputMaybe<HobbyListRelationFilter>;
  hobbyIds?: InputMaybe<StringNullableListFilter>;
  id?: InputMaybe<StringFilter>;
  images?: InputMaybe<Array<ImageObjectEqualityInput>>;
  instagramUsername?: InputMaybe<StringNullableFilter>;
  isParent?: InputMaybe<BoolNullableFilter>;
  lastName?: InputMaybe<StringFilter>;
  legacyId?: InputMaybe<StringNullableFilter>;
  orderIds?: InputMaybe<StringNullableListFilter>;
  password?: InputMaybe<StringNullableFilter>;
  personalDMs?: InputMaybe<PersonalDmListRelationFilter>;
  personalEmail?: InputMaybe<StringNullableFilter>;
  personalMessageIds?: InputMaybe<StringNullableListFilter>;
  phoneNumber?: InputMaybe<StringFilter>;
  phoneNumberVerified?: InputMaybe<BoolFilter>;
  productListings?: InputMaybe<ProductListingListRelationFilter>;
  referralRockCode?: InputMaybe<StringNullableFilter>;
  referrer?: InputMaybe<StringNullableFilter>;
  registrationPlatform?: InputMaybe<EnumPlatformNullableFilter>;
  reportedProducts?: InputMaybe<ProductReportListRelationFilter>;
  roles?: InputMaybe<EnumRoleNullableListFilter>;
  savedDealIds?: InputMaybe<StringNullableListFilter>;
  savedDeals?: InputMaybe<DealListRelationFilter>;
  sessions?: InputMaybe<Array<UserSessionObjectEqualityInput>>;
  shoppingPreferenceIds?: InputMaybe<StringNullableListFilter>;
  shoppingPreferences?: InputMaybe<ShoppingPreferenceListRelationFilter>;
  signupV?: InputMaybe<StringNullableFilter>;
  sizes?: InputMaybe<SizesNullableCompositeFilter>;
  stripe?: InputMaybe<UserStripeNullableCompositeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  wishlist?: InputMaybe<ProductListingListRelationFilter>;
  wishlistIds?: InputMaybe<StringNullableListFilter>;
};

export type UserWithStories = {
  __typename?: 'UserWithStories';
  displayPicture: Scalars['String']['output'];
  eduInstitute: EduInstitute;
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  stories: Array<RumieStory>;
};

export type WeightCategory = {
  __typename?: 'WeightCategory';
  ProductListing?: Maybe<Array<ProductListing>>;
  active: Scalars['Boolean']['output'];
  alias: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  packageDimensions: PackageDimensions;
  packageWeight: PackageWeight;
  shippingFee: Scalars['Float']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type WeightCategoryNullableRelationFilter = {
  is?: InputMaybe<WeightCategoryWhereInput>;
  isNot?: InputMaybe<WeightCategoryWhereInput>;
};

export type WeightCategoryOrderByWithRelationInput = {
  ProductListing?: InputMaybe<ProductListingOrderByRelationAggregateInput>;
  active?: InputMaybe<SortOrder>;
  alias?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  packageDimensions?: InputMaybe<PackageDimensionsOrderByInput>;
  packageWeight?: InputMaybe<PackageWeightOrderByInput>;
  shippingFee?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type WeightCategoryWhereInput = {
  AND?: InputMaybe<Array<WeightCategoryWhereInput>>;
  NOT?: InputMaybe<Array<WeightCategoryWhereInput>>;
  OR?: InputMaybe<Array<WeightCategoryWhereInput>>;
  ProductListing?: InputMaybe<ProductListingListRelationFilter>;
  active?: InputMaybe<BoolFilter>;
  alias?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  packageDimensions?: InputMaybe<PackageDimensionsCompositeFilter>;
  packageWeight?: InputMaybe<PackageWeightCompositeFilter>;
  shippingFee?: InputMaybe<FloatFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};
