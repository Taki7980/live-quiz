import { useAuth } from "@/context/AuthContext";
import { AuthButtons } from "./auth/AuthButtons";

export function Dashboard() {
  const { user } = useAuth();
  
  return (
    <div className="p-8">
      <div className="max-w-md mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold">
            Welcome, {user?.displayName || 'User'}!
          </h1>
          <p className="text-gray-500">{user?.email}</p>
        </div>
        <div className="flex justify-center">
          <AuthButtons />
        </div>
      </div>
    </div>
  );
} 