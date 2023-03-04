import { PageTitle } from 'components/PageTitle';
import { ProfileBoard } from 'components/ProfileBoard';
import { Container, Section } from './App.styled';

export const App = () => {
  return (
    <Container>
      <PageTitle text=" User profile cards" />
      <main>
        <Section>
          <ProfileBoard />
        </Section>
      </main>
    </Container>
  );
};
