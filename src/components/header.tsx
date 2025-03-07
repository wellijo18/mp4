export default function Header({ utitle }) {
    return (
        <header style={{ backgroundColor: '#1a237e', color: 'white', padding: 'calc(1rem + 1vw)', borderBottom: '4px solid #0d47a1', textAlign: 'center' }}>
            <h1 style={{ fontSize: 'calc(1.5rem + 1vw)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Wellington Oliveira
            </h1>
            <p style={{ fontSize: 'calc(0.9rem + 0.5vw)' }}>
                {utitle}
            </p>
        </header>
    );
}
