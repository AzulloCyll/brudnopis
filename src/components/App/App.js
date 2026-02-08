import React, { useState } from 'react';
import * as S from './App.styles';

function App() {
  const [count, setCount] = useState(0);

  return (
    <S.Container>
      <S.Title>Styled Components 💅</S.Title>
      <S.Card>
        <p>Twoja aplikacja React używa teraz potężnego CSS-in-JS!</p>
        <p>Licznik: <strong>{count}</strong></p>
        <S.Button $primary onClick={() => setCount(count + 1)}>
          Zwiększ licznik
        </S.Button>
        <div style={{ marginTop: '10px' }}>
          <S.Button onClick={() => setCount(0)}>Resetuj</S.Button>
        </div>
      </S.Card>
      <p style={{ color: '#666' }}>
        Edytuj <code>src/App.js</code>, aby zobaczyć magię Styled Components.
      </p>
    </S.Container>
  );
}

export default App;
