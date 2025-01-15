import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.replace('/login');
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
} 