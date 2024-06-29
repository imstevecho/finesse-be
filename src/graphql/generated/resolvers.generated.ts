/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { hello as Query_hello } from './../resolvers/Query/hello';
import    { quote as Mutation_quote } from './../resolvers/Mutation/quote';
import    { QuoteResult } from './../resolvers/QuoteResult';
import    { JSON } from './../resolvers/JSON';
    export const resolvers: Resolvers = {
      Query: { hello: Query_hello },
      Mutation: { quote: Mutation_quote },
      
      QuoteResult: QuoteResult,
JSON: JSON
    }