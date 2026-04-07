export function getEnvVar(name: string): string {
  const value = import.meta.env[name];
  if (!value) {
    console.warn(`Environment variable ${name} is not defined`);
    return '';
  }
  return value;
}

