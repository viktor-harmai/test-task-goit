import { Box } from 'components/Box';
import { PageTitle } from 'components/PageTitle';
import { ProfileBoard } from 'components/ProfileBoard';

import { Section } from './App.styled';

export const App = () => {
  return (
    <>
      <PageTitle text=" User profile cards" />

      <main>
        <Section>
          <Box>
            <ProfileBoard />
          </Box>
        </Section>
      </main>
    </>
  );
};
