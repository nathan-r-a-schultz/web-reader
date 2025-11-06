'use client';

export default function Home() {
  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.pdf,.epub';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file && ((file.name.endsWith(".pdf") || file.name.endsWith(".epub")))) {
        // open reader
      }
      else {
        alert("Please select a valid file (PDF or EPUB)");
      }
    };
    input.click();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <p>Welcome to a web based reader for PDF and EPUB files</p>
      </div>
      <div>
        <button 
          onClick={handleFileSelect}
          style={{
            border: '1px solid #ccc',
            padding: '8px 16px',
            background: '#fff',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Select File
        </button>
      </div>
    </div>
  );
}
