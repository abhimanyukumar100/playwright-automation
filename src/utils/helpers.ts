export function getRandomEmail(domain = 'example.com') {
  const random = Math.random().toString(36).substring(2, 10);
  return `user_${random}@${domain}`;
}

export function waitForTimeout(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
