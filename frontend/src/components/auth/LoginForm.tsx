/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signIn(email, password);
      // Add a small delay to ensure Firebase auth state is updated
      setTimeout(() => {
        window.location.replace('/');
      }, 500);
    } catch (error: any) {
      let message = "Invalid email or password";
      if (error.code === 'auth/user-not-found') {
        message = "No account found with this email";
      } else if (error.code === 'auth/wrong-password') {
        message = "Incorrect password";
      }
      
      toast({
        variant: "destructive",
        title: "Login failed",
        description: message,
      });
      setLoading(false);
    }
  };

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <h2 className="text-2xl font-bold">Login</h2>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={loading}
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
          <p className="text-sm text-gray-500">
            Don't have an account?{" "}
            <Button
              variant="link"
              className="p-0"
              onClick={() => window.location.replace('/register')}
              disabled={loading}
            >
              Register
            </Button>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
} 