import path from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import { fileLoader, mergeResolvers, mergeTypes } from 'merge-graphql-schemas';

// __dirname은 이 프로젝트의 메인 디렉토리의 이름(src)까지의 경로를 의미
// allResolvers는 api 밑의 모든 js를 가져오기 때문에 절대 Resolver의 역할이 아닌 js를 두면 안됨

const allTypes = fileLoader(path.join(__dirname, '/api/**/*.graphql'));
const allResolvers = fileLoader(path.join(__dirname, '/api/**/*.js'));

const schema = makeExecutableSchema({
  typeDefs: mergeTypes(allTypes),
  resolvers: mergeResolvers(allResolvers)
});

export default schema;
