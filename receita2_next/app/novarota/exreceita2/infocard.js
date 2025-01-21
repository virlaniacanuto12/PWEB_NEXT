export default function InfoCard({ title, description }) {
    return (
      <div style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        margin: '1rem 0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <h2 style={{ marginBottom: '0.5rem' }}>{title}</h2>
        <p>{description}</p>
      </div>
    );
  }
  