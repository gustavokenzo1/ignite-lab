import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // Roubando o do Diego enquanto o GraphCMS não volta
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4ljcdt56mom01yrdswgf7n9/master",
  cache: new InMemoryCache(),
});
