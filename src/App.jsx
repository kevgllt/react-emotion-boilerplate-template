
import styled from '@emotion/styled';

// --- Styled Components ---
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f7f6;
  padding: 2rem;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 3.2rem; /* 32px */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.8rem; /* 28px */
  color: #2c3e50;
  margin-bottom: 0.5em;
`;

const Description = styled.p`
  font-size: 1.6rem; /* 16px */
  color: #555;
  line-height: 1.6;
`;

// --- Component ---
function App() {
  return (
    <PageContainer>
      <Card>
        <Title>Boilerplate React + Vite + Emotion</Title>
        <Description>
          Se você vê esta estilização, o Emotion está funcionando <br />e a regra de 1rem = 10px está ativa.
        </Description>
      </Card>
    </PageContainer>
  );
}

export default App;
