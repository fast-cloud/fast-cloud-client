import CardSquare from '@/shared/components/card/card-square/card-square';

function App() {
  return (
    <div style={{ padding: '40px' }}>
      <CardSquare
        instanceName="제목제목"
        status="ACTIVE"
        templateName="어쩌구"
        templateDesc="000GB"
        ipAddress="000.0.0.000"
        createdAt="2025-11-01T17:34:00Z"
      />
    </div>
  );
}

export default App;
