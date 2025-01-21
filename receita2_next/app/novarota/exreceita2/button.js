"use client";

export default function CustomButton({ label, onClick }) {
    return (
      <button
        onClick={onClick}
        style={{
          backgroundColor: '#0070f3',
          color: '#fff',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1rem',
          margin: '0.5rem 0'
        }}
      >
        {label}
      </button>
    );
  }
  