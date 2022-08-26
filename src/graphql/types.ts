export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: any;
};

export type Department = {
  __typename?: 'Department';
  depAdmEmail?: Maybe<Scalars['String']>;
  depAdmFName?: Maybe<Scalars['String']>;
  depAdmLName?: Maybe<Scalars['String']>;
  depAdmPassword?: Maybe<Scalars['String']>;
  depAdmPhone?: Maybe<Scalars['Long']>;
  depAdmUserName?: Maybe<Scalars['String']>;
  departmentStatistics?: Maybe<DepartmentStatistics>;
  deptName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type DepartmentStatistics = {
  __typename?: 'DepartmentStatistics';
  avgAttendeesPerSession?: Maybe<Scalars['Int']>;
  avgSessionDuration?: Maybe<Scalars['Long']>;
  id: Scalars['ID'];
  numOfClinicalStaff?: Maybe<Scalars['Int']>;
  numOfConsumers?: Maybe<Scalars['Int']>;
  numOfSessionsDone?: Maybe<Scalars['Int']>;
  totalLengthOfAllSessions?: Maybe<Scalars['Long']>;
};

export type MedPro = {
  __typename?: 'MedPro';
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['Long']>;
  role?: Maybe<Scalars['String']>;
  userName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMedPro?: Maybe<MedPro>;
  createPatient?: Maybe<Patient>;
  createRole?: Maybe<Role>;
  createSession?: Maybe<Session>;
};


export type MutationCreateMedProArgs = {
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['Long']>;
  role?: InputMaybe<Scalars['String']>;
  userName?: InputMaybe<Scalars['String']>;
};


export type MutationCreatePatientArgs = {
  patientEmail?: InputMaybe<Scalars['String']>;
  patientFirstName?: InputMaybe<Scalars['String']>;
  patientLastName?: InputMaybe<Scalars['String']>;
  patientPhoneNumber?: InputMaybe<Scalars['Long']>;
  patientUserName?: InputMaybe<Scalars['String']>;
};


export type MutationCreateRoleArgs = {
  role?: InputMaybe<Scalars['String']>;
};


export type MutationCreateSessionArgs = {
  guests?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  patientId?: InputMaybe<Scalars['Int']>;
  sessionOrganizerId?: InputMaybe<Scalars['Int']>;
};

export type Patient = {
  __typename?: 'Patient';
  id: Scalars['ID'];
  patientEmail?: Maybe<Scalars['String']>;
  patientFirstName?: Maybe<Scalars['String']>;
  patientLastName?: Maybe<Scalars['String']>;
  patientPassword?: Maybe<Scalars['String']>;
  patientPhoneNumber?: Maybe<Scalars['Long']>;
  patientUserName?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  currentSessionsByUsername?: Maybe<Array<Maybe<Session>>>;
  departments?: Maybe<Array<Maybe<Department>>>;
  login?: Maybe<Array<Maybe<Session>>>;
  medPro?: Maybe<Array<Maybe<MedPro>>>;
  patients?: Maybe<Array<Maybe<Patient>>>;
  resetPassword?: Maybe<Scalars['String']>;
  role?: Maybe<Array<Maybe<Role>>>;
  sessions?: Maybe<Array<Maybe<Session>>>;
  system?: Maybe<Systems>;
  systems?: Maybe<Array<Maybe<Systems>>>;
};


export type QueryCurrentSessionsByUsernameArgs = {
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryDepartmentsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type QueryLoginArgs = {
  password?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QueryMedProArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type QueryPatientsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};


export type QueryResetPasswordArgs = {
  password?: InputMaybe<Scalars['String']>;
  userType?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type QuerySystemArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QuerySystemsArgs = {
  count?: InputMaybe<Scalars['Int']>;
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['ID'];
  role?: Maybe<Scalars['String']>;
};

export type Session = {
  __typename?: 'Session';
  Department?: Maybe<Department>;
  canvasDisplayDuration?: Maybe<Scalars['Int']>;
  canvasUpdated?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  medProAsSessionOrganizer?: Maybe<MedPro>;
  medProsAsGuests?: Maybe<Array<Maybe<MedPro>>>;
  numOfAttendees?: Maybe<Scalars['Int']>;
  patient?: Maybe<Patient>;
};

export type Systems = {
  __typename?: 'Systems';
  id: Scalars['ID'];
  sysAddress?: Maybe<Scalars['String']>;
  sysAdmEmail?: Maybe<Scalars['String']>;
  sysAdmFName?: Maybe<Scalars['String']>;
  sysAdmLName?: Maybe<Scalars['String']>;
  sysAdmPassword?: Maybe<Scalars['String']>;
  sysAdmPhone?: Maybe<Scalars['Long']>;
  sysAdmUserName?: Maybe<Scalars['String']>;
  sysName?: Maybe<Scalars['String']>;
};
