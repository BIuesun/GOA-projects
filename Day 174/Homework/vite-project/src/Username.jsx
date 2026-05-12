import { useLocalStorage } from './hooks/useLocalStorage';

function UsernameApp() {
  const [username, setUsername] = useLocalStorage('username', '');

  return (
    <div style={{ padding: '20px' }}>
      <h2>მომხმარებლის სახელი</h2>
      
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="შეიყვანეთ სახელი..."
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />

      <p>
        <strong>შენახული სახელი:</strong> {username || 'ცარიელია'}
      </p>

      {username && <p style={{ color: 'green' }}>✅ მონაცემი წარმატებით შენახულია localStorage-ში</p>}
    </div>
  );
}

export default UsernameApp;