import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";
import { Client } from "@apperate/iexjs";
import { Resolvers, QuoteResult } from "./generated/graphql";

const client = new Client({
  api_token: process.env.IEX_API_TOKEN,
  version: "v1",
});

const getQuote = (symbol: string) => {
  return client.apperate.queryData({
    key: symbol,
    workspace: "CORE",
    id: "QUOTE",
  });
};

const resolvers: Resolvers = {
  JSON: GraphQLJSON,
  Query: {
    hello: () => "Hello client!",
  },

  Mutation: {
    quote: (_: any, { symbol }) => {
      return getRandomQuote(symbol);
    },
  },
};

function getRandomQuote(symbol: string): QuoteResult {
  return {
    symbol: symbol,
    companyName: `Company Name ${symbol}`,
    delayedPrice: parseFloat((Math.random() * 100).toFixed(2)),
    change: parseFloat((Math.random() * 100).toFixed(2)),
    changePercent: parseFloat((Math.random() * 100).toFixed(2)),
    previousClose: parseFloat((Math.random() * 100).toFixed(2)),
    peRatio: parseFloat((Math.random() * 100).toFixed(2)),
    latestPrice: parseFloat((Math.random() * 100).toFixed(2)),
  };
}

export default resolvers;
