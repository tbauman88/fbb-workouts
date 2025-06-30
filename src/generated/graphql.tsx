import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
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
  bigint: { input: string; output: string; }
  date: { input: string; output: string; }
  json: { input: any; output: any; }
  jsonb: { input: any; output: any; }
  timestamp: { input: string; output: string; }
  timestamptz: { input: string; output: string; }
  uuid: { input: string; output: string; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
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
export type IntComparisonExp = {
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
export type StringComparisonExp = {
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
export type BigintComparisonExp = {
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
export enum CursorOrdering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** columns and relationships of "cycles" */
export type Cycles = {
  __typename?: 'cycles';
  bridge_week: Scalars['Boolean']['output'];
  created_at: Scalars['timestamp']['output'];
  cycle_number: Scalars['Int']['output'];
  date: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  /** An object relationship */
  program: Programs;
  program_id: Scalars['bigint']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  user_cycles: Array<UserCycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: UserCyclesAggregate;
  /** An array relationship */
  user_workouts: Array<UserWorkouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: UserWorkoutsAggregate;
  workout_count: Scalars['Int']['output'];
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: WorkoutsAggregate;
};


/** columns and relationships of "cycles" */
export type CyclesUserCyclesArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


/** columns and relationships of "cycles" */
export type CyclesUserCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


/** columns and relationships of "cycles" */
export type CyclesUserWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


/** columns and relationships of "cycles" */
export type CyclesUserWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


/** columns and relationships of "cycles" */
export type CyclesWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


/** columns and relationships of "cycles" */
export type CyclesWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};

/** aggregated selection of "cycles" */
export type CyclesAggregate = {
  __typename?: 'cycles_aggregate';
  aggregate: Maybe<CyclesAggregateFields>;
  nodes: Array<Cycles>;
};

export type CyclesAggregateBoolExp = {
  bool_and?: InputMaybe<CyclesAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<CyclesAggregateBoolExpBoolOr>;
  count?: InputMaybe<CyclesAggregateBoolExpCount>;
};

export type CyclesAggregateBoolExpBoolAnd = {
  arguments: CyclesSelectColumnCyclesAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CyclesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CyclesAggregateBoolExpBoolOr = {
  arguments: CyclesSelectColumnCyclesAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CyclesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type CyclesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<CyclesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<CyclesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "cycles" */
export type CyclesAggregateFields = {
  __typename?: 'cycles_aggregate_fields';
  avg: Maybe<CyclesAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<CyclesMaxFields>;
  min: Maybe<CyclesMinFields>;
  stddev: Maybe<CyclesStddevFields>;
  stddev_pop: Maybe<CyclesStddevPopFields>;
  stddev_samp: Maybe<CyclesStddevSampFields>;
  sum: Maybe<CyclesSumFields>;
  var_pop: Maybe<CyclesVarPopFields>;
  var_samp: Maybe<CyclesVarSampFields>;
  variance: Maybe<CyclesVarianceFields>;
};


/** aggregate fields of "cycles" */
export type CyclesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<CyclesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "cycles" */
export type CyclesAggregateOrderBy = {
  avg?: InputMaybe<CyclesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<CyclesMaxOrderBy>;
  min?: InputMaybe<CyclesMinOrderBy>;
  stddev?: InputMaybe<CyclesStddevOrderBy>;
  stddev_pop?: InputMaybe<CyclesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<CyclesStddevSampOrderBy>;
  sum?: InputMaybe<CyclesSumOrderBy>;
  var_pop?: InputMaybe<CyclesVarPopOrderBy>;
  var_samp?: InputMaybe<CyclesVarSampOrderBy>;
  variance?: InputMaybe<CyclesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "cycles" */
export type CyclesArrRelInsertInput = {
  data: Array<CyclesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<CyclesOnConflict>;
};

/** aggregate avg on columns */
export type CyclesAvgFields = {
  __typename?: 'cycles_avg_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "cycles" */
export type CyclesAvgOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "cycles". All fields are combined with a logical 'AND'. */
export type CyclesBoolExp = {
  _and?: InputMaybe<Array<CyclesBoolExp>>;
  _not?: InputMaybe<CyclesBoolExp>;
  _or?: InputMaybe<Array<CyclesBoolExp>>;
  bridge_week?: InputMaybe<BooleanComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  cycle_number?: InputMaybe<IntComparisonExp>;
  date?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  next_workout?: InputMaybe<BigintComparisonExp>;
  program?: InputMaybe<ProgramsBoolExp>;
  program_id?: InputMaybe<BigintComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_cycles?: InputMaybe<UserCyclesBoolExp>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateBoolExp>;
  user_workouts?: InputMaybe<UserWorkoutsBoolExp>;
  user_workouts_aggregate?: InputMaybe<UserWorkoutsAggregateBoolExp>;
  workout_count?: InputMaybe<IntComparisonExp>;
  workouts?: InputMaybe<WorkoutsBoolExp>;
  workouts_aggregate?: InputMaybe<WorkoutsAggregateBoolExp>;
};

/** unique or primary key constraints on table "cycles" */
export enum CyclesConstraint {
  /** unique or primary key constraint on columns "id" */
  CYCLES_PKEY = 'cycles_pkey'
}

/** input type for incrementing numeric columns in table "cycles" */
export type CyclesIncInput = {
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "cycles" */
export type CyclesInsertInput = {
  bridge_week?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycle_number?: InputMaybe<Scalars['Int']['input']>;
  date?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  program?: InputMaybe<ProgramsObjRelInsertInput>;
  program_id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_cycles?: InputMaybe<UserCyclesArrRelInsertInput>;
  user_workouts?: InputMaybe<UserWorkoutsArrRelInsertInput>;
  workout_count?: InputMaybe<Scalars['Int']['input']>;
  workouts?: InputMaybe<WorkoutsArrRelInsertInput>;
};

/** aggregate max on columns */
export type CyclesMaxFields = {
  __typename?: 'cycles_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  cycle_number: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_count: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "cycles" */
export type CyclesMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  cycle_number?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type CyclesMinFields = {
  __typename?: 'cycles_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  cycle_number: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_count: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "cycles" */
export type CyclesMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  cycle_number?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "cycles" */
export type CyclesMutationResponse = {
  __typename?: 'cycles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Cycles>;
};

/** input type for inserting object relation for remote table "cycles" */
export type CyclesObjRelInsertInput = {
  data: CyclesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<CyclesOnConflict>;
};

/** on_conflict condition type for table "cycles" */
export type CyclesOnConflict = {
  constraint: CyclesConstraint;
  update_columns?: Array<CyclesUpdateColumn>;
  where?: InputMaybe<CyclesBoolExp>;
};

/** Ordering options when selecting data from "cycles". */
export type CyclesOrderBy = {
  bridge_week?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  cycle_number?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  next_workout?: InputMaybe<OrderBy>;
  program?: InputMaybe<ProgramsOrderBy>;
  program_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateOrderBy>;
  user_workouts_aggregate?: InputMaybe<UserWorkoutsAggregateOrderBy>;
  workout_count?: InputMaybe<OrderBy>;
  workouts_aggregate?: InputMaybe<WorkoutsAggregateOrderBy>;
};

/** primary key columns input for table: cycles */
export type CyclesPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "cycles" */
export enum CyclesSelectColumn {
  /** column name */
  BRIDGE_WEEK = 'bridge_week',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE_NUMBER = 'cycle_number',
  /** column name */
  DATE = 'date',
  /** column name */
  ID = 'id',
  /** column name */
  PROGRAM_ID = 'program_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_COUNT = 'workout_count'
}

/** select "cycles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "cycles" */
export enum CyclesSelectColumnCyclesAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  BRIDGE_WEEK = 'bridge_week'
}

/** select "cycles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "cycles" */
export enum CyclesSelectColumnCyclesAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  BRIDGE_WEEK = 'bridge_week'
}

/** input type for updating data in table "cycles" */
export type CyclesSetInput = {
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
export type CyclesStddevFields = {
  __typename?: 'cycles_stddev_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "cycles" */
export type CyclesStddevOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type CyclesStddevPopFields = {
  __typename?: 'cycles_stddev_pop_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "cycles" */
export type CyclesStddevPopOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type CyclesStddevSampFields = {
  __typename?: 'cycles_stddev_samp_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "cycles" */
export type CyclesStddevSampOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "cycles" */
export type CyclesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: CyclesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type CyclesStreamCursorValueInput = {
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
export type CyclesSumFields = {
  __typename?: 'cycles_sum_fields';
  cycle_number: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['bigint']['output']>;
  workout_count: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "cycles" */
export type CyclesSumOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** update columns of table "cycles" */
export enum CyclesUpdateColumn {
  /** column name */
  BRIDGE_WEEK = 'bridge_week',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE_NUMBER = 'cycle_number',
  /** column name */
  DATE = 'date',
  /** column name */
  ID = 'id',
  /** column name */
  PROGRAM_ID = 'program_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_COUNT = 'workout_count'
}

export type CyclesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<CyclesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<CyclesSetInput>;
  /** filter the rows which have to be updated */
  where: CyclesBoolExp;
};

/** aggregate var_pop on columns */
export type CyclesVarPopFields = {
  __typename?: 'cycles_var_pop_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "cycles" */
export type CyclesVarPopOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type CyclesVarSampFields = {
  __typename?: 'cycles_var_samp_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "cycles" */
export type CyclesVarSampOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type CyclesVarianceFields = {
  __typename?: 'cycles_variance_fields';
  cycle_number: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  /** A computed field, executes function "get_next_workout" */
  next_workout: Maybe<Scalars['bigint']['output']>;
  program_id: Maybe<Scalars['Float']['output']>;
  workout_count: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "cycles" */
export type CyclesVarianceOrderBy = {
  cycle_number?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  program_id?: InputMaybe<OrderBy>;
  workout_count?: InputMaybe<OrderBy>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
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
export type ExerciseDetails = {
  __typename?: 'exercise_details';
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  exercise: Maybe<Exercises>;
  exercise_id: Maybe<Scalars['bigint']['output']>;
  id: Scalars['bigint']['output'];
  levels: Maybe<Scalars['json']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  workout_item: WorkoutItems;
  workout_item_id: Scalars['bigint']['output'];
};


/** columns and relationships of "exercise_details" */
export type ExerciseDetailsLevelsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "exercise_details" */
export type ExerciseDetailsAggregate = {
  __typename?: 'exercise_details_aggregate';
  aggregate: Maybe<ExerciseDetailsAggregateFields>;
  nodes: Array<ExerciseDetails>;
};

export type ExerciseDetailsAggregateBoolExp = {
  count?: InputMaybe<ExerciseDetailsAggregateBoolExpCount>;
};

export type ExerciseDetailsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ExerciseDetailsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "exercise_details" */
export type ExerciseDetailsAggregateFields = {
  __typename?: 'exercise_details_aggregate_fields';
  avg: Maybe<ExerciseDetailsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<ExerciseDetailsMaxFields>;
  min: Maybe<ExerciseDetailsMinFields>;
  stddev: Maybe<ExerciseDetailsStddevFields>;
  stddev_pop: Maybe<ExerciseDetailsStddevPopFields>;
  stddev_samp: Maybe<ExerciseDetailsStddevSampFields>;
  sum: Maybe<ExerciseDetailsSumFields>;
  var_pop: Maybe<ExerciseDetailsVarPopFields>;
  var_samp: Maybe<ExerciseDetailsVarSampFields>;
  variance: Maybe<ExerciseDetailsVarianceFields>;
};


/** aggregate fields of "exercise_details" */
export type ExerciseDetailsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exercise_details" */
export type ExerciseDetailsAggregateOrderBy = {
  avg?: InputMaybe<ExerciseDetailsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExerciseDetailsMaxOrderBy>;
  min?: InputMaybe<ExerciseDetailsMinOrderBy>;
  stddev?: InputMaybe<ExerciseDetailsStddevOrderBy>;
  stddev_pop?: InputMaybe<ExerciseDetailsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ExerciseDetailsStddevSampOrderBy>;
  sum?: InputMaybe<ExerciseDetailsSumOrderBy>;
  var_pop?: InputMaybe<ExerciseDetailsVarPopOrderBy>;
  var_samp?: InputMaybe<ExerciseDetailsVarSampOrderBy>;
  variance?: InputMaybe<ExerciseDetailsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "exercise_details" */
export type ExerciseDetailsArrRelInsertInput = {
  data: Array<ExerciseDetailsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ExerciseDetailsOnConflict>;
};

/** aggregate avg on columns */
export type ExerciseDetailsAvgFields = {
  __typename?: 'exercise_details_avg_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exercise_details" */
export type ExerciseDetailsAvgOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "exercise_details". All fields are combined with a logical 'AND'. */
export type ExerciseDetailsBoolExp = {
  _and?: InputMaybe<Array<ExerciseDetailsBoolExp>>;
  _not?: InputMaybe<ExerciseDetailsBoolExp>;
  _or?: InputMaybe<Array<ExerciseDetailsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  exercise?: InputMaybe<ExercisesBoolExp>;
  exercise_id?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  levels?: InputMaybe<JsonComparisonExp>;
  subtitle?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  workout_item?: InputMaybe<WorkoutItemsBoolExp>;
  workout_item_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "exercise_details" */
export enum ExerciseDetailsConstraint {
  /** unique or primary key constraint on columns "id" */
  EXERCISE_DETAILS_PKEY = 'exercise_details_pkey'
}

/** input type for incrementing numeric columns in table "exercise_details" */
export type ExerciseDetailsIncInput = {
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "exercise_details" */
export type ExerciseDetailsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise?: InputMaybe<ExercisesObjRelInsertInput>;
  exercise_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  levels?: InputMaybe<Scalars['json']['input']>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout_item?: InputMaybe<WorkoutItemsObjRelInsertInput>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type ExerciseDetailsMaxFields = {
  __typename?: 'exercise_details_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  exercise_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "exercise_details" */
export type ExerciseDetailsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ExerciseDetailsMinFields = {
  __typename?: 'exercise_details_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  exercise_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "exercise_details" */
export type ExerciseDetailsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "exercise_details" */
export type ExerciseDetailsMutationResponse = {
  __typename?: 'exercise_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ExerciseDetails>;
};

/** on_conflict condition type for table "exercise_details" */
export type ExerciseDetailsOnConflict = {
  constraint: ExerciseDetailsConstraint;
  update_columns?: Array<ExerciseDetailsUpdateColumn>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};

/** Ordering options when selecting data from "exercise_details". */
export type ExerciseDetailsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  exercise?: InputMaybe<ExercisesOrderBy>;
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  levels?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_item?: InputMaybe<WorkoutItemsOrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: exercise_details */
export type ExerciseDetailsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "exercise_details" */
export enum ExerciseDetailsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXERCISE_ID = 'exercise_id',
  /** column name */
  ID = 'id',
  /** column name */
  LEVELS = 'levels',
  /** column name */
  SUBTITLE = 'subtitle',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_ITEM_ID = 'workout_item_id'
}

/** input type for updating data in table "exercise_details" */
export type ExerciseDetailsSetInput = {
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
export type ExerciseDetailsStddevFields = {
  __typename?: 'exercise_details_stddev_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exercise_details" */
export type ExerciseDetailsStddevOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ExerciseDetailsStddevPopFields = {
  __typename?: 'exercise_details_stddev_pop_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exercise_details" */
export type ExerciseDetailsStddevPopOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ExerciseDetailsStddevSampFields = {
  __typename?: 'exercise_details_stddev_samp_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exercise_details" */
export type ExerciseDetailsStddevSampOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "exercise_details" */
export type ExerciseDetailsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ExerciseDetailsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ExerciseDetailsStreamCursorValueInput = {
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
export type ExerciseDetailsSumFields = {
  __typename?: 'exercise_details_sum_fields';
  exercise_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "exercise_details" */
export type ExerciseDetailsSumOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** update columns of table "exercise_details" */
export enum ExerciseDetailsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXERCISE_ID = 'exercise_id',
  /** column name */
  ID = 'id',
  /** column name */
  LEVELS = 'levels',
  /** column name */
  SUBTITLE = 'subtitle',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_ITEM_ID = 'workout_item_id'
}

export type ExerciseDetailsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ExerciseDetailsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExerciseDetailsSetInput>;
  /** filter the rows which have to be updated */
  where: ExerciseDetailsBoolExp;
};

/** aggregate var_pop on columns */
export type ExerciseDetailsVarPopFields = {
  __typename?: 'exercise_details_var_pop_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exercise_details" */
export type ExerciseDetailsVarPopOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ExerciseDetailsVarSampFields = {
  __typename?: 'exercise_details_var_samp_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exercise_details" */
export type ExerciseDetailsVarSampOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ExerciseDetailsVarianceFields = {
  __typename?: 'exercise_details_variance_fields';
  exercise_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exercise_details" */
export type ExerciseDetailsVarianceOrderBy = {
  exercise_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "exercise_library" */
export type ExerciseLibrary = {
  __typename?: 'exercise_library';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  level: Maybe<Scalars['json']['output']>;
  name: Scalars['String']['output'];
  pattern: Maybe<Scalars['json']['output']>;
  plane: Maybe<Scalars['json']['output']>;
  primary_muscles: Maybe<Scalars['json']['output']>;
  /** An array relationship */
  related_exercise: Array<Exercises>;
  /** An aggregate relationship */
  related_exercise_aggregate: ExercisesAggregate;
  secondary_muscles: Maybe<Scalars['json']['output']>;
  type: Maybe<Scalars['json']['output']>;
  url: Maybe<Scalars['String']['output']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryLevelArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryPatternArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryPlaneArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryPrimaryMusclesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryRelatedExerciseArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryRelatedExerciseAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibrarySecondaryMusclesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "exercise_library" */
export type ExerciseLibraryTypeArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "exercise_library" */
export type ExerciseLibraryAggregate = {
  __typename?: 'exercise_library_aggregate';
  aggregate: Maybe<ExerciseLibraryAggregateFields>;
  nodes: Array<ExerciseLibrary>;
};

/** aggregate fields of "exercise_library" */
export type ExerciseLibraryAggregateFields = {
  __typename?: 'exercise_library_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<ExerciseLibraryMaxFields>;
  min: Maybe<ExerciseLibraryMinFields>;
};


/** aggregate fields of "exercise_library" */
export type ExerciseLibraryAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExerciseLibrarySelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "exercise_library". All fields are combined with a logical 'AND'. */
export type ExerciseLibraryBoolExp = {
  _and?: InputMaybe<Array<ExerciseLibraryBoolExp>>;
  _not?: InputMaybe<ExerciseLibraryBoolExp>;
  _or?: InputMaybe<Array<ExerciseLibraryBoolExp>>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  level?: InputMaybe<JsonComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  pattern?: InputMaybe<JsonComparisonExp>;
  plane?: InputMaybe<JsonComparisonExp>;
  primary_muscles?: InputMaybe<JsonComparisonExp>;
  related_exercise?: InputMaybe<ExercisesBoolExp>;
  related_exercise_aggregate?: InputMaybe<ExercisesAggregateBoolExp>;
  secondary_muscles?: InputMaybe<JsonComparisonExp>;
  type?: InputMaybe<JsonComparisonExp>;
  url?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "exercise_library" */
export enum ExerciseLibraryConstraint {
  /** unique or primary key constraint on columns "id" */
  EXERCISE_LIBRARY_PKEY = 'exercise_library_pkey'
}

/** input type for inserting data into table "exercise_library" */
export type ExerciseLibraryInsertInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['json']['input']>;
  plane?: InputMaybe<Scalars['json']['input']>;
  primary_muscles?: InputMaybe<Scalars['json']['input']>;
  related_exercise?: InputMaybe<ExercisesArrRelInsertInput>;
  secondary_muscles?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<Scalars['json']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type ExerciseLibraryMaxFields = {
  __typename?: 'exercise_library_max_fields';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ExerciseLibraryMinFields = {
  __typename?: 'exercise_library_min_fields';
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  url: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "exercise_library" */
export type ExerciseLibraryMutationResponse = {
  __typename?: 'exercise_library_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<ExerciseLibrary>;
};

/** on_conflict condition type for table "exercise_library" */
export type ExerciseLibraryOnConflict = {
  constraint: ExerciseLibraryConstraint;
  update_columns?: Array<ExerciseLibraryUpdateColumn>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};

/** Ordering options when selecting data from "exercise_library". */
export type ExerciseLibraryOrderBy = {
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  level?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  pattern?: InputMaybe<OrderBy>;
  plane?: InputMaybe<OrderBy>;
  primary_muscles?: InputMaybe<OrderBy>;
  related_exercise_aggregate?: InputMaybe<ExercisesAggregateOrderBy>;
  secondary_muscles?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
  url?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: exercise_library */
export type ExerciseLibraryPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "exercise_library" */
export enum ExerciseLibrarySelectColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  PATTERN = 'pattern',
  /** column name */
  PLANE = 'plane',
  /** column name */
  PRIMARY_MUSCLES = 'primary_muscles',
  /** column name */
  SECONDARY_MUSCLES = 'secondary_muscles',
  /** column name */
  TYPE = 'type',
  /** column name */
  URL = 'url'
}

/** input type for updating data in table "exercise_library" */
export type ExerciseLibrarySetInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['json']['input']>;
  plane?: InputMaybe<Scalars['json']['input']>;
  primary_muscles?: InputMaybe<Scalars['json']['input']>;
  secondary_muscles?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<Scalars['json']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "exercise_library" */
export type ExerciseLibraryStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ExerciseLibraryStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ExerciseLibraryStreamCursorValueInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  level?: InputMaybe<Scalars['json']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  pattern?: InputMaybe<Scalars['json']['input']>;
  plane?: InputMaybe<Scalars['json']['input']>;
  primary_muscles?: InputMaybe<Scalars['json']['input']>;
  secondary_muscles?: InputMaybe<Scalars['json']['input']>;
  type?: InputMaybe<Scalars['json']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "exercise_library" */
export enum ExerciseLibraryUpdateColumn {
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  LEVEL = 'level',
  /** column name */
  NAME = 'name',
  /** column name */
  PATTERN = 'pattern',
  /** column name */
  PLANE = 'plane',
  /** column name */
  PRIMARY_MUSCLES = 'primary_muscles',
  /** column name */
  SECONDARY_MUSCLES = 'secondary_muscles',
  /** column name */
  TYPE = 'type',
  /** column name */
  URL = 'url'
}

export type ExerciseLibraryUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExerciseLibrarySetInput>;
  /** filter the rows which have to be updated */
  where: ExerciseLibraryBoolExp;
};

/** columns and relationships of "exercises" */
export type Exercises = {
  __typename?: 'exercises';
  base_url: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  demo_video_id: Scalars['String']['output'];
  demo_video_poster: Scalars['String']['output'];
  demo_video_thumb: Scalars['String']['output'];
  demo_video_title: Scalars['String']['output'];
  demo_video_url: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  exercise_details: Array<ExerciseDetails>;
  /** An aggregate relationship */
  exercise_details_aggregate: ExerciseDetailsAggregate;
  id: Scalars['bigint']['output'];
  /** An object relationship */
  muscle_group: Maybe<MuscleGroups>;
  muscle_group_id: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamp']['output'];
};


/** columns and relationships of "exercises" */
export type ExercisesExerciseDetailsArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


/** columns and relationships of "exercises" */
export type ExercisesExerciseDetailsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};

/** aggregated selection of "exercises" */
export type ExercisesAggregate = {
  __typename?: 'exercises_aggregate';
  aggregate: Maybe<ExercisesAggregateFields>;
  nodes: Array<Exercises>;
};

export type ExercisesAggregateBoolExp = {
  count?: InputMaybe<ExercisesAggregateBoolExpCount>;
};

export type ExercisesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<ExercisesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<ExercisesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "exercises" */
export type ExercisesAggregateFields = {
  __typename?: 'exercises_aggregate_fields';
  avg: Maybe<ExercisesAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<ExercisesMaxFields>;
  min: Maybe<ExercisesMinFields>;
  stddev: Maybe<ExercisesStddevFields>;
  stddev_pop: Maybe<ExercisesStddevPopFields>;
  stddev_samp: Maybe<ExercisesStddevSampFields>;
  sum: Maybe<ExercisesSumFields>;
  var_pop: Maybe<ExercisesVarPopFields>;
  var_samp: Maybe<ExercisesVarSampFields>;
  variance: Maybe<ExercisesVarianceFields>;
};


/** aggregate fields of "exercises" */
export type ExercisesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ExercisesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "exercises" */
export type ExercisesAggregateOrderBy = {
  avg?: InputMaybe<ExercisesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<ExercisesMaxOrderBy>;
  min?: InputMaybe<ExercisesMinOrderBy>;
  stddev?: InputMaybe<ExercisesStddevOrderBy>;
  stddev_pop?: InputMaybe<ExercisesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<ExercisesStddevSampOrderBy>;
  sum?: InputMaybe<ExercisesSumOrderBy>;
  var_pop?: InputMaybe<ExercisesVarPopOrderBy>;
  var_samp?: InputMaybe<ExercisesVarSampOrderBy>;
  variance?: InputMaybe<ExercisesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "exercises" */
export type ExercisesArrRelInsertInput = {
  data: Array<ExercisesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<ExercisesOnConflict>;
};

/** aggregate avg on columns */
export type ExercisesAvgFields = {
  __typename?: 'exercises_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "exercises" */
export type ExercisesAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "exercises". All fields are combined with a logical 'AND'. */
export type ExercisesBoolExp = {
  _and?: InputMaybe<Array<ExercisesBoolExp>>;
  _not?: InputMaybe<ExercisesBoolExp>;
  _or?: InputMaybe<Array<ExercisesBoolExp>>;
  base_url?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  demo_video_id?: InputMaybe<StringComparisonExp>;
  demo_video_poster?: InputMaybe<StringComparisonExp>;
  demo_video_thumb?: InputMaybe<StringComparisonExp>;
  demo_video_title?: InputMaybe<StringComparisonExp>;
  demo_video_url?: InputMaybe<StringComparisonExp>;
  exercise_details?: InputMaybe<ExerciseDetailsBoolExp>;
  exercise_details_aggregate?: InputMaybe<ExerciseDetailsAggregateBoolExp>;
  id?: InputMaybe<BigintComparisonExp>;
  muscle_group?: InputMaybe<MuscleGroupsBoolExp>;
  muscle_group_id?: InputMaybe<UuidComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "exercises" */
export enum ExercisesConstraint {
  /** unique or primary key constraint on columns "demo_video_title" */
  EXERCISES_DEMO_VIDEO_TITLE_UNIQUE = 'exercises_demo_video_title_unique',
  /** unique or primary key constraint on columns "id" */
  EXERCISES_PKEY = 'exercises_pkey'
}

/** input type for incrementing numeric columns in table "exercises" */
export type ExercisesIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "exercises" */
export type ExercisesInsertInput = {
  base_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  exercise_details?: InputMaybe<ExerciseDetailsArrRelInsertInput>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  muscle_group?: InputMaybe<MuscleGroupsObjRelInsertInput>;
  muscle_group_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type ExercisesMaxFields = {
  __typename?: 'exercises_max_fields';
  base_url: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamp']['output']>;
  demo_video_id: Maybe<Scalars['String']['output']>;
  demo_video_poster: Maybe<Scalars['String']['output']>;
  demo_video_thumb: Maybe<Scalars['String']['output']>;
  demo_video_title: Maybe<Scalars['String']['output']>;
  demo_video_url: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  muscle_group_id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "exercises" */
export type ExercisesMaxOrderBy = {
  base_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  demo_video_id?: InputMaybe<OrderBy>;
  demo_video_poster?: InputMaybe<OrderBy>;
  demo_video_thumb?: InputMaybe<OrderBy>;
  demo_video_title?: InputMaybe<OrderBy>;
  demo_video_url?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  muscle_group_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type ExercisesMinFields = {
  __typename?: 'exercises_min_fields';
  base_url: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamp']['output']>;
  demo_video_id: Maybe<Scalars['String']['output']>;
  demo_video_poster: Maybe<Scalars['String']['output']>;
  demo_video_thumb: Maybe<Scalars['String']['output']>;
  demo_video_title: Maybe<Scalars['String']['output']>;
  demo_video_url: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  muscle_group_id: Maybe<Scalars['uuid']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "exercises" */
export type ExercisesMinOrderBy = {
  base_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  demo_video_id?: InputMaybe<OrderBy>;
  demo_video_poster?: InputMaybe<OrderBy>;
  demo_video_thumb?: InputMaybe<OrderBy>;
  demo_video_title?: InputMaybe<OrderBy>;
  demo_video_url?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  muscle_group_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "exercises" */
export type ExercisesMutationResponse = {
  __typename?: 'exercises_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Exercises>;
};

/** input type for inserting object relation for remote table "exercises" */
export type ExercisesObjRelInsertInput = {
  data: ExercisesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ExercisesOnConflict>;
};

/** on_conflict condition type for table "exercises" */
export type ExercisesOnConflict = {
  constraint: ExercisesConstraint;
  update_columns?: Array<ExercisesUpdateColumn>;
  where?: InputMaybe<ExercisesBoolExp>;
};

/** Ordering options when selecting data from "exercises". */
export type ExercisesOrderBy = {
  base_url?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  demo_video_id?: InputMaybe<OrderBy>;
  demo_video_poster?: InputMaybe<OrderBy>;
  demo_video_thumb?: InputMaybe<OrderBy>;
  demo_video_title?: InputMaybe<OrderBy>;
  demo_video_url?: InputMaybe<OrderBy>;
  exercise_details_aggregate?: InputMaybe<ExerciseDetailsAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  muscle_group?: InputMaybe<MuscleGroupsOrderBy>;
  muscle_group_id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: exercises */
export type ExercisesPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "exercises" */
export enum ExercisesSelectColumn {
  /** column name */
  BASE_URL = 'base_url',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DEMO_VIDEO_ID = 'demo_video_id',
  /** column name */
  DEMO_VIDEO_POSTER = 'demo_video_poster',
  /** column name */
  DEMO_VIDEO_THUMB = 'demo_video_thumb',
  /** column name */
  DEMO_VIDEO_TITLE = 'demo_video_title',
  /** column name */
  DEMO_VIDEO_URL = 'demo_video_url',
  /** column name */
  ID = 'id',
  /** column name */
  MUSCLE_GROUP_ID = 'muscle_group_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "exercises" */
export type ExercisesSetInput = {
  base_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  muscle_group_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type ExercisesStddevFields = {
  __typename?: 'exercises_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "exercises" */
export type ExercisesStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ExercisesStddevPopFields = {
  __typename?: 'exercises_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "exercises" */
export type ExercisesStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ExercisesStddevSampFields = {
  __typename?: 'exercises_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "exercises" */
export type ExercisesStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "exercises" */
export type ExercisesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ExercisesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ExercisesStreamCursorValueInput = {
  base_url?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  demo_video_id?: InputMaybe<Scalars['String']['input']>;
  demo_video_poster?: InputMaybe<Scalars['String']['input']>;
  demo_video_thumb?: InputMaybe<Scalars['String']['input']>;
  demo_video_title?: InputMaybe<Scalars['String']['input']>;
  demo_video_url?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  muscle_group_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type ExercisesSumFields = {
  __typename?: 'exercises_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "exercises" */
export type ExercisesSumOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "exercises" */
export enum ExercisesUpdateColumn {
  /** column name */
  BASE_URL = 'base_url',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DEMO_VIDEO_ID = 'demo_video_id',
  /** column name */
  DEMO_VIDEO_POSTER = 'demo_video_poster',
  /** column name */
  DEMO_VIDEO_THUMB = 'demo_video_thumb',
  /** column name */
  DEMO_VIDEO_TITLE = 'demo_video_title',
  /** column name */
  DEMO_VIDEO_URL = 'demo_video_url',
  /** column name */
  ID = 'id',
  /** column name */
  MUSCLE_GROUP_ID = 'muscle_group_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type ExercisesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ExercisesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ExercisesSetInput>;
  /** filter the rows which have to be updated */
  where: ExercisesBoolExp;
};

/** aggregate var_pop on columns */
export type ExercisesVarPopFields = {
  __typename?: 'exercises_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "exercises" */
export type ExercisesVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ExercisesVarSampFields = {
  __typename?: 'exercises_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "exercises" */
export type ExercisesVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type ExercisesVarianceFields = {
  __typename?: 'exercises_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "exercises" */
export type ExercisesVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "integrations" */
export type Integrations = {
  __typename?: 'integrations';
  access_token: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  refresh_token: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Maybe<Users>;
  user_id: Scalars['bigint']['output'];
};

/** aggregated selection of "integrations" */
export type IntegrationsAggregate = {
  __typename?: 'integrations_aggregate';
  aggregate: Maybe<IntegrationsAggregateFields>;
  nodes: Array<Integrations>;
};

/** aggregate fields of "integrations" */
export type IntegrationsAggregateFields = {
  __typename?: 'integrations_aggregate_fields';
  avg: Maybe<IntegrationsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<IntegrationsMaxFields>;
  min: Maybe<IntegrationsMinFields>;
  stddev: Maybe<IntegrationsStddevFields>;
  stddev_pop: Maybe<IntegrationsStddevPopFields>;
  stddev_samp: Maybe<IntegrationsStddevSampFields>;
  sum: Maybe<IntegrationsSumFields>;
  var_pop: Maybe<IntegrationsVarPopFields>;
  var_samp: Maybe<IntegrationsVarSampFields>;
  variance: Maybe<IntegrationsVarianceFields>;
};


/** aggregate fields of "integrations" */
export type IntegrationsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<IntegrationsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type IntegrationsAvgFields = {
  __typename?: 'integrations_avg_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "integrations". All fields are combined with a logical 'AND'. */
export type IntegrationsBoolExp = {
  _and?: InputMaybe<Array<IntegrationsBoolExp>>;
  _not?: InputMaybe<IntegrationsBoolExp>;
  _or?: InputMaybe<Array<IntegrationsBoolExp>>;
  access_token?: InputMaybe<StringComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  expires_at?: InputMaybe<IntComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  refresh_token?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "integrations" */
export enum IntegrationsConstraint {
  /** unique or primary key constraint on columns "id" */
  INTEGRATIONS_PKEY = 'integrations_pkey'
}

/** input type for incrementing numeric columns in table "integrations" */
export type IntegrationsIncInput = {
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "integrations" */
export type IntegrationsInsertInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type IntegrationsMaxFields = {
  __typename?: 'integrations_max_fields';
  access_token: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  expires_at: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  refresh_token: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** aggregate min on columns */
export type IntegrationsMinFields = {
  __typename?: 'integrations_min_fields';
  access_token: Maybe<Scalars['String']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  expires_at: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  name: Maybe<Scalars['String']['output']>;
  refresh_token: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** response of any mutation on the table "integrations" */
export type IntegrationsMutationResponse = {
  __typename?: 'integrations_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Integrations>;
};

/** input type for inserting object relation for remote table "integrations" */
export type IntegrationsObjRelInsertInput = {
  data: IntegrationsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<IntegrationsOnConflict>;
};

/** on_conflict condition type for table "integrations" */
export type IntegrationsOnConflict = {
  constraint: IntegrationsConstraint;
  update_columns?: Array<IntegrationsUpdateColumn>;
  where?: InputMaybe<IntegrationsBoolExp>;
};

/** Ordering options when selecting data from "integrations". */
export type IntegrationsOrderBy = {
  access_token?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  expires_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  refresh_token?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: integrations */
export type IntegrationsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "integrations" */
export enum IntegrationsSelectColumn {
  /** column name */
  ACCESS_TOKEN = 'access_token',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXPIRES_AT = 'expires_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  REFRESH_TOKEN = 'refresh_token',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "integrations" */
export type IntegrationsSetInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type IntegrationsStddevFields = {
  __typename?: 'integrations_stddev_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type IntegrationsStddevPopFields = {
  __typename?: 'integrations_stddev_pop_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type IntegrationsStddevSampFields = {
  __typename?: 'integrations_stddev_samp_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "integrations" */
export type IntegrationsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: IntegrationsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type IntegrationsStreamCursorValueInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type IntegrationsSumFields = {
  __typename?: 'integrations_sum_fields';
  expires_at: Maybe<Scalars['Int']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "integrations" */
export enum IntegrationsUpdateColumn {
  /** column name */
  ACCESS_TOKEN = 'access_token',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EXPIRES_AT = 'expires_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  REFRESH_TOKEN = 'refresh_token',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

export type IntegrationsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<IntegrationsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<IntegrationsSetInput>;
  /** filter the rows which have to be updated */
  where: IntegrationsBoolExp;
};

/** aggregate var_pop on columns */
export type IntegrationsVarPopFields = {
  __typename?: 'integrations_var_pop_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type IntegrationsVarSampFields = {
  __typename?: 'integrations_var_samp_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type IntegrationsVarianceFields = {
  __typename?: 'integrations_variance_fields';
  expires_at: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type JsonComparisonExp = {
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

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "muscle_groups" */
export type MuscleGroups = {
  __typename?: 'muscle_groups';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  type: Scalars['String']['output'];
};

/** aggregated selection of "muscle_groups" */
export type MuscleGroupsAggregate = {
  __typename?: 'muscle_groups_aggregate';
  aggregate: Maybe<MuscleGroupsAggregateFields>;
  nodes: Array<MuscleGroups>;
};

/** aggregate fields of "muscle_groups" */
export type MuscleGroupsAggregateFields = {
  __typename?: 'muscle_groups_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<MuscleGroupsMaxFields>;
  min: Maybe<MuscleGroupsMinFields>;
};


/** aggregate fields of "muscle_groups" */
export type MuscleGroupsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<MuscleGroupsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "muscle_groups". All fields are combined with a logical 'AND'. */
export type MuscleGroupsBoolExp = {
  _and?: InputMaybe<Array<MuscleGroupsBoolExp>>;
  _not?: InputMaybe<MuscleGroupsBoolExp>;
  _or?: InputMaybe<Array<MuscleGroupsBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  type?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "muscle_groups" */
export enum MuscleGroupsConstraint {
  /** unique or primary key constraint on columns "id" */
  MUSCLE_GROUPS_PKEY = 'muscle_groups_pkey'
}

/** input type for inserting data into table "muscle_groups" */
export type MuscleGroupsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type MuscleGroupsMaxFields = {
  __typename?: 'muscle_groups_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type MuscleGroupsMinFields = {
  __typename?: 'muscle_groups_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  type: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "muscle_groups" */
export type MuscleGroupsMutationResponse = {
  __typename?: 'muscle_groups_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<MuscleGroups>;
};

/** input type for inserting object relation for remote table "muscle_groups" */
export type MuscleGroupsObjRelInsertInput = {
  data: MuscleGroupsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<MuscleGroupsOnConflict>;
};

/** on_conflict condition type for table "muscle_groups" */
export type MuscleGroupsOnConflict = {
  constraint: MuscleGroupsConstraint;
  update_columns?: Array<MuscleGroupsUpdateColumn>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};

/** Ordering options when selecting data from "muscle_groups". */
export type MuscleGroupsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: muscle_groups */
export type MuscleGroupsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "muscle_groups" */
export enum MuscleGroupsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  TYPE = 'type'
}

/** input type for updating data in table "muscle_groups" */
export type MuscleGroupsSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "muscle_groups" */
export type MuscleGroupsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: MuscleGroupsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type MuscleGroupsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "muscle_groups" */
export enum MuscleGroupsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  TYPE = 'type'
}

export type MuscleGroupsUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<MuscleGroupsSetInput>;
  /** filter the rows which have to be updated */
  where: MuscleGroupsBoolExp;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "cycles" */
  delete_cycles: Maybe<CyclesMutationResponse>;
  /** delete single row from the table: "cycles" */
  delete_cycles_by_pk: Maybe<Cycles>;
  /** delete data from the table: "exercise_details" */
  delete_exercise_details: Maybe<ExerciseDetailsMutationResponse>;
  /** delete single row from the table: "exercise_details" */
  delete_exercise_details_by_pk: Maybe<ExerciseDetails>;
  /** delete data from the table: "exercise_library" */
  delete_exercise_library: Maybe<ExerciseLibraryMutationResponse>;
  /** delete single row from the table: "exercise_library" */
  delete_exercise_library_by_pk: Maybe<ExerciseLibrary>;
  /** delete data from the table: "exercises" */
  delete_exercises: Maybe<ExercisesMutationResponse>;
  /** delete single row from the table: "exercises" */
  delete_exercises_by_pk: Maybe<Exercises>;
  /** delete data from the table: "integrations" */
  delete_integrations: Maybe<IntegrationsMutationResponse>;
  /** delete single row from the table: "integrations" */
  delete_integrations_by_pk: Maybe<Integrations>;
  /** delete data from the table: "muscle_groups" */
  delete_muscle_groups: Maybe<MuscleGroupsMutationResponse>;
  /** delete single row from the table: "muscle_groups" */
  delete_muscle_groups_by_pk: Maybe<MuscleGroups>;
  /** delete data from the table: "programs" */
  delete_programs: Maybe<ProgramsMutationResponse>;
  /** delete single row from the table: "programs" */
  delete_programs_by_pk: Maybe<Programs>;
  /** delete data from the table: "scores" */
  delete_scores: Maybe<ScoresMutationResponse>;
  /** delete single row from the table: "scores" */
  delete_scores_by_pk: Maybe<Scores>;
  /** delete data from the table: "user_cycles" */
  delete_user_cycles: Maybe<UserCyclesMutationResponse>;
  /** delete single row from the table: "user_cycles" */
  delete_user_cycles_by_pk: Maybe<UserCycles>;
  /** delete data from the table: "user_workouts" */
  delete_user_workouts: Maybe<UserWorkoutsMutationResponse>;
  /** delete single row from the table: "user_workouts" */
  delete_user_workouts_by_pk: Maybe<UserWorkouts>;
  /** delete data from the table: "users" */
  delete_users: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk: Maybe<Users>;
  /** delete data from the table: "webhooks" */
  delete_webhooks: Maybe<WebhooksMutationResponse>;
  /** delete single row from the table: "webhooks" */
  delete_webhooks_by_pk: Maybe<Webhooks>;
  /** delete data from the table: "workout_item_scores" */
  delete_workout_item_scores: Maybe<WorkoutItemScoresMutationResponse>;
  /** delete single row from the table: "workout_item_scores" */
  delete_workout_item_scores_by_pk: Maybe<WorkoutItemScores>;
  /** delete data from the table: "workout_items" */
  delete_workout_items: Maybe<WorkoutItemsMutationResponse>;
  /** delete single row from the table: "workout_items" */
  delete_workout_items_by_pk: Maybe<WorkoutItems>;
  /** delete data from the table: "workout_status_enum" */
  delete_workout_status_enum: Maybe<WorkoutStatusEnumMutationResponse>;
  /** delete single row from the table: "workout_status_enum" */
  delete_workout_status_enum_by_pk: Maybe<WorkoutStatusEnum>;
  /** delete data from the table: "workouts" */
  delete_workouts: Maybe<WorkoutsMutationResponse>;
  /** delete single row from the table: "workouts" */
  delete_workouts_by_pk: Maybe<Workouts>;
  /** insert data into the table: "cycles" */
  insert_cycles: Maybe<CyclesMutationResponse>;
  /** insert a single row into the table: "cycles" */
  insert_cycles_one: Maybe<Cycles>;
  /** insert data into the table: "exercise_details" */
  insert_exercise_details: Maybe<ExerciseDetailsMutationResponse>;
  /** insert a single row into the table: "exercise_details" */
  insert_exercise_details_one: Maybe<ExerciseDetails>;
  /** insert data into the table: "exercise_library" */
  insert_exercise_library: Maybe<ExerciseLibraryMutationResponse>;
  /** insert a single row into the table: "exercise_library" */
  insert_exercise_library_one: Maybe<ExerciseLibrary>;
  /** insert data into the table: "exercises" */
  insert_exercises: Maybe<ExercisesMutationResponse>;
  /** insert a single row into the table: "exercises" */
  insert_exercises_one: Maybe<Exercises>;
  /** insert data into the table: "integrations" */
  insert_integrations: Maybe<IntegrationsMutationResponse>;
  /** insert a single row into the table: "integrations" */
  insert_integrations_one: Maybe<Integrations>;
  /** insert data into the table: "muscle_groups" */
  insert_muscle_groups: Maybe<MuscleGroupsMutationResponse>;
  /** insert a single row into the table: "muscle_groups" */
  insert_muscle_groups_one: Maybe<MuscleGroups>;
  /** insert data into the table: "programs" */
  insert_programs: Maybe<ProgramsMutationResponse>;
  /** insert a single row into the table: "programs" */
  insert_programs_one: Maybe<Programs>;
  /** insert data into the table: "scores" */
  insert_scores: Maybe<ScoresMutationResponse>;
  /** insert a single row into the table: "scores" */
  insert_scores_one: Maybe<Scores>;
  /** insert data into the table: "user_cycles" */
  insert_user_cycles: Maybe<UserCyclesMutationResponse>;
  /** insert a single row into the table: "user_cycles" */
  insert_user_cycles_one: Maybe<UserCycles>;
  /** insert data into the table: "user_workouts" */
  insert_user_workouts: Maybe<UserWorkoutsMutationResponse>;
  /** insert a single row into the table: "user_workouts" */
  insert_user_workouts_one: Maybe<UserWorkouts>;
  /** insert data into the table: "users" */
  insert_users: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one: Maybe<Users>;
  /** insert data into the table: "webhooks" */
  insert_webhooks: Maybe<WebhooksMutationResponse>;
  /** insert a single row into the table: "webhooks" */
  insert_webhooks_one: Maybe<Webhooks>;
  /** insert data into the table: "workout_item_scores" */
  insert_workout_item_scores: Maybe<WorkoutItemScoresMutationResponse>;
  /** insert a single row into the table: "workout_item_scores" */
  insert_workout_item_scores_one: Maybe<WorkoutItemScores>;
  /** insert data into the table: "workout_items" */
  insert_workout_items: Maybe<WorkoutItemsMutationResponse>;
  /** insert a single row into the table: "workout_items" */
  insert_workout_items_one: Maybe<WorkoutItems>;
  /** insert data into the table: "workout_status_enum" */
  insert_workout_status_enum: Maybe<WorkoutStatusEnumMutationResponse>;
  /** insert a single row into the table: "workout_status_enum" */
  insert_workout_status_enum_one: Maybe<WorkoutStatusEnum>;
  /** insert data into the table: "workouts" */
  insert_workouts: Maybe<WorkoutsMutationResponse>;
  /** insert a single row into the table: "workouts" */
  insert_workouts_one: Maybe<Workouts>;
  /** update data of the table: "cycles" */
  update_cycles: Maybe<CyclesMutationResponse>;
  /** update single row of the table: "cycles" */
  update_cycles_by_pk: Maybe<Cycles>;
  /** update multiples rows of table: "cycles" */
  update_cycles_many: Maybe<Array<Maybe<CyclesMutationResponse>>>;
  /** update data of the table: "exercise_details" */
  update_exercise_details: Maybe<ExerciseDetailsMutationResponse>;
  /** update single row of the table: "exercise_details" */
  update_exercise_details_by_pk: Maybe<ExerciseDetails>;
  /** update multiples rows of table: "exercise_details" */
  update_exercise_details_many: Maybe<Array<Maybe<ExerciseDetailsMutationResponse>>>;
  /** update data of the table: "exercise_library" */
  update_exercise_library: Maybe<ExerciseLibraryMutationResponse>;
  /** update single row of the table: "exercise_library" */
  update_exercise_library_by_pk: Maybe<ExerciseLibrary>;
  /** update multiples rows of table: "exercise_library" */
  update_exercise_library_many: Maybe<Array<Maybe<ExerciseLibraryMutationResponse>>>;
  /** update data of the table: "exercises" */
  update_exercises: Maybe<ExercisesMutationResponse>;
  /** update single row of the table: "exercises" */
  update_exercises_by_pk: Maybe<Exercises>;
  /** update multiples rows of table: "exercises" */
  update_exercises_many: Maybe<Array<Maybe<ExercisesMutationResponse>>>;
  /** update data of the table: "integrations" */
  update_integrations: Maybe<IntegrationsMutationResponse>;
  /** update single row of the table: "integrations" */
  update_integrations_by_pk: Maybe<Integrations>;
  /** update multiples rows of table: "integrations" */
  update_integrations_many: Maybe<Array<Maybe<IntegrationsMutationResponse>>>;
  /** update data of the table: "muscle_groups" */
  update_muscle_groups: Maybe<MuscleGroupsMutationResponse>;
  /** update single row of the table: "muscle_groups" */
  update_muscle_groups_by_pk: Maybe<MuscleGroups>;
  /** update multiples rows of table: "muscle_groups" */
  update_muscle_groups_many: Maybe<Array<Maybe<MuscleGroupsMutationResponse>>>;
  /** update data of the table: "programs" */
  update_programs: Maybe<ProgramsMutationResponse>;
  /** update single row of the table: "programs" */
  update_programs_by_pk: Maybe<Programs>;
  /** update multiples rows of table: "programs" */
  update_programs_many: Maybe<Array<Maybe<ProgramsMutationResponse>>>;
  /** update data of the table: "scores" */
  update_scores: Maybe<ScoresMutationResponse>;
  /** update single row of the table: "scores" */
  update_scores_by_pk: Maybe<Scores>;
  /** update multiples rows of table: "scores" */
  update_scores_many: Maybe<Array<Maybe<ScoresMutationResponse>>>;
  /** update data of the table: "user_cycles" */
  update_user_cycles: Maybe<UserCyclesMutationResponse>;
  /** update single row of the table: "user_cycles" */
  update_user_cycles_by_pk: Maybe<UserCycles>;
  /** update multiples rows of table: "user_cycles" */
  update_user_cycles_many: Maybe<Array<Maybe<UserCyclesMutationResponse>>>;
  /** update data of the table: "user_workouts" */
  update_user_workouts: Maybe<UserWorkoutsMutationResponse>;
  /** update single row of the table: "user_workouts" */
  update_user_workouts_by_pk: Maybe<UserWorkouts>;
  /** update multiples rows of table: "user_workouts" */
  update_user_workouts_many: Maybe<Array<Maybe<UserWorkoutsMutationResponse>>>;
  /** update data of the table: "users" */
  update_users: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update data of the table: "webhooks" */
  update_webhooks: Maybe<WebhooksMutationResponse>;
  /** update single row of the table: "webhooks" */
  update_webhooks_by_pk: Maybe<Webhooks>;
  /** update multiples rows of table: "webhooks" */
  update_webhooks_many: Maybe<Array<Maybe<WebhooksMutationResponse>>>;
  /** update data of the table: "workout_item_scores" */
  update_workout_item_scores: Maybe<WorkoutItemScoresMutationResponse>;
  /** update single row of the table: "workout_item_scores" */
  update_workout_item_scores_by_pk: Maybe<WorkoutItemScores>;
  /** update multiples rows of table: "workout_item_scores" */
  update_workout_item_scores_many: Maybe<Array<Maybe<WorkoutItemScoresMutationResponse>>>;
  /** update data of the table: "workout_items" */
  update_workout_items: Maybe<WorkoutItemsMutationResponse>;
  /** update single row of the table: "workout_items" */
  update_workout_items_by_pk: Maybe<WorkoutItems>;
  /** update multiples rows of table: "workout_items" */
  update_workout_items_many: Maybe<Array<Maybe<WorkoutItemsMutationResponse>>>;
  /** update data of the table: "workout_status_enum" */
  update_workout_status_enum: Maybe<WorkoutStatusEnumMutationResponse>;
  /** update single row of the table: "workout_status_enum" */
  update_workout_status_enum_by_pk: Maybe<WorkoutStatusEnum>;
  /** update multiples rows of table: "workout_status_enum" */
  update_workout_status_enum_many: Maybe<Array<Maybe<WorkoutStatusEnumMutationResponse>>>;
  /** update data of the table: "workouts" */
  update_workouts: Maybe<WorkoutsMutationResponse>;
  /** update single row of the table: "workouts" */
  update_workouts_by_pk: Maybe<Workouts>;
  /** update multiples rows of table: "workouts" */
  update_workouts_many: Maybe<Array<Maybe<WorkoutsMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteCyclesArgs = {
  where: CyclesBoolExp;
};


/** mutation root */
export type MutationRootDeleteCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteExerciseDetailsArgs = {
  where: ExerciseDetailsBoolExp;
};


/** mutation root */
export type MutationRootDeleteExerciseDetailsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteExerciseLibraryArgs = {
  where: ExerciseLibraryBoolExp;
};


/** mutation root */
export type MutationRootDeleteExerciseLibraryByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteExercisesArgs = {
  where: ExercisesBoolExp;
};


/** mutation root */
export type MutationRootDeleteExercisesByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteIntegrationsArgs = {
  where: IntegrationsBoolExp;
};


/** mutation root */
export type MutationRootDeleteIntegrationsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteMuscleGroupsArgs = {
  where: MuscleGroupsBoolExp;
};


/** mutation root */
export type MutationRootDeleteMuscleGroupsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteProgramsArgs = {
  where: ProgramsBoolExp;
};


/** mutation root */
export type MutationRootDeleteProgramsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteScoresArgs = {
  where: ScoresBoolExp;
};


/** mutation root */
export type MutationRootDeleteScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteUserCyclesArgs = {
  where: UserCyclesBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteUserWorkoutsArgs = {
  where: UserWorkoutsBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserWorkoutsByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteWebhooksArgs = {
  where: WebhooksBoolExp;
};


/** mutation root */
export type MutationRootDeleteWebhooksByPkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type MutationRootDeleteWorkoutItemScoresArgs = {
  where: WorkoutItemScoresBoolExp;
};


/** mutation root */
export type MutationRootDeleteWorkoutItemScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteWorkoutItemsArgs = {
  where: WorkoutItemsBoolExp;
};


/** mutation root */
export type MutationRootDeleteWorkoutItemsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootDeleteWorkoutStatusEnumArgs = {
  where: WorkoutStatusEnumBoolExp;
};


/** mutation root */
export type MutationRootDeleteWorkoutStatusEnumByPkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type MutationRootDeleteWorkoutsArgs = {
  where: WorkoutsBoolExp;
};


/** mutation root */
export type MutationRootDeleteWorkoutsByPkArgs = {
  id: Scalars['bigint']['input'];
};


/** mutation root */
export type MutationRootInsertCyclesArgs = {
  objects: Array<CyclesInsertInput>;
  on_conflict?: InputMaybe<CyclesOnConflict>;
};


/** mutation root */
export type MutationRootInsertCyclesOneArgs = {
  object: CyclesInsertInput;
  on_conflict?: InputMaybe<CyclesOnConflict>;
};


/** mutation root */
export type MutationRootInsertExerciseDetailsArgs = {
  objects: Array<ExerciseDetailsInsertInput>;
  on_conflict?: InputMaybe<ExerciseDetailsOnConflict>;
};


/** mutation root */
export type MutationRootInsertExerciseDetailsOneArgs = {
  object: ExerciseDetailsInsertInput;
  on_conflict?: InputMaybe<ExerciseDetailsOnConflict>;
};


/** mutation root */
export type MutationRootInsertExerciseLibraryArgs = {
  objects: Array<ExerciseLibraryInsertInput>;
  on_conflict?: InputMaybe<ExerciseLibraryOnConflict>;
};


/** mutation root */
export type MutationRootInsertExerciseLibraryOneArgs = {
  object: ExerciseLibraryInsertInput;
  on_conflict?: InputMaybe<ExerciseLibraryOnConflict>;
};


/** mutation root */
export type MutationRootInsertExercisesArgs = {
  objects: Array<ExercisesInsertInput>;
  on_conflict?: InputMaybe<ExercisesOnConflict>;
};


/** mutation root */
export type MutationRootInsertExercisesOneArgs = {
  object: ExercisesInsertInput;
  on_conflict?: InputMaybe<ExercisesOnConflict>;
};


/** mutation root */
export type MutationRootInsertIntegrationsArgs = {
  objects: Array<IntegrationsInsertInput>;
  on_conflict?: InputMaybe<IntegrationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertIntegrationsOneArgs = {
  object: IntegrationsInsertInput;
  on_conflict?: InputMaybe<IntegrationsOnConflict>;
};


/** mutation root */
export type MutationRootInsertMuscleGroupsArgs = {
  objects: Array<MuscleGroupsInsertInput>;
  on_conflict?: InputMaybe<MuscleGroupsOnConflict>;
};


/** mutation root */
export type MutationRootInsertMuscleGroupsOneArgs = {
  object: MuscleGroupsInsertInput;
  on_conflict?: InputMaybe<MuscleGroupsOnConflict>;
};


/** mutation root */
export type MutationRootInsertProgramsArgs = {
  objects: Array<ProgramsInsertInput>;
  on_conflict?: InputMaybe<ProgramsOnConflict>;
};


/** mutation root */
export type MutationRootInsertProgramsOneArgs = {
  object: ProgramsInsertInput;
  on_conflict?: InputMaybe<ProgramsOnConflict>;
};


/** mutation root */
export type MutationRootInsertScoresArgs = {
  objects: Array<ScoresInsertInput>;
  on_conflict?: InputMaybe<ScoresOnConflict>;
};


/** mutation root */
export type MutationRootInsertScoresOneArgs = {
  object: ScoresInsertInput;
  on_conflict?: InputMaybe<ScoresOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserCyclesArgs = {
  objects: Array<UserCyclesInsertInput>;
  on_conflict?: InputMaybe<UserCyclesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserCyclesOneArgs = {
  object: UserCyclesInsertInput;
  on_conflict?: InputMaybe<UserCyclesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserWorkoutsArgs = {
  objects: Array<UserWorkoutsInsertInput>;
  on_conflict?: InputMaybe<UserWorkoutsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserWorkoutsOneArgs = {
  object: UserWorkoutsInsertInput;
  on_conflict?: InputMaybe<UserWorkoutsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertWebhooksArgs = {
  objects: Array<WebhooksInsertInput>;
  on_conflict?: InputMaybe<WebhooksOnConflict>;
};


/** mutation root */
export type MutationRootInsertWebhooksOneArgs = {
  object: WebhooksInsertInput;
  on_conflict?: InputMaybe<WebhooksOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutItemScoresArgs = {
  objects: Array<WorkoutItemScoresInsertInput>;
  on_conflict?: InputMaybe<WorkoutItemScoresOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutItemScoresOneArgs = {
  object: WorkoutItemScoresInsertInput;
  on_conflict?: InputMaybe<WorkoutItemScoresOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutItemsArgs = {
  objects: Array<WorkoutItemsInsertInput>;
  on_conflict?: InputMaybe<WorkoutItemsOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutItemsOneArgs = {
  object: WorkoutItemsInsertInput;
  on_conflict?: InputMaybe<WorkoutItemsOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutStatusEnumArgs = {
  objects: Array<WorkoutStatusEnumInsertInput>;
  on_conflict?: InputMaybe<WorkoutStatusEnumOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutStatusEnumOneArgs = {
  object: WorkoutStatusEnumInsertInput;
  on_conflict?: InputMaybe<WorkoutStatusEnumOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutsArgs = {
  objects: Array<WorkoutsInsertInput>;
  on_conflict?: InputMaybe<WorkoutsOnConflict>;
};


/** mutation root */
export type MutationRootInsertWorkoutsOneArgs = {
  object: WorkoutsInsertInput;
  on_conflict?: InputMaybe<WorkoutsOnConflict>;
};


/** mutation root */
export type MutationRootUpdateCyclesArgs = {
  _inc?: InputMaybe<CyclesIncInput>;
  _set?: InputMaybe<CyclesSetInput>;
  where: CyclesBoolExp;
};


/** mutation root */
export type MutationRootUpdateCyclesByPkArgs = {
  _inc?: InputMaybe<CyclesIncInput>;
  _set?: InputMaybe<CyclesSetInput>;
  pk_columns: CyclesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCyclesManyArgs = {
  updates: Array<CyclesUpdates>;
};


/** mutation root */
export type MutationRootUpdateExerciseDetailsArgs = {
  _inc?: InputMaybe<ExerciseDetailsIncInput>;
  _set?: InputMaybe<ExerciseDetailsSetInput>;
  where: ExerciseDetailsBoolExp;
};


/** mutation root */
export type MutationRootUpdateExerciseDetailsByPkArgs = {
  _inc?: InputMaybe<ExerciseDetailsIncInput>;
  _set?: InputMaybe<ExerciseDetailsSetInput>;
  pk_columns: ExerciseDetailsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateExerciseDetailsManyArgs = {
  updates: Array<ExerciseDetailsUpdates>;
};


/** mutation root */
export type MutationRootUpdateExerciseLibraryArgs = {
  _set?: InputMaybe<ExerciseLibrarySetInput>;
  where: ExerciseLibraryBoolExp;
};


/** mutation root */
export type MutationRootUpdateExerciseLibraryByPkArgs = {
  _set?: InputMaybe<ExerciseLibrarySetInput>;
  pk_columns: ExerciseLibraryPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateExerciseLibraryManyArgs = {
  updates: Array<ExerciseLibraryUpdates>;
};


/** mutation root */
export type MutationRootUpdateExercisesArgs = {
  _inc?: InputMaybe<ExercisesIncInput>;
  _set?: InputMaybe<ExercisesSetInput>;
  where: ExercisesBoolExp;
};


/** mutation root */
export type MutationRootUpdateExercisesByPkArgs = {
  _inc?: InputMaybe<ExercisesIncInput>;
  _set?: InputMaybe<ExercisesSetInput>;
  pk_columns: ExercisesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateExercisesManyArgs = {
  updates: Array<ExercisesUpdates>;
};


/** mutation root */
export type MutationRootUpdateIntegrationsArgs = {
  _inc?: InputMaybe<IntegrationsIncInput>;
  _set?: InputMaybe<IntegrationsSetInput>;
  where: IntegrationsBoolExp;
};


/** mutation root */
export type MutationRootUpdateIntegrationsByPkArgs = {
  _inc?: InputMaybe<IntegrationsIncInput>;
  _set?: InputMaybe<IntegrationsSetInput>;
  pk_columns: IntegrationsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateIntegrationsManyArgs = {
  updates: Array<IntegrationsUpdates>;
};


/** mutation root */
export type MutationRootUpdateMuscleGroupsArgs = {
  _set?: InputMaybe<MuscleGroupsSetInput>;
  where: MuscleGroupsBoolExp;
};


/** mutation root */
export type MutationRootUpdateMuscleGroupsByPkArgs = {
  _set?: InputMaybe<MuscleGroupsSetInput>;
  pk_columns: MuscleGroupsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateMuscleGroupsManyArgs = {
  updates: Array<MuscleGroupsUpdates>;
};


/** mutation root */
export type MutationRootUpdateProgramsArgs = {
  _inc?: InputMaybe<ProgramsIncInput>;
  _set?: InputMaybe<ProgramsSetInput>;
  where: ProgramsBoolExp;
};


/** mutation root */
export type MutationRootUpdateProgramsByPkArgs = {
  _inc?: InputMaybe<ProgramsIncInput>;
  _set?: InputMaybe<ProgramsSetInput>;
  pk_columns: ProgramsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateProgramsManyArgs = {
  updates: Array<ProgramsUpdates>;
};


/** mutation root */
export type MutationRootUpdateScoresArgs = {
  _inc?: InputMaybe<ScoresIncInput>;
  _set?: InputMaybe<ScoresSetInput>;
  where: ScoresBoolExp;
};


/** mutation root */
export type MutationRootUpdateScoresByPkArgs = {
  _inc?: InputMaybe<ScoresIncInput>;
  _set?: InputMaybe<ScoresSetInput>;
  pk_columns: ScoresPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateScoresManyArgs = {
  updates: Array<ScoresUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserCyclesArgs = {
  _inc?: InputMaybe<UserCyclesIncInput>;
  _set?: InputMaybe<UserCyclesSetInput>;
  where: UserCyclesBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserCyclesByPkArgs = {
  _inc?: InputMaybe<UserCyclesIncInput>;
  _set?: InputMaybe<UserCyclesSetInput>;
  pk_columns: UserCyclesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserCyclesManyArgs = {
  updates: Array<UserCyclesUpdates>;
};


/** mutation root */
export type MutationRootUpdateUserWorkoutsArgs = {
  _inc?: InputMaybe<UserWorkoutsIncInput>;
  _set?: InputMaybe<UserWorkoutsSetInput>;
  where: UserWorkoutsBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserWorkoutsByPkArgs = {
  _inc?: InputMaybe<UserWorkoutsIncInput>;
  _set?: InputMaybe<UserWorkoutsSetInput>;
  pk_columns: UserWorkoutsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserWorkoutsManyArgs = {
  updates: Array<UserWorkoutsUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: InputMaybe<UsersIncInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type MutationRootUpdateWebhooksArgs = {
  _append?: InputMaybe<WebhooksAppendInput>;
  _delete_at_path?: InputMaybe<WebhooksDeleteAtPathInput>;
  _delete_elem?: InputMaybe<WebhooksDeleteElemInput>;
  _delete_key?: InputMaybe<WebhooksDeleteKeyInput>;
  _prepend?: InputMaybe<WebhooksPrependInput>;
  _set?: InputMaybe<WebhooksSetInput>;
  where: WebhooksBoolExp;
};


/** mutation root */
export type MutationRootUpdateWebhooksByPkArgs = {
  _append?: InputMaybe<WebhooksAppendInput>;
  _delete_at_path?: InputMaybe<WebhooksDeleteAtPathInput>;
  _delete_elem?: InputMaybe<WebhooksDeleteElemInput>;
  _delete_key?: InputMaybe<WebhooksDeleteKeyInput>;
  _prepend?: InputMaybe<WebhooksPrependInput>;
  _set?: InputMaybe<WebhooksSetInput>;
  pk_columns: WebhooksPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateWebhooksManyArgs = {
  updates: Array<WebhooksUpdates>;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemScoresArgs = {
  _inc?: InputMaybe<WorkoutItemScoresIncInput>;
  _set?: InputMaybe<WorkoutItemScoresSetInput>;
  where: WorkoutItemScoresBoolExp;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemScoresByPkArgs = {
  _inc?: InputMaybe<WorkoutItemScoresIncInput>;
  _set?: InputMaybe<WorkoutItemScoresSetInput>;
  pk_columns: WorkoutItemScoresPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemScoresManyArgs = {
  updates: Array<WorkoutItemScoresUpdates>;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemsArgs = {
  _inc?: InputMaybe<WorkoutItemsIncInput>;
  _set?: InputMaybe<WorkoutItemsSetInput>;
  where: WorkoutItemsBoolExp;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemsByPkArgs = {
  _inc?: InputMaybe<WorkoutItemsIncInput>;
  _set?: InputMaybe<WorkoutItemsSetInput>;
  pk_columns: WorkoutItemsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateWorkoutItemsManyArgs = {
  updates: Array<WorkoutItemsUpdates>;
};


/** mutation root */
export type MutationRootUpdateWorkoutStatusEnumArgs = {
  _set?: InputMaybe<WorkoutStatusEnumSetInput>;
  where: WorkoutStatusEnumBoolExp;
};


/** mutation root */
export type MutationRootUpdateWorkoutStatusEnumByPkArgs = {
  _set?: InputMaybe<WorkoutStatusEnumSetInput>;
  pk_columns: WorkoutStatusEnumPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateWorkoutStatusEnumManyArgs = {
  updates: Array<WorkoutStatusEnumUpdates>;
};


/** mutation root */
export type MutationRootUpdateWorkoutsArgs = {
  _inc?: InputMaybe<WorkoutsIncInput>;
  _set?: InputMaybe<WorkoutsSetInput>;
  where: WorkoutsBoolExp;
};


/** mutation root */
export type MutationRootUpdateWorkoutsByPkArgs = {
  _inc?: InputMaybe<WorkoutsIncInput>;
  _set?: InputMaybe<WorkoutsSetInput>;
  pk_columns: WorkoutsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateWorkoutsManyArgs = {
  updates: Array<WorkoutsUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "programs" */
export type Programs = {
  __typename?: 'programs';
  created_at: Scalars['timestamp']['output'];
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: CyclesAggregate;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  image: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
};


/** columns and relationships of "programs" */
export type ProgramsCyclesArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};


/** columns and relationships of "programs" */
export type ProgramsCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};

/** aggregated selection of "programs" */
export type ProgramsAggregate = {
  __typename?: 'programs_aggregate';
  aggregate: Maybe<ProgramsAggregateFields>;
  nodes: Array<Programs>;
};

/** aggregate fields of "programs" */
export type ProgramsAggregateFields = {
  __typename?: 'programs_aggregate_fields';
  avg: Maybe<ProgramsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<ProgramsMaxFields>;
  min: Maybe<ProgramsMinFields>;
  stddev: Maybe<ProgramsStddevFields>;
  stddev_pop: Maybe<ProgramsStddevPopFields>;
  stddev_samp: Maybe<ProgramsStddevSampFields>;
  sum: Maybe<ProgramsSumFields>;
  var_pop: Maybe<ProgramsVarPopFields>;
  var_samp: Maybe<ProgramsVarSampFields>;
  variance: Maybe<ProgramsVarianceFields>;
};


/** aggregate fields of "programs" */
export type ProgramsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ProgramsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ProgramsAvgFields = {
  __typename?: 'programs_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "programs". All fields are combined with a logical 'AND'. */
export type ProgramsBoolExp = {
  _and?: InputMaybe<Array<ProgramsBoolExp>>;
  _not?: InputMaybe<ProgramsBoolExp>;
  _or?: InputMaybe<Array<ProgramsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  cycles?: InputMaybe<CyclesBoolExp>;
  cycles_aggregate?: InputMaybe<CyclesAggregateBoolExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  image?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
};

/** unique or primary key constraints on table "programs" */
export enum ProgramsConstraint {
  /** unique or primary key constraint on columns "id" */
  PROGRAMS_PKEY = 'programs_pkey'
}

/** input type for incrementing numeric columns in table "programs" */
export type ProgramsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "programs" */
export type ProgramsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  cycles?: InputMaybe<CyclesArrRelInsertInput>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate max on columns */
export type ProgramsMaxFields = {
  __typename?: 'programs_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  image: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type ProgramsMinFields = {
  __typename?: 'programs_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  image: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "programs" */
export type ProgramsMutationResponse = {
  __typename?: 'programs_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Programs>;
};

/** input type for inserting object relation for remote table "programs" */
export type ProgramsObjRelInsertInput = {
  data: ProgramsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<ProgramsOnConflict>;
};

/** on_conflict condition type for table "programs" */
export type ProgramsOnConflict = {
  constraint: ProgramsConstraint;
  update_columns?: Array<ProgramsUpdateColumn>;
  where?: InputMaybe<ProgramsBoolExp>;
};

/** Ordering options when selecting data from "programs". */
export type ProgramsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  cycles_aggregate?: InputMaybe<CyclesAggregateOrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: programs */
export type ProgramsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "programs" */
export enum ProgramsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "programs" */
export type ProgramsSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type ProgramsStddevFields = {
  __typename?: 'programs_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ProgramsStddevPopFields = {
  __typename?: 'programs_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ProgramsStddevSampFields = {
  __typename?: 'programs_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "programs" */
export type ProgramsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ProgramsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ProgramsStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type ProgramsSumFields = {
  __typename?: 'programs_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "programs" */
export enum ProgramsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE = 'image',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type ProgramsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ProgramsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ProgramsSetInput>;
  /** filter the rows which have to be updated */
  where: ProgramsBoolExp;
};

/** aggregate var_pop on columns */
export type ProgramsVarPopFields = {
  __typename?: 'programs_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ProgramsVarSampFields = {
  __typename?: 'programs_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ProgramsVarianceFields = {
  __typename?: 'programs_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: CyclesAggregate;
  /** fetch data from the table: "cycles" using primary key columns */
  cycles_by_pk: Maybe<Cycles>;
  /** An array relationship */
  exercise_details: Array<ExerciseDetails>;
  /** An aggregate relationship */
  exercise_details_aggregate: ExerciseDetailsAggregate;
  /** fetch data from the table: "exercise_details" using primary key columns */
  exercise_details_by_pk: Maybe<ExerciseDetails>;
  /** fetch data from the table: "exercise_library" */
  exercise_library: Array<ExerciseLibrary>;
  /** fetch aggregated fields from the table: "exercise_library" */
  exercise_library_aggregate: ExerciseLibraryAggregate;
  /** fetch data from the table: "exercise_library" using primary key columns */
  exercise_library_by_pk: Maybe<ExerciseLibrary>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: ExercisesAggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk: Maybe<Exercises>;
  /** fetch data from the table: "integrations" using primary key columns */
  integration: Maybe<Integrations>;
  /** fetch data from the table: "integrations" */
  integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "integrations" */
  integrations_aggregate: IntegrationsAggregate;
  /** fetch data from the table: "muscle_groups" */
  muscle_groups: Array<MuscleGroups>;
  /** fetch aggregated fields from the table: "muscle_groups" */
  muscle_groups_aggregate: MuscleGroupsAggregate;
  /** fetch data from the table: "muscle_groups" using primary key columns */
  muscle_groups_by_pk: Maybe<MuscleGroups>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: ProgramsAggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk: Maybe<Programs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: ScoresAggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk: Maybe<Scores>;
  /** An array relationship */
  user_cycles: Array<UserCycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: UserCyclesAggregate;
  /** fetch data from the table: "user_cycles" using primary key columns */
  user_cycles_by_pk: Maybe<UserCycles>;
  /** An array relationship */
  user_workouts: Array<UserWorkouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: UserWorkoutsAggregate;
  /** fetch data from the table: "user_workouts" using primary key columns */
  user_workouts_by_pk: Maybe<UserWorkouts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table: "webhooks" */
  webhooks: Array<Webhooks>;
  /** fetch aggregated fields from the table: "webhooks" */
  webhooks_aggregate: WebhooksAggregate;
  /** fetch data from the table: "webhooks" using primary key columns */
  webhooks_by_pk: Maybe<Webhooks>;
  /** fetch data from the table: "workout_item_scores" */
  workout_item_scores: Array<WorkoutItemScores>;
  /** fetch aggregated fields from the table: "workout_item_scores" */
  workout_item_scores_aggregate: WorkoutItemScoresAggregate;
  /** fetch data from the table: "workout_item_scores" using primary key columns */
  workout_item_scores_by_pk: Maybe<WorkoutItemScores>;
  /** An array relationship */
  workout_items: Array<WorkoutItems>;
  /** An aggregate relationship */
  workout_items_aggregate: WorkoutItemsAggregate;
  /** fetch data from the table: "workout_items" using primary key columns */
  workout_items_by_pk: Maybe<WorkoutItems>;
  /** fetch data from the table: "workout_status_enum" */
  workout_status_enum: Array<WorkoutStatusEnum>;
  /** fetch aggregated fields from the table: "workout_status_enum" */
  workout_status_enum_aggregate: WorkoutStatusEnumAggregate;
  /** fetch data from the table: "workout_status_enum" using primary key columns */
  workout_status_enum_by_pk: Maybe<WorkoutStatusEnum>;
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: WorkoutsAggregate;
  /** fetch data from the table: "workouts" using primary key columns */
  workouts_by_pk: Maybe<Workouts>;
};


export type QueryRootCyclesArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};


export type QueryRootCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};


export type QueryRootCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootExerciseDetailsArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


export type QueryRootExerciseDetailsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


export type QueryRootExerciseDetailsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootExerciseLibraryArgs = {
  distinct_on?: InputMaybe<Array<ExerciseLibrarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseLibraryOrderBy>>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};


export type QueryRootExerciseLibraryAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseLibrarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseLibraryOrderBy>>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};


export type QueryRootExerciseLibraryByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootExercisesArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


export type QueryRootExercisesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


export type QueryRootExercisesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootIntegrationArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IntegrationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IntegrationsOrderBy>>;
  where?: InputMaybe<IntegrationsBoolExp>;
};


export type QueryRootIntegrationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IntegrationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IntegrationsOrderBy>>;
  where?: InputMaybe<IntegrationsBoolExp>;
};


export type QueryRootMuscleGroupsArgs = {
  distinct_on?: InputMaybe<Array<MuscleGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MuscleGroupsOrderBy>>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};


export type QueryRootMuscleGroupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MuscleGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MuscleGroupsOrderBy>>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};


export type QueryRootMuscleGroupsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootProgramsArgs = {
  distinct_on?: InputMaybe<Array<ProgramsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProgramsOrderBy>>;
  where?: InputMaybe<ProgramsBoolExp>;
};


export type QueryRootProgramsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProgramsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProgramsOrderBy>>;
  where?: InputMaybe<ProgramsBoolExp>;
};


export type QueryRootProgramsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootScoresArgs = {
  distinct_on?: InputMaybe<Array<ScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScoresOrderBy>>;
  where?: InputMaybe<ScoresBoolExp>;
};


export type QueryRootScoresAggregateArgs = {
  distinct_on?: InputMaybe<Array<ScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScoresOrderBy>>;
  where?: InputMaybe<ScoresBoolExp>;
};


export type QueryRootScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUserCyclesArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


export type QueryRootUserCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


export type QueryRootUserCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootUserWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


export type QueryRootUserWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


export type QueryRootUserWorkoutsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootWebhooksArgs = {
  distinct_on?: InputMaybe<Array<WebhooksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WebhooksOrderBy>>;
  where?: InputMaybe<WebhooksBoolExp>;
};


export type QueryRootWebhooksAggregateArgs = {
  distinct_on?: InputMaybe<Array<WebhooksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WebhooksOrderBy>>;
  where?: InputMaybe<WebhooksBoolExp>;
};


export type QueryRootWebhooksByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type QueryRootWorkoutItemScoresArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


export type QueryRootWorkoutItemScoresAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


export type QueryRootWorkoutItemScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootWorkoutItemsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


export type QueryRootWorkoutItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


export type QueryRootWorkoutItemsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type QueryRootWorkoutStatusEnumArgs = {
  distinct_on?: InputMaybe<Array<WorkoutStatusEnumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutStatusEnumOrderBy>>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};


export type QueryRootWorkoutStatusEnumAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutStatusEnumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutStatusEnumOrderBy>>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};


export type QueryRootWorkoutStatusEnumByPkArgs = {
  value: Scalars['String']['input'];
};


export type QueryRootWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


export type QueryRootWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


export type QueryRootWorkoutsByPkArgs = {
  id: Scalars['bigint']['input'];
};

/** columns and relationships of "scores" */
export type Scores = {
  __typename?: 'scores';
  date: Scalars['date']['output'];
  id: Scalars['bigint']['output'];
  notes: Maybe<Scalars['String']['output']>;
  program: Scalars['String']['output'];
  section_notes: Maybe<Scalars['json']['output']>;
};


/** columns and relationships of "scores" */
export type ScoresSectionNotesArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "scores" */
export type ScoresAggregate = {
  __typename?: 'scores_aggregate';
  aggregate: Maybe<ScoresAggregateFields>;
  nodes: Array<Scores>;
};

/** aggregate fields of "scores" */
export type ScoresAggregateFields = {
  __typename?: 'scores_aggregate_fields';
  avg: Maybe<ScoresAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<ScoresMaxFields>;
  min: Maybe<ScoresMinFields>;
  stddev: Maybe<ScoresStddevFields>;
  stddev_pop: Maybe<ScoresStddevPopFields>;
  stddev_samp: Maybe<ScoresStddevSampFields>;
  sum: Maybe<ScoresSumFields>;
  var_pop: Maybe<ScoresVarPopFields>;
  var_samp: Maybe<ScoresVarSampFields>;
  variance: Maybe<ScoresVarianceFields>;
};


/** aggregate fields of "scores" */
export type ScoresAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<ScoresSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type ScoresAvgFields = {
  __typename?: 'scores_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "scores". All fields are combined with a logical 'AND'. */
export type ScoresBoolExp = {
  _and?: InputMaybe<Array<ScoresBoolExp>>;
  _not?: InputMaybe<ScoresBoolExp>;
  _or?: InputMaybe<Array<ScoresBoolExp>>;
  date?: InputMaybe<DateComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  notes?: InputMaybe<StringComparisonExp>;
  program?: InputMaybe<StringComparisonExp>;
  section_notes?: InputMaybe<JsonComparisonExp>;
};

/** unique or primary key constraints on table "scores" */
export enum ScoresConstraint {
  /** unique or primary key constraint on columns "date" */
  SCORES_DATE_UNIQUE = 'scores_date_unique',
  /** unique or primary key constraint on columns "id" */
  SCORES_PKEY = 'scores_pkey'
}

/** input type for incrementing numeric columns in table "scores" */
export type ScoresIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "scores" */
export type ScoresInsertInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate max on columns */
export type ScoresMaxFields = {
  __typename?: 'scores_max_fields';
  date: Maybe<Scalars['date']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  program: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type ScoresMinFields = {
  __typename?: 'scores_min_fields';
  date: Maybe<Scalars['date']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  program: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "scores" */
export type ScoresMutationResponse = {
  __typename?: 'scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Scores>;
};

/** on_conflict condition type for table "scores" */
export type ScoresOnConflict = {
  constraint: ScoresConstraint;
  update_columns?: Array<ScoresUpdateColumn>;
  where?: InputMaybe<ScoresBoolExp>;
};

/** Ordering options when selecting data from "scores". */
export type ScoresOrderBy = {
  date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  program?: InputMaybe<OrderBy>;
  section_notes?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: scores */
export type ScoresPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "scores" */
export enum ScoresSelectColumn {
  /** column name */
  DATE = 'date',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  PROGRAM = 'program',
  /** column name */
  SECTION_NOTES = 'section_notes'
}

/** input type for updating data in table "scores" */
export type ScoresSetInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate stddev on columns */
export type ScoresStddevFields = {
  __typename?: 'scores_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type ScoresStddevPopFields = {
  __typename?: 'scores_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type ScoresStddevSampFields = {
  __typename?: 'scores_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "scores" */
export type ScoresStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: ScoresStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type ScoresStreamCursorValueInput = {
  date?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['String']['input']>;
  section_notes?: InputMaybe<Scalars['json']['input']>;
};

/** aggregate sum on columns */
export type ScoresSumFields = {
  __typename?: 'scores_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "scores" */
export enum ScoresUpdateColumn {
  /** column name */
  DATE = 'date',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  PROGRAM = 'program',
  /** column name */
  SECTION_NOTES = 'section_notes'
}

export type ScoresUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<ScoresIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<ScoresSetInput>;
  /** filter the rows which have to be updated */
  where: ScoresBoolExp;
};

/** aggregate var_pop on columns */
export type ScoresVarPopFields = {
  __typename?: 'scores_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type ScoresVarSampFields = {
  __typename?: 'scores_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type ScoresVarianceFields = {
  __typename?: 'scores_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** An array relationship */
  cycles: Array<Cycles>;
  /** An aggregate relationship */
  cycles_aggregate: CyclesAggregate;
  /** fetch data from the table: "cycles" using primary key columns */
  cycles_by_pk: Maybe<Cycles>;
  /** fetch data from the table in a streaming manner: "cycles" */
  cycles_stream: Array<Cycles>;
  /** An array relationship */
  exercise_details: Array<ExerciseDetails>;
  /** An aggregate relationship */
  exercise_details_aggregate: ExerciseDetailsAggregate;
  /** fetch data from the table: "exercise_details" using primary key columns */
  exercise_details_by_pk: Maybe<ExerciseDetails>;
  /** fetch data from the table in a streaming manner: "exercise_details" */
  exercise_details_stream: Array<ExerciseDetails>;
  /** fetch data from the table: "exercise_library" */
  exercise_library: Array<ExerciseLibrary>;
  /** fetch aggregated fields from the table: "exercise_library" */
  exercise_library_aggregate: ExerciseLibraryAggregate;
  /** fetch data from the table: "exercise_library" using primary key columns */
  exercise_library_by_pk: Maybe<ExerciseLibrary>;
  /** fetch data from the table in a streaming manner: "exercise_library" */
  exercise_library_stream: Array<ExerciseLibrary>;
  /** fetch data from the table: "exercises" */
  exercises: Array<Exercises>;
  /** fetch aggregated fields from the table: "exercises" */
  exercises_aggregate: ExercisesAggregate;
  /** fetch data from the table: "exercises" using primary key columns */
  exercises_by_pk: Maybe<Exercises>;
  /** fetch data from the table in a streaming manner: "exercises" */
  exercises_stream: Array<Exercises>;
  /** fetch data from the table: "integrations" using primary key columns */
  integration: Maybe<Integrations>;
  /** fetch data from the table: "integrations" */
  integrations: Array<Integrations>;
  /** fetch aggregated fields from the table: "integrations" */
  integrations_aggregate: IntegrationsAggregate;
  /** fetch data from the table in a streaming manner: "integrations" */
  integrations_stream: Array<Integrations>;
  /** fetch data from the table: "muscle_groups" */
  muscle_groups: Array<MuscleGroups>;
  /** fetch aggregated fields from the table: "muscle_groups" */
  muscle_groups_aggregate: MuscleGroupsAggregate;
  /** fetch data from the table: "muscle_groups" using primary key columns */
  muscle_groups_by_pk: Maybe<MuscleGroups>;
  /** fetch data from the table in a streaming manner: "muscle_groups" */
  muscle_groups_stream: Array<MuscleGroups>;
  /** fetch data from the table: "programs" */
  programs: Array<Programs>;
  /** fetch aggregated fields from the table: "programs" */
  programs_aggregate: ProgramsAggregate;
  /** fetch data from the table: "programs" using primary key columns */
  programs_by_pk: Maybe<Programs>;
  /** fetch data from the table in a streaming manner: "programs" */
  programs_stream: Array<Programs>;
  /** fetch data from the table: "scores" */
  scores: Array<Scores>;
  /** fetch aggregated fields from the table: "scores" */
  scores_aggregate: ScoresAggregate;
  /** fetch data from the table: "scores" using primary key columns */
  scores_by_pk: Maybe<Scores>;
  /** fetch data from the table in a streaming manner: "scores" */
  scores_stream: Array<Scores>;
  /** An array relationship */
  user_cycles: Array<UserCycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: UserCyclesAggregate;
  /** fetch data from the table: "user_cycles" using primary key columns */
  user_cycles_by_pk: Maybe<UserCycles>;
  /** fetch data from the table in a streaming manner: "user_cycles" */
  user_cycles_stream: Array<UserCycles>;
  /** An array relationship */
  user_workouts: Array<UserWorkouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: UserWorkoutsAggregate;
  /** fetch data from the table: "user_workouts" using primary key columns */
  user_workouts_by_pk: Maybe<UserWorkouts>;
  /** fetch data from the table in a streaming manner: "user_workouts" */
  user_workouts_stream: Array<UserWorkouts>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "webhooks" */
  webhooks: Array<Webhooks>;
  /** fetch aggregated fields from the table: "webhooks" */
  webhooks_aggregate: WebhooksAggregate;
  /** fetch data from the table: "webhooks" using primary key columns */
  webhooks_by_pk: Maybe<Webhooks>;
  /** fetch data from the table in a streaming manner: "webhooks" */
  webhooks_stream: Array<Webhooks>;
  /** fetch data from the table: "workout_item_scores" */
  workout_item_scores: Array<WorkoutItemScores>;
  /** fetch aggregated fields from the table: "workout_item_scores" */
  workout_item_scores_aggregate: WorkoutItemScoresAggregate;
  /** fetch data from the table: "workout_item_scores" using primary key columns */
  workout_item_scores_by_pk: Maybe<WorkoutItemScores>;
  /** fetch data from the table in a streaming manner: "workout_item_scores" */
  workout_item_scores_stream: Array<WorkoutItemScores>;
  /** An array relationship */
  workout_items: Array<WorkoutItems>;
  /** An aggregate relationship */
  workout_items_aggregate: WorkoutItemsAggregate;
  /** fetch data from the table: "workout_items" using primary key columns */
  workout_items_by_pk: Maybe<WorkoutItems>;
  /** fetch data from the table in a streaming manner: "workout_items" */
  workout_items_stream: Array<WorkoutItems>;
  /** fetch data from the table: "workout_status_enum" */
  workout_status_enum: Array<WorkoutStatusEnum>;
  /** fetch aggregated fields from the table: "workout_status_enum" */
  workout_status_enum_aggregate: WorkoutStatusEnumAggregate;
  /** fetch data from the table: "workout_status_enum" using primary key columns */
  workout_status_enum_by_pk: Maybe<WorkoutStatusEnum>;
  /** fetch data from the table in a streaming manner: "workout_status_enum" */
  workout_status_enum_stream: Array<WorkoutStatusEnum>;
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: WorkoutsAggregate;
  /** fetch data from the table: "workouts" using primary key columns */
  workouts_by_pk: Maybe<Workouts>;
  /** fetch data from the table in a streaming manner: "workouts" */
  workouts_stream: Array<Workouts>;
};


export type SubscriptionRootCyclesArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};


export type SubscriptionRootCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<CyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<CyclesOrderBy>>;
  where?: InputMaybe<CyclesBoolExp>;
};


export type SubscriptionRootCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootCyclesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<CyclesStreamCursorInput>>;
  where?: InputMaybe<CyclesBoolExp>;
};


export type SubscriptionRootExerciseDetailsArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


export type SubscriptionRootExerciseDetailsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


export type SubscriptionRootExerciseDetailsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootExerciseDetailsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ExerciseDetailsStreamCursorInput>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


export type SubscriptionRootExerciseLibraryArgs = {
  distinct_on?: InputMaybe<Array<ExerciseLibrarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseLibraryOrderBy>>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};


export type SubscriptionRootExerciseLibraryAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseLibrarySelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseLibraryOrderBy>>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};


export type SubscriptionRootExerciseLibraryByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootExerciseLibraryStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ExerciseLibraryStreamCursorInput>>;
  where?: InputMaybe<ExerciseLibraryBoolExp>;
};


export type SubscriptionRootExercisesArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


export type SubscriptionRootExercisesAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExercisesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExercisesOrderBy>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


export type SubscriptionRootExercisesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootExercisesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ExercisesStreamCursorInput>>;
  where?: InputMaybe<ExercisesBoolExp>;
};


export type SubscriptionRootIntegrationArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<IntegrationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IntegrationsOrderBy>>;
  where?: InputMaybe<IntegrationsBoolExp>;
};


export type SubscriptionRootIntegrationsAggregateArgs = {
  distinct_on?: InputMaybe<Array<IntegrationsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<IntegrationsOrderBy>>;
  where?: InputMaybe<IntegrationsBoolExp>;
};


export type SubscriptionRootIntegrationsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<IntegrationsStreamCursorInput>>;
  where?: InputMaybe<IntegrationsBoolExp>;
};


export type SubscriptionRootMuscleGroupsArgs = {
  distinct_on?: InputMaybe<Array<MuscleGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MuscleGroupsOrderBy>>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};


export type SubscriptionRootMuscleGroupsAggregateArgs = {
  distinct_on?: InputMaybe<Array<MuscleGroupsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<MuscleGroupsOrderBy>>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};


export type SubscriptionRootMuscleGroupsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootMuscleGroupsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<MuscleGroupsStreamCursorInput>>;
  where?: InputMaybe<MuscleGroupsBoolExp>;
};


export type SubscriptionRootProgramsArgs = {
  distinct_on?: InputMaybe<Array<ProgramsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProgramsOrderBy>>;
  where?: InputMaybe<ProgramsBoolExp>;
};


export type SubscriptionRootProgramsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ProgramsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ProgramsOrderBy>>;
  where?: InputMaybe<ProgramsBoolExp>;
};


export type SubscriptionRootProgramsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootProgramsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ProgramsStreamCursorInput>>;
  where?: InputMaybe<ProgramsBoolExp>;
};


export type SubscriptionRootScoresArgs = {
  distinct_on?: InputMaybe<Array<ScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScoresOrderBy>>;
  where?: InputMaybe<ScoresBoolExp>;
};


export type SubscriptionRootScoresAggregateArgs = {
  distinct_on?: InputMaybe<Array<ScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ScoresOrderBy>>;
  where?: InputMaybe<ScoresBoolExp>;
};


export type SubscriptionRootScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootScoresStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<ScoresStreamCursorInput>>;
  where?: InputMaybe<ScoresBoolExp>;
};


export type SubscriptionRootUserCyclesArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


export type SubscriptionRootUserCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


export type SubscriptionRootUserCyclesByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootUserCyclesStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserCyclesStreamCursorInput>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


export type SubscriptionRootUserWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


export type SubscriptionRootUserWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


export type SubscriptionRootUserWorkoutsByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootUserWorkoutsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UserWorkoutsStreamCursorInput>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootUsersStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<UsersStreamCursorInput>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootWebhooksArgs = {
  distinct_on?: InputMaybe<Array<WebhooksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WebhooksOrderBy>>;
  where?: InputMaybe<WebhooksBoolExp>;
};


export type SubscriptionRootWebhooksAggregateArgs = {
  distinct_on?: InputMaybe<Array<WebhooksSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WebhooksOrderBy>>;
  where?: InputMaybe<WebhooksBoolExp>;
};


export type SubscriptionRootWebhooksByPkArgs = {
  id: Scalars['uuid']['input'];
};


export type SubscriptionRootWebhooksStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WebhooksStreamCursorInput>>;
  where?: InputMaybe<WebhooksBoolExp>;
};


export type SubscriptionRootWorkoutItemScoresArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


export type SubscriptionRootWorkoutItemScoresAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


export type SubscriptionRootWorkoutItemScoresByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootWorkoutItemScoresStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WorkoutItemScoresStreamCursorInput>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


export type SubscriptionRootWorkoutItemsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


export type SubscriptionRootWorkoutItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


export type SubscriptionRootWorkoutItemsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootWorkoutItemsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WorkoutItemsStreamCursorInput>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


export type SubscriptionRootWorkoutStatusEnumArgs = {
  distinct_on?: InputMaybe<Array<WorkoutStatusEnumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutStatusEnumOrderBy>>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};


export type SubscriptionRootWorkoutStatusEnumAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutStatusEnumSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutStatusEnumOrderBy>>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};


export type SubscriptionRootWorkoutStatusEnumByPkArgs = {
  value: Scalars['String']['input'];
};


export type SubscriptionRootWorkoutStatusEnumStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WorkoutStatusEnumStreamCursorInput>>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};


export type SubscriptionRootWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


export type SubscriptionRootWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


export type SubscriptionRootWorkoutsByPkArgs = {
  id: Scalars['bigint']['input'];
};


export type SubscriptionRootWorkoutsStreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<WorkoutsStreamCursorInput>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
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
export type TimestamptzComparisonExp = {
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
export type UserCycles = {
  __typename?: 'user_cycles';
  completed: Scalars['Boolean']['output'];
  created_at: Scalars['timestamp']['output'];
  current_workout: Scalars['Int']['output'];
  /** An object relationship */
  cycle: Cycles;
  cycle_id: Scalars['bigint']['output'];
  end_date: Scalars['timestamp']['output'];
  id: Scalars['bigint']['output'];
  start_date: Scalars['timestamp']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['bigint']['output'];
  /** An object relationship */
  workout: Workouts;
};

/** aggregated selection of "user_cycles" */
export type UserCyclesAggregate = {
  __typename?: 'user_cycles_aggregate';
  aggregate: Maybe<UserCyclesAggregateFields>;
  nodes: Array<UserCycles>;
};

export type UserCyclesAggregateBoolExp = {
  bool_and?: InputMaybe<UserCyclesAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<UserCyclesAggregateBoolExpBoolOr>;
  count?: InputMaybe<UserCyclesAggregateBoolExpCount>;
};

export type UserCyclesAggregateBoolExpBoolAnd = {
  arguments: UserCyclesSelectColumnUserCyclesAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserCyclesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserCyclesAggregateBoolExpBoolOr = {
  arguments: UserCyclesSelectColumnUserCyclesAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserCyclesBoolExp>;
  predicate: BooleanComparisonExp;
};

export type UserCyclesAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserCyclesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserCyclesBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "user_cycles" */
export type UserCyclesAggregateFields = {
  __typename?: 'user_cycles_aggregate_fields';
  avg: Maybe<UserCyclesAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<UserCyclesMaxFields>;
  min: Maybe<UserCyclesMinFields>;
  stddev: Maybe<UserCyclesStddevFields>;
  stddev_pop: Maybe<UserCyclesStddevPopFields>;
  stddev_samp: Maybe<UserCyclesStddevSampFields>;
  sum: Maybe<UserCyclesSumFields>;
  var_pop: Maybe<UserCyclesVarPopFields>;
  var_samp: Maybe<UserCyclesVarSampFields>;
  variance: Maybe<UserCyclesVarianceFields>;
};


/** aggregate fields of "user_cycles" */
export type UserCyclesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserCyclesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_cycles" */
export type UserCyclesAggregateOrderBy = {
  avg?: InputMaybe<UserCyclesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserCyclesMaxOrderBy>;
  min?: InputMaybe<UserCyclesMinOrderBy>;
  stddev?: InputMaybe<UserCyclesStddevOrderBy>;
  stddev_pop?: InputMaybe<UserCyclesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserCyclesStddevSampOrderBy>;
  sum?: InputMaybe<UserCyclesSumOrderBy>;
  var_pop?: InputMaybe<UserCyclesVarPopOrderBy>;
  var_samp?: InputMaybe<UserCyclesVarSampOrderBy>;
  variance?: InputMaybe<UserCyclesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_cycles" */
export type UserCyclesArrRelInsertInput = {
  data: Array<UserCyclesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserCyclesOnConflict>;
};

/** aggregate avg on columns */
export type UserCyclesAvgFields = {
  __typename?: 'user_cycles_avg_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_cycles" */
export type UserCyclesAvgOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_cycles". All fields are combined with a logical 'AND'. */
export type UserCyclesBoolExp = {
  _and?: InputMaybe<Array<UserCyclesBoolExp>>;
  _not?: InputMaybe<UserCyclesBoolExp>;
  _or?: InputMaybe<Array<UserCyclesBoolExp>>;
  completed?: InputMaybe<BooleanComparisonExp>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  current_workout?: InputMaybe<IntComparisonExp>;
  cycle?: InputMaybe<CyclesBoolExp>;
  cycle_id?: InputMaybe<BigintComparisonExp>;
  end_date?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  start_date?: InputMaybe<TimestampComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
  workout?: InputMaybe<WorkoutsBoolExp>;
};

/** unique or primary key constraints on table "user_cycles" */
export enum UserCyclesConstraint {
  /** unique or primary key constraint on columns "id" */
  USER_CYCLES_PKEY = 'user_cycles_pkey'
}

/** input type for incrementing numeric columns in table "user_cycles" */
export type UserCyclesIncInput = {
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_cycles" */
export type UserCyclesInsertInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle?: InputMaybe<CyclesObjRelInsertInput>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout?: InputMaybe<WorkoutsObjRelInsertInput>;
};

/** aggregate max on columns */
export type UserCyclesMaxFields = {
  __typename?: 'user_cycles_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  current_workout: Maybe<Scalars['Int']['output']>;
  cycle_id: Maybe<Scalars['bigint']['output']>;
  end_date: Maybe<Scalars['timestamp']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  start_date: Maybe<Scalars['timestamp']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_cycles" */
export type UserCyclesMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserCyclesMinFields = {
  __typename?: 'user_cycles_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  current_workout: Maybe<Scalars['Int']['output']>;
  cycle_id: Maybe<Scalars['bigint']['output']>;
  end_date: Maybe<Scalars['timestamp']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  start_date: Maybe<Scalars['timestamp']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_cycles" */
export type UserCyclesMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_cycles" */
export type UserCyclesMutationResponse = {
  __typename?: 'user_cycles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserCycles>;
};

/** on_conflict condition type for table "user_cycles" */
export type UserCyclesOnConflict = {
  constraint: UserCyclesConstraint;
  update_columns?: Array<UserCyclesUpdateColumn>;
  where?: InputMaybe<UserCyclesBoolExp>;
};

/** Ordering options when selecting data from "user_cycles". */
export type UserCyclesOrderBy = {
  completed?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  current_workout?: InputMaybe<OrderBy>;
  cycle?: InputMaybe<CyclesOrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  end_date?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  start_date?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout?: InputMaybe<WorkoutsOrderBy>;
};

/** primary key columns input for table: user_cycles */
export type UserCyclesPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "user_cycles" */
export enum UserCyclesSelectColumn {
  /** column name */
  COMPLETED = 'completed',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENT_WORKOUT = 'current_workout',
  /** column name */
  CYCLE_ID = 'cycle_id',
  /** column name */
  END_DATE = 'end_date',
  /** column name */
  ID = 'id',
  /** column name */
  START_DATE = 'start_date',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** select "user_cycles_aggregate_bool_exp_bool_and_arguments_columns" columns of table "user_cycles" */
export enum UserCyclesSelectColumnUserCyclesAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  COMPLETED = 'completed'
}

/** select "user_cycles_aggregate_bool_exp_bool_or_arguments_columns" columns of table "user_cycles" */
export enum UserCyclesSelectColumnUserCyclesAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  COMPLETED = 'completed'
}

/** input type for updating data in table "user_cycles" */
export type UserCyclesSetInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type UserCyclesStddevFields = {
  __typename?: 'user_cycles_stddev_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_cycles" */
export type UserCyclesStddevOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserCyclesStddevPopFields = {
  __typename?: 'user_cycles_stddev_pop_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_cycles" */
export type UserCyclesStddevPopOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserCyclesStddevSampFields = {
  __typename?: 'user_cycles_stddev_samp_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_cycles" */
export type UserCyclesStddevSampOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_cycles" */
export type UserCyclesStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserCyclesStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserCyclesStreamCursorValueInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_workout?: InputMaybe<Scalars['Int']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  end_date?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  start_date?: InputMaybe<Scalars['timestamp']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type UserCyclesSumFields = {
  __typename?: 'user_cycles_sum_fields';
  current_workout: Maybe<Scalars['Int']['output']>;
  cycle_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_cycles" */
export type UserCyclesSumOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** update columns of table "user_cycles" */
export enum UserCyclesUpdateColumn {
  /** column name */
  COMPLETED = 'completed',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CURRENT_WORKOUT = 'current_workout',
  /** column name */
  CYCLE_ID = 'cycle_id',
  /** column name */
  END_DATE = 'end_date',
  /** column name */
  ID = 'id',
  /** column name */
  START_DATE = 'start_date',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

export type UserCyclesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserCyclesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserCyclesSetInput>;
  /** filter the rows which have to be updated */
  where: UserCyclesBoolExp;
};

/** aggregate var_pop on columns */
export type UserCyclesVarPopFields = {
  __typename?: 'user_cycles_var_pop_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_cycles" */
export type UserCyclesVarPopOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserCyclesVarSampFields = {
  __typename?: 'user_cycles_var_samp_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_cycles" */
export type UserCyclesVarSampOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserCyclesVarianceFields = {
  __typename?: 'user_cycles_variance_fields';
  current_workout: Maybe<Scalars['Float']['output']>;
  cycle_id: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_cycles" */
export type UserCyclesVarianceOrderBy = {
  current_workout?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "user_workouts" */
export type UserWorkouts = {
  __typename?: 'user_workouts';
  completed_at: Maybe<Scalars['date']['output']>;
  created_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  cycle: Cycles;
  cycle_id: Scalars['bigint']['output'];
  id: Scalars['uuid']['output'];
  notes: Maybe<Scalars['String']['output']>;
  status: Maybe<WorkoutStatusEnumEnum>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Maybe<Users>;
  user_id: Scalars['bigint']['output'];
  /** An object relationship */
  workout: Workouts;
  workout_id: Scalars['bigint']['output'];
  /** An array relationship */
  workouts: Array<Workouts>;
  /** An aggregate relationship */
  workouts_aggregate: WorkoutsAggregate;
};


/** columns and relationships of "user_workouts" */
export type UserWorkoutsWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};


/** columns and relationships of "user_workouts" */
export type UserWorkoutsWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutsOrderBy>>;
  where?: InputMaybe<WorkoutsBoolExp>;
};

/** aggregated selection of "user_workouts" */
export type UserWorkoutsAggregate = {
  __typename?: 'user_workouts_aggregate';
  aggregate: Maybe<UserWorkoutsAggregateFields>;
  nodes: Array<UserWorkouts>;
};

export type UserWorkoutsAggregateBoolExp = {
  count?: InputMaybe<UserWorkoutsAggregateBoolExpCount>;
};

export type UserWorkoutsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<UserWorkoutsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "user_workouts" */
export type UserWorkoutsAggregateFields = {
  __typename?: 'user_workouts_aggregate_fields';
  avg: Maybe<UserWorkoutsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<UserWorkoutsMaxFields>;
  min: Maybe<UserWorkoutsMinFields>;
  stddev: Maybe<UserWorkoutsStddevFields>;
  stddev_pop: Maybe<UserWorkoutsStddevPopFields>;
  stddev_samp: Maybe<UserWorkoutsStddevSampFields>;
  sum: Maybe<UserWorkoutsSumFields>;
  var_pop: Maybe<UserWorkoutsVarPopFields>;
  var_samp: Maybe<UserWorkoutsVarSampFields>;
  variance: Maybe<UserWorkoutsVarianceFields>;
};


/** aggregate fields of "user_workouts" */
export type UserWorkoutsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_workouts" */
export type UserWorkoutsAggregateOrderBy = {
  avg?: InputMaybe<UserWorkoutsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UserWorkoutsMaxOrderBy>;
  min?: InputMaybe<UserWorkoutsMinOrderBy>;
  stddev?: InputMaybe<UserWorkoutsStddevOrderBy>;
  stddev_pop?: InputMaybe<UserWorkoutsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<UserWorkoutsStddevSampOrderBy>;
  sum?: InputMaybe<UserWorkoutsSumOrderBy>;
  var_pop?: InputMaybe<UserWorkoutsVarPopOrderBy>;
  var_samp?: InputMaybe<UserWorkoutsVarSampOrderBy>;
  variance?: InputMaybe<UserWorkoutsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_workouts" */
export type UserWorkoutsArrRelInsertInput = {
  data: Array<UserWorkoutsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UserWorkoutsOnConflict>;
};

/** aggregate avg on columns */
export type UserWorkoutsAvgFields = {
  __typename?: 'user_workouts_avg_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_workouts" */
export type UserWorkoutsAvgOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_workouts". All fields are combined with a logical 'AND'. */
export type UserWorkoutsBoolExp = {
  _and?: InputMaybe<Array<UserWorkoutsBoolExp>>;
  _not?: InputMaybe<UserWorkoutsBoolExp>;
  _or?: InputMaybe<Array<UserWorkoutsBoolExp>>;
  completed_at?: InputMaybe<DateComparisonExp>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  cycle?: InputMaybe<CyclesBoolExp>;
  cycle_id?: InputMaybe<BigintComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  notes?: InputMaybe<StringComparisonExp>;
  status?: InputMaybe<WorkoutStatusEnumEnumComparisonExp>;
  updated_at?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  user_id?: InputMaybe<BigintComparisonExp>;
  workout?: InputMaybe<WorkoutsBoolExp>;
  workout_id?: InputMaybe<BigintComparisonExp>;
  workouts?: InputMaybe<WorkoutsBoolExp>;
  workouts_aggregate?: InputMaybe<WorkoutsAggregateBoolExp>;
};

/** unique or primary key constraints on table "user_workouts" */
export enum UserWorkoutsConstraint {
  /** unique or primary key constraint on columns "id" */
  USER_WORKOUTS_PKEY = 'user_workouts_pkey'
}

/** input type for incrementing numeric columns in table "user_workouts" */
export type UserWorkoutsIncInput = {
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "user_workouts" */
export type UserWorkoutsInsertInput = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle?: InputMaybe<CyclesObjRelInsertInput>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<WorkoutStatusEnumEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout?: InputMaybe<WorkoutsObjRelInsertInput>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
  workouts?: InputMaybe<WorkoutsArrRelInsertInput>;
};

/** aggregate max on columns */
export type UserWorkoutsMaxFields = {
  __typename?: 'user_workouts_max_fields';
  completed_at: Maybe<Scalars['date']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  cycle_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "user_workouts" */
export type UserWorkoutsMaxOrderBy = {
  completed_at?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UserWorkoutsMinFields = {
  __typename?: 'user_workouts_min_fields';
  completed_at: Maybe<Scalars['date']['output']>;
  created_at: Maybe<Scalars['timestamptz']['output']>;
  cycle_id: Maybe<Scalars['bigint']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamptz']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "user_workouts" */
export type UserWorkoutsMinOrderBy = {
  completed_at?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "user_workouts" */
export type UserWorkoutsMutationResponse = {
  __typename?: 'user_workouts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<UserWorkouts>;
};

/** on_conflict condition type for table "user_workouts" */
export type UserWorkoutsOnConflict = {
  constraint: UserWorkoutsConstraint;
  update_columns?: Array<UserWorkoutsUpdateColumn>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};

/** Ordering options when selecting data from "user_workouts". */
export type UserWorkoutsOrderBy = {
  completed_at?: InputMaybe<OrderBy>;
  created_at?: InputMaybe<OrderBy>;
  cycle?: InputMaybe<CyclesOrderBy>;
  cycle_id?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout?: InputMaybe<WorkoutsOrderBy>;
  workout_id?: InputMaybe<OrderBy>;
  workouts_aggregate?: InputMaybe<WorkoutsAggregateOrderBy>;
};

/** primary key columns input for table: user_workouts */
export type UserWorkoutsPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_workouts" */
export enum UserWorkoutsSelectColumn {
  /** column name */
  COMPLETED_AT = 'completed_at',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE_ID = 'cycle_id',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
  /** column name */
  WORKOUT_ID = 'workout_id'
}

/** input type for updating data in table "user_workouts" */
export type UserWorkoutsSetInput = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<WorkoutStatusEnumEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type UserWorkoutsStddevFields = {
  __typename?: 'user_workouts_stddev_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_workouts" */
export type UserWorkoutsStddevOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserWorkoutsStddevPopFields = {
  __typename?: 'user_workouts_stddev_pop_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_workouts" */
export type UserWorkoutsStddevPopOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserWorkoutsStddevSampFields = {
  __typename?: 'user_workouts_stddev_samp_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_workouts" */
export type UserWorkoutsStddevSampOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "user_workouts" */
export type UserWorkoutsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UserWorkoutsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UserWorkoutsStreamCursorValueInput = {
  completed_at?: InputMaybe<Scalars['date']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  cycle_id?: InputMaybe<Scalars['bigint']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<WorkoutStatusEnumEnum>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type UserWorkoutsSumFields = {
  __typename?: 'user_workouts_sum_fields';
  cycle_id: Maybe<Scalars['bigint']['output']>;
  user_id: Maybe<Scalars['bigint']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "user_workouts" */
export type UserWorkoutsSumOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** update columns of table "user_workouts" */
export enum UserWorkoutsUpdateColumn {
  /** column name */
  COMPLETED_AT = 'completed_at',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE_ID = 'cycle_id',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  STATUS = 'status',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id',
  /** column name */
  WORKOUT_ID = 'workout_id'
}

export type UserWorkoutsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UserWorkoutsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UserWorkoutsSetInput>;
  /** filter the rows which have to be updated */
  where: UserWorkoutsBoolExp;
};

/** aggregate var_pop on columns */
export type UserWorkoutsVarPopFields = {
  __typename?: 'user_workouts_var_pop_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_workouts" */
export type UserWorkoutsVarPopOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserWorkoutsVarSampFields = {
  __typename?: 'user_workouts_var_samp_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_workouts" */
export type UserWorkoutsVarSampOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserWorkoutsVarianceFields = {
  __typename?: 'user_workouts_variance_fields';
  cycle_id: Maybe<Scalars['Float']['output']>;
  user_id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_workouts" */
export type UserWorkoutsVarianceOrderBy = {
  cycle_id?: InputMaybe<OrderBy>;
  user_id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  email_verified_at: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['bigint']['output'];
  image_url: Maybe<Scalars['String']['output']>;
  is_guest: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  remember_token: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  user_cycles: Array<UserCycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: UserCyclesAggregate;
};


/** columns and relationships of "users" */
export type UsersUserCyclesArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  avg: Maybe<UsersAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<UsersMaxFields>;
  min: Maybe<UsersMinFields>;
  stddev: Maybe<UsersStddevFields>;
  stddev_pop: Maybe<UsersStddevPopFields>;
  stddev_samp: Maybe<UsersStddevSampFields>;
  sum: Maybe<UsersSumFields>;
  var_pop: Maybe<UsersVarPopFields>;
  var_samp: Maybe<UsersVarSampFields>;
  variance: Maybe<UsersVarianceFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: 'users_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  email?: InputMaybe<StringComparisonExp>;
  email_verified_at?: InputMaybe<TimestampComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  image_url?: InputMaybe<StringComparisonExp>;
  is_guest?: InputMaybe<BooleanComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  password?: InputMaybe<StringComparisonExp>;
  remember_token?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_cycles?: InputMaybe<UserCyclesBoolExp>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  USERS_EMAIL_UNIQUE = 'users_email_unique',
  /** unique or primary key constraint on columns "id" */
  USERS_PKEY = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_guest?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_cycles?: InputMaybe<UserCyclesArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  email: Maybe<Scalars['String']['output']>;
  email_verified_at: Maybe<Scalars['timestamp']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  image_url: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['String']['output']>;
  remember_token: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  email: Maybe<Scalars['String']['output']>;
  email_verified_at: Maybe<Scalars['timestamp']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  image_url: Maybe<Scalars['String']['output']>;
  name: Maybe<Scalars['String']['output']>;
  password: Maybe<Scalars['String']['output']>;
  remember_token: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  email_verified_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  image_url?: InputMaybe<OrderBy>;
  is_guest?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  password?: InputMaybe<OrderBy>;
  remember_token?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  EMAIL_VERIFIED_AT = 'email_verified_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE_URL = 'image_url',
  /** column name */
  IS_GUEST = 'is_guest',
  /** column name */
  NAME = 'name',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  REMEMBER_TOKEN = 'remember_token',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_guest?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: 'users_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type UsersStddevPopFields = {
  __typename?: 'users_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type UsersStddevSampFields = {
  __typename?: 'users_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type UsersStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: UsersStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type UsersStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_verified_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  image_url?: InputMaybe<Scalars['String']['input']>;
  is_guest?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  remember_token?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: 'users_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EMAIL = 'email',
  /** column name */
  EMAIL_VERIFIED_AT = 'email_verified_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMAGE_URL = 'image_url',
  /** column name */
  IS_GUEST = 'is_guest',
  /** column name */
  NAME = 'name',
  /** column name */
  PASSWORD = 'password',
  /** column name */
  REMEMBER_TOKEN = 'remember_token',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type UsersUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<UsersIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  /** filter the rows which have to be updated */
  where: UsersBoolExp;
};

/** aggregate var_pop on columns */
export type UsersVarPopFields = {
  __typename?: 'users_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type UsersVarSampFields = {
  __typename?: 'users_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: 'users_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
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

/** columns and relationships of "webhooks" */
export type Webhooks = {
  __typename?: 'webhooks';
  created_at: Scalars['timestamptz']['output'];
  event: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An object relationship */
  integration: Maybe<Integrations>;
  integration_id: Scalars['uuid']['output'];
  payload: Scalars['jsonb']['output'];
  processed: Scalars['Boolean']['output'];
};


/** columns and relationships of "webhooks" */
export type WebhooksPayloadArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** aggregated selection of "webhooks" */
export type WebhooksAggregate = {
  __typename?: 'webhooks_aggregate';
  aggregate: Maybe<WebhooksAggregateFields>;
  nodes: Array<Webhooks>;
};

/** aggregate fields of "webhooks" */
export type WebhooksAggregateFields = {
  __typename?: 'webhooks_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<WebhooksMaxFields>;
  min: Maybe<WebhooksMinFields>;
};


/** aggregate fields of "webhooks" */
export type WebhooksAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WebhooksSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type WebhooksAppendInput = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** Boolean expression to filter rows from the table "webhooks". All fields are combined with a logical 'AND'. */
export type WebhooksBoolExp = {
  _and?: InputMaybe<Array<WebhooksBoolExp>>;
  _not?: InputMaybe<WebhooksBoolExp>;
  _or?: InputMaybe<Array<WebhooksBoolExp>>;
  created_at?: InputMaybe<TimestamptzComparisonExp>;
  event?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  integration?: InputMaybe<IntegrationsBoolExp>;
  integration_id?: InputMaybe<UuidComparisonExp>;
  payload?: InputMaybe<JsonbComparisonExp>;
  processed?: InputMaybe<BooleanComparisonExp>;
};

/** unique or primary key constraints on table "webhooks" */
export enum WebhooksConstraint {
  /** unique or primary key constraint on columns "id" */
  WEBHOOKS_PKEY = 'webhooks_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type WebhooksDeleteAtPathInput = {
  payload?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type WebhooksDeleteElemInput = {
  payload?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type WebhooksDeleteKeyInput = {
  payload?: InputMaybe<Scalars['String']['input']>;
};

/** input type for inserting data into table "webhooks" */
export type WebhooksInsertInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  integration?: InputMaybe<IntegrationsObjRelInsertInput>;
  integration_id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  processed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate max on columns */
export type WebhooksMaxFields = {
  __typename?: 'webhooks_max_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  event: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  integration_id: Maybe<Scalars['uuid']['output']>;
};

/** aggregate min on columns */
export type WebhooksMinFields = {
  __typename?: 'webhooks_min_fields';
  created_at: Maybe<Scalars['timestamptz']['output']>;
  event: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['uuid']['output']>;
  integration_id: Maybe<Scalars['uuid']['output']>;
};

/** response of any mutation on the table "webhooks" */
export type WebhooksMutationResponse = {
  __typename?: 'webhooks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Webhooks>;
};

/** on_conflict condition type for table "webhooks" */
export type WebhooksOnConflict = {
  constraint: WebhooksConstraint;
  update_columns?: Array<WebhooksUpdateColumn>;
  where?: InputMaybe<WebhooksBoolExp>;
};

/** Ordering options when selecting data from "webhooks". */
export type WebhooksOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  event?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  integration?: InputMaybe<IntegrationsOrderBy>;
  integration_id?: InputMaybe<OrderBy>;
  payload?: InputMaybe<OrderBy>;
  processed?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: webhooks */
export type WebhooksPkColumnsInput = {
  id: Scalars['uuid']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type WebhooksPrependInput = {
  payload?: InputMaybe<Scalars['jsonb']['input']>;
};

/** select columns of table "webhooks" */
export enum WebhooksSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EVENT = 'event',
  /** column name */
  ID = 'id',
  /** column name */
  INTEGRATION_ID = 'integration_id',
  /** column name */
  PAYLOAD = 'payload',
  /** column name */
  PROCESSED = 'processed'
}

/** input type for updating data in table "webhooks" */
export type WebhooksSetInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  integration_id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  processed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Streaming cursor of the table "webhooks" */
export type WebhooksStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: WebhooksStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WebhooksStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  integration_id?: InputMaybe<Scalars['uuid']['input']>;
  payload?: InputMaybe<Scalars['jsonb']['input']>;
  processed?: InputMaybe<Scalars['Boolean']['input']>;
};

/** update columns of table "webhooks" */
export enum WebhooksUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  EVENT = 'event',
  /** column name */
  ID = 'id',
  /** column name */
  INTEGRATION_ID = 'integration_id',
  /** column name */
  PAYLOAD = 'payload',
  /** column name */
  PROCESSED = 'processed'
}

export type WebhooksUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<WebhooksAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<WebhooksDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<WebhooksDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<WebhooksDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<WebhooksPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WebhooksSetInput>;
  /** filter the rows which have to be updated */
  where: WebhooksBoolExp;
};

/** columns and relationships of "workout_item_scores" */
export type WorkoutItemScores = {
  __typename?: 'workout_item_scores';
  created_at: Scalars['date']['output'];
  id: Scalars['bigint']['output'];
  updated_at: Scalars['date']['output'];
  value: Scalars['String']['output'];
  /** An object relationship */
  workout_item: WorkoutItems;
  workout_item_id: Scalars['bigint']['output'];
};

/** aggregated selection of "workout_item_scores" */
export type WorkoutItemScoresAggregate = {
  __typename?: 'workout_item_scores_aggregate';
  aggregate: Maybe<WorkoutItemScoresAggregateFields>;
  nodes: Array<WorkoutItemScores>;
};

export type WorkoutItemScoresAggregateBoolExp = {
  count?: InputMaybe<WorkoutItemScoresAggregateBoolExpCount>;
};

export type WorkoutItemScoresAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkoutItemScoresBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "workout_item_scores" */
export type WorkoutItemScoresAggregateFields = {
  __typename?: 'workout_item_scores_aggregate_fields';
  avg: Maybe<WorkoutItemScoresAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<WorkoutItemScoresMaxFields>;
  min: Maybe<WorkoutItemScoresMinFields>;
  stddev: Maybe<WorkoutItemScoresStddevFields>;
  stddev_pop: Maybe<WorkoutItemScoresStddevPopFields>;
  stddev_samp: Maybe<WorkoutItemScoresStddevSampFields>;
  sum: Maybe<WorkoutItemScoresSumFields>;
  var_pop: Maybe<WorkoutItemScoresVarPopFields>;
  var_samp: Maybe<WorkoutItemScoresVarSampFields>;
  variance: Maybe<WorkoutItemScoresVarianceFields>;
};


/** aggregate fields of "workout_item_scores" */
export type WorkoutItemScoresAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_item_scores" */
export type WorkoutItemScoresAggregateOrderBy = {
  avg?: InputMaybe<WorkoutItemScoresAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<WorkoutItemScoresMaxOrderBy>;
  min?: InputMaybe<WorkoutItemScoresMinOrderBy>;
  stddev?: InputMaybe<WorkoutItemScoresStddevOrderBy>;
  stddev_pop?: InputMaybe<WorkoutItemScoresStddevPopOrderBy>;
  stddev_samp?: InputMaybe<WorkoutItemScoresStddevSampOrderBy>;
  sum?: InputMaybe<WorkoutItemScoresSumOrderBy>;
  var_pop?: InputMaybe<WorkoutItemScoresVarPopOrderBy>;
  var_samp?: InputMaybe<WorkoutItemScoresVarSampOrderBy>;
  variance?: InputMaybe<WorkoutItemScoresVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "workout_item_scores" */
export type WorkoutItemScoresArrRelInsertInput = {
  data: Array<WorkoutItemScoresInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkoutItemScoresOnConflict>;
};

/** aggregate avg on columns */
export type WorkoutItemScoresAvgFields = {
  __typename?: 'workout_item_scores_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workout_item_scores" */
export type WorkoutItemScoresAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "workout_item_scores". All fields are combined with a logical 'AND'. */
export type WorkoutItemScoresBoolExp = {
  _and?: InputMaybe<Array<WorkoutItemScoresBoolExp>>;
  _not?: InputMaybe<WorkoutItemScoresBoolExp>;
  _or?: InputMaybe<Array<WorkoutItemScoresBoolExp>>;
  created_at?: InputMaybe<DateComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  updated_at?: InputMaybe<DateComparisonExp>;
  value?: InputMaybe<StringComparisonExp>;
  workout_item?: InputMaybe<WorkoutItemsBoolExp>;
  workout_item_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "workout_item_scores" */
export enum WorkoutItemScoresConstraint {
  /** unique or primary key constraint on columns "id" */
  WORKOUT_ITEM_SCORES_PKEY = 'workout_item_scores_pkey'
}

/** input type for incrementing numeric columns in table "workout_item_scores" */
export type WorkoutItemScoresIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workout_item_scores" */
export type WorkoutItemScoresInsertInput = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item?: InputMaybe<WorkoutItemsObjRelInsertInput>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type WorkoutItemScoresMaxFields = {
  __typename?: 'workout_item_scores_max_fields';
  created_at: Maybe<Scalars['date']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['date']['output']>;
  value: Maybe<Scalars['String']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "workout_item_scores" */
export type WorkoutItemScoresMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type WorkoutItemScoresMinFields = {
  __typename?: 'workout_item_scores_min_fields';
  created_at: Maybe<Scalars['date']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  updated_at: Maybe<Scalars['date']['output']>;
  value: Maybe<Scalars['String']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "workout_item_scores" */
export type WorkoutItemScoresMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "workout_item_scores" */
export type WorkoutItemScoresMutationResponse = {
  __typename?: 'workout_item_scores_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkoutItemScores>;
};

/** on_conflict condition type for table "workout_item_scores" */
export type WorkoutItemScoresOnConflict = {
  constraint: WorkoutItemScoresConstraint;
  update_columns?: Array<WorkoutItemScoresUpdateColumn>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};

/** Ordering options when selecting data from "workout_item_scores". */
export type WorkoutItemScoresOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
  workout_item?: InputMaybe<WorkoutItemsOrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: workout_item_scores */
export type WorkoutItemScoresPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workout_item_scores" */
export enum WorkoutItemScoresSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALUE = 'value',
  /** column name */
  WORKOUT_ITEM_ID = 'workout_item_id'
}

/** input type for updating data in table "workout_item_scores" */
export type WorkoutItemScoresSetInput = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate stddev on columns */
export type WorkoutItemScoresStddevFields = {
  __typename?: 'workout_item_scores_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workout_item_scores" */
export type WorkoutItemScoresStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type WorkoutItemScoresStddevPopFields = {
  __typename?: 'workout_item_scores_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workout_item_scores" */
export type WorkoutItemScoresStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type WorkoutItemScoresStddevSampFields = {
  __typename?: 'workout_item_scores_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workout_item_scores" */
export type WorkoutItemScoresStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "workout_item_scores" */
export type WorkoutItemScoresStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: WorkoutItemScoresStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkoutItemScoresStreamCursorValueInput = {
  created_at?: InputMaybe<Scalars['date']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  updated_at?: InputMaybe<Scalars['date']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  workout_item_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate sum on columns */
export type WorkoutItemScoresSumFields = {
  __typename?: 'workout_item_scores_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
  workout_item_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workout_item_scores" */
export type WorkoutItemScoresSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** update columns of table "workout_item_scores" */
export enum WorkoutItemScoresUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  VALUE = 'value',
  /** column name */
  WORKOUT_ITEM_ID = 'workout_item_id'
}

export type WorkoutItemScoresUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<WorkoutItemScoresIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkoutItemScoresSetInput>;
  /** filter the rows which have to be updated */
  where: WorkoutItemScoresBoolExp;
};

/** aggregate var_pop on columns */
export type WorkoutItemScoresVarPopFields = {
  __typename?: 'workout_item_scores_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workout_item_scores" */
export type WorkoutItemScoresVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type WorkoutItemScoresVarSampFields = {
  __typename?: 'workout_item_scores_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workout_item_scores" */
export type WorkoutItemScoresVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type WorkoutItemScoresVarianceFields = {
  __typename?: 'workout_item_scores_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_item_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workout_item_scores" */
export type WorkoutItemScoresVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_item_id?: InputMaybe<OrderBy>;
};

/** columns and relationships of "workout_items" */
export type WorkoutItems = {
  __typename?: 'workout_items';
  created_at: Scalars['timestamp']['output'];
  /** An array relationship */
  exercise_details: Array<ExerciseDetails>;
  /** An aggregate relationship */
  exercise_details_aggregate: ExerciseDetailsAggregate;
  header: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  notes: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  scores: Array<WorkoutItemScores>;
  /** An aggregate relationship */
  scores_aggregate: WorkoutItemScoresAggregate;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['timestamp']['output'];
  /** An object relationship */
  workout: Workouts;
  workout_id: Scalars['bigint']['output'];
};


/** columns and relationships of "workout_items" */
export type WorkoutItemsExerciseDetailsArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


/** columns and relationships of "workout_items" */
export type WorkoutItemsExerciseDetailsAggregateArgs = {
  distinct_on?: InputMaybe<Array<ExerciseDetailsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<ExerciseDetailsOrderBy>>;
  where?: InputMaybe<ExerciseDetailsBoolExp>;
};


/** columns and relationships of "workout_items" */
export type WorkoutItemsScoresArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};


/** columns and relationships of "workout_items" */
export type WorkoutItemsScoresAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemScoresSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemScoresOrderBy>>;
  where?: InputMaybe<WorkoutItemScoresBoolExp>;
};

/** aggregated selection of "workout_items" */
export type WorkoutItemsAggregate = {
  __typename?: 'workout_items_aggregate';
  aggregate: Maybe<WorkoutItemsAggregateFields>;
  nodes: Array<WorkoutItems>;
};

export type WorkoutItemsAggregateBoolExp = {
  count?: InputMaybe<WorkoutItemsAggregateBoolExpCount>;
};

export type WorkoutItemsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkoutItemsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "workout_items" */
export type WorkoutItemsAggregateFields = {
  __typename?: 'workout_items_aggregate_fields';
  avg: Maybe<WorkoutItemsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<WorkoutItemsMaxFields>;
  min: Maybe<WorkoutItemsMinFields>;
  stddev: Maybe<WorkoutItemsStddevFields>;
  stddev_pop: Maybe<WorkoutItemsStddevPopFields>;
  stddev_samp: Maybe<WorkoutItemsStddevSampFields>;
  sum: Maybe<WorkoutItemsSumFields>;
  var_pop: Maybe<WorkoutItemsVarPopFields>;
  var_samp: Maybe<WorkoutItemsVarSampFields>;
  variance: Maybe<WorkoutItemsVarianceFields>;
};


/** aggregate fields of "workout_items" */
export type WorkoutItemsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workout_items" */
export type WorkoutItemsAggregateOrderBy = {
  avg?: InputMaybe<WorkoutItemsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<WorkoutItemsMaxOrderBy>;
  min?: InputMaybe<WorkoutItemsMinOrderBy>;
  stddev?: InputMaybe<WorkoutItemsStddevOrderBy>;
  stddev_pop?: InputMaybe<WorkoutItemsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<WorkoutItemsStddevSampOrderBy>;
  sum?: InputMaybe<WorkoutItemsSumOrderBy>;
  var_pop?: InputMaybe<WorkoutItemsVarPopOrderBy>;
  var_samp?: InputMaybe<WorkoutItemsVarSampOrderBy>;
  variance?: InputMaybe<WorkoutItemsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "workout_items" */
export type WorkoutItemsArrRelInsertInput = {
  data: Array<WorkoutItemsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkoutItemsOnConflict>;
};

/** aggregate avg on columns */
export type WorkoutItemsAvgFields = {
  __typename?: 'workout_items_avg_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workout_items" */
export type WorkoutItemsAvgOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "workout_items". All fields are combined with a logical 'AND'. */
export type WorkoutItemsBoolExp = {
  _and?: InputMaybe<Array<WorkoutItemsBoolExp>>;
  _not?: InputMaybe<WorkoutItemsBoolExp>;
  _or?: InputMaybe<Array<WorkoutItemsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  exercise_details?: InputMaybe<ExerciseDetailsBoolExp>;
  exercise_details_aggregate?: InputMaybe<ExerciseDetailsAggregateBoolExp>;
  header?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  notes?: InputMaybe<StringComparisonExp>;
  score?: InputMaybe<StringComparisonExp>;
  scores?: InputMaybe<WorkoutItemScoresBoolExp>;
  scores_aggregate?: InputMaybe<WorkoutItemScoresAggregateBoolExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  workout?: InputMaybe<WorkoutsBoolExp>;
  workout_id?: InputMaybe<BigintComparisonExp>;
};

/** unique or primary key constraints on table "workout_items" */
export enum WorkoutItemsConstraint {
  /** unique or primary key constraint on columns "id" */
  WORKOUT_ITEMS_PKEY = 'workout_items_pkey'
}

/** input type for incrementing numeric columns in table "workout_items" */
export type WorkoutItemsIncInput = {
  id?: InputMaybe<Scalars['bigint']['input']>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workout_items" */
export type WorkoutItemsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  exercise_details?: InputMaybe<ExerciseDetailsArrRelInsertInput>;
  header?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  score?: InputMaybe<Scalars['String']['input']>;
  scores?: InputMaybe<WorkoutItemScoresArrRelInsertInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  workout?: InputMaybe<WorkoutsObjRelInsertInput>;
  workout_id?: InputMaybe<Scalars['bigint']['input']>;
};

/** aggregate max on columns */
export type WorkoutItemsMaxFields = {
  __typename?: 'workout_items_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  header: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by max() on columns of table "workout_items" */
export type WorkoutItemsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  header?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type WorkoutItemsMinFields = {
  __typename?: 'workout_items_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  header: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  notes: Maybe<Scalars['String']['output']>;
  score: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by min() on columns of table "workout_items" */
export type WorkoutItemsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  header?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "workout_items" */
export type WorkoutItemsMutationResponse = {
  __typename?: 'workout_items_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkoutItems>;
};

/** input type for inserting object relation for remote table "workout_items" */
export type WorkoutItemsObjRelInsertInput = {
  data: WorkoutItemsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkoutItemsOnConflict>;
};

/** on_conflict condition type for table "workout_items" */
export type WorkoutItemsOnConflict = {
  constraint: WorkoutItemsConstraint;
  update_columns?: Array<WorkoutItemsUpdateColumn>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};

/** Ordering options when selecting data from "workout_items". */
export type WorkoutItemsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  exercise_details_aggregate?: InputMaybe<ExerciseDetailsAggregateOrderBy>;
  header?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  notes?: InputMaybe<OrderBy>;
  score?: InputMaybe<OrderBy>;
  scores_aggregate?: InputMaybe<WorkoutItemScoresAggregateOrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  workout?: InputMaybe<WorkoutsOrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: workout_items */
export type WorkoutItemsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workout_items" */
export enum WorkoutItemsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  HEADER = 'header',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  SCORE = 'score',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_ID = 'workout_id'
}

/** input type for updating data in table "workout_items" */
export type WorkoutItemsSetInput = {
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
export type WorkoutItemsStddevFields = {
  __typename?: 'workout_items_stddev_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workout_items" */
export type WorkoutItemsStddevOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type WorkoutItemsStddevPopFields = {
  __typename?: 'workout_items_stddev_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workout_items" */
export type WorkoutItemsStddevPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type WorkoutItemsStddevSampFields = {
  __typename?: 'workout_items_stddev_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workout_items" */
export type WorkoutItemsStddevSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "workout_items" */
export type WorkoutItemsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: WorkoutItemsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkoutItemsStreamCursorValueInput = {
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
export type WorkoutItemsSumFields = {
  __typename?: 'workout_items_sum_fields';
  id: Maybe<Scalars['bigint']['output']>;
  workout_id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workout_items" */
export type WorkoutItemsSumOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** update columns of table "workout_items" */
export enum WorkoutItemsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  HEADER = 'header',
  /** column name */
  ID = 'id',
  /** column name */
  NOTES = 'notes',
  /** column name */
  SCORE = 'score',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  WORKOUT_ID = 'workout_id'
}

export type WorkoutItemsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<WorkoutItemsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkoutItemsSetInput>;
  /** filter the rows which have to be updated */
  where: WorkoutItemsBoolExp;
};

/** aggregate var_pop on columns */
export type WorkoutItemsVarPopFields = {
  __typename?: 'workout_items_var_pop_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workout_items" */
export type WorkoutItemsVarPopOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type WorkoutItemsVarSampFields = {
  __typename?: 'workout_items_var_samp_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workout_items" */
export type WorkoutItemsVarSampOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type WorkoutItemsVarianceFields = {
  __typename?: 'workout_items_variance_fields';
  id: Maybe<Scalars['Float']['output']>;
  workout_id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workout_items" */
export type WorkoutItemsVarianceOrderBy = {
  id?: InputMaybe<OrderBy>;
  workout_id?: InputMaybe<OrderBy>;
};

/** Workout Statuses */
export type WorkoutStatusEnum = {
  __typename?: 'workout_status_enum';
  value: Scalars['String']['output'];
};

/** aggregated selection of "workout_status_enum" */
export type WorkoutStatusEnumAggregate = {
  __typename?: 'workout_status_enum_aggregate';
  aggregate: Maybe<WorkoutStatusEnumAggregateFields>;
  nodes: Array<WorkoutStatusEnum>;
};

/** aggregate fields of "workout_status_enum" */
export type WorkoutStatusEnumAggregateFields = {
  __typename?: 'workout_status_enum_aggregate_fields';
  count: Scalars['Int']['output'];
  max: Maybe<WorkoutStatusEnumMaxFields>;
  min: Maybe<WorkoutStatusEnumMinFields>;
};


/** aggregate fields of "workout_status_enum" */
export type WorkoutStatusEnumAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkoutStatusEnumSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "workout_status_enum". All fields are combined with a logical 'AND'. */
export type WorkoutStatusEnumBoolExp = {
  _and?: InputMaybe<Array<WorkoutStatusEnumBoolExp>>;
  _not?: InputMaybe<WorkoutStatusEnumBoolExp>;
  _or?: InputMaybe<Array<WorkoutStatusEnumBoolExp>>;
  value?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "workout_status_enum" */
export enum WorkoutStatusEnumConstraint {
  /** unique or primary key constraint on columns "value" */
  WORKOUT_STATUS_ENUM_PKEY = 'workout_status_enum_pkey'
}

export enum WorkoutStatusEnumEnum {
  COMPLETED = 'completed',
  PENDING = 'pending',
  SKIPPED = 'skipped'
}

/** Boolean expression to compare columns of type "workout_status_enum_enum". All fields are combined with logical 'AND'. */
export type WorkoutStatusEnumEnumComparisonExp = {
  _eq?: InputMaybe<WorkoutStatusEnumEnum>;
  _in?: InputMaybe<Array<WorkoutStatusEnumEnum>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<WorkoutStatusEnumEnum>;
  _nin?: InputMaybe<Array<WorkoutStatusEnumEnum>>;
};

/** input type for inserting data into table "workout_status_enum" */
export type WorkoutStatusEnumInsertInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type WorkoutStatusEnumMaxFields = {
  __typename?: 'workout_status_enum_max_fields';
  value: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type WorkoutStatusEnumMinFields = {
  __typename?: 'workout_status_enum_min_fields';
  value: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "workout_status_enum" */
export type WorkoutStatusEnumMutationResponse = {
  __typename?: 'workout_status_enum_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<WorkoutStatusEnum>;
};

/** on_conflict condition type for table "workout_status_enum" */
export type WorkoutStatusEnumOnConflict = {
  constraint: WorkoutStatusEnumConstraint;
  update_columns?: Array<WorkoutStatusEnumUpdateColumn>;
  where?: InputMaybe<WorkoutStatusEnumBoolExp>;
};

/** Ordering options when selecting data from "workout_status_enum". */
export type WorkoutStatusEnumOrderBy = {
  value?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: workout_status_enum */
export type WorkoutStatusEnumPkColumnsInput = {
  value: Scalars['String']['input'];
};

/** select columns of table "workout_status_enum" */
export enum WorkoutStatusEnumSelectColumn {
  /** column name */
  VALUE = 'value'
}

/** input type for updating data in table "workout_status_enum" */
export type WorkoutStatusEnumSetInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "workout_status_enum" */
export type WorkoutStatusEnumStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: WorkoutStatusEnumStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkoutStatusEnumStreamCursorValueInput = {
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "workout_status_enum" */
export enum WorkoutStatusEnumUpdateColumn {
  /** column name */
  VALUE = 'value'
}

export type WorkoutStatusEnumUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkoutStatusEnumSetInput>;
  /** filter the rows which have to be updated */
  where: WorkoutStatusEnumBoolExp;
};

/** columns and relationships of "workouts" */
export type Workouts = {
  __typename?: 'workouts';
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  current_cycle: Maybe<Cycles>;
  cycle: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['bigint']['output'];
  isActiveRecovery: Scalars['Boolean']['output'];
  isRestDay: Scalars['Boolean']['output'];
  poster: Maybe<Scalars['String']['output']>;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamp']['output'];
  /** An array relationship */
  user_cycles: Array<UserCycles>;
  /** An aggregate relationship */
  user_cycles_aggregate: UserCyclesAggregate;
  /** An array relationship */
  user_workouts: Array<UserWorkouts>;
  /** An aggregate relationship */
  user_workouts_aggregate: UserWorkoutsAggregate;
  /** An array relationship */
  workout_items: Array<WorkoutItems>;
  /** An aggregate relationship */
  workout_items_aggregate: WorkoutItemsAggregate;
};


/** columns and relationships of "workouts" */
export type WorkoutsUserCyclesArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUserCyclesAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserCyclesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserCyclesOrderBy>>;
  where?: InputMaybe<UserCyclesBoolExp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUserWorkoutsArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsUserWorkoutsAggregateArgs = {
  distinct_on?: InputMaybe<Array<UserWorkoutsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<UserWorkoutsOrderBy>>;
  where?: InputMaybe<UserWorkoutsBoolExp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsWorkoutItemsArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};


/** columns and relationships of "workouts" */
export type WorkoutsWorkoutItemsAggregateArgs = {
  distinct_on?: InputMaybe<Array<WorkoutItemsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<WorkoutItemsOrderBy>>;
  where?: InputMaybe<WorkoutItemsBoolExp>;
};

/** aggregated selection of "workouts" */
export type WorkoutsAggregate = {
  __typename?: 'workouts_aggregate';
  aggregate: Maybe<WorkoutsAggregateFields>;
  nodes: Array<Workouts>;
};

export type WorkoutsAggregateBoolExp = {
  bool_and?: InputMaybe<WorkoutsAggregateBoolExpBoolAnd>;
  bool_or?: InputMaybe<WorkoutsAggregateBoolExpBoolOr>;
  count?: InputMaybe<WorkoutsAggregateBoolExpCount>;
};

export type WorkoutsAggregateBoolExpBoolAnd = {
  arguments: WorkoutsSelectColumnWorkoutsAggregateBoolExpBoolAndArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkoutsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type WorkoutsAggregateBoolExpBoolOr = {
  arguments: WorkoutsSelectColumnWorkoutsAggregateBoolExpBoolOrArgumentsColumns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkoutsBoolExp>;
  predicate: BooleanComparisonExp;
};

export type WorkoutsAggregateBoolExpCount = {
  arguments?: InputMaybe<Array<WorkoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<WorkoutsBoolExp>;
  predicate: IntComparisonExp;
};

/** aggregate fields of "workouts" */
export type WorkoutsAggregateFields = {
  __typename?: 'workouts_aggregate_fields';
  avg: Maybe<WorkoutsAvgFields>;
  count: Scalars['Int']['output'];
  max: Maybe<WorkoutsMaxFields>;
  min: Maybe<WorkoutsMinFields>;
  stddev: Maybe<WorkoutsStddevFields>;
  stddev_pop: Maybe<WorkoutsStddevPopFields>;
  stddev_samp: Maybe<WorkoutsStddevSampFields>;
  sum: Maybe<WorkoutsSumFields>;
  var_pop: Maybe<WorkoutsVarPopFields>;
  var_samp: Maybe<WorkoutsVarSampFields>;
  variance: Maybe<WorkoutsVarianceFields>;
};


/** aggregate fields of "workouts" */
export type WorkoutsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<WorkoutsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "workouts" */
export type WorkoutsAggregateOrderBy = {
  avg?: InputMaybe<WorkoutsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<WorkoutsMaxOrderBy>;
  min?: InputMaybe<WorkoutsMinOrderBy>;
  stddev?: InputMaybe<WorkoutsStddevOrderBy>;
  stddev_pop?: InputMaybe<WorkoutsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<WorkoutsStddevSampOrderBy>;
  sum?: InputMaybe<WorkoutsSumOrderBy>;
  var_pop?: InputMaybe<WorkoutsVarPopOrderBy>;
  var_samp?: InputMaybe<WorkoutsVarSampOrderBy>;
  variance?: InputMaybe<WorkoutsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "workouts" */
export type WorkoutsArrRelInsertInput = {
  data: Array<WorkoutsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkoutsOnConflict>;
};

/** aggregate avg on columns */
export type WorkoutsAvgFields = {
  __typename?: 'workouts_avg_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "workouts" */
export type WorkoutsAvgOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "workouts". All fields are combined with a logical 'AND'. */
export type WorkoutsBoolExp = {
  _and?: InputMaybe<Array<WorkoutsBoolExp>>;
  _not?: InputMaybe<WorkoutsBoolExp>;
  _or?: InputMaybe<Array<WorkoutsBoolExp>>;
  created_at?: InputMaybe<TimestampComparisonExp>;
  current_cycle?: InputMaybe<CyclesBoolExp>;
  cycle?: InputMaybe<IntComparisonExp>;
  date?: InputMaybe<StringComparisonExp>;
  description?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<BigintComparisonExp>;
  isActiveRecovery?: InputMaybe<BooleanComparisonExp>;
  isRestDay?: InputMaybe<BooleanComparisonExp>;
  poster?: InputMaybe<StringComparisonExp>;
  subtitle?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
  updated_at?: InputMaybe<TimestampComparisonExp>;
  user_cycles?: InputMaybe<UserCyclesBoolExp>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateBoolExp>;
  user_workouts?: InputMaybe<UserWorkoutsBoolExp>;
  user_workouts_aggregate?: InputMaybe<UserWorkoutsAggregateBoolExp>;
  workout_items?: InputMaybe<WorkoutItemsBoolExp>;
  workout_items_aggregate?: InputMaybe<WorkoutItemsAggregateBoolExp>;
};

/** unique or primary key constraints on table "workouts" */
export enum WorkoutsConstraint {
  /** unique or primary key constraint on columns "id" */
  WORKOUTS_PKEY = 'workouts_pkey'
}

/** input type for incrementing numeric columns in table "workouts" */
export type WorkoutsIncInput = {
  cycle?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['bigint']['input']>;
};

/** input type for inserting data into table "workouts" */
export type WorkoutsInsertInput = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  current_cycle?: InputMaybe<CyclesObjRelInsertInput>;
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
  user_cycles?: InputMaybe<UserCyclesArrRelInsertInput>;
  user_workouts?: InputMaybe<UserWorkoutsArrRelInsertInput>;
  workout_items?: InputMaybe<WorkoutItemsArrRelInsertInput>;
};

/** aggregate max on columns */
export type WorkoutsMaxFields = {
  __typename?: 'workouts_max_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  cycle: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  poster: Maybe<Scalars['String']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "workouts" */
export type WorkoutsMaxOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  cycle?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  poster?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type WorkoutsMinFields = {
  __typename?: 'workouts_min_fields';
  created_at: Maybe<Scalars['timestamp']['output']>;
  cycle: Maybe<Scalars['Int']['output']>;
  date: Maybe<Scalars['String']['output']>;
  description: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
  poster: Maybe<Scalars['String']['output']>;
  subtitle: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  updated_at: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "workouts" */
export type WorkoutsMinOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  cycle?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  poster?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "workouts" */
export type WorkoutsMutationResponse = {
  __typename?: 'workouts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Workouts>;
};

/** input type for inserting object relation for remote table "workouts" */
export type WorkoutsObjRelInsertInput = {
  data: WorkoutsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<WorkoutsOnConflict>;
};

/** on_conflict condition type for table "workouts" */
export type WorkoutsOnConflict = {
  constraint: WorkoutsConstraint;
  update_columns?: Array<WorkoutsUpdateColumn>;
  where?: InputMaybe<WorkoutsBoolExp>;
};

/** Ordering options when selecting data from "workouts". */
export type WorkoutsOrderBy = {
  created_at?: InputMaybe<OrderBy>;
  current_cycle?: InputMaybe<CyclesOrderBy>;
  cycle?: InputMaybe<OrderBy>;
  date?: InputMaybe<OrderBy>;
  description?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isActiveRecovery?: InputMaybe<OrderBy>;
  isRestDay?: InputMaybe<OrderBy>;
  poster?: InputMaybe<OrderBy>;
  subtitle?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
  updated_at?: InputMaybe<OrderBy>;
  user_cycles_aggregate?: InputMaybe<UserCyclesAggregateOrderBy>;
  user_workouts_aggregate?: InputMaybe<UserWorkoutsAggregateOrderBy>;
  workout_items_aggregate?: InputMaybe<WorkoutItemsAggregateOrderBy>;
};

/** primary key columns input for table: workouts */
export type WorkoutsPkColumnsInput = {
  id: Scalars['bigint']['input'];
};

/** select columns of table "workouts" */
export enum WorkoutsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE = 'cycle',
  /** column name */
  DATE = 'date',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  ISACTIVERECOVERY = 'isActiveRecovery',
  /** column name */
  ISRESTDAY = 'isRestDay',
  /** column name */
  POSTER = 'poster',
  /** column name */
  SUBTITLE = 'subtitle',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** select "workouts_aggregate_bool_exp_bool_and_arguments_columns" columns of table "workouts" */
export enum WorkoutsSelectColumnWorkoutsAggregateBoolExpBoolAndArgumentsColumns {
  /** column name */
  ISACTIVERECOVERY = 'isActiveRecovery',
  /** column name */
  ISRESTDAY = 'isRestDay'
}

/** select "workouts_aggregate_bool_exp_bool_or_arguments_columns" columns of table "workouts" */
export enum WorkoutsSelectColumnWorkoutsAggregateBoolExpBoolOrArgumentsColumns {
  /** column name */
  ISACTIVERECOVERY = 'isActiveRecovery',
  /** column name */
  ISRESTDAY = 'isRestDay'
}

/** input type for updating data in table "workouts" */
export type WorkoutsSetInput = {
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
export type WorkoutsStddevFields = {
  __typename?: 'workouts_stddev_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "workouts" */
export type WorkoutsStddevOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type WorkoutsStddevPopFields = {
  __typename?: 'workouts_stddev_pop_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "workouts" */
export type WorkoutsStddevPopOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type WorkoutsStddevSampFields = {
  __typename?: 'workouts_stddev_samp_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "workouts" */
export type WorkoutsStddevSampOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** Streaming cursor of the table "workouts" */
export type WorkoutsStreamCursorInput = {
  /** Stream column input with initial value */
  initial_value: WorkoutsStreamCursorValueInput;
  /** cursor ordering */
  ordering?: InputMaybe<CursorOrdering>;
};

/** Initial value of the column from where the streaming should start */
export type WorkoutsStreamCursorValueInput = {
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
export type WorkoutsSumFields = {
  __typename?: 'workouts_sum_fields';
  cycle: Maybe<Scalars['Int']['output']>;
  id: Maybe<Scalars['bigint']['output']>;
};

/** order by sum() on columns of table "workouts" */
export type WorkoutsSumOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** update columns of table "workouts" */
export enum WorkoutsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  CYCLE = 'cycle',
  /** column name */
  DATE = 'date',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  ISACTIVERECOVERY = 'isActiveRecovery',
  /** column name */
  ISRESTDAY = 'isRestDay',
  /** column name */
  POSTER = 'poster',
  /** column name */
  SUBTITLE = 'subtitle',
  /** column name */
  TITLE = 'title',
  /** column name */
  UPDATED_AT = 'updated_at'
}

export type WorkoutsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<WorkoutsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<WorkoutsSetInput>;
  /** filter the rows which have to be updated */
  where: WorkoutsBoolExp;
};

/** aggregate var_pop on columns */
export type WorkoutsVarPopFields = {
  __typename?: 'workouts_var_pop_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "workouts" */
export type WorkoutsVarPopOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type WorkoutsVarSampFields = {
  __typename?: 'workouts_var_samp_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "workouts" */
export type WorkoutsVarSampOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type WorkoutsVarianceFields = {
  __typename?: 'workouts_variance_fields';
  cycle: Maybe<Scalars['Float']['output']>;
  id: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "workouts" */
export type WorkoutsVarianceOrderBy = {
  cycle?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
};

export type ProgramDetailsFragment = { __typename?: 'cycles', program: { __typename?: 'programs', id: string, name: string, image: string | null | undefined } };

export type ProgramsFragment = { __typename?: 'programs', id: string, name: string, image: string | null | undefined };

export type UserFragment = { __typename?: 'user_cycles', user: { __typename?: 'users', id: string, name: string, email: string, image_url: string | null | undefined } };

export type CurrentUserWorkoutFragment = { __typename?: 'user_workouts', workout: { __typename?: 'workouts', id: string, title: string, isActiveRecovery: boolean, isRestDay: boolean, first: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined, notes: string | null | undefined }>, rest: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined }>, titles: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined }>, muscleGroup: Array<{ __typename?: 'workout_items', exercise_details: Array<{ __typename?: 'exercise_details', exercise: { __typename?: 'exercises', muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined }> }> } };

export type WorkoutIdsFragment = { __typename?: 'cycles', workouts: Array<{ __typename?: 'workouts', id: string }> };

export type WorkoutPageFragment = { __typename?: 'workouts', id: string, title: string, subtitle: string, poster: string | null | undefined, isRestDay: boolean, isActiveRecovery: boolean, description: string | null | undefined, date: string | null | undefined, cycle: number | null | undefined, workout_items: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined, notes: string | null | undefined, header: string | null | undefined, scores: Array<{ __typename?: 'workout_item_scores', id: string, value: string, created_at: string }>, exercise_details: Array<{ __typename?: 'exercise_details', id: string, title: string | null | undefined, subtitle: string | null | undefined, levels: any | null | undefined, exercise: { __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined }> }> };

export type WorkoutItemFragment = { __typename?: 'workout_items', id: string, title: string | null | undefined, notes: string | null | undefined, header: string | null | undefined, scores: Array<{ __typename?: 'workout_item_scores', id: string, value: string, created_at: string }>, exercise_details: Array<{ __typename?: 'exercise_details', id: string, title: string | null | undefined, subtitle: string | null | undefined, levels: any | null | undefined, exercise: { __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined }> };

export type WorkoutItemScoresFragment = { __typename?: 'workout_item_scores', id: string, value: string, created_at: string };

export type ExerciseDetailsFragment = { __typename?: 'exercise_details', id: string, title: string | null | undefined, subtitle: string | null | undefined, levels: any | null | undefined, exercise: { __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined };

export type ExerciseFragment = { __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined };

export type MuscleGroupFragment = { __typename?: 'muscle_groups', id: string, type: string };

export type CompleteWorkoutMutationVariables = Exact<{
  completedWorkout: Scalars['bigint']['input'];
  cycleId: Scalars['bigint']['input'];
  status: WorkoutStatusEnumEnum;
}>;


export type CompleteWorkoutMutation = { __typename?: 'mutation_root', update_user_workouts: { __typename?: 'user_workouts_mutation_response', affected_rows: number } | null | undefined };

export type FinishCycleMutationVariables = Exact<{
  completedWorkout: Scalars['bigint']['input'];
  cycleId: Scalars['bigint']['input'];
}>;


export type FinishCycleMutation = { __typename?: 'mutation_root', insert_user_workouts_one: { __typename?: 'user_workouts', id: string, workout_id: string } | null | undefined, update_user_cycles: { __typename?: 'user_cycles_mutation_response', affected_rows: number } | null | undefined };

export type UpsertWhoopIntegrationMutationVariables = Exact<{
  accessToken: Scalars['String']['input'];
  refreshToken: Scalars['String']['input'];
  expiresAt: Scalars['Int']['input'];
}>;


export type UpsertWhoopIntegrationMutation = { __typename?: 'mutation_root', insert_integrations_one: { __typename?: 'integrations', id: string, name: string, access_token: string, refresh_token: string, expires_at: number, created_at: string, updated_at: string } | null | undefined };

export type UpsertWorkoutItemScoreMutationVariables = Exact<{
  workoutItemId: Scalars['bigint']['input'];
  score?: InputMaybe<Scalars['String']['input']>;
}>;


export type UpsertWorkoutItemScoreMutation = { __typename?: 'mutation_root', insert_workout_item_scores: { __typename?: 'workout_item_scores_mutation_response', returning: Array<{ __typename?: 'workout_item_scores', id: string, value: string }> } | null | undefined };

export type CheckUserCredentialsQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type CheckUserCredentialsQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, email: string, name: string, is_guest: boolean, image_url: string | null | undefined, created_at: string, updated_at: string }> };

export type GetCurrentUserCycleQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
}>;


export type GetCurrentUserCycleQuery = { __typename?: 'query_root', user: { __typename?: 'users', id: string, user_cycles: Array<{ __typename?: 'user_cycles', start_date: string, end_date: string, completed: boolean, cycle: { __typename?: 'cycles', id: string, cycle_number: number, date: string | null | undefined, workouts: Array<{ __typename?: 'workouts', id: string, title: string, isRestDay: boolean, isActiveRecovery: boolean, items: { __typename?: 'workout_items_aggregate', aggregate: { __typename?: 'workout_items_aggregate_fields', count: number } | null | undefined } }> } }> } | null | undefined };

export type GetDashboardDataForUserQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
}>;


export type GetDashboardDataForUserQuery = { __typename?: 'query_root', user_cycles: Array<{ __typename?: 'user_cycles', id: string, start_date: string, completed: boolean, user: { __typename?: 'users', id: string, name: string, email: string, image_url: string | null | undefined }, workout: { __typename?: 'workouts', id: string, title: string, subtitle: string, poster: string | null | undefined, isRestDay: boolean, isActiveRecovery: boolean, description: string | null | undefined, date: string | null | undefined, workout_items: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined, header: string | null | undefined, notes: string | null | undefined }> }, cycle: { __typename?: 'cycles', workout_count: number, program: { __typename?: 'programs', name: string, image: string | null | undefined }, workouts: Array<{ __typename?: 'workouts', id: string }> } }> };

export type GetExercisesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExercisesQuery = { __typename?: 'query_root', exercises: Array<{ __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined }> };

export type GetIntegrationsQueryVariables = Exact<{
  id?: Scalars['uuid']['input'];
}>;


export type GetIntegrationsQuery = { __typename?: 'query_root', integration: { __typename?: 'integrations', name: string, access_token: string, refresh_token: string, expires_at: number, created_at: string, updated_at: string } | null | undefined };

export type GetProgramsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProgramsQuery = { __typename?: 'query_root', programs: Array<{ __typename?: 'programs', id: string, name: string, description: string | null | undefined, image: string | null | undefined, cycles: Array<{ __typename?: 'cycles', workouts: Array<{ __typename?: 'workouts', id: string, cycle: number | null | undefined }> }> }> };

export type GetUserQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type GetUserQuery = { __typename?: 'query_root', users_by_pk: { __typename?: 'users', id: string, email: string, image_url: string | null | undefined, created_at: string, updated_at: string, user_cycles: Array<{ __typename?: 'user_cycles', id: string, cycle_id: string, start_date: string, completed: boolean, created_at: string, updated_at: string, cycle: { __typename?: 'cycles', id: string, cycle_number: number, date: string | null | undefined, bridge_week: boolean, program: { __typename?: 'programs', id: string, name: string, description: string | null | undefined, image: string | null | undefined }, workouts: Array<{ __typename?: 'workouts', id: string, title: string, subtitle: string, poster: string | null | undefined, isRestDay: boolean, isActiveRecovery: boolean, description: string | null | undefined, date: string | null | undefined, cycle: number | null | undefined }> } }> } | null | undefined };

export type GetUserCycleProgressQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
}>;


export type GetUserCycleProgressQuery = { __typename?: 'query_root', userCycle: Array<{ __typename?: 'user_cycles', id: string, start_date: string, completed: boolean, cycle: { __typename?: 'cycles', id: string, total: number, user_workouts: Array<{ __typename?: 'user_workouts', status: WorkoutStatusEnumEnum | null | undefined }>, program: { __typename?: 'programs', id: string, name: string, image: string | null | undefined } } }>, programs: Array<{ __typename?: 'programs', id: string, name: string, image: string | null | undefined }>, current: Array<{ __typename?: 'user_workouts', workout: { __typename?: 'workouts', id: string, title: string, isActiveRecovery: boolean, isRestDay: boolean, first: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined, notes: string | null | undefined }>, rest: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined }>, titles: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined }>, muscleGroup: Array<{ __typename?: 'workout_items', exercise_details: Array<{ __typename?: 'exercise_details', exercise: { __typename?: 'exercises', muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined }> }> } }> };

export type GetUserWorkoutsQueryVariables = Exact<{
  userId: Scalars['bigint']['input'];
  cycle: Scalars['bigint']['input'];
}>;


export type GetUserWorkoutsQuery = { __typename?: 'query_root', upcoming_workouts: Array<{ __typename?: 'user_workouts', workout: { __typename?: 'workouts', id: string, title: string, isActiveRecovery: boolean, isRestDay: boolean, first: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined, notes: string | null | undefined }>, rest: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined }>, titles: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined }> } }>, past_workouts: Array<{ __typename?: 'user_workouts', status: WorkoutStatusEnumEnum | null | undefined, workout: { __typename?: 'workouts', id: string, title: string, isActiveRecovery: boolean, isRestDay: boolean, first: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined, notes: string | null | undefined }>, rest: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined }>, titles: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined }> } }> };

export type WorkoutFragment = { __typename?: 'user_workouts', workout: { __typename?: 'workouts', id: string, title: string, isActiveRecovery: boolean, isRestDay: boolean, first: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined, notes: string | null | undefined }>, rest: Array<{ __typename?: 'workout_items', id: string, header: string | null | undefined }>, titles: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined }> } };

export type GetWorkoutsQueryVariables = Exact<{
  cycleId: Scalars['Int']['input'];
}>;


export type GetWorkoutsQuery = { __typename?: 'query_root', workouts: Array<{ __typename?: 'workouts', id: string, title: string, subtitle: string, isRestDay: boolean, isActiveRecovery: boolean, date: string | null | undefined, cycle: number | null | undefined, items: { __typename?: 'workout_items_aggregate', aggregate: { __typename?: 'workout_items_aggregate_fields', count: number } | null | undefined } }> };

export type WorkoutByIdQueryVariables = Exact<{
  id: Scalars['bigint']['input'];
}>;


export type WorkoutByIdQuery = { __typename?: 'query_root', workout: { __typename?: 'workouts', id: string, title: string, subtitle: string, poster: string | null | undefined, isRestDay: boolean, isActiveRecovery: boolean, description: string | null | undefined, date: string | null | undefined, cycle: number | null | undefined, workout_items: Array<{ __typename?: 'workout_items', id: string, title: string | null | undefined, notes: string | null | undefined, header: string | null | undefined, scores: Array<{ __typename?: 'workout_item_scores', id: string, value: string, created_at: string }>, exercise_details: Array<{ __typename?: 'exercise_details', id: string, title: string | null | undefined, subtitle: string | null | undefined, levels: any | null | undefined, exercise: { __typename?: 'exercises', id: string, base_url: string, demo_video_url: string | null | undefined, demo_video_title: string, demo_video_poster: string, demo_video_id: string, muscle_group: { __typename?: 'muscle_groups', id: string, type: string } | null | undefined } | null | undefined }> }> } | null | undefined, user_workouts: Array<{ __typename?: 'user_workouts', status: WorkoutStatusEnumEnum | null | undefined, id: string, cycleId: string }>, user_workouts_aggregate: { __typename?: 'user_workouts_aggregate', aggregate: { __typename?: 'user_workouts_aggregate_fields', count: number } | null | undefined } };

export const ProgramDetailsFragmentDoc = gql`
    fragment ProgramDetails on cycles {
  program {
    id
    name
    image
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
export const MuscleGroupFragmentDoc = gql`
    fragment MuscleGroup on muscle_groups {
  id
  type
}
    `;
export const CurrentUserWorkoutFragmentDoc = gql`
    fragment CurrentUserWorkout on user_workouts {
  workout {
    id
    title
    isActiveRecovery
    isRestDay
    first: workout_items(limit: 1, order_by: {id: asc}) {
      id
      header
      notes
    }
    rest: workout_items(offset: 1, order_by: {id: asc}, where: {header: {_neq: ""}}) {
      id
      header
    }
    titles: workout_items(order_by: {id: asc}, where: {title: {_ilike: "Part%"}}) {
      id
      title
    }
    muscleGroup: workout_items(
      where: {exercise_details_aggregate: {count: {predicate: {_gt: 0}}}}
    ) {
      exercise_details(
        where: {exercise_id: {_is_null: false}, exercise: {muscle_group: {type: {_is_null: false}}}}
      ) {
        exercise {
          muscle_group {
            ...MuscleGroup
          }
        }
      }
    }
  }
}
    ${MuscleGroupFragmentDoc}`;
export const WorkoutIdsFragmentDoc = gql`
    fragment WorkoutIds on cycles {
  workouts(order_by: {id: asc}) {
    id
  }
}
    `;
export const WorkoutItemScoresFragmentDoc = gql`
    fragment WorkoutItemScores on workout_item_scores {
  id
  value
  created_at
}
    `;
export const ExerciseFragmentDoc = gql`
    fragment Exercise on exercises {
  id
  base_url
  demo_video_url
  demo_video_title
  demo_video_poster
  demo_video_id
  muscle_group {
    ...MuscleGroup
  }
}
    ${MuscleGroupFragmentDoc}`;
export const ExerciseDetailsFragmentDoc = gql`
    fragment ExerciseDetails on exercise_details {
  id
  title
  subtitle
  levels
  exercise {
    ...Exercise
  }
}
    ${ExerciseFragmentDoc}`;
export const WorkoutItemFragmentDoc = gql`
    fragment WorkoutItem on workout_items {
  id
  title
  notes
  header
  scores(order_by: {created_at: desc}) {
    ...WorkoutItemScores
  }
  exercise_details {
    ...ExerciseDetails
  }
}
    ${WorkoutItemScoresFragmentDoc}
${ExerciseDetailsFragmentDoc}`;
export const WorkoutPageFragmentDoc = gql`
    fragment WorkoutPage on workouts {
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
    ...WorkoutItem
  }
}
    ${WorkoutItemFragmentDoc}`;
export const WorkoutFragmentDoc = gql`
    fragment Workout on user_workouts {
  workout {
    id
    title
    isActiveRecovery
    isRestDay
    first: workout_items(limit: 1, order_by: {id: asc}) {
      id
      header
      notes
    }
    rest: workout_items(offset: 1, order_by: {id: asc}, where: {header: {_neq: ""}}) {
      id
      header
    }
    titles: workout_items(order_by: {id: asc}, where: {title: {_ilike: "Part%"}}) {
      id
      title
    }
  }
}
    `;
export const CompleteWorkout = gql`
    mutation CompleteWorkout($completedWorkout: bigint!, $cycleId: bigint!, $status: workout_status_enum_enum!) {
  update_user_workouts(
    where: {workout_id: {_eq: $completedWorkout}, cycle_id: {_eq: $cycleId}}
    _set: {status: $status}
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
 *      status: // value for 'status'
 *   },
 * });
 */
export function useCompleteWorkoutMutation(baseOptions?: Apollo.MutationHookOptions<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>(CompleteWorkout, options);
      }
export type CompleteWorkoutMutationHookResult = ReturnType<typeof useCompleteWorkoutMutation>;
export type CompleteWorkoutMutationResult = Apollo.MutationResult<CompleteWorkoutMutation>;
export type CompleteWorkoutMutationOptions = Apollo.BaseMutationOptions<CompleteWorkoutMutation, CompleteWorkoutMutationVariables>;
export const FinishCycle = gql`
    mutation FinishCycle($completedWorkout: bigint!, $cycleId: bigint!) {
  insert_user_workouts_one(
    object: {workout_id: $completedWorkout, cycle_id: $cycleId}
  ) {
    id
    workout_id
  }
  update_user_cycles(where: {cycle_id: {_eq: $cycleId}}, _set: {completed: true}) {
    affected_rows
  }
}
    `;
export type FinishCycleMutationFn = Apollo.MutationFunction<FinishCycleMutation, FinishCycleMutationVariables>;

/**
 * __useFinishCycleMutation__
 *
 * To run a mutation, you first call `useFinishCycleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFinishCycleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [finishCycleMutation, { data, loading, error }] = useFinishCycleMutation({
 *   variables: {
 *      completedWorkout: // value for 'completedWorkout'
 *      cycleId: // value for 'cycleId'
 *   },
 * });
 */
export function useFinishCycleMutation(baseOptions?: Apollo.MutationHookOptions<FinishCycleMutation, FinishCycleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FinishCycleMutation, FinishCycleMutationVariables>(FinishCycle, options);
      }
export type FinishCycleMutationHookResult = ReturnType<typeof useFinishCycleMutation>;
export type FinishCycleMutationResult = Apollo.MutationResult<FinishCycleMutation>;
export type FinishCycleMutationOptions = Apollo.BaseMutationOptions<FinishCycleMutation, FinishCycleMutationVariables>;
export const UpsertWhoopIntegration = gql`
    mutation UpsertWhoopIntegration($accessToken: String!, $refreshToken: String!, $expiresAt: Int!) {
  insert_integrations_one(
    object: {access_token: $accessToken, refresh_token: $refreshToken, expires_at: $expiresAt}
    on_conflict: {constraint: integrations_pkey, update_columns: [access_token, refresh_token, expires_at, updated_at]}
  ) {
    id
    name
    access_token
    refresh_token
    expires_at
    created_at
    updated_at
  }
}
    `;
export type UpsertWhoopIntegrationMutationFn = Apollo.MutationFunction<UpsertWhoopIntegrationMutation, UpsertWhoopIntegrationMutationVariables>;

/**
 * __useUpsertWhoopIntegrationMutation__
 *
 * To run a mutation, you first call `useUpsertWhoopIntegrationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertWhoopIntegrationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertWhoopIntegrationMutation, { data, loading, error }] = useUpsertWhoopIntegrationMutation({
 *   variables: {
 *      accessToken: // value for 'accessToken'
 *      refreshToken: // value for 'refreshToken'
 *      expiresAt: // value for 'expiresAt'
 *   },
 * });
 */
export function useUpsertWhoopIntegrationMutation(baseOptions?: Apollo.MutationHookOptions<UpsertWhoopIntegrationMutation, UpsertWhoopIntegrationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertWhoopIntegrationMutation, UpsertWhoopIntegrationMutationVariables>(UpsertWhoopIntegration, options);
      }
export type UpsertWhoopIntegrationMutationHookResult = ReturnType<typeof useUpsertWhoopIntegrationMutation>;
export type UpsertWhoopIntegrationMutationResult = Apollo.MutationResult<UpsertWhoopIntegrationMutation>;
export type UpsertWhoopIntegrationMutationOptions = Apollo.BaseMutationOptions<UpsertWhoopIntegrationMutation, UpsertWhoopIntegrationMutationVariables>;
export const UpsertWorkoutItemScore = gql`
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
        return Apollo.useMutation<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>(UpsertWorkoutItemScore, options);
      }
export type UpsertWorkoutItemScoreMutationHookResult = ReturnType<typeof useUpsertWorkoutItemScoreMutation>;
export type UpsertWorkoutItemScoreMutationResult = Apollo.MutationResult<UpsertWorkoutItemScoreMutation>;
export type UpsertWorkoutItemScoreMutationOptions = Apollo.BaseMutationOptions<UpsertWorkoutItemScoreMutation, UpsertWorkoutItemScoreMutationVariables>;
export const CheckUserCredentials = gql`
    query CheckUserCredentials($email: String!, $password: String!) {
  users(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    id
    email
    name
    is_guest
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
        return Apollo.useQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentials, options);
      }
export function useCheckUserCredentialsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentials, options);
        }
export function useCheckUserCredentialsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>(CheckUserCredentials, options);
        }
export type CheckUserCredentialsQueryHookResult = ReturnType<typeof useCheckUserCredentialsQuery>;
export type CheckUserCredentialsLazyQueryHookResult = ReturnType<typeof useCheckUserCredentialsLazyQuery>;
export type CheckUserCredentialsSuspenseQueryHookResult = ReturnType<typeof useCheckUserCredentialsSuspenseQuery>;
export type CheckUserCredentialsQueryResult = Apollo.QueryResult<CheckUserCredentialsQuery, CheckUserCredentialsQueryVariables>;
export const GetCurrentUserCycle = gql`
    query GetCurrentUserCycle($userId: bigint!) {
  user: users_by_pk(id: $userId) {
    id
    user_cycles(where: {completed: {_eq: false}}) {
      start_date
      end_date
      completed
      cycle {
        id
        cycle_number
        date
        workouts(order_by: {id: asc}) {
          id
          title
          isRestDay
          isActiveRecovery
          items: workout_items_aggregate {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCurrentUserCycleQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserCycleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserCycleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserCycleQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetCurrentUserCycleQuery(baseOptions: Apollo.QueryHookOptions<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables> & ({ variables: GetCurrentUserCycleQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>(GetCurrentUserCycle, options);
      }
export function useGetCurrentUserCycleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>(GetCurrentUserCycle, options);
        }
export function useGetCurrentUserCycleSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>(GetCurrentUserCycle, options);
        }
export type GetCurrentUserCycleQueryHookResult = ReturnType<typeof useGetCurrentUserCycleQuery>;
export type GetCurrentUserCycleLazyQueryHookResult = ReturnType<typeof useGetCurrentUserCycleLazyQuery>;
export type GetCurrentUserCycleSuspenseQueryHookResult = ReturnType<typeof useGetCurrentUserCycleSuspenseQuery>;
export type GetCurrentUserCycleQueryResult = Apollo.QueryResult<GetCurrentUserCycleQuery, GetCurrentUserCycleQueryVariables>;
export const GetDashboardDataForUser = gql`
    query GetDashboardDataForUser($userId: bigint!) {
  user_cycles(where: {user_id: {_eq: $userId}, completed: {_eq: false}}) {
    id
    start_date
    completed
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
        return Apollo.useQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUser, options);
      }
export function useGetDashboardDataForUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUser, options);
        }
export function useGetDashboardDataForUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>(GetDashboardDataForUser, options);
        }
export type GetDashboardDataForUserQueryHookResult = ReturnType<typeof useGetDashboardDataForUserQuery>;
export type GetDashboardDataForUserLazyQueryHookResult = ReturnType<typeof useGetDashboardDataForUserLazyQuery>;
export type GetDashboardDataForUserSuspenseQueryHookResult = ReturnType<typeof useGetDashboardDataForUserSuspenseQuery>;
export type GetDashboardDataForUserQueryResult = Apollo.QueryResult<GetDashboardDataForUserQuery, GetDashboardDataForUserQueryVariables>;
export const GetExercises = gql`
    query GetExercises {
  exercises(order_by: [{demo_video_title: asc}]) {
    ...Exercise
  }
}
    ${ExerciseFragmentDoc}`;

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
        return Apollo.useQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercises, options);
      }
export function useGetExercisesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetExercisesQuery, GetExercisesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercises, options);
        }
export function useGetExercisesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetExercisesQuery, GetExercisesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetExercisesQuery, GetExercisesQueryVariables>(GetExercises, options);
        }
export type GetExercisesQueryHookResult = ReturnType<typeof useGetExercisesQuery>;
export type GetExercisesLazyQueryHookResult = ReturnType<typeof useGetExercisesLazyQuery>;
export type GetExercisesSuspenseQueryHookResult = ReturnType<typeof useGetExercisesSuspenseQuery>;
export type GetExercisesQueryResult = Apollo.QueryResult<GetExercisesQuery, GetExercisesQueryVariables>;
export const GetIntegrations = gql`
    query GetIntegrations($id: uuid! = "72ff3642-bbd5-48f9-951e-8fe2a0e4b43f") {
  integration(id: $id) {
    name
    access_token
    refresh_token
    expires_at
    created_at
    updated_at
  }
}
    `;

/**
 * __useGetIntegrationsQuery__
 *
 * To run a query within a React component, call `useGetIntegrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetIntegrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetIntegrationsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetIntegrationsQuery(baseOptions?: Apollo.QueryHookOptions<GetIntegrationsQuery, GetIntegrationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetIntegrationsQuery, GetIntegrationsQueryVariables>(GetIntegrations, options);
      }
export function useGetIntegrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetIntegrationsQuery, GetIntegrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetIntegrationsQuery, GetIntegrationsQueryVariables>(GetIntegrations, options);
        }
export function useGetIntegrationsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetIntegrationsQuery, GetIntegrationsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetIntegrationsQuery, GetIntegrationsQueryVariables>(GetIntegrations, options);
        }
export type GetIntegrationsQueryHookResult = ReturnType<typeof useGetIntegrationsQuery>;
export type GetIntegrationsLazyQueryHookResult = ReturnType<typeof useGetIntegrationsLazyQuery>;
export type GetIntegrationsSuspenseQueryHookResult = ReturnType<typeof useGetIntegrationsSuspenseQuery>;
export type GetIntegrationsQueryResult = Apollo.QueryResult<GetIntegrationsQuery, GetIntegrationsQueryVariables>;
export const GetPrograms = gql`
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
        return Apollo.useQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetPrograms, options);
      }
export function useGetProgramsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetPrograms, options);
        }
export function useGetProgramsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProgramsQuery, GetProgramsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProgramsQuery, GetProgramsQueryVariables>(GetPrograms, options);
        }
export type GetProgramsQueryHookResult = ReturnType<typeof useGetProgramsQuery>;
export type GetProgramsLazyQueryHookResult = ReturnType<typeof useGetProgramsLazyQuery>;
export type GetProgramsSuspenseQueryHookResult = ReturnType<typeof useGetProgramsSuspenseQuery>;
export type GetProgramsQueryResult = Apollo.QueryResult<GetProgramsQuery, GetProgramsQueryVariables>;
export const GetUser = gql`
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
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUser, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUser, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUser, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetUserCycleProgress = gql`
    query GetUserCycleProgress($userId: bigint!) {
  userCycle: user_cycles(
    where: {user_id: {_eq: $userId}, completed: {_eq: false}}
  ) {
    id
    start_date
    completed
    cycle {
      id
      total: workout_count
      user_workouts {
        status
      }
      ...ProgramDetails
    }
  }
  programs {
    ...Programs
  }
  current: user_workouts(
    limit: 1
    order_by: {workout_id: asc}
    where: {user_id: {_eq: $userId}, status: {_eq: pending}}
  ) {
    ...CurrentUserWorkout
  }
}
    ${ProgramDetailsFragmentDoc}
${ProgramsFragmentDoc}
${CurrentUserWorkoutFragmentDoc}`;

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
        return Apollo.useQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgress, options);
      }
export function useGetUserCycleProgressLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgress, options);
        }
export function useGetUserCycleProgressSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>(GetUserCycleProgress, options);
        }
export type GetUserCycleProgressQueryHookResult = ReturnType<typeof useGetUserCycleProgressQuery>;
export type GetUserCycleProgressLazyQueryHookResult = ReturnType<typeof useGetUserCycleProgressLazyQuery>;
export type GetUserCycleProgressSuspenseQueryHookResult = ReturnType<typeof useGetUserCycleProgressSuspenseQuery>;
export type GetUserCycleProgressQueryResult = Apollo.QueryResult<GetUserCycleProgressQuery, GetUserCycleProgressQueryVariables>;
export const GetUserWorkouts = gql`
    query GetUserWorkouts($userId: bigint!, $cycle: bigint!) {
  upcoming_workouts: user_workouts(
    where: {user_id: {_eq: $userId}, cycle_id: {_eq: $cycle}, status: {_eq: pending}}
    order_by: {workout_id: asc}
  ) {
    ...Workout
  }
  past_workouts: user_workouts(
    where: {user_id: {_eq: $userId}, cycle_id: {_eq: $cycle}, status: {_nin: pending}}
    order_by: {workout_id: asc}
  ) {
    status
    ...Workout
  }
}
    ${WorkoutFragmentDoc}`;

/**
 * __useGetUserWorkoutsQuery__
 *
 * To run a query within a React component, call `useGetUserWorkoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserWorkoutsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserWorkoutsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      cycle: // value for 'cycle'
 *   },
 * });
 */
export function useGetUserWorkoutsQuery(baseOptions: Apollo.QueryHookOptions<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables> & ({ variables: GetUserWorkoutsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>(GetUserWorkouts, options);
      }
export function useGetUserWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>(GetUserWorkouts, options);
        }
export function useGetUserWorkoutsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>(GetUserWorkouts, options);
        }
export type GetUserWorkoutsQueryHookResult = ReturnType<typeof useGetUserWorkoutsQuery>;
export type GetUserWorkoutsLazyQueryHookResult = ReturnType<typeof useGetUserWorkoutsLazyQuery>;
export type GetUserWorkoutsSuspenseQueryHookResult = ReturnType<typeof useGetUserWorkoutsSuspenseQuery>;
export type GetUserWorkoutsQueryResult = Apollo.QueryResult<GetUserWorkoutsQuery, GetUserWorkoutsQueryVariables>;
export const GetWorkouts = gql`
    query GetWorkouts($cycleId: Int!) {
  workouts(where: {cycle: {_eq: $cycleId}}, order_by: {subtitle: asc}) {
    id
    title
    subtitle
    isRestDay
    isActiveRecovery
    date
    cycle
    items: workout_items_aggregate {
      aggregate {
        count
      }
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
        return Apollo.useQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkouts, options);
      }
export function useGetWorkoutsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkouts, options);
        }
export function useGetWorkoutsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetWorkoutsQuery, GetWorkoutsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetWorkoutsQuery, GetWorkoutsQueryVariables>(GetWorkouts, options);
        }
export type GetWorkoutsQueryHookResult = ReturnType<typeof useGetWorkoutsQuery>;
export type GetWorkoutsLazyQueryHookResult = ReturnType<typeof useGetWorkoutsLazyQuery>;
export type GetWorkoutsSuspenseQueryHookResult = ReturnType<typeof useGetWorkoutsSuspenseQuery>;
export type GetWorkoutsQueryResult = Apollo.QueryResult<GetWorkoutsQuery, GetWorkoutsQueryVariables>;
export const WorkoutById = gql`
    query WorkoutById($id: bigint!) {
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
      scores(order_by: {created_at: desc}) {
        id
        value
        created_at
      }
      exercise_details {
        ...ExerciseDetails
      }
    }
  }
  user_workouts(where: {workout_id: {_eq: $id}}) {
    id: workout_id
    cycleId: cycle_id
    status
  }
  user_workouts_aggregate(
    where: {status: {_eq: pending}}
    order_by: {workout_id: asc}
    offset: 1
  ) {
    aggregate {
      count
    }
  }
}
    ${ExerciseDetailsFragmentDoc}`;

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
 *   },
 * });
 */
export function useWorkoutByIdQuery(baseOptions: Apollo.QueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables> & ({ variables: WorkoutByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutById, options);
      }
export function useWorkoutByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutById, options);
        }
export function useWorkoutByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<WorkoutByIdQuery, WorkoutByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<WorkoutByIdQuery, WorkoutByIdQueryVariables>(WorkoutById, options);
        }
export type WorkoutByIdQueryHookResult = ReturnType<typeof useWorkoutByIdQuery>;
export type WorkoutByIdLazyQueryHookResult = ReturnType<typeof useWorkoutByIdLazyQuery>;
export type WorkoutByIdSuspenseQueryHookResult = ReturnType<typeof useWorkoutByIdSuspenseQuery>;
export type WorkoutByIdQueryResult = Apollo.QueryResult<WorkoutByIdQuery, WorkoutByIdQueryVariables>;