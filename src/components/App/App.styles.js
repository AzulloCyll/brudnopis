import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  margin-top: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f0f2f5;
  min-height: 100vh;
  padding: 20px;
`;

export const Title = styled.h1`
  color: #1a73e8;
  font-size: 2.5rem;
`;

export const Card = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  padding: 2rem;
  max-width: 500px;
  margin: 2rem auto;
`;

export const Button = styled.button`
  background-color: ${props => props.$primary ? '#1a73e8' : 'white'};
  color: ${props => props.$primary ? 'white' : '#1a73e8'};
  font-size: 1rem;
  padding: 10px 20px;
  border: 2px solid #1a73e8;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$primary ? '#1557b0' : '#f1f3f4'};
    transform: translateY(-2px);
  }
`;
