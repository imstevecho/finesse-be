import GraphQLJSON, { GraphQLJSONObject } from "graphql-type-json";
import { Client } from "@apperate/iexjs";

const client = new Client({
  api_token: process.env.IEX_API_TOKEN,
  version: "v1",
});

const getQuote = (symbol: string) => {
  return client.apperate.queryData({
    key: "AAPL",
    workspace: "CORE",
    id: "QUOTE",
  });
};

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    hello: () => "Hello client!",
  },

  Mutation: {
    quote: (_: any, { symbol }: { symbol: string }) => {
      // return getQuote(symbol);
      return getRandomQuote(symbol);
    },
  },
};

function getRandomQuote(symbol: string) {
  return {
    symbol: symbol,
    companyName: `Company Name ${symbol}`,
    delayedPrice: (Math.random() * 100).toFixed(2),
    change: (Math.random() * 100).toFixed(2),
    changePercent: (Math.random() * 100).toFixed(2),
    previousClose: (Math.random() * 100).toFixed(2),
    peRatio: (Math.random() * 100).toFixed(2),
  };
}

export default resolvers;
