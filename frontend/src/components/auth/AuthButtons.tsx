import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

export function AuthButtons() {
  const { user, logout } = useAuth();
  
  

  const handleLogout = async () => {
    try {
      await logout();
      window.location.href = '/login';
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="flex gap-4">
      {user ? (
        <Button variant="destructive" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <>
          <Button variant="outline" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
          <Button onClick={() => window.location.href = '/register'}>
            Sign Up
          </Button>
        </>
      )}
    </div>
  );
} 