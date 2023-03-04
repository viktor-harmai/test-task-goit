import { PageTitle } from 'components/PageTitle';
import { ProfileBoard } from 'components/ProfileBoard';
import { Container } from './App.styled';

export const App = () => {
  return (
    <main>
      <section>
        <Container>
          <PageTitle text=" User profile cards" />
        </Container>
      </section>
      <section>
        <Container>
          <ProfileBoard />
        </Container>
      </section>
    </main>
  );
};
