"use client";
import React from 'react';

function buildHtml(title: string, bodyHtml: string) {
  return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:system-ui, -apple-system, sans-serif;padding:24px;color:#111} h1{font-size:20px} .muted{color:#666;font-size:12px}</style></head><body>${bodyHtml}</body></html>`;
}

export default function ExportReportButton({ title, renderHtml }: { title: string; renderHtml: () => string }) {
  function handleExport() {
    const html = buildHtml(title, renderHtml());
    const w = window.open('', '_blank', 'noopener,noreferrer');
    if (!w) {
      alert('Pop-up bloqueado. Permita pop-ups para gerar o PDF.');
      return;
    }
    w.document.write(html);
    w.document.close();
    // give the window a moment to render then call print
    setTimeout(() => {
      w.focus();
      w.print();
    }, 300);
  }

  return (
    <button onClick={handleExport} className="px-3 py-2 bg-gray-50 border border-gray-200 text-sm rounded hover:bg-gray-100">
      Exportar (PDF)
    </button>
  );
}
