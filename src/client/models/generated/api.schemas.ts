/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Server
 * OpenAPI spec version: 1.0
 */
/**
 * User
 */
export interface User {
  id: number;
  name: string;
}

export type UsersIndexResponseOneOfTwo = {
  users?: User[];
};

export type UsersIndexResponseOneOf = { [key: string]: any };

export type UsersIndexResponse =
  | UsersIndexResponseOneOf
  | UsersIndexResponseOneOfTwo;