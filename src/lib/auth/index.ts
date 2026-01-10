// Authentication stub - Replace with email OTP implementation

export interface User {
  id: string;
  email: string;
  name?: string;
  isPremium: boolean;
  membershipTier?: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

// Stub function - to be implemented with email OTP
export async function sendOTP(email: string): Promise<boolean> {
  console.log("Sending OTP to:", email);
  return true;
}

// Stub function for verifying OTP
export async function verifyOTP(email: string, otp: string): Promise<User | null> {
  console.log("Verifying OTP for:", email, otp);
  return null;
}

// Stub function for getting current user
export function getCurrentUser(): User | null {
  return null;
}

// Stub function for signing out
export async function signOut(): Promise<void> {
  console.log("User signed out");
}

// Check if user has access to premium content
export function hasPremiumAccess(user: User | null): boolean {
  return user?.isPremium ?? false;
}
