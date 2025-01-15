/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { signUp } = useAuth();
  const { toast } = useToast();

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   try {
  //     await signUp(email, password);
  //     // Update the user's profile with their name
  //     await updateProfile(auth.currentUser!, {
  //       displayName: name
  //     });
  //     window.location.href = '/';
  //     toast({
  //       title: "Account created successfully",
  //       description: "You can now log in with your credentials",
  //     });
  //   } catch (error: any) {
  //     toast({
  //       variant: "destructive",
  //       title: "Error creating account",
  //       description: error.message || "Something went wrong",
  //     });
  //   }
  // };

  const handleSubmit = async ()=>{
    const userdate = userdate
    const data = await fetch("http://localhost:5000/api/auth/")
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <h2 className="text-2xl font-bold">Register</h2>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name">Full Name</label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
} 