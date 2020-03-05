import { gql } from 'apollo-boost';

export const GET_USER_ID = gql`
query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    userId
  }
}  
`;

export const GET_CONTEST_ADMIN_EMAIL_USER_EMAIL = gql`
query ContestAdminEmailUserEmail($code: String!, $_id: ID!) {
  contestCode(code: $code) {
    contestAdmin {
      email
    }   
  }
  userById(_id: $_id) {
    email
  }
}
`;

export const GET_USER_EMAIL = gql`
query UserById($_id: ID!) {
  userById(_id: $_id) {
    email
  }
}
`;

export const RESEND_OTP = gql`
query ResendOtp($userId: ID!) {
  resendOtp(userId: $userId) {
    code
    success
    message
  }
}
`;
export const FORGOT_PASSWORD_MAIL = gql`
query ForgotPasswordMail($email: String!) {
  forgotPasswordMail(email: $email){
    code
    success
    message
  }
}
`;
