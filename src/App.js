import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Redirect to memo.html
    window.location.href = '/memo.html';
  }, []);

  return (
    <div className="App">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        background: 'linear-gradient(135deg, #8B0000, #FFD700)',
        color: 'white',
        fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1>Cardinal Gold Investments</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>Redirecting to Investment Memo...</p>
          <p style={{ marginTop: '2rem' }}>
            If you are not redirected, <a href="/memo.html" style={{ color: '#FFD700' }}>click here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
