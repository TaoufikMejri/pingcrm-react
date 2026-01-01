import React from 'react';

export default function LoadingButton({
  type,
  className,
  children,
  loading = false,
}) {
  return (
    <button
      type={type}
      disabled={loading}
      className={'flex items-center ' + className}
    >
      {loading && <div className="btn-spinner mr-2" />}
      {children}
    </button>
  );
}
