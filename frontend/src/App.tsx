import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { LoginForm } from "@/components/auth/LoginForm";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { Dashboard } from "@/components/Dashboard";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Toaster } from "@/components/ui/toaster";

function App() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route
							path="/"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
						<Route path="/login" element={<LoginForm />} />
						<Route path="/register" element={<RegisterForm />} />
						<Route
							path="/dashboard"
							element={
								<ProtectedRoute>
									<Dashboard />
								</ProtectedRoute>
							}
						/>
					</Routes>
					<Toaster />
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
