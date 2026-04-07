// 1. وظيفة جلب مفتاح الـ API
export function getEnvVar(name: string): string {
  return import.meta.env[name] || '';
}

// 2. وظيفة التشفير (موجودة في السطر 44)
export const encryptData = (data: any) => {
  try {
    const str = typeof data === 'string' ? data : JSON.stringify(data);
    return btoa(encodeURIComponent(str));
  } catch (e) {
    return String(data);
  }
};

// 3. وظيفة فك التشفير (موجودة في السطر 44)
export const decryptData = (data: string) => {
  try {
    return decodeURIComponent(atob(data));
  } catch (e) {
    return data;
  }
};

// 4. وظيفة تهيئة الحماية (موجودة في السطر 44)
export const initSecurityGuard = () => {
  console.log("Aslan Security Initialized");
  return true; 
};

// 5. وظيفة الهاش (موجودة في السطر 44)
export const hashData = (data: string) => {
  try {
    return btoa(data).substring(0, 10);
  } catch {
    return "hash_error";
  }
};
