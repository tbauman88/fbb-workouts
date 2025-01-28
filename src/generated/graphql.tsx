import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bigint: { input: any; output: any; }
  date: { input: any; output: any; }
  json: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']['input']>;
  _gt?: InputMaybe<Scalars['bigint']['input']>;
  _gte?: InputMaybe<Scalars['bigint']['input']>;
  _in?: InputMaybe<Array<Scalars['bigint']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bigint']['input']>;
  _lte?: InputMaybe<Scalars['bigint']['input']>;
  _neq?: InputMaybe<Scalars['bigint']['input']>;
  _nin?: InputMaybe<Array<Scalars['bigint']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "cycles" */
export type Cycles = {
  __typename?: 'cycles';
  bridge_week: Scalars['Boolean']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  cycle_number: Scalars['Int']['output'];
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  program?: Maybe<Programs>;
  program_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_cycles: Array<User_Cycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: User_Cycles_Aggregate;
  /** An array relationship */
  user_workouts: Array<User_Workouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: User_Workouts_Aggregate;
  workout_count: Scalars['Int']['output'];
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: Workouts_Aggregate;
};


/** columns and relationships of "cycles" */
export type CyclesUser_CyclesArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


/** columns and relationships of "cycles" */
export type CyclesUser_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


/** columns and relationships of "cycles" */
export type CyclesUser_WorkoutsArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


/** columns and relationships of "cycles" */
export type CyclesUser_Workouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


/** columns and relationships of "cycles" */
export type CyclesWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};


/** columns and relationships of "cycles" */
export type CyclesWorkouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};

/** aggregated selection of "cycles" */
export type Cycles_Aggregate = {
  __typename?: 'cycles_aggregate';
  aggregate?: Maybe<Cycles_Aggregate_Fields>;
  nodes: Array<Cycles>;
};

export type Cycles_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Cycles_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Cycles_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Cycles_Aggregate_Bool_Exp_Count>;
};

export type Cycles_Aggregate_Bool_Exp_Bool_And = {
  arguments: Cycles_Select_Column_Cycles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cycles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Cycles_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Cycles_Select_Column_Cycles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cycles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Cycles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Cycles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Cycles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "cycles" */
export type Cycles_Aggregate_Fields = {
  __typename?: 'cycles_aggregate_fields';
  avg?: Maybe<Cycles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Cycles_Max_Fields>;
  min?: Maybe<Cycles_Min_Fields>;
  stddev?: Maybe<Cycles_Stddev_Fields>;
  stddev_pop?: Maybe<Cycles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cycles_Stddev_Samp_Fields>;
  sum?: Maybe<Cycles_Sum_Fields>;
  var_pop?: Maybe<Cycles_Var_Pop_Fields>;
  var_samp?: Maybe<Cycles_Var_Samp_Fields>;
  variance?: Maybe<Cycles_Variance_Fields>;
};


/** aggregate fields of "cycles" */
export type Cycles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cycles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cycles" */
export type Cycles_Aggregate_Order_By = {
  avg?: InputMaybe<Cycles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cycles_Max_Order_By>;
  min?: InputMaybe<Cycles_Min_Order_By>;
  stddev?: InputMaybe<Cycles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cycles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cycles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cycles_Sum_Order_By>;
  var_pop?: InputMaybe<Cycles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cycles_Var_Samp_Order_By>;
  variance?: InputMaybe<Cycles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cycles" */
export type Cycles_Arr_Rel_Insert_Input = {
  data: Array<Cycles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cycles_On_Conflict>;
};

/** aggregate avg on columns */
export type Cycles_Avg_Fields = {
  __typename?: 'cycles_avg_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "cycles" */
export type Cycles_Avg_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cycles". All fields are combined with a logical 'AND'. */
export type Cycles_Bool_Exp = {
  _and?: InputMaybe<Array<Cycles_Bool_Exp>>;
  _not?: InputMaybe<Cycles_Bool_Exp>;
  _or?: InputMaybe<Array<Cycles_Bool_Exp>>;
  bridge_week?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  cycle_number?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  next_workout?: InputMaybe<Bigint_Comparison_Exp>;
  program?: InputMaybe<Programs_Bool_Exp>;
  program_id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_cycles?: InputMaybe<User_Cycles_Bool_Exp>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Bool_Exp>;
  user_workouts?: InputMaybe<User_Workouts_Bool_Exp>;
  user_workouts_aggregate?: InputMaybe<User_Workouts_Aggregate_Bool_Exp>;
  workout_count?: InputMaybe<Int_Comparison_Exp>;
  workouts?: InputMaybe<Workouts_Bool_Exp>;
  workouts_aggregate?: InputMaybe<Workouts_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "cycles" */
export enum Cycles_Constraint {
  /** unique or primary key constraint on columns "id" */
  CyclesPkey = 'cycles_pkey'
}

/** input type for incrementing numeric columns in table "cycles" */
export type Cycles_Inc_Input = {
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "cycles" */
export type Cycles_Insert_Input = {
  bridge_week?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program?: InputMaybe<Programs_Obj_Rel_Insert_Input>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_cycles?: InputMaybe<User_Cycles_Arr_Rel_Insert_Input>;
  user_workouts?: InputMaybe<User_Workouts_Arr_Rel_Insert_Input>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
  workouts?: InputMaybe<Workouts_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Cycles_Max_Fields = {
  __typename?: 'cycles_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  cycle_number?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_count?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "cycles" */
export type Cycles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycle_number?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cycles_Min_Fields = {
  __typename?: 'cycles_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  cycle_number?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_count?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "cycles" */
export type Cycles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycle_number?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cycles" */
export type Cycles_Mutation_Response = {
  __typename?: 'cycles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cycles>;
};

/** input type for inserting object relation for remote table "cycles" */
export type Cycles_Obj_Rel_Insert_Input = {
  data: Cycles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cycles_On_Conflict>;
};

/** on_conflict condition type for table "cycles" */
export type Cycles_On_Conflict = {
  constraint: Cycles_Constraint;
  update_columns?: Array<Cycles_Update_Column>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};

/** Ordering options when selecting data from "cycles". */
export type Cycles_Order_By = {
  bridge_week?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_number?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  next_workout?: InputMaybe<Order_By>;
  program?: InputMaybe<Programs_Order_By>;
  program_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Order_By>;
  user_workouts_aggregate?: InputMaybe<User_Workouts_Aggregate_Order_By>;
  workout_count?: InputMaybe<Order_By>;
  workouts_aggregate?: InputMaybe<Workouts_Aggregate_Order_By>;
};

/** primary key columns input for table: cycles */
export type Cycles_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "cycles" */
export enum Cycles_Select_Column {
  /** column name */
  BridgeWeek = 'bridge_week',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleNumber = 'cycle_number',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutCount = 'workout_count'
}

/** select "cycles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "cycles" */
export enum Cycles_Select_Column_Cycles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  BridgeWeek = 'bridge_week'
}

/** select "cycles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "cycles" */
export enum Cycles_Select_Column_Cycles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  BridgeWeek = 'bridge_week'
}

/** input type for updating data in table "cycles" */
export type Cycles_Set_Input = {
  bridge_week?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Cycles_Stddev_Fields = {
  __typename?: 'cycles_stddev_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "cycles" */
export type Cycles_Stddev_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cycles_Stddev_Pop_Fields = {
  __typename?: 'cycles_stddev_pop_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "cycles" */
export type Cycles_Stddev_Pop_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cycles_Stddev_Samp_Fields = {
  __typename?: 'cycles_stddev_samp_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "cycles" */
export type Cycles_Stddev_Samp_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "cycles" */
export type Cycles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cycles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Cycles_Stream_Cursor_Value_Input = {
  bridge_week?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Cycles_Sum_Fields = {
  __typename?: 'cycles_sum_fields';
  cycle_number?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['bigint']['output']>;
  workout_count?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "cycles" */
export type Cycles_Sum_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** update columns of table "cycles" */
export enum Cycles_Update_Column {
  /** column name */
  BridgeWeek = 'bridge_week',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleNumber = 'cycle_number',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  ProgramId = 'program_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutCount = 'workout_count'
}

export type Cycles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cycles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cycles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Cycles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cycles_Var_Pop_Fields = {
  __typename?: 'cycles_var_pop_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "cycles" */
export type Cycles_Var_Pop_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cycles_Var_Samp_Fields = {
  __typename?: 'cycles_var_samp_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "cycles" */
export type Cycles_Var_Samp_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cycles_Variance_Fields = {
  __typename?: 'cycles_variance_fields';
  cycle_number?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout?: Maybe<Scalars['bigint']['output']>;
  program_id?: Maybe<Scalars['Float']['output']>;
  workout_count?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "cycles" */
export type Cycles_Variance_Order_By = {
  cycle_number?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  program_id?: InputMaybe<Order_By>;
  workout_count?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']['input']>;
  _gt?: InputMaybe<Scalars['date']['input']>;
  _gte?: InputMaybe<Scalars['date']['input']>;
  _in?: InputMaybe<Array<Scalars['date']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['date']['input']>;
  _lte?: InputMaybe<Scalars['date']['input']>;
  _neq?: InputMaybe<Scalars['date']['input']>;
  _nin?: InputMaybe<Array<Scalars['date']['input']>>;
};

/** columns and relationships of "exercise_details" */
export type Exercise_Details = {
  __typename?: 'exercise_details';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  exercise?: Maybe<Exercises>;
  exercise_id?: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  levels?: Maybe<Scalars['json']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  workout_item: Workout_Items;
  workout_item_id: Scalars['bigint']['output'];
};


/** columns and relationships of "exercise_details" */
export type Exercise_DetailsLevelsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "exercise_details" */
export type Exercise_Details_Aggregate = {
  __typename?: 'exercise_details_aggregate';
  aggregate?: Maybe<Exercise_Details_Aggregate_Fields>;
  nodes: Array<Exercise_Details>;
};

export type Exercise_Details_Aggregate_Bool_Exp = {
  count?: InputMaybe<Exercise_Details_Aggregate_Bool_Exp_Count>;
};

export type Exercise_Details_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Exercise_Details_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "exercise_details" */
export type Exercise_Details_Aggregate_Fields = {
  __typename?: 'exercise_details_aggregate_fields';
  avg?: Maybe<Exercise_Details_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exercise_Details_Max_Fields>;
  min?: Maybe<Exercise_Details_Min_Fields>;
  stddev?: Maybe<Exercise_Details_Stddev_Fields>;
  stddev_pop?: Maybe<Exercise_Details_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercise_Details_Stddev_Samp_Fields>;
  sum?: Maybe<Exercise_Details_Sum_Fields>;
  var_pop?: Maybe<Exercise_Details_Var_Pop_Fields>;
  var_samp?: Maybe<Exercise_Details_Var_Samp_Fields>;
  variance?: Maybe<Exercise_Details_Variance_Fields>;
};


/** aggregate fields of "exercise_details" */
export type Exercise_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exercise_details" */
export type Exercise_Details_Aggregate_Order_By = {
  avg?: InputMaybe<Exercise_Details_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Exercise_Details_Max_Order_By>;
  min?: InputMaybe<Exercise_Details_Min_Order_By>;
  stddev?: InputMaybe<Exercise_Details_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Exercise_Details_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Exercise_Details_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Exercise_Details_Sum_Order_By>;
  var_pop?: InputMaybe<Exercise_Details_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Exercise_Details_Var_Samp_Order_By>;
  variance?: InputMaybe<Exercise_Details_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "exercise_details" */
export type Exercise_Details_Arr_Rel_Insert_Input = {
  data: Array<Exercise_Details_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercise_Details_On_Conflict>;
};

/** aggregate avg on columns */
export type Exercise_Details_Avg_Fields = {
  __typename?: 'exercise_details_avg_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exercise_details" */
export type Exercise_Details_Avg_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "exercise_details". All fields are combined with a logical 'AND'. */
export type Exercise_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Exercise_Details_Bool_Exp>>;
  _not?: InputMaybe<Exercise_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Exercise_Details_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  exercise?: InputMaybe<Exercises_Bool_Exp>;
  exercise_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  levels?: InputMaybe<Json_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  workout_item?: InputMaybe<Workout_Items_Bool_Exp>;
  workout_item_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercise_details" */
export enum Exercise_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  ExerciseDetailsPkey = 'exercise_details_pkey'
}

/** input type for incrementing numeric columns in table "exercise_details" */
export type Exercise_Details_Inc_Input = {
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "exercise_details" */
export type Exercise_Details_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise?: InputMaybe<Exercises_Obj_Rel_Insert_Input>;
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  levels?: InputMaybe<Scalars['json']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_item?: InputMaybe<Workout_Items_Obj_Rel_Insert_Input>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Exercise_Details_Max_Fields = {
  __typename?: 'exercise_details_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  exercise_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "exercise_details" */
export type Exercise_Details_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Exercise_Details_Min_Fields = {
  __typename?: 'exercise_details_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  exercise_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "exercise_details" */
export type Exercise_Details_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "exercise_details" */
export type Exercise_Details_Mutation_Response = {
  __typename?: 'exercise_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercise_Details>;
};

/** on_conflict condition type for table "exercise_details" */
export type Exercise_Details_On_Conflict = {
  constraint: Exercise_Details_Constraint;
  update_columns?: Array<Exercise_Details_Update_Column>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "exercise_details". */
export type Exercise_Details_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise?: InputMaybe<Exercises_Order_By>;
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  levels?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_item?: InputMaybe<Workout_Items_Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercise_details */
export type Exercise_Details_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "exercise_details" */
export enum Exercise_Details_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Levels = 'levels',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutItemId = 'workout_item_id'
}

/** input type for updating data in table "exercise_details" */
export type Exercise_Details_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  levels?: InputMaybe<Scalars['json']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Exercise_Details_Stddev_Fields = {
  __typename?: 'exercise_details_stddev_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exercise_details" */
export type Exercise_Details_Stddev_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Exercise_Details_Stddev_Pop_Fields = {
  __typename?: 'exercise_details_stddev_pop_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exercise_details" */
export type Exercise_Details_Stddev_Pop_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Exercise_Details_Stddev_Samp_Fields = {
  __typename?: 'exercise_details_stddev_samp_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exercise_details" */
export type Exercise_Details_Stddev_Samp_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "exercise_details" */
export type Exercise_Details_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exercise_Details_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exercise_Details_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  levels?: InputMaybe<Scalars['json']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Exercise_Details_Sum_Fields = {
  __typename?: 'exercise_details_sum_fields';
  exercise_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "exercise_details" */
export type Exercise_Details_Sum_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** update columns of table "exercise_details" */
export enum Exercise_Details_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExerciseId = 'exercise_id',
  /** column name */
  Id = 'id',
  /** column name */
  Levels = 'levels',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutItemId = 'workout_item_id'
}

export type Exercise_Details_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exercise_Details_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercise_Details_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exercise_Details_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exercise_Details_Var_Pop_Fields = {
  __typename?: 'exercise_details_var_pop_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exercise_details" */
export type Exercise_Details_Var_Pop_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Exercise_Details_Var_Samp_Fields = {
  __typename?: 'exercise_details_var_samp_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exercise_details" */
export type Exercise_Details_Var_Samp_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Exercise_Details_Variance_Fields = {
  __typename?: 'exercise_details_variance_fields';
  exercise_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exercise_details" */
export type Exercise_Details_Variance_Order_By = {
  exercise_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "exercises" */
export type Exercises = {
  __typename?: 'exercises';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  demo_video_id: Scalars['String']['output'];
  demo_video_poster: Scalars['String']['output'];
  demo_video_thumb: Scalars['String']['output'];
  demo_video_title: Scalars['String']['output'];
  demo_video_url?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  exercise_details: Array<Exercise_Details>;
  /** An aggregate relationship */
  exercise_details_aggregate: Exercise_Details_Aggregate;
  id: Scalars['bigint']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "exercises" */
export type ExercisesExercise_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


/** columns and relationships of "exercises" */
export type ExercisesExercise_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};

/** aggregated selection of "exercises" */
export type Exercises_Aggregate = {
  __typename?: 'exercises_aggregate';
  aggregate?: Maybe<Exercises_Aggregate_Fields>;
  nodes: Array<Exercises>;
};

/** aggregate fields of "exercises" */
export type Exercises_Aggregate_Fields = {
  __typename?: 'exercises_aggregate_fields';
  avg?: Maybe<Exercises_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Exercises_Max_Fields>;
  min?: Maybe<Exercises_Min_Fields>;
  stddev?: Maybe<Exercises_Stddev_Fields>;
  stddev_pop?: Maybe<Exercises_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Exercises_Stddev_Samp_Fields>;
  sum?: Maybe<Exercises_Sum_Fields>;
  var_pop?: Maybe<Exercises_Var_Pop_Fields>;
  var_samp?: Maybe<Exercises_Var_Samp_Fields>;
  variance?: Maybe<Exercises_Variance_Fields>;
};


/** aggregate fields of "exercises" */
export type Exercises_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Exercises_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Exercises_Avg_Fields = {
  __typename?: 'exercises_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "exercises". All fields are combined with a logical 'AND'. */
export type Exercises_Bool_Exp = {
  _and?: InputMaybe<Array<Exercises_Bool_Exp>>;
  _not?: InputMaybe<Exercises_Bool_Exp>;
  _or?: InputMaybe<Array<Exercises_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  demo_video_id?: InputMaybe<String_Comparison_Exp>;
  demo_video_poster?: InputMaybe<String_Comparison_Exp>;
  demo_video_thumb?: InputMaybe<String_Comparison_Exp>;
  demo_video_title?: InputMaybe<String_Comparison_Exp>;
  demo_video_url?: InputMaybe<String_Comparison_Exp>;
  exercise_details?: InputMaybe<Exercise_Details_Bool_Exp>;
  exercise_details_aggregate?: InputMaybe<Exercise_Details_Aggregate_Bool_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "exercises" */
export enum Exercises_Constraint {
  /** unique or primary key constraint on columns "demo_video_title" */
  ExercisesDemoVideoTitleUnique = 'exercises_demo_video_title_unique',
  /** unique or primary key constraint on columns "id" */
  ExercisesPkey = 'exercises_pkey'
}

/** input type for incrementing numeric columns in table "exercises" */
export type Exercises_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "exercises" */
export type Exercises_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  exercise_details?: InputMaybe<Exercise_Details_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Exercises_Max_Fields = {
  __typename?: 'exercises_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  demo_video_id?: Maybe<Scalars['String']['output']>;
  demo_video_poster?: Maybe<Scalars['String']['output']>;
  demo_video_thumb?: Maybe<Scalars['String']['output']>;
  demo_video_title?: Maybe<Scalars['String']['output']>;
  demo_video_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Exercises_Min_Fields = {
  __typename?: 'exercises_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  demo_video_id?: Maybe<Scalars['String']['output']>;
  demo_video_poster?: Maybe<Scalars['String']['output']>;
  demo_video_thumb?: Maybe<Scalars['String']['output']>;
  demo_video_title?: Maybe<Scalars['String']['output']>;
  demo_video_url?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "exercises" */
export type Exercises_Mutation_Response = {
  __typename?: 'exercises_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercises>;
};

/** input type for inserting object relation for remote table "exercises" */
export type Exercises_Obj_Rel_Insert_Input = {
  data: Exercises_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};

/** on_conflict condition type for table "exercises" */
export type Exercises_On_Conflict = {
  constraint: Exercises_Constraint;
  update_columns?: Array<Exercises_Update_Column>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};

/** Ordering options when selecting data from "exercises". */
export type Exercises_Order_By = {
  created_at?: InputMaybe<Order_By>;
  demo_video_id?: InputMaybe<Order_By>;
  demo_video_poster?: InputMaybe<Order_By>;
  demo_video_thumb?: InputMaybe<Order_By>;
  demo_video_title?: InputMaybe<Order_By>;
  demo_video_url?: InputMaybe<Order_By>;
  exercise_details_aggregate?: InputMaybe<Exercise_Details_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: exercises */
export type Exercises_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "exercises" */
export enum Exercises_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DemoVideoId = 'demo_video_id',
  /** column name */
  DemoVideoPoster = 'demo_video_poster',
  /** column name */
  DemoVideoThumb = 'demo_video_thumb',
  /** column name */
  DemoVideoTitle = 'demo_video_title',
  /** column name */
  DemoVideoUrl = 'demo_video_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "exercises" */
export type Exercises_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Exercises_Stddev_Fields = {
  __typename?: 'exercises_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Exercises_Stddev_Pop_Fields = {
  __typename?: 'exercises_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Exercises_Stddev_Samp_Fields = {
  __typename?: 'exercises_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "exercises" */
export type Exercises_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Exercises_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Exercises_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Exercises_Sum_Fields = {
  __typename?: 'exercises_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "exercises" */
export enum Exercises_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DemoVideoId = 'demo_video_id',
  /** column name */
  DemoVideoPoster = 'demo_video_poster',
  /** column name */
  DemoVideoThumb = 'demo_video_thumb',
  /** column name */
  DemoVideoTitle = 'demo_video_title',
  /** column name */
  DemoVideoUrl = 'demo_video_url',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Exercises_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Exercises_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Exercises_Set_Input>;
  /** filter the rows which have to be updated */
  where: Exercises_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Exercises_Var_Pop_Fields = {
  __typename?: 'exercises_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Exercises_Var_Samp_Fields = {
  __typename?: 'exercises_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Exercises_Variance_Fields = {
  __typename?: 'exercises_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cycles" */
  delete_cycles?: Maybe<Cycles_Mutation_Response>;
  /** delete single row from the table: "cycles" */
  delete_cycles_by_pk?: Maybe<Cycles>;
  /** delete data from the table: "exercise_details" */
  delete_exercise_details?: Maybe<Exercise_Details_Mutation_Response>;
  /** delete single row from the table: "exercise_details" */
  delete_exercise_details_by_pk?: Maybe<Exercise_Details>;
  /** delete data from the table: "exercises" */
  delete_exercises?: Maybe<Exercises_Mutation_Response>;
  /** delete single row from the table: "exercises" */
  delete_exercises_by_pk?: Maybe<Exercises>;
  /** delete data from the table: "programs" */
  delete_programs?: Maybe<Programs_Mutation_Response>;
  /** delete single row from the table: "programs" */
  delete_programs_by_pk?: Maybe<Programs>;
  /** delete data from the table: "scores" */
  delete_scores?: Maybe<Scores_Mutation_Response>;
  /** delete single row from the table: "scores" */
  delete_scores_by_pk?: Maybe<Scores>;
  /** delete data from the table: "user_cycles" */
  delete_user_cycles?: Maybe<User_Cycles_Mutation_Response>;
  /** delete single row from the table: "user_cycles" */
  delete_user_cycles_by_pk?: Maybe<User_Cycles>;
  /** delete data from the table: "user_workouts" */
  delete_user_workouts?: Maybe<User_Workouts_Mutation_Response>;
  /** delete single row from the table: "user_workouts" */
  delete_user_workouts_by_pk?: Maybe<User_Workouts>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "workout_item_scores" */
  delete_workout_item_scores?: Maybe<Workout_Item_Scores_Mutation_Response>;
  /** delete single row from the table: "workout_item_scores" */
  delete_workout_item_scores_by_pk?: Maybe<Workout_Item_Scores>;
  /** delete data from the table: "workout_items" */
  delete_workout_items?: Maybe<Workout_Items_Mutation_Response>;
  /** delete single row from the table: "workout_items" */
  delete_workout_items_by_pk?: Maybe<Workout_Items>;
  /** delete data from the table: "workouts" */
  delete_workouts?: Maybe<Workouts_Mutation_Response>;
  /** delete single row from the table: "workouts" */
  delete_workouts_by_pk?: Maybe<Workouts>;
  /** insert data into the table: "cycles" */
  insert_cycles?: Maybe<Cycles_Mutation_Response>;
  /** insert a single row into the table: "cycles" */
  insert_cycles_one?: Maybe<Cycles>;
  /** insert data into the table: "exercise_details" */
  insert_exercise_details?: Maybe<Exercise_Details_Mutation_Response>;
  /** insert a single row into the table: "exercise_details" */
  insert_exercise_details_one?: Maybe<Exercise_Details>;
  /** insert data into the table: "exercises" */
  insert_exercises?: Maybe<Exercises_Mutation_Response>;
  /** insert a single row into the table: "exercises" */
  insert_exercises_one?: Maybe<Exercises>;
  /** insert data into the table: "programs" */
  insert_programs?: Maybe<Programs_Mutation_Response>;
  /** insert a single row into the table: "programs" */
  insert_programs_one?: Maybe<Programs>;
  /** insert data into the table: "scores" */
  insert_scores?: Maybe<Scores_Mutation_Response>;
  /** insert a single row into the table: "scores" */
  insert_scores_one?: Maybe<Scores>;
  /** insert data into the table: "user_cycles" */
  insert_user_cycles?: Maybe<User_Cycles_Mutation_Response>;
  /** insert a single row into the table: "user_cycles" */
  insert_user_cycles_one?: Maybe<User_Cycles>;
  /** insert data into the table: "user_workouts" */
  insert_user_workouts?: Maybe<User_Workouts_Mutation_Response>;
  /** insert a single row into the table: "user_workouts" */
  insert_user_workouts_one?: Maybe<User_Workouts>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "workout_item_scores" */
  insert_workout_item_scores?: Maybe<Workout_Item_Scores_Mutation_Response>;
  /** insert a single row into the table: "workout_item_scores" */
  insert_workout_item_scores_one?: Maybe<Workout_Item_Scores>;
  /** insert data into the table: "workout_items" */
  insert_workout_items?: Maybe<Workout_Items_Mutation_Response>;
  /** insert a single row into the table: "workout_items" */
  insert_workout_items_one?: Maybe<Workout_Items>;
  /** insert data into the table: "workouts" */
  insert_workouts?: Maybe<Workouts_Mutation_Response>;
  /** insert a single row into the table: "workouts" */
  insert_workouts_one?: Maybe<Workouts>;
  /** update data of the table: "cycles" */
  update_cycles?: Maybe<Cycles_Mutation_Response>;
  /** update single row of the table: "cycles" */
  update_cycles_by_pk?: Maybe<Cycles>;
  /** update multiples rows of table: "cycles" */
  update_cycles_many?: Maybe<Array<Maybe<Cycles_Mutation_Response>>>;
  /** update data of the table: "exercise_details" */
  update_exercise_details?: Maybe<Exercise_Details_Mutation_Response>;
  /** update single row of the table: "exercise_details" */
  update_exercise_details_by_pk?: Maybe<Exercise_Details>;
  /** update multiples rows of table: "exercise_details" */
  update_exercise_details_many?: Maybe<Array<Maybe<Exercise_Details_Mutation_Response>>>;
  /** update data of the table: "exercises" */
  update_exercises?: Maybe<Exercises_Mutation_Response>;
  /** update single row of the table: "exercises" */
  update_exercises_by_pk?: Maybe<Exercises>;
  /** update multiples rows of table: "exercises" */
  update_exercises_many?: Maybe<Array<Maybe<Exercises_Mutation_Response>>>;
  /** update data of the table: "programs" */
  update_programs?: Maybe<Programs_Mutation_Response>;
  /** update single row of the table: "programs" */
  update_programs_by_pk?: Maybe<Programs>;
  /** update multiples rows of table: "programs" */
  update_programs_many?: Maybe<Array<Maybe<Programs_Mutation_Response>>>;
  /** update data of the table: "scores" */
  update_scores?: Maybe<Scores_Mutation_Response>;
  /** update single row of the table: "scores" */
  update_scores_by_pk?: Maybe<Scores>;
  /** update multiples rows of table: "scores" */
  update_scores_many?: Maybe<Array<Maybe<Scores_Mutation_Response>>>;
  /** update data of the table: "user_cycles" */
  update_user_cycles?: Maybe<User_Cycles_Mutation_Response>;
  /** update single row of the table: "user_cycles" */
  update_user_cycles_by_pk?: Maybe<User_Cycles>;
  /** update multiples rows of table: "user_cycles" */
  update_user_cycles_many?: Maybe<Array<Maybe<User_Cycles_Mutation_Response>>>;
  /** update data of the table: "user_workouts" */
  update_user_workouts?: Maybe<User_Workouts_Mutation_Response>;
  /** update single row of the table: "user_workouts" */
  update_user_workouts_by_pk?: Maybe<User_Workouts>;
  /** update multiples rows of table: "user_workouts" */
  update_user_workouts_many?: Maybe<Array<Maybe<User_Workouts_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "workout_item_scores" */
  update_workout_item_scores?: Maybe<Workout_Item_Scores_Mutation_Response>;
  /** update single row of the table: "workout_item_scores" */
  update_workout_item_scores_by_pk?: Maybe<Workout_Item_Scores>;
  /** update multiples rows of table: "workout_item_scores" */
  update_workout_item_scores_many?: Maybe<Array<Maybe<Workout_Item_Scores_Mutation_Response>>>;
  /** update data of the table: "workout_items" */
  update_workout_items?: Maybe<Workout_Items_Mutation_Response>;
  /** update single row of the table: "workout_items" */
  update_workout_items_by_pk?: Maybe<Workout_Items>;
  /** update multiples rows of table: "workout_items" */
  update_workout_items_many?: Maybe<Array<Maybe<Workout_Items_Mutation_Response>>>;
  /** update data of the table: "workouts" */
  update_workouts?: Maybe<Workouts_Mutation_Response>;
  /** update single row of the table: "workouts" */
  update_workouts_by_pk?: Maybe<Workouts>;
  /** update multiples rows of table: "workouts" */
  update_workouts_many?: Maybe<Array<Maybe<Workouts_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_CyclesArgs = {
  where: Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Exercise_DetailsArgs = {
  where: Exercise_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercise_Details_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ExercisesArgs = {
  where: Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Exercises_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProgramsArgs = {
  where: Programs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Programs_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ScoresArgs = {
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_CyclesArgs = {
  where: User_Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Cycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_WorkoutsArgs = {
  where: User_Workouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Workouts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_Item_ScoresArgs = {
  where: Workout_Item_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Item_Scores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Workout_ItemsArgs = {
  where: Workout_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workout_Items_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootDelete_WorkoutsArgs = {
  where: Workouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Workouts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type Mutation_RootInsert_CyclesArgs = {
  objects: Array<Cycles_Insert_Input>;
  on_conflict?: InputMaybe<Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cycles_OneArgs = {
  object: Cycles_Insert_Input;
  on_conflict?: InputMaybe<Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_DetailsArgs = {
  objects: Array<Exercise_Details_Insert_Input>;
  on_conflict?: InputMaybe<Exercise_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercise_Details_OneArgs = {
  object: Exercise_Details_Insert_Input;
  on_conflict?: InputMaybe<Exercise_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ExercisesArgs = {
  objects: Array<Exercises_Insert_Input>;
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Exercises_OneArgs = {
  object: Exercises_Insert_Input;
  on_conflict?: InputMaybe<Exercises_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProgramsArgs = {
  objects: Array<Programs_Insert_Input>;
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Programs_OneArgs = {
  object: Programs_Insert_Input;
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ScoresArgs = {
  objects: Array<Scores_Insert_Input>;
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scores_OneArgs = {
  object: Scores_Insert_Input;
  on_conflict?: InputMaybe<Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CyclesArgs = {
  objects: Array<User_Cycles_Insert_Input>;
  on_conflict?: InputMaybe<User_Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Cycles_OneArgs = {
  object: User_Cycles_Insert_Input;
  on_conflict?: InputMaybe<User_Cycles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_WorkoutsArgs = {
  objects: Array<User_Workouts_Insert_Input>;
  on_conflict?: InputMaybe<User_Workouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Workouts_OneArgs = {
  object: User_Workouts_Insert_Input;
  on_conflict?: InputMaybe<User_Workouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Item_ScoresArgs = {
  objects: Array<Workout_Item_Scores_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Item_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Item_Scores_OneArgs = {
  object: Workout_Item_Scores_Insert_Input;
  on_conflict?: InputMaybe<Workout_Item_Scores_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_ItemsArgs = {
  objects: Array<Workout_Items_Insert_Input>;
  on_conflict?: InputMaybe<Workout_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workout_Items_OneArgs = {
  object: Workout_Items_Insert_Input;
  on_conflict?: InputMaybe<Workout_Items_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_WorkoutsArgs = {
  objects: Array<Workouts_Insert_Input>;
  on_conflict?: InputMaybe<Workouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Workouts_OneArgs = {
  object: Workouts_Insert_Input;
  on_conflict?: InputMaybe<Workouts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CyclesArgs = {
  _inc?: InputMaybe<Cycles_Inc_Input>;
  _set?: InputMaybe<Cycles_Set_Input>;
  where: Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cycles_By_PkArgs = {
  _inc?: InputMaybe<Cycles_Inc_Input>;
  _set?: InputMaybe<Cycles_Set_Input>;
  pk_columns: Cycles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cycles_ManyArgs = {
  updates: Array<Cycles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_DetailsArgs = {
  _inc?: InputMaybe<Exercise_Details_Inc_Input>;
  _set?: InputMaybe<Exercise_Details_Set_Input>;
  where: Exercise_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Details_By_PkArgs = {
  _inc?: InputMaybe<Exercise_Details_Inc_Input>;
  _set?: InputMaybe<Exercise_Details_Set_Input>;
  pk_columns: Exercise_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercise_Details_ManyArgs = {
  updates: Array<Exercise_Details_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ExercisesArgs = {
  _inc?: InputMaybe<Exercises_Inc_Input>;
  _set?: InputMaybe<Exercises_Set_Input>;
  where: Exercises_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Exercises_By_PkArgs = {
  _inc?: InputMaybe<Exercises_Inc_Input>;
  _set?: InputMaybe<Exercises_Set_Input>;
  pk_columns: Exercises_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Exercises_ManyArgs = {
  updates: Array<Exercises_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProgramsArgs = {
  _inc?: InputMaybe<Programs_Inc_Input>;
  _set?: InputMaybe<Programs_Set_Input>;
  where: Programs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Programs_By_PkArgs = {
  _inc?: InputMaybe<Programs_Inc_Input>;
  _set?: InputMaybe<Programs_Set_Input>;
  pk_columns: Programs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Programs_ManyArgs = {
  updates: Array<Programs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ScoresArgs = {
  _inc?: InputMaybe<Scores_Inc_Input>;
  _set?: InputMaybe<Scores_Set_Input>;
  where: Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scores_By_PkArgs = {
  _inc?: InputMaybe<Scores_Inc_Input>;
  _set?: InputMaybe<Scores_Set_Input>;
  pk_columns: Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scores_ManyArgs = {
  updates: Array<Scores_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_CyclesArgs = {
  _inc?: InputMaybe<User_Cycles_Inc_Input>;
  _set?: InputMaybe<User_Cycles_Set_Input>;
  where: User_Cycles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cycles_By_PkArgs = {
  _inc?: InputMaybe<User_Cycles_Inc_Input>;
  _set?: InputMaybe<User_Cycles_Set_Input>;
  pk_columns: User_Cycles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cycles_ManyArgs = {
  updates: Array<User_Cycles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_WorkoutsArgs = {
  _inc?: InputMaybe<User_Workouts_Inc_Input>;
  _set?: InputMaybe<User_Workouts_Set_Input>;
  where: User_Workouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Workouts_By_PkArgs = {
  _inc?: InputMaybe<User_Workouts_Inc_Input>;
  _set?: InputMaybe<User_Workouts_Set_Input>;
  pk_columns: User_Workouts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Workouts_ManyArgs = {
  updates: Array<User_Workouts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Item_ScoresArgs = {
  _inc?: InputMaybe<Workout_Item_Scores_Inc_Input>;
  _set?: InputMaybe<Workout_Item_Scores_Set_Input>;
  where: Workout_Item_Scores_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Item_Scores_By_PkArgs = {
  _inc?: InputMaybe<Workout_Item_Scores_Inc_Input>;
  _set?: InputMaybe<Workout_Item_Scores_Set_Input>;
  pk_columns: Workout_Item_Scores_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Item_Scores_ManyArgs = {
  updates: Array<Workout_Item_Scores_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_ItemsArgs = {
  _inc?: InputMaybe<Workout_Items_Inc_Input>;
  _set?: InputMaybe<Workout_Items_Set_Input>;
  where: Workout_Items_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Items_By_PkArgs = {
  _inc?: InputMaybe<Workout_Items_Inc_Input>;
  _set?: InputMaybe<Workout_Items_Set_Input>;
  pk_columns: Workout_Items_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workout_Items_ManyArgs = {
  updates: Array<Workout_Items_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_WorkoutsArgs = {
  _inc?: InputMaybe<Workouts_Inc_Input>;
  _set?: InputMaybe<Workouts_Set_Input>;
  where: Workouts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Workouts_By_PkArgs = {
  _inc?: InputMaybe<Workouts_Inc_Input>;
  _set?: InputMaybe<Workouts_Set_Input>;
  pk_columns: Workouts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Workouts_ManyArgs = {
  updates: Array<Workouts_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "programs" */
export type Programs = {
  __typename?: 'programs';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: Cycles_Aggregate;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};


/** columns and relationships of "programs" */
export type ProgramsCyclesArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


/** columns and relationships of "programs" */
export type ProgramsCycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};

/** aggregated selection of "programs" */
export type Programs_Aggregate = {
  __typename?: 'programs_aggregate';
  aggregate?: Maybe<Programs_Aggregate_Fields>;
  nodes: Array<Programs>;
};

/** aggregate fields of "programs" */
export type Programs_Aggregate_Fields = {
  __typename?: 'programs_aggregate_fields';
  avg?: Maybe<Programs_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Programs_Max_Fields>;
  min?: Maybe<Programs_Min_Fields>;
  stddev?: Maybe<Programs_Stddev_Fields>;
  stddev_pop?: Maybe<Programs_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Programs_Stddev_Samp_Fields>;
  sum?: Maybe<Programs_Sum_Fields>;
  var_pop?: Maybe<Programs_Var_Pop_Fields>;
  var_samp?: Maybe<Programs_Var_Samp_Fields>;
  variance?: Maybe<Programs_Variance_Fields>;
};


/** aggregate fields of "programs" */
export type Programs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Programs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Programs_Avg_Fields = {
  __typename?: 'programs_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "programs". All fields are combined with a logical 'AND'. */
export type Programs_Bool_Exp = {
  _and?: InputMaybe<Array<Programs_Bool_Exp>>;
  _not?: InputMaybe<Programs_Bool_Exp>;
  _or?: InputMaybe<Array<Programs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  cycles?: InputMaybe<Cycles_Bool_Exp>;
  cycles_aggregate?: InputMaybe<Cycles_Aggregate_Bool_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
};

/** unique or primary key constraints on table "programs" */
export enum Programs_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProgramsPkey = 'programs_pkey'
}

/** input type for incrementing numeric columns in table "programs" */
export type Programs_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "programs" */
export type Programs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycles?: InputMaybe<Cycles_Arr_Rel_Insert_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type Programs_Max_Fields = {
  __typename?: 'programs_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Programs_Min_Fields = {
  __typename?: 'programs_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "programs" */
export type Programs_Mutation_Response = {
  __typename?: 'programs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Programs>;
};

/** input type for inserting object relation for remote table "programs" */
export type Programs_Obj_Rel_Insert_Input = {
  data: Programs_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Programs_On_Conflict>;
};

/** on_conflict condition type for table "programs" */
export type Programs_On_Conflict = {
  constraint: Programs_Constraint;
  update_columns?: Array<Programs_Update_Column>;
  where?: InputMaybe<Programs_Bool_Exp>;
};

/** Ordering options when selecting data from "programs". */
export type Programs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycles_aggregate?: InputMaybe<Cycles_Aggregate_Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: programs */
export type Programs_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "programs" */
export enum Programs_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "programs" */
export type Programs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Programs_Stddev_Fields = {
  __typename?: 'programs_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Programs_Stddev_Pop_Fields = {
  __typename?: 'programs_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Programs_Stddev_Samp_Fields = {
  __typename?: 'programs_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "programs" */
export type Programs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Programs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Programs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Programs_Sum_Fields = {
  __typename?: 'programs_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "programs" */
export enum Programs_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Programs_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Programs_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Programs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Programs_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Programs_Var_Pop_Fields = {
  __typename?: 'programs_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Programs_Var_Samp_Fields = {
  __typename?: 'programs_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Programs_Variance_Fields = {
  __typename?: 'programs_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: Cycles_Aggregate;
  /** fetch data from the table: "cycles" using primary key columns */
  cycles_by_pk?: Maybe<Cycles>;
  /** An array relationship */
  exercise_details: Array<Exercise_Details>;
  /** An aggregate relationship */
  exercise_details_aggregate: Exercise_Details_Aggregate;
  /** fetch data from the table: "exercise_details" using primary key columns */
  exercise_details_by_pk?: Maybe<Exercise_Details>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: Exercises_Aggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk?: Maybe<Exercises>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: Programs_Aggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk?: Maybe<Programs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** An array relationship */
  user_cycles: Array<User_Cycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: User_Cycles_Aggregate;
  /** fetch data from the table: "user_cycles" using primary key columns */
  user_cycles_by_pk?: Maybe<User_Cycles>;
  /** An array relationship */
  user_workouts: Array<User_Workouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: User_Workouts_Aggregate;
  /** fetch data from the table: "user_workouts" using primary key columns */
  user_workouts_by_pk?: Maybe<User_Workouts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "workout_item_scores" */
  workout_item_scores: Array<Workout_Item_Scores>;
  /** fetch aggregated fields from the table: "workout_item_scores" */
  workout_item_scores_aggregate: Workout_Item_Scores_Aggregate;
  /** fetch data from the table: "workout_item_scores" using primary key columns */
  workout_item_scores_by_pk?: Maybe<Workout_Item_Scores>;
  /** An array relationship */
  workout_items: Array<Workout_Items>;
  /** An aggregate relationship */
  workout_items_aggregate: Workout_Items_Aggregate;
  /** fetch data from the table: "workout_items" using primary key columns */
  workout_items_by_pk?: Maybe<Workout_Items>;
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: Workouts_Aggregate;
  /** fetch data from the table: "workouts" using primary key columns */
  workouts_by_pk?: Maybe<Workouts>;
};


export type Query_RootCyclesArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


export type Query_RootCycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


export type Query_RootCycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootExercise_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


export type Query_RootExercise_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


export type Query_RootExercise_Details_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Query_RootExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Query_RootExercises_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootProgramsArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Query_RootPrograms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Query_RootPrograms_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Query_RootScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Query_RootScores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUser_CyclesArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


export type Query_RootUser_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


export type Query_RootUser_Cycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootUser_WorkoutsArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


export type Query_RootUser_Workouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


export type Query_RootUser_Workouts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootWorkout_Item_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


export type Query_RootWorkout_Item_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


export type Query_RootWorkout_Item_Scores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootWorkout_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


export type Query_RootWorkout_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


export type Query_RootWorkout_Items_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Query_RootWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};


export type Query_RootWorkouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};


export type Query_RootWorkouts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};

/** columns and relationships of "scores" */
export type Scores = {
  __typename?: 'scores';
  date: Scalars['date']['output'];
  id: Scalars['bigint']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  program: Scalars['String']['output'];
  section_notes?: Maybe<Scalars['json']['output']>;
};


/** columns and relationships of "scores" */
export type ScoresSection_NotesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "scores" */
export type Scores_Aggregate = {
  __typename?: 'scores_aggregate';
  aggregate?: Maybe<Scores_Aggregate_Fields>;
  nodes: Array<Scores>;
};

/** aggregate fields of "scores" */
export type Scores_Aggregate_Fields = {
  __typename?: 'scores_aggregate_fields';
  avg?: Maybe<Scores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Scores_Max_Fields>;
  min?: Maybe<Scores_Min_Fields>;
  stddev?: Maybe<Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Scores_Sum_Fields>;
  var_pop?: Maybe<Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Scores_Var_Samp_Fields>;
  variance?: Maybe<Scores_Variance_Fields>;
};


/** aggregate fields of "scores" */
export type Scores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Scores_Avg_Fields = {
  __typename?: 'scores_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scores". All fields are combined with a logical 'AND'. */
export type Scores_Bool_Exp = {
  _and?: InputMaybe<Array<Scores_Bool_Exp>>;
  _not?: InputMaybe<Scores_Bool_Exp>;
  _or?: InputMaybe<Array<Scores_Bool_Exp>>;
  date?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  program?: InputMaybe<String_Comparison_Exp>;
  section_notes?: InputMaybe<Json_Comparison_Exp>;
};

/** unique or primary key constraints on table "scores" */
export enum Scores_Constraint {
  /** unique or primary key constraint on columns "date" */
  ScoresDateUnique = 'scores_date_unique',
  /** unique or primary key constraint on columns "id" */
  ScoresPkey = 'scores_pkey'
}

/** input type for incrementing numeric columns in table "scores" */
export type Scores_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "scores" */
export type Scores_Insert_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type Scores_Max_Fields = {
  __typename?: 'scores_max_fields';
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  program?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Scores_Min_Fields = {
  __typename?: 'scores_min_fields';
  date?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  program?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "scores" */
export type Scores_Mutation_Response = {
  __typename?: 'scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scores>;
};

/** on_conflict condition type for table "scores" */
export type Scores_On_Conflict = {
  constraint: Scores_Constraint;
  update_columns?: Array<Scores_Update_Column>;
  where?: InputMaybe<Scores_Bool_Exp>;
};

/** Ordering options when selecting data from "scores". */
export type Scores_Order_By = {
  date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  program?: InputMaybe<Order_By>;
  section_notes?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scores */
export type Scores_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "scores" */
export enum Scores_Select_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Program = 'program',
  /** column name */
  SectionNotes = 'section_notes'
}

/** input type for updating data in table "scores" */
export type Scores_Set_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate stddev on columns */
export type Scores_Stddev_Fields = {
  __typename?: 'scores_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Scores_Stddev_Pop_Fields = {
  __typename?: 'scores_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Scores_Stddev_Samp_Fields = {
  __typename?: 'scores_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scores" */
export type Scores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Scores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Scores_Stream_Cursor_Value_Input = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate sum on columns */
export type Scores_Sum_Fields = {
  __typename?: 'scores_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "scores" */
export enum Scores_Update_Column {
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Program = 'program',
  /** column name */
  SectionNotes = 'section_notes'
}

export type Scores_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Scores_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Scores_Set_Input>;
  /** filter the rows which have to be updated */
  where: Scores_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Scores_Var_Pop_Fields = {
  __typename?: 'scores_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Scores_Var_Samp_Fields = {
  __typename?: 'scores_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Scores_Variance_Fields = {
  __typename?: 'scores_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: Cycles_Aggregate;
  /** fetch data from the table: "cycles" using primary key columns */
  cycles_by_pk?: Maybe<Cycles>;
  /** fetch data from the table in a streaming manner: "cycles" */
  cycles_stream: Array<Cycles>;
  /** An array relationship */
  exercise_details: Array<Exercise_Details>;
  /** An aggregate relationship */
  exercise_details_aggregate: Exercise_Details_Aggregate;
  /** fetch data from the table: "exercise_details" using primary key columns */
  exercise_details_by_pk?: Maybe<Exercise_Details>;
  /** fetch data from the table in a streaming manner: "exercise_details" */
  exercise_details_stream: Array<Exercise_Details>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: Exercises_Aggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk?: Maybe<Exercises>;
  /** fetch data from the table in a streaming manner: "exercises" */
  exercises_stream: Array<Exercises>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: Programs_Aggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk?: Maybe<Programs>;
  /** fetch data from the table in a streaming manner: "programs" */
  programs_stream: Array<Programs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: Scores_Aggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk?: Maybe<Scores>;
  /** fetch data from the table in a streaming manner: "scores" */
  scores_stream: Array<Scores>;
  /** An array relationship */
  user_cycles: Array<User_Cycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: User_Cycles_Aggregate;
  /** fetch data from the table: "user_cycles" using primary key columns */
  user_cycles_by_pk?: Maybe<User_Cycles>;
  /** fetch data from the table in a streaming manner: "user_cycles" */
  user_cycles_stream: Array<User_Cycles>;
  /** An array relationship */
  user_workouts: Array<User_Workouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: User_Workouts_Aggregate;
  /** fetch data from the table: "user_workouts" using primary key columns */
  user_workouts_by_pk?: Maybe<User_Workouts>;
  /** fetch data from the table in a streaming manner: "user_workouts" */
  user_workouts_stream: Array<User_Workouts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "workout_item_scores" */
  workout_item_scores: Array<Workout_Item_Scores>;
  /** fetch aggregated fields from the table: "workout_item_scores" */
  workout_item_scores_aggregate: Workout_Item_Scores_Aggregate;
  /** fetch data from the table: "workout_item_scores" using primary key columns */
  workout_item_scores_by_pk?: Maybe<Workout_Item_Scores>;
  /** fetch data from the table in a streaming manner: "workout_item_scores" */
  workout_item_scores_stream: Array<Workout_Item_Scores>;
  /** An array relationship */
  workout_items: Array<Workout_Items>;
  /** An aggregate relationship */
  workout_items_aggregate: Workout_Items_Aggregate;
  /** fetch data from the table: "workout_items" using primary key columns */
  workout_items_by_pk?: Maybe<Workout_Items>;
  /** fetch data from the table in a streaming manner: "workout_items" */
  workout_items_stream: Array<Workout_Items>;
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: Workouts_Aggregate;
  /** fetch data from the table: "workouts" using primary key columns */
  workouts_by_pk?: Maybe<Workouts>;
  /** fetch data from the table in a streaming manner: "workouts" */
  workouts_stream: Array<Workouts>;
};


export type Subscription_RootCyclesArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


export type Subscription_RootCycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Cycles_Order_By>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


export type Subscription_RootCycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootCycles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Cycles_Stream_Cursor_Input>>;
  where?: InputMaybe<Cycles_Bool_Exp>;
};


export type Subscription_RootExercise_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


export type Subscription_RootExercise_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


export type Subscription_RootExercise_Details_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootExercise_Details_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exercise_Details_Stream_Cursor_Input>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


export type Subscription_RootExercisesArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootExercises_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercises_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercises_Order_By>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootExercises_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootExercises_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Exercises_Stream_Cursor_Input>>;
  where?: InputMaybe<Exercises_Bool_Exp>;
};


export type Subscription_RootProgramsArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootPrograms_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Programs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Programs_Order_By>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootPrograms_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootPrograms_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Programs_Stream_Cursor_Input>>;
  where?: InputMaybe<Programs_Bool_Exp>;
};


export type Subscription_RootScoresArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Scores_Order_By>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootScores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootScores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Scores_Stream_Cursor_Input>>;
  where?: InputMaybe<Scores_Bool_Exp>;
};


export type Subscription_RootUser_CyclesArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


export type Subscription_RootUser_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


export type Subscription_RootUser_Cycles_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUser_Cycles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Cycles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


export type Subscription_RootUser_WorkoutsArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


export type Subscription_RootUser_Workouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


export type Subscription_RootUser_Workouts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Workouts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Workouts_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootWorkout_Item_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


export type Subscription_RootWorkout_Item_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


export type Subscription_RootWorkout_Item_Scores_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootWorkout_Item_Scores_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Item_Scores_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


export type Subscription_RootWorkout_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


export type Subscription_RootWorkout_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


export type Subscription_RootWorkout_Items_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootWorkout_Items_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workout_Items_Stream_Cursor_Input>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


export type Subscription_RootWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};


export type Subscription_RootWorkouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workouts_Order_By>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};


export type Subscription_RootWorkouts_By_PkArgs = {
  id: Scalars['bigint']['input'];
};


export type Subscription_RootWorkouts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Workouts_Stream_Cursor_Input>>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_cycles" */
export type User_Cycles = {
  __typename?: 'user_cycles';
  completed: Scalars['Boolean']['output'];
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_workout: Scalars['Int']['output'];
  /** An object relationship */
  cycle: Cycles;
  cycle_id: Scalars['bigint']['output'];
  id: Scalars['bigint']['output'];
  start_date: Scalars['date']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
  /** An object relationship */
  workout: Workouts;
};

/** aggregated selection of "user_cycles" */
export type User_Cycles_Aggregate = {
  __typename?: 'user_cycles_aggregate';
  aggregate?: Maybe<User_Cycles_Aggregate_Fields>;
  nodes: Array<User_Cycles>;
};

export type User_Cycles_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<User_Cycles_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<User_Cycles_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<User_Cycles_Aggregate_Bool_Exp_Count>;
};

export type User_Cycles_Aggregate_Bool_Exp_Bool_And = {
  arguments: User_Cycles_Select_Column_User_Cycles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Cycles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Cycles_Aggregate_Bool_Exp_Bool_Or = {
  arguments: User_Cycles_Select_Column_User_Cycles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Cycles_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type User_Cycles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Cycles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Cycles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_cycles" */
export type User_Cycles_Aggregate_Fields = {
  __typename?: 'user_cycles_aggregate_fields';
  avg?: Maybe<User_Cycles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Cycles_Max_Fields>;
  min?: Maybe<User_Cycles_Min_Fields>;
  stddev?: Maybe<User_Cycles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Cycles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Cycles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Cycles_Sum_Fields>;
  var_pop?: Maybe<User_Cycles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Cycles_Var_Samp_Fields>;
  variance?: Maybe<User_Cycles_Variance_Fields>;
};


/** aggregate fields of "user_cycles" */
export type User_Cycles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Cycles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_cycles" */
export type User_Cycles_Aggregate_Order_By = {
  avg?: InputMaybe<User_Cycles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Cycles_Max_Order_By>;
  min?: InputMaybe<User_Cycles_Min_Order_By>;
  stddev?: InputMaybe<User_Cycles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Cycles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Cycles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Cycles_Sum_Order_By>;
  var_pop?: InputMaybe<User_Cycles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Cycles_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Cycles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_cycles" */
export type User_Cycles_Arr_Rel_Insert_Input = {
  data: Array<User_Cycles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Cycles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Cycles_Avg_Fields = {
  __typename?: 'user_cycles_avg_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_cycles" */
export type User_Cycles_Avg_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_cycles". All fields are combined with a logical 'AND'. */
export type User_Cycles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Cycles_Bool_Exp>>;
  _not?: InputMaybe<User_Cycles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Cycles_Bool_Exp>>;
  completed?: InputMaybe<Boolean_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_workout?: InputMaybe<Int_Comparison_Exp>;
  cycle?: InputMaybe<Cycles_Bool_Exp>;
  cycle_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  start_date?: InputMaybe<Date_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Bigint_Comparison_Exp>;
  workout?: InputMaybe<Workouts_Bool_Exp>;
};

/** unique or primary key constraints on table "user_cycles" */
export enum User_Cycles_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserCyclesPkey = 'user_cycles_pkey'
}

/** input type for incrementing numeric columns in table "user_cycles" */
export type User_Cycles_Inc_Input = {
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_cycles" */
export type User_Cycles_Insert_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle?: InputMaybe<Cycles_Obj_Rel_Insert_Input>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout?: InputMaybe<Workouts_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Cycles_Max_Fields = {
  __typename?: 'user_cycles_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_workout?: Maybe<Scalars['Int']['output']>;
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_cycles" */
export type User_Cycles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Cycles_Min_Fields = {
  __typename?: 'user_cycles_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  current_workout?: Maybe<Scalars['Int']['output']>;
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  start_date?: Maybe<Scalars['date']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_cycles" */
export type User_Cycles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_cycles" */
export type User_Cycles_Mutation_Response = {
  __typename?: 'user_cycles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Cycles>;
};

/** on_conflict condition type for table "user_cycles" */
export type User_Cycles_On_Conflict = {
  constraint: User_Cycles_Constraint;
  update_columns?: Array<User_Cycles_Update_Column>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_cycles". */
export type User_Cycles_Order_By = {
  completed?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  current_workout?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Cycles_Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  start_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  workout?: InputMaybe<Workouts_Order_By>;
};

/** primary key columns input for table: user_cycles */
export type User_Cycles_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_cycles" */
export enum User_Cycles_Select_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentWorkout = 'current_workout',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** select "user_cycles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_cycles" */
export enum User_Cycles_Select_Column_User_Cycles_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** select "user_cycles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_cycles" */
export enum User_Cycles_Select_Column_User_Cycles_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  Completed = 'completed'
}

/** input type for updating data in table "user_cycles" */
export type User_Cycles_Set_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Cycles_Stddev_Fields = {
  __typename?: 'user_cycles_stddev_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_cycles" */
export type User_Cycles_Stddev_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Cycles_Stddev_Pop_Fields = {
  __typename?: 'user_cycles_stddev_pop_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_cycles" */
export type User_Cycles_Stddev_Pop_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Cycles_Stddev_Samp_Fields = {
  __typename?: 'user_cycles_stddev_samp_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_cycles" */
export type User_Cycles_Stddev_Samp_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_cycles" */
export type User_Cycles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Cycles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Cycles_Stream_Cursor_Value_Input = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['date']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Cycles_Sum_Fields = {
  __typename?: 'user_cycles_sum_fields';
  current_workout?: Maybe<Scalars['Int']['output']>;
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  user_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_cycles" */
export type User_Cycles_Sum_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_cycles" */
export enum User_Cycles_Update_Column {
  /** column name */
  Completed = 'completed',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CurrentWorkout = 'current_workout',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  Id = 'id',
  /** column name */
  StartDate = 'start_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Cycles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Cycles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Cycles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Cycles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Cycles_Var_Pop_Fields = {
  __typename?: 'user_cycles_var_pop_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_cycles" */
export type User_Cycles_Var_Pop_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Cycles_Var_Samp_Fields = {
  __typename?: 'user_cycles_var_samp_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_cycles" */
export type User_Cycles_Var_Samp_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Cycles_Variance_Fields = {
  __typename?: 'user_cycles_variance_fields';
  current_workout?: Maybe<Scalars['Float']['output']>;
  cycle_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_cycles" */
export type User_Cycles_Variance_Order_By = {
  current_workout?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_workouts" */
export type User_Workouts = {
  __typename?: 'user_workouts';
  completed_at: Scalars['date']['output'];
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  cycle: Cycles;
  cycle_id: Scalars['bigint']['output'];
  id: Scalars['uuid']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  workout: Workouts;
  workout_id: Scalars['bigint']['output'];
};

/** aggregated selection of "user_workouts" */
export type User_Workouts_Aggregate = {
  __typename?: 'user_workouts_aggregate';
  aggregate?: Maybe<User_Workouts_Aggregate_Fields>;
  nodes: Array<User_Workouts>;
};

export type User_Workouts_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Workouts_Aggregate_Bool_Exp_Count>;
};

export type User_Workouts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Workouts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Workouts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_workouts" */
export type User_Workouts_Aggregate_Fields = {
  __typename?: 'user_workouts_aggregate_fields';
  avg?: Maybe<User_Workouts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Workouts_Max_Fields>;
  min?: Maybe<User_Workouts_Min_Fields>;
  stddev?: Maybe<User_Workouts_Stddev_Fields>;
  stddev_pop?: Maybe<User_Workouts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Workouts_Stddev_Samp_Fields>;
  sum?: Maybe<User_Workouts_Sum_Fields>;
  var_pop?: Maybe<User_Workouts_Var_Pop_Fields>;
  var_samp?: Maybe<User_Workouts_Var_Samp_Fields>;
  variance?: Maybe<User_Workouts_Variance_Fields>;
};


/** aggregate fields of "user_workouts" */
export type User_Workouts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Workouts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_workouts" */
export type User_Workouts_Aggregate_Order_By = {
  avg?: InputMaybe<User_Workouts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Workouts_Max_Order_By>;
  min?: InputMaybe<User_Workouts_Min_Order_By>;
  stddev?: InputMaybe<User_Workouts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Workouts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Workouts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Workouts_Sum_Order_By>;
  var_pop?: InputMaybe<User_Workouts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Workouts_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Workouts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_workouts" */
export type User_Workouts_Arr_Rel_Insert_Input = {
  data: Array<User_Workouts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Workouts_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Workouts_Avg_Fields = {
  __typename?: 'user_workouts_avg_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_workouts" */
export type User_Workouts_Avg_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_workouts". All fields are combined with a logical 'AND'. */
export type User_Workouts_Bool_Exp = {
  _and?: InputMaybe<Array<User_Workouts_Bool_Exp>>;
  _not?: InputMaybe<User_Workouts_Bool_Exp>;
  _or?: InputMaybe<Array<User_Workouts_Bool_Exp>>;
  completed_at?: InputMaybe<Date_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  cycle?: InputMaybe<Cycles_Bool_Exp>;
  cycle_id?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  workout?: InputMaybe<Workouts_Bool_Exp>;
  workout_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_workouts" */
export enum User_Workouts_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserWorkoutsPkey = 'user_workouts_pkey'
}

/** input type for incrementing numeric columns in table "user_workouts" */
export type User_Workouts_Inc_Input = {
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_workouts" */
export type User_Workouts_Insert_Input = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle?: InputMaybe<Cycles_Obj_Rel_Insert_Input>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout?: InputMaybe<Workouts_Obj_Rel_Insert_Input>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type User_Workouts_Max_Fields = {
  __typename?: 'user_workouts_max_fields';
  completed_at?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_workouts" */
export type User_Workouts_Max_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Workouts_Min_Fields = {
  __typename?: 'user_workouts_min_fields';
  completed_at?: Maybe<Scalars['date']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_workouts" */
export type User_Workouts_Min_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_workouts" */
export type User_Workouts_Mutation_Response = {
  __typename?: 'user_workouts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Workouts>;
};

/** on_conflict condition type for table "user_workouts" */
export type User_Workouts_On_Conflict = {
  constraint: User_Workouts_Constraint;
  update_columns?: Array<User_Workouts_Update_Column>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};

/** Ordering options when selecting data from "user_workouts". */
export type User_Workouts_Order_By = {
  completed_at?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Cycles_Order_By>;
  cycle_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout?: InputMaybe<Workouts_Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_workouts */
export type User_Workouts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_workouts" */
export enum User_Workouts_Select_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutId = 'workout_id'
}

/** input type for updating data in table "user_workouts" */
export type User_Workouts_Set_Input = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type User_Workouts_Stddev_Fields = {
  __typename?: 'user_workouts_stddev_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_workouts" */
export type User_Workouts_Stddev_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Workouts_Stddev_Pop_Fields = {
  __typename?: 'user_workouts_stddev_pop_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_workouts" */
export type User_Workouts_Stddev_Pop_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Workouts_Stddev_Samp_Fields = {
  __typename?: 'user_workouts_stddev_samp_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_workouts" */
export type User_Workouts_Stddev_Samp_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_workouts" */
export type User_Workouts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Workouts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Workouts_Stream_Cursor_Value_Input = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type User_Workouts_Sum_Fields = {
  __typename?: 'user_workouts_sum_fields';
  cycle_id?: Maybe<Scalars['bigint']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_workouts" */
export type User_Workouts_Sum_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_workouts" */
export enum User_Workouts_Update_Column {
  /** column name */
  CompletedAt = 'completed_at',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CycleId = 'cycle_id',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutId = 'workout_id'
}

export type User_Workouts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Workouts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Workouts_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Workouts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Workouts_Var_Pop_Fields = {
  __typename?: 'user_workouts_var_pop_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_workouts" */
export type User_Workouts_Var_Pop_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Workouts_Var_Samp_Fields = {
  __typename?: 'user_workouts_var_samp_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_workouts" */
export type User_Workouts_Var_Samp_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Workouts_Variance_Fields = {
  __typename?: 'user_workouts_variance_fields';
  cycle_id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_workouts" */
export type User_Workouts_Variance_Order_By = {
  cycle_id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  image_url?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_cycles: Array<User_Cycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: User_Cycles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUser_CyclesArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  image_url?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  remember_token?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_cycles?: InputMaybe<User_Cycles_Bool_Exp>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailUnique = 'users_email_unique',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_cycles?: InputMaybe<User_Cycles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_verified_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  image_url?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  remember_token?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  image_url?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  remember_token?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RememberToken = 'remember_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerifiedAt = 'email_verified_at',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  RememberToken = 'remember_token',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "workout_item_scores" */
export type Workout_Item_Scores = {
  __typename?: 'workout_item_scores';
  created_at?: Maybe<Scalars['date']['output']>;
  id: Scalars['bigint']['output'];
  updated_at?: Maybe<Scalars['date']['output']>;
  value: Scalars['String']['output'];
  /** An object relationship */
  workout_item: Workout_Items;
  workout_item_id: Scalars['bigint']['output'];
};

/** aggregated selection of "workout_item_scores" */
export type Workout_Item_Scores_Aggregate = {
  __typename?: 'workout_item_scores_aggregate';
  aggregate?: Maybe<Workout_Item_Scores_Aggregate_Fields>;
  nodes: Array<Workout_Item_Scores>;
};

export type Workout_Item_Scores_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workout_Item_Scores_Aggregate_Bool_Exp_Count>;
};

export type Workout_Item_Scores_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_item_scores" */
export type Workout_Item_Scores_Aggregate_Fields = {
  __typename?: 'workout_item_scores_aggregate_fields';
  avg?: Maybe<Workout_Item_Scores_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Item_Scores_Max_Fields>;
  min?: Maybe<Workout_Item_Scores_Min_Fields>;
  stddev?: Maybe<Workout_Item_Scores_Stddev_Fields>;
  stddev_pop?: Maybe<Workout_Item_Scores_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workout_Item_Scores_Stddev_Samp_Fields>;
  sum?: Maybe<Workout_Item_Scores_Sum_Fields>;
  var_pop?: Maybe<Workout_Item_Scores_Var_Pop_Fields>;
  var_samp?: Maybe<Workout_Item_Scores_Var_Samp_Fields>;
  variance?: Maybe<Workout_Item_Scores_Variance_Fields>;
};


/** aggregate fields of "workout_item_scores" */
export type Workout_Item_Scores_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_item_scores" */
export type Workout_Item_Scores_Aggregate_Order_By = {
  avg?: InputMaybe<Workout_Item_Scores_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Item_Scores_Max_Order_By>;
  min?: InputMaybe<Workout_Item_Scores_Min_Order_By>;
  stddev?: InputMaybe<Workout_Item_Scores_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workout_Item_Scores_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workout_Item_Scores_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workout_Item_Scores_Sum_Order_By>;
  var_pop?: InputMaybe<Workout_Item_Scores_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workout_Item_Scores_Var_Samp_Order_By>;
  variance?: InputMaybe<Workout_Item_Scores_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workout_item_scores" */
export type Workout_Item_Scores_Arr_Rel_Insert_Input = {
  data: Array<Workout_Item_Scores_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Item_Scores_On_Conflict>;
};

/** aggregate avg on columns */
export type Workout_Item_Scores_Avg_Fields = {
  __typename?: 'workout_item_scores_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workout_item_scores". All fields are combined with a logical 'AND'. */
export type Workout_Item_Scores_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Item_Scores_Bool_Exp>>;
  _not?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Item_Scores_Bool_Exp>>;
  created_at?: InputMaybe<Date_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  updated_at?: InputMaybe<Date_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  workout_item?: InputMaybe<Workout_Items_Bool_Exp>;
  workout_item_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "workout_item_scores" */
export enum Workout_Item_Scores_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutItemScoresPkey = 'workout_item_scores_pkey'
}

/** input type for incrementing numeric columns in table "workout_item_scores" */
export type Workout_Item_Scores_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workout_item_scores" */
export type Workout_Item_Scores_Insert_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item?: InputMaybe<Workout_Items_Obj_Rel_Insert_Input>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Workout_Item_Scores_Max_Fields = {
  __typename?: 'workout_item_scores_max_fields';
  created_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['date']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Item_Scores_Min_Fields = {
  __typename?: 'workout_item_scores_min_fields';
  created_at?: Maybe<Scalars['date']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  updated_at?: Maybe<Scalars['date']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_item_scores" */
export type Workout_Item_Scores_Mutation_Response = {
  __typename?: 'workout_item_scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Item_Scores>;
};

/** on_conflict condition type for table "workout_item_scores" */
export type Workout_Item_Scores_On_Conflict = {
  constraint: Workout_Item_Scores_Constraint;
  update_columns?: Array<Workout_Item_Scores_Update_Column>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_item_scores". */
export type Workout_Item_Scores_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  workout_item?: InputMaybe<Workout_Items_Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workout_item_scores */
export type Workout_Item_Scores_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workout_item_scores" */
export enum Workout_Item_Scores_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
  /** column name */
  WorkoutItemId = 'workout_item_id'
}

/** input type for updating data in table "workout_item_scores" */
export type Workout_Item_Scores_Set_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Workout_Item_Scores_Stddev_Fields = {
  __typename?: 'workout_item_scores_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workout_Item_Scores_Stddev_Pop_Fields = {
  __typename?: 'workout_item_scores_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workout_Item_Scores_Stddev_Samp_Fields = {
  __typename?: 'workout_item_scores_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workout_item_scores" */
export type Workout_Item_Scores_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Item_Scores_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Item_Scores_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Workout_Item_Scores_Sum_Fields = {
  __typename?: 'workout_item_scores_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  workout_item_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** update columns of table "workout_item_scores" */
export enum Workout_Item_Scores_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value',
  /** column name */
  WorkoutItemId = 'workout_item_id'
}

export type Workout_Item_Scores_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workout_Item_Scores_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Item_Scores_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Item_Scores_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workout_Item_Scores_Var_Pop_Fields = {
  __typename?: 'workout_item_scores_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workout_Item_Scores_Var_Samp_Fields = {
  __typename?: 'workout_item_scores_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workout_Item_Scores_Variance_Fields = {
  __typename?: 'workout_item_scores_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_item_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workout_item_scores" */
export type Workout_Item_Scores_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_item_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "workout_items" */
export type Workout_Items = {
  __typename?: 'workout_items';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  exercise_details: Array<Exercise_Details>;
  /** An aggregate relationship */
  exercise_details_aggregate: Exercise_Details_Aggregate;
  header?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  scores: Array<Workout_Item_Scores>;
  /** An aggregate relationship */
  scores_aggregate: Workout_Item_Scores_Aggregate;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  workout: Workouts;
  workout_id: Scalars['bigint']['output'];
};


/** columns and relationships of "workout_items" */
export type Workout_ItemsExercise_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


/** columns and relationships of "workout_items" */
export type Workout_ItemsExercise_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Exercise_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Exercise_Details_Order_By>>;
  where?: InputMaybe<Exercise_Details_Bool_Exp>;
};


/** columns and relationships of "workout_items" */
export type Workout_ItemsScoresArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};


/** columns and relationships of "workout_items" */
export type Workout_ItemsScores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Item_Scores_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Item_Scores_Order_By>>;
  where?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
};

/** aggregated selection of "workout_items" */
export type Workout_Items_Aggregate = {
  __typename?: 'workout_items_aggregate';
  aggregate?: Maybe<Workout_Items_Aggregate_Fields>;
  nodes: Array<Workout_Items>;
};

export type Workout_Items_Aggregate_Bool_Exp = {
  count?: InputMaybe<Workout_Items_Aggregate_Bool_Exp_Count>;
};

export type Workout_Items_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workout_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workout_Items_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workout_items" */
export type Workout_Items_Aggregate_Fields = {
  __typename?: 'workout_items_aggregate_fields';
  avg?: Maybe<Workout_Items_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Workout_Items_Max_Fields>;
  min?: Maybe<Workout_Items_Min_Fields>;
  stddev?: Maybe<Workout_Items_Stddev_Fields>;
  stddev_pop?: Maybe<Workout_Items_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workout_Items_Stddev_Samp_Fields>;
  sum?: Maybe<Workout_Items_Sum_Fields>;
  var_pop?: Maybe<Workout_Items_Var_Pop_Fields>;
  var_samp?: Maybe<Workout_Items_Var_Samp_Fields>;
  variance?: Maybe<Workout_Items_Variance_Fields>;
};


/** aggregate fields of "workout_items" */
export type Workout_Items_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workout_Items_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_items" */
export type Workout_Items_Aggregate_Order_By = {
  avg?: InputMaybe<Workout_Items_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workout_Items_Max_Order_By>;
  min?: InputMaybe<Workout_Items_Min_Order_By>;
  stddev?: InputMaybe<Workout_Items_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workout_Items_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workout_Items_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workout_Items_Sum_Order_By>;
  var_pop?: InputMaybe<Workout_Items_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workout_Items_Var_Samp_Order_By>;
  variance?: InputMaybe<Workout_Items_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workout_items" */
export type Workout_Items_Arr_Rel_Insert_Input = {
  data: Array<Workout_Items_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Items_On_Conflict>;
};

/** aggregate avg on columns */
export type Workout_Items_Avg_Fields = {
  __typename?: 'workout_items_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workout_items" */
export type Workout_Items_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workout_items". All fields are combined with a logical 'AND'. */
export type Workout_Items_Bool_Exp = {
  _and?: InputMaybe<Array<Workout_Items_Bool_Exp>>;
  _not?: InputMaybe<Workout_Items_Bool_Exp>;
  _or?: InputMaybe<Array<Workout_Items_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  exercise_details?: InputMaybe<Exercise_Details_Bool_Exp>;
  exercise_details_aggregate?: InputMaybe<Exercise_Details_Aggregate_Bool_Exp>;
  header?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  notes?: InputMaybe<String_Comparison_Exp>;
  score?: InputMaybe<String_Comparison_Exp>;
  scores?: InputMaybe<Workout_Item_Scores_Bool_Exp>;
  scores_aggregate?: InputMaybe<Workout_Item_Scores_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  workout?: InputMaybe<Workouts_Bool_Exp>;
  workout_id?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "workout_items" */
export enum Workout_Items_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutItemsPkey = 'workout_items_pkey'
}

/** input type for incrementing numeric columns in table "workout_items" */
export type Workout_Items_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workout_items" */
export type Workout_Items_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise_details?: InputMaybe<Exercise_Details_Arr_Rel_Insert_Input>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  scores?: InputMaybe<Workout_Item_Scores_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout?: InputMaybe<Workouts_Obj_Rel_Insert_Input>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type Workout_Items_Max_Fields = {
  __typename?: 'workout_items_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "workout_items" */
export type Workout_Items_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  header?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workout_Items_Min_Fields = {
  __typename?: 'workout_items_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  header?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  score?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "workout_items" */
export type Workout_Items_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  header?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workout_items" */
export type Workout_Items_Mutation_Response = {
  __typename?: 'workout_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workout_Items>;
};

/** input type for inserting object relation for remote table "workout_items" */
export type Workout_Items_Obj_Rel_Insert_Input = {
  data: Workout_Items_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workout_Items_On_Conflict>;
};

/** on_conflict condition type for table "workout_items" */
export type Workout_Items_On_Conflict = {
  constraint: Workout_Items_Constraint;
  update_columns?: Array<Workout_Items_Update_Column>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};

/** Ordering options when selecting data from "workout_items". */
export type Workout_Items_Order_By = {
  created_at?: InputMaybe<Order_By>;
  exercise_details_aggregate?: InputMaybe<Exercise_Details_Aggregate_Order_By>;
  header?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  notes?: InputMaybe<Order_By>;
  score?: InputMaybe<Order_By>;
  scores_aggregate?: InputMaybe<Workout_Item_Scores_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  workout?: InputMaybe<Workouts_Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: workout_items */
export type Workout_Items_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workout_items" */
export enum Workout_Items_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Header = 'header',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Score = 'score',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutId = 'workout_id'
}

/** input type for updating data in table "workout_items" */
export type Workout_Items_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type Workout_Items_Stddev_Fields = {
  __typename?: 'workout_items_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workout_items" */
export type Workout_Items_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workout_Items_Stddev_Pop_Fields = {
  __typename?: 'workout_items_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workout_items" */
export type Workout_Items_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workout_Items_Stddev_Samp_Fields = {
  __typename?: 'workout_items_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workout_items" */
export type Workout_Items_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workout_items" */
export type Workout_Items_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workout_Items_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workout_Items_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type Workout_Items_Sum_Fields = {
  __typename?: 'workout_items_sum_fields';
  id?: Maybe<Scalars['bigint']['output']>;
  workout_id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workout_items" */
export type Workout_Items_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** update columns of table "workout_items" */
export enum Workout_Items_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Header = 'header',
  /** column name */
  Id = 'id',
  /** column name */
  Notes = 'notes',
  /** column name */
  Score = 'score',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WorkoutId = 'workout_id'
}

export type Workout_Items_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workout_Items_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workout_Items_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workout_Items_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workout_Items_Var_Pop_Fields = {
  __typename?: 'workout_items_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workout_items" */
export type Workout_Items_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workout_Items_Var_Samp_Fields = {
  __typename?: 'workout_items_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workout_items" */
export type Workout_Items_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workout_Items_Variance_Fields = {
  __typename?: 'workout_items_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  workout_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workout_items" */
export type Workout_Items_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  workout_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "workouts" */
export type Workouts = {
  __typename?: 'workouts';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  current_cycle?: Maybe<Cycles>;
  cycle?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  isActiveRecovery: Scalars['Boolean']['output'];
  isRestDay: Scalars['Boolean']['output'];
  poster?: Maybe<Scalars['String']['output']>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  user_cycles: Array<User_Cycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: User_Cycles_Aggregate;
  /** An array relationship */
  user_workouts: Array<User_Workouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: User_Workouts_Aggregate;
  /** An array relationship */
  workout_items: Array<Workout_Items>;
  /** An aggregate relationship */
  workout_items_aggregate: Workout_Items_Aggregate;
};


/** columns and relationships of "workouts" */
export type WorkoutsUser_CyclesArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUser_Cycles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cycles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Cycles_Order_By>>;
  where?: InputMaybe<User_Cycles_Bool_Exp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUser_WorkoutsArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUser_Workouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Workouts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Workouts_Order_By>>;
  where?: InputMaybe<User_Workouts_Bool_Exp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsWorkout_ItemsArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsWorkout_Items_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Workout_Items_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Workout_Items_Order_By>>;
  where?: InputMaybe<Workout_Items_Bool_Exp>;
};

/** aggregated selection of "workouts" */
export type Workouts_Aggregate = {
  __typename?: 'workouts_aggregate';
  aggregate?: Maybe<Workouts_Aggregate_Fields>;
  nodes: Array<Workouts>;
};

export type Workouts_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Workouts_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Workouts_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Workouts_Aggregate_Bool_Exp_Count>;
};

export type Workouts_Aggregate_Bool_Exp_Bool_And = {
  arguments: Workouts_Select_Column_Workouts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workouts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workouts_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Workouts_Select_Column_Workouts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workouts_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Workouts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Workouts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Workouts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "workouts" */
export type Workouts_Aggregate_Fields = {
  __typename?: 'workouts_aggregate_fields';
  avg?: Maybe<Workouts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Workouts_Max_Fields>;
  min?: Maybe<Workouts_Min_Fields>;
  stddev?: Maybe<Workouts_Stddev_Fields>;
  stddev_pop?: Maybe<Workouts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Workouts_Stddev_Samp_Fields>;
  sum?: Maybe<Workouts_Sum_Fields>;
  var_pop?: Maybe<Workouts_Var_Pop_Fields>;
  var_samp?: Maybe<Workouts_Var_Samp_Fields>;
  variance?: Maybe<Workouts_Variance_Fields>;
};


/** aggregate fields of "workouts" */
export type Workouts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Workouts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workouts" */
export type Workouts_Aggregate_Order_By = {
  avg?: InputMaybe<Workouts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Workouts_Max_Order_By>;
  min?: InputMaybe<Workouts_Min_Order_By>;
  stddev?: InputMaybe<Workouts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Workouts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Workouts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Workouts_Sum_Order_By>;
  var_pop?: InputMaybe<Workouts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Workouts_Var_Samp_Order_By>;
  variance?: InputMaybe<Workouts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "workouts" */
export type Workouts_Arr_Rel_Insert_Input = {
  data: Array<Workouts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Workouts_On_Conflict>;
};

/** aggregate avg on columns */
export type Workouts_Avg_Fields = {
  __typename?: 'workouts_avg_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workouts" */
export type Workouts_Avg_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "workouts". All fields are combined with a logical 'AND'. */
export type Workouts_Bool_Exp = {
  _and?: InputMaybe<Array<Workouts_Bool_Exp>>;
  _not?: InputMaybe<Workouts_Bool_Exp>;
  _or?: InputMaybe<Array<Workouts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  current_cycle?: InputMaybe<Cycles_Bool_Exp>;
  cycle?: InputMaybe<Int_Comparison_Exp>;
  date?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  isActiveRecovery?: InputMaybe<Boolean_Comparison_Exp>;
  isRestDay?: InputMaybe<Boolean_Comparison_Exp>;
  poster?: InputMaybe<String_Comparison_Exp>;
  subtitle?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_cycles?: InputMaybe<User_Cycles_Bool_Exp>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Bool_Exp>;
  user_workouts?: InputMaybe<User_Workouts_Bool_Exp>;
  user_workouts_aggregate?: InputMaybe<User_Workouts_Aggregate_Bool_Exp>;
  workout_items?: InputMaybe<Workout_Items_Bool_Exp>;
  workout_items_aggregate?: InputMaybe<Workout_Items_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "workouts" */
export enum Workouts_Constraint {
  /** unique or primary key constraint on columns "id" */
  WorkoutsPkey = 'workouts_pkey'
}

/** input type for incrementing numeric columns in table "workouts" */
export type Workouts_Inc_Input = {
  cycle?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workouts" */
export type Workouts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_cycle?: InputMaybe<Cycles_Obj_Rel_Insert_Input>;
  cycle?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  isActiveRecovery?: InputMaybe<Scalars['Boolean']['input']>;
  isRestDay?: InputMaybe<Scalars['Boolean']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_cycles?: InputMaybe<User_Cycles_Arr_Rel_Insert_Input>;
  user_workouts?: InputMaybe<User_Workouts_Arr_Rel_Insert_Input>;
  workout_items?: InputMaybe<Workout_Items_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Workouts_Max_Fields = {
  __typename?: 'workouts_max_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  cycle?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "workouts" */
export type Workouts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Workouts_Min_Fields = {
  __typename?: 'workouts_min_fields';
  created_at?: Maybe<Scalars['timestamp']['output']>;
  cycle?: Maybe<Scalars['Int']['output']>;
  date?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
  poster?: Maybe<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "workouts" */
export type Workouts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  cycle?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "workouts" */
export type Workouts_Mutation_Response = {
  __typename?: 'workouts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workouts>;
};

/** input type for inserting object relation for remote table "workouts" */
export type Workouts_Obj_Rel_Insert_Input = {
  data: Workouts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Workouts_On_Conflict>;
};

/** on_conflict condition type for table "workouts" */
export type Workouts_On_Conflict = {
  constraint: Workouts_Constraint;
  update_columns?: Array<Workouts_Update_Column>;
  where?: InputMaybe<Workouts_Bool_Exp>;
};

/** Ordering options when selecting data from "workouts". */
export type Workouts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  current_cycle?: InputMaybe<Cycles_Order_By>;
  cycle?: InputMaybe<Order_By>;
  date?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isActiveRecovery?: InputMaybe<Order_By>;
  isRestDay?: InputMaybe<Order_By>;
  poster?: InputMaybe<Order_By>;
  subtitle?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_cycles_aggregate?: InputMaybe<User_Cycles_Aggregate_Order_By>;
  user_workouts_aggregate?: InputMaybe<User_Workouts_Aggregate_Order_By>;
  workout_items_aggregate?: InputMaybe<Workout_Items_Aggregate_Order_By>;
};

/** primary key columns input for table: workouts */
export type Workouts_Pk_Columns_Input = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workouts" */
export enum Workouts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cycle = 'cycle',
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActiveRecovery = 'isActiveRecovery',
  /** column name */
  IsRestDay = 'isRestDay',
  /** column name */
  Poster = 'poster',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** select "workouts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workouts" */
export enum Workouts_Select_Column_Workouts_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsActiveRecovery = 'isActiveRecovery',
  /** column name */
  IsRestDay = 'isRestDay'
}

/** select "workouts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workouts" */
export enum Workouts_Select_Column_Workouts_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsActiveRecovery = 'isActiveRecovery',
  /** column name */
  IsRestDay = 'isRestDay'
}

/** input type for updating data in table "workouts" */
export type Workouts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  isActiveRecovery?: InputMaybe<Scalars['Boolean']['input']>;
  isRestDay?: InputMaybe<Scalars['Boolean']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type Workouts_Stddev_Fields = {
  __typename?: 'workouts_stddev_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workouts" */
export type Workouts_Stddev_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Workouts_Stddev_Pop_Fields = {
  __typename?: 'workouts_stddev_pop_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workouts" */
export type Workouts_Stddev_Pop_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Workouts_Stddev_Samp_Fields = {
  __typename?: 'workouts_stddev_samp_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workouts" */
export type Workouts_Stddev_Samp_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "workouts" */
export type Workouts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Workouts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Workouts_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  isActiveRecovery?: InputMaybe<Scalars['Boolean']['input']>;
  isRestDay?: InputMaybe<Scalars['Boolean']['input']>;
  poster?: InputMaybe<Scalars['String']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type Workouts_Sum_Fields = {
  __typename?: 'workouts_sum_fields';
  cycle?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workouts" */
export type Workouts_Sum_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "workouts" */
export enum Workouts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Cycle = 'cycle',
  /** column name */
  Date = 'date',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  IsActiveRecovery = 'isActiveRecovery',
  /** column name */
  IsRestDay = 'isRestDay',
  /** column name */
  Poster = 'poster',
  /** column name */
  Subtitle = 'subtitle',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Workouts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Workouts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Workouts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Workouts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Workouts_Var_Pop_Fields = {
  __typename?: 'workouts_var_pop_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workouts" */
export type Workouts_Var_Pop_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Workouts_Var_Samp_Fields = {
  __typename?: 'workouts_var_samp_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workouts" */
export type Workouts_Var_Samp_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Workouts_Variance_Fields = {
  __typename?: 'workouts_variance_fields';
  cycle?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workouts" */
export type Workouts_Variance_Order_By = {
  cycle?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

export type UserFragment = { __typename?: 'user_cycles', user: { __typename?: 'users', id: any, name: string, email: string, image_url?: string | null } };

export type ProgramsFragment = { __typename?: 'programs', id: any, name: string, image?: string | null };

export type WorkoutFragment = { __typename?: 'user_cycles', workout: { __typename?: 'workouts', id: any, title: string, first: Array<{ __typename?: 'workout_items', id: any, header?: string | null, notes?: string | null }>, rest: Array<{ __typename?: 'workout_items', id: any, header?: string | null }> } };

export type ProgramDetailsFragment = { __typename?: 'cycles', program?: { __typename?: 'programs', id: any, name: string, image?: string | null } | null };

export type WorkoutIdsFragment = { __typename?: 'cycles', workouts: Array<{ __typename?: 'workouts', id: any }> };

export type CompleteWorkoutMutationVariables = Exact<{
  completedWorkout: Scalars['bigint']['input'];
  cycleId: Scalars['bigint']['input'];
  nextWorkoutId: Scalars['Int']['input'];
}>;


export type CompleteWorkoutMutation = { __typename?: 'mutation_root', insert_user_workouts_one?: { __typename?: 'user_workouts', id: any, workout_id: any } | null, update_user_cycles?: { __typename?: 'user_cycles_mutation_response', affected_rows: number } | null };

export type UpsertWorkoutItemScoreMutationVariables = Exact<{
  workoutItemId: Scalars['bigint']['input'];
  score?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpsertWorkoutItemScoreMutation = { __typename?: 'mutation_root', insert_workout_item_scores?: { __typename?: 'workout_item_scores_mutation_response', returning: Array<{ __typename?: 'workout_item_scores', id: any, value: string }> } | null };

export type GetWorkoutsQueryVariables = Exact<{
  cycleId: Scalars['Int']['input'];
}>;


export type GetWorkoutsQuery = { __typename?: 'query_root', workouts: Array<{ __typename?: 'workouts', id: any, title: string, subtitle: string, poster?: string | null, isRestDay: boolean, isActiveRecovery: boolean, description?: string | null, date?: string | null, cycle?: number | null, workout_items: Array<{ __typename?: 'workout_items', notes?: string | null }> }> };

export type WorkoutByIdQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
  cycleId: Scalars['bigint']['input'];
}>;


export type WorkoutByIdQuery = { __typename?: 'query_root', workout?: { __typename?: 'workouts', id: any, title: string, subtitle: string, poster?: string | null, isRestDay: boolean, isActiveRecovery: boolean, description?: string | null, date?: string | null, cycle?: number | null, workout_items: Array<{ __typename?: 'workout_items', id: any, title?: string | null, notes?: string | null, header?: string | null, scores: Array<{ __typename?: 'workout_item_scores', value: string }>, exercise_details: Array<{ __typename?: 'exercise_details', id: any, title?: string | null, subtitle?: string | null, levels?: any | null, exercise?: { __typename?: 'exercises', id: any, demo_video_url?: string | null, demo_video_title: string, demo_video_poster: string, demo_video_id: string } | null }> }>, user_workouts: Array<{ __typename?: 'user_workouts', id: any }>, current_cycle?: { __typename?: 'cycles', next_workout?: any | null } | null } | null };

export type GetExercisesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExercisesQuery = { __typename?: 'query_root', exercises: Array<{ __typename?: 'exercises', id: any, demo_video_url?: string | null, demo_video_title: string, demo_video_poster: string, demo_video_id: string }> };

export type GetProgramsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProgramsQuery = { __typename?: 'query_root', programs: Array<{ __typename?: 'programs', id: any, name: string, description?: string | null, image?: string | null, cycles: Array<{ __typename?: 'cycles', workouts: Array<{ __typename?: 'workouts', id: any, cycle?: number | null }> }> }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', id: any, email: string, image_url?: string | null, created_at?: any | null, updated_at?: any | null, user_cycles: Array<{ __typename?: 'user_cycles', id: any, cycle_id: any, current_workout: number, start_date: any, completed: boolean, created_at?: any | null, updated_at?: any | null, cycle: { __typename?: 'cycles', id: any, cycle_number: number, date?: string | null, bridge_week: boolean, program?: { __typename?: 'programs', id: any, name: string, description?: string | null, image?: string | null } | null, workouts: Array<{ __typename?: 'workouts', id: any, title: string, subtitle: string, poster?: string | null, isRestDay: boolean, isActiveRecovery: boolean, description?: string | null, date?: string | null, cycle?: number | null }> } }> } | null };

export type GetDashboardDataForUserQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
}>;


export type GetDashboardDataForUserQuery = { __typename?: 'query_root', user_cycles: Array<{ __typename?: 'user_cycles', id: any, start_date: any, current_workout: number, user: { __typename?: 'users', id: any, name: string, email: string, image_url?: string | null }, workout: { __typename?: 'workouts', id: any, title: string, subtitle: string, poster?: string | null, isRestDay: boolean, isActiveRecovery: boolean, description?: string | null, date?: string | null, workout_items: Array<{ __typename?: 'workout_items', id: any, title?: string | null, header?: string | null, notes?: string | null }> }, cycle: { __typename?: 'cycles', workout_count: number, program?: { __typename?: 'programs', name: string, image?: string | null } | null, workouts: Array<{ __typename?: 'workouts', id: any }> } }> };

export type GetUserCycleProgressQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
}>;


export type GetUserCycleProgressQuery = { __typename?: 'query_root', userCycle?: { __typename?: 'user_cycles', id: any, start_date: any, current_workout: number, cycle: { __typename?: 'cycles', id: any, total: number, user_workouts_aggregate: { __typename?: 'user_workouts_aggregate', aggregate?: { __typename?: 'user_workouts_aggregate_fields', count: number } | null }, program?: { __typename?: 'programs', id: any, name: string, image?: string | null } | null }, workout: { __typename?: 'workouts', id: any, title: string, first: Array<{ __typename?: 'workout_items', id: any, header?: string | null, notes?: string | null }>, rest: Array<{ __typename?: 'workout_items', id: any, header?: string | null }> } } | null, programs: Array<{ __typename?: 'programs', id: any, name: string, image?: string | null }> };

export type CheckUserCredentialsQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CheckUserCredentialsQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: any, email: string, name: string, image_url?: string | null, created_at?: any | null, updated_at?: any | null }> };

export const UserFragmentDoc = gql`
    fragment User on user_cycles {
  user {
    id
    name
    email
    image_url
  }
}
    `;
export const ProgramsFragmentDoc = gql`
    fragment Programs on programs {
  id
  name
  image
}
    `;
export const WorkoutFragmentDoc = gql`
    fragment Workout on user_cycles {
  workout {
    id
    title
    first: workout_items(limit: 1) {
      id
      header
      notes
    }
    rest: workout_items(offset: 1) {
      id
      header
    }
  }
}
    `;
export const ProgramDetailsFragmentDoc = gql`
    fragment ProgramDetails on cycles {
  program {
    id
    name
    image
  }
}
    `;
export const WorkoutIdsFragmentDoc = gql`
    fragment WorkoutIds on cycles {
  workouts(order_by: {id: asc}) {
    id
  }
}
    `;
export const CompleteWorkoutDocument = gql`
    mutation CompleteWorkout($completedWorkout: bigint!, $cycleId: bigint!, $nextWorkoutId: Int!) {
  insert_user_workouts_one(
    object: {workout_id: $completedWorkout, cycle_id: $cycleId}
  ) {
    id
    workout_id
  }
  update_user_cycles(
    _set: {current_workout: $nextWorkoutId}
    where: {cycle_id: {_eq: $cycleId}, completed: {_eq: false}}
  ) {
    affected_rows
  }
}
    `;
export type CompleteWorkoutMutationFn = Apollo.MutationFunction<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>;

/**
 * __useCompleteWorkoutMutation__
 *
 * To run a mutation, you first call `useCompleteWorkoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCompleteWorkoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [completeWorkoutMutation, { data, loading, error }] = useCompleteWorkoutMutation({
 *   variables: {
 *      completedWorkout: // value for 'completedWorkout'
 *      cycleId: // value for 'cycleId'
 *      nextWorkoutId: // value for 'nextWorkoutId'
 *   },
 * });
 */
export function useCompleteWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>(CompleteWorkoutDocument, options);
      }
export type CompleteWorkoutMutationHookResult = ReturnType<typeof useCompleteWorkoutMutation>;
export type CompleteWorkoutMutationResult = Apollo.MutationResult<CompleteWorkoutMutation>;
export type CompleteWorkoutMutationOptions = Apollo.BaseMutationOptions<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>;
export const UpsertWorkoutItemScoreDocument = gql`
    mutation UpsertWorkoutItemScore($workoutItemId: bigint!, $score: String = "") {
  insert_workout_item_scores(
    objects: [{workout_item_id: $workoutItemId, value: $score}]
    on_conflict: {constraint: workout_item_scores_pkey, update_columns: [value]}
  ) {
    returning {
      id
      value
    }
  }
}
    `;
export type UpsertWorkoutItemScoreMutationFn = Apollo.MutationFunction<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>;

/**
 * __useUpsertWorkoutItemScoreMutation__
 *
 * To run a mutation, you first call `useUpsertWorkoutItemScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertWorkoutItemScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertWorkoutItemScoreMutation, { data, loading, error }] = useUpsertWorkoutItemScoreMutation({
 *   variables: {
 *      workoutItemId: // value for 'workoutItemId'
 *      score: // value for 'score'
 *   },
 * });
 */
export function useUpsertWorkoutItemScoreMutation(baseOptions?: Apollo.MutationHookOptions<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>(UpsertWorkoutItemScoreDocument, options);
      }
export type UpsertWorkoutItemScoreMutationHookResult = ReturnType<typeof useUpsertWorkoutItemScoreMutation>;
export type UpsertWorkoutItemScoreMutationResult = Apollo.MutationResult<UpsertWorkoutItemScoreMutation>;
export type UpsertWorkoutItemScoreMutationOptions = Apollo.BaseMutationOptions<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>;
export const GetWorkoutsDocument = gql`
    query GetWorkouts($cycleId: Int!) {
  workouts(where: {cycle: {_eq: $cycleId}}, order_by: {subtitle: asc}) {
    id
    title
    subtitle
    poster
    isRestDay
    isActiveRecovery
    description
    date
    cycle
    workout_items(limit: 1, order_by: {created_at: asc}) {
      notes
    }
  }
}
    `;

/**
 * __useGetWorkoutsQuery__
 *
 * To run a query within a React component, call `useGetWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkoutsQuery({
 *   variables: {
 *      cycleId: // value for 'cycleId'
 *   },
 * });
 */
export function useGetWorkoutsQuery(baseOptions: Apollo.QueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables> & ({ variables: GetWorkoutsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkoutsDocument, options);
      }
export function useGetWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkoutsDocument, options);
        }
export function useGetWorkoutsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkoutsDocument, options);
        }
export type GetWorkoutsQueryHookResult = ReturnType<typeof useGetWorkoutsQuery>;
export type GetWorkoutsLazyQueryHookResult = ReturnType<typeof useGetWorkoutsLazyQuery>;
export type GetWorkoutsSuspenseQueryHookResult = ReturnType<typeof useGetWorkoutsSuspenseQuery>;
export type GetWorkoutsQueryResult = Apollo.QueryResult<GetWorkoutsQuery, GetWorkoutsQueryVariables>;
export const WorkoutByIdDocument = gql`
    query WorkoutById($id: bigint!, $cycleId: bigint!) {
  workout: workouts_by_pk(id: $id) {
    id
    title
    subtitle
    poster
    isRestDay
    isActiveRecovery
    description
    date
    cycle
    workout_items(order_by: {id: asc}) {
      id
      title
      notes
      header
      scores {
        value
      }
      exercise_details {
        id
        title
        subtitle
        levels
        exercise {
          id
          demo_video_url
          demo_video_title
          demo_video_poster
          demo_video_id
        }
      }
    }
    user_workouts(where: {workout_id: {_eq: $id}, cycle_id: {_eq: $cycleId}}) {
      id: workout_id
    }
    current_cycle {
      next_workout
    }
  }
}
    `;

/**
 * __useWorkoutByIdQuery__
 *
 * To run a query within a React component, call `useWorkoutByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkoutByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkoutByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      cycleId: // value for 'cycleId'
 *   },
 * });
 */
export function useWorkoutByIdQuery(baseOptions: Apollo.QueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables> & ({ variables: WorkoutByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutByIdDocument, options);
      }
export function useWorkoutByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutByIdDocument, options);
        }
export function useWorkoutByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutByIdDocument, options);
        }
export type WorkoutByIdQueryHookResult = ReturnType<typeof useWorkoutByIdQuery>;
export type WorkoutByIdLazyQueryHookResult = ReturnType<typeof useWorkoutByIdLazyQuery>;
export type WorkoutByIdSuspenseQueryHookResult = ReturnType<typeof useWorkoutByIdSuspenseQuery>;
export type WorkoutByIdQueryResult = Apollo.QueryResult<WorkoutByIdQuery, WorkoutByIdQueryVariables>;
export const GetExercisesDocument = gql`
    query GetExercises {
  exercises(order_by: [{demo_video_title: asc}]) {
    id
    demo_video_url
    demo_video_title
    demo_video_poster
    demo_video_id
  }
}
    `;

/**
 * __useGetExercisesQuery__
 *
 * To run a query within a React component, call `useGetExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetExercisesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetExercisesQuery(baseOptions?: Apollo.QueryHookOptions<GetExercisesQuery, GetExercisesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercisesDocument, options);
      }
export function useGetExercisesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExercisesQuery, GetExercisesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercisesDocument, options);
        }
export function useGetExercisesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExercisesQuery, GetExercisesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercisesDocument, options);
        }
export type GetExercisesQueryHookResult = ReturnType<typeof useGetExercisesQuery>;
export type GetExercisesLazyQueryHookResult = ReturnType<typeof useGetExercisesLazyQuery>;
export type GetExercisesSuspenseQueryHookResult = ReturnType<typeof useGetExercisesSuspenseQuery>;
export type GetExercisesQueryResult = Apollo.QueryResult<GetExercisesQuery, GetExercisesQueryVariables>;
export const GetProgramsDocument = gql`
    query GetPrograms {
  programs(order_by: [{id: asc}]) {
    id
    name
    description
    image
    cycles {
      workouts(limit: 1) {
        id
        cycle
      }
    }
  }
}
    `;

/**
 * __useGetProgramsQuery__
 *
 * To run a query within a React component, call `useGetProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetProgramsQuery(baseOptions?: Apollo.QueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetProgramsDocument, options);
      }
export function useGetProgramsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetProgramsDocument, options);
        }
export function useGetProgramsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetProgramsDocument, options);
        }
export type GetProgramsQueryHookResult = ReturnType<typeof useGetProgramsQuery>;
export type GetProgramsLazyQueryHookResult = ReturnType<typeof useGetProgramsLazyQuery>;
export type GetProgramsSuspenseQueryHookResult = ReturnType<typeof useGetProgramsSuspenseQuery>;
export type GetProgramsQueryResult = Apollo.QueryResult<GetProgramsQuery, GetProgramsQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: bigint!) {
  users_by_pk(id: $id) {
    id
    email
    image_url
    created_at
    updated_at
    user_cycles(order_by: {created_at: desc}) {
      id
      cycle_id
      current_workout
      start_date
      completed
      created_at
      updated_at
      cycle {
        id
        cycle_number
        date
        bridge_week
        program {
          id
          name
          description
          image
        }
        workouts(order_by: {subtitle: asc}) {
          id
          title
          subtitle
          poster
          isRestDay
          isActiveRecovery
          description
          date
          cycle
        }
      }
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetDashboardDataForUserDocument = gql`
    query GetDashboardDataForUser($userId: bigint!) {
  user_cycles(where: {user_id: {_eq: $userId}}) {
    id
    start_date
    current_workout
    user {
      id
      name
      email
      image_url
    }
    workout {
      id
      title
      subtitle
      poster
      isRestDay
      isActiveRecovery
      description
      date
      workout_items(limit: 2) {
        id
        title
        header
        notes
      }
    }
    cycle {
      program {
        name
        image
      }
      workouts(order_by: {id: asc}) {
        id
      }
      workout_count
    }
  }
}
    `;

/**
 * __useGetDashboardDataForUserQuery__
 *
 * To run a query within a React component, call `useGetDashboardDataForUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardDataForUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardDataForUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetDashboardDataForUserQuery(baseOptions: Apollo.QueryHookOptions<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables> & ({ variables: GetDashboardDataForUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUserDocument, options);
      }
export function useGetDashboardDataForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUserDocument, options);
        }
export function useGetDashboardDataForUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUserDocument, options);
        }
export type GetDashboardDataForUserQueryHookResult = ReturnType<typeof useGetDashboardDataForUserQuery>;
export type GetDashboardDataForUserLazyQueryHookResult = ReturnType<typeof useGetDashboardDataForUserLazyQuery>;
export type GetDashboardDataForUserSuspenseQueryHookResult = ReturnType<typeof useGetDashboardDataForUserSuspenseQuery>;
export type GetDashboardDataForUserQueryResult = Apollo.QueryResult<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>;
export const GetUserCycleProgressDocument = gql`
    query GetUserCycleProgress($userId: bigint!) {
  userCycle: user_cycles_by_pk(id: $userId) {
    id
    start_date
    current_workout
    ...Workout
    cycle {
      id
      total: workout_count
      user_workouts_aggregate {
        aggregate {
          count
        }
      }
      ...ProgramDetails
    }
  }
  programs {
    ...Programs
  }
}
    ${WorkoutFragmentDoc}
${ProgramDetailsFragmentDoc}
${ProgramsFragmentDoc}`;

/**
 * __useGetUserCycleProgressQuery__
 *
 * To run a query within a React component, call `useGetUserCycleProgressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserCycleProgressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserCycleProgressQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserCycleProgressQuery(baseOptions: Apollo.QueryHookOptions<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables> & ({ variables: GetUserCycleProgressQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgressDocument, options);
      }
export function useGetUserCycleProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgressDocument, options);
        }
export function useGetUserCycleProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgressDocument, options);
        }
export type GetUserCycleProgressQueryHookResult = ReturnType<typeof useGetUserCycleProgressQuery>;
export type GetUserCycleProgressLazyQueryHookResult = ReturnType<typeof useGetUserCycleProgressLazyQuery>;
export type GetUserCycleProgressSuspenseQueryHookResult = ReturnType<typeof useGetUserCycleProgressSuspenseQuery>;
export type GetUserCycleProgressQueryResult = Apollo.QueryResult<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>;
export const CheckUserCredentialsDocument = gql`
    query CheckUserCredentials($email: String!, $password: String!) {
  users(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    id
    email
    name
    image_url
    created_at
    updated_at
  }
}
    `;

/**
 * __useCheckUserCredentialsQuery__
 *
 * To run a query within a React component, call `useCheckUserCredentialsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckUserCredentialsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckUserCredentialsQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCheckUserCredentialsQuery(baseOptions: Apollo.QueryHookOptions<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables> & ({ variables: CheckUserCredentialsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentialsDocument, options);
      }
export function useCheckUserCredentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentialsDocument, options);
        }
export function useCheckUserCredentialsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentialsDocument, options);
        }
export type CheckUserCredentialsQueryHookResult = ReturnType<typeof useCheckUserCredentialsQuery>;
export type CheckUserCredentialsLazyQueryHookResult = ReturnType<typeof useCheckUserCredentialsLazyQuery>;
export type CheckUserCredentialsSuspenseQueryHookResult = ReturnType<typeof useCheckUserCredentialsSuspenseQuery>;
export type CheckUserCredentialsQueryResult = Apollo.QueryResult<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>;