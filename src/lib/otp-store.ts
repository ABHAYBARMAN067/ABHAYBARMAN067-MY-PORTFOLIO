// COMMENTED OUT - Using direct send instead of OTP
// Temporary in-memory OTP store
// WARNING: This is only for development. For production, use Redis or a database.
export const otpStore: Record<string, { otp: string; expiresAt: number }> = {};

// Clean up expired OTPs periodically (every 5 minutes)
setInterval(() => {
  const now = Date.now();
  for (const email in otpStore) {
    if (otpStore[email].expiresAt < now) {
      delete otpStore[email];
    }
  }
}, 5 * 60 * 1000);
