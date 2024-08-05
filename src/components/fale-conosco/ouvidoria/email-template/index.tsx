import { Html, Text } from '@react-email/components';

interface EmailTemplateProps {
  firstName: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, message }) => (
  <Html lang="en">
    <h1>Olá, {firstName}!</h1>
    <Text>{message}</Text>
  </Html>
);

export default EmailTemplate;
