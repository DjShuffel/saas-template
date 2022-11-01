/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: '3a7toius4jsft0ipf8969pp8tu',
  USER_POOL_ID: 'eu-central-1_Pt6qJhH3T',
  IDENTITY_POOL_ID: 'eu-central-1:b4e2c1e0-a5c8-4768-9c92-969b0e107bdc',
  GRAPHQL_ENDPOINT: 'https://sx6iaujd6jc6dfxdegex24ujrq.appsync-api.eu-central-1.amazonaws.com/graphql',
};

export default configDevelopment;
