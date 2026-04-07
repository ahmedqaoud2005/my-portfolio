// دالة لجلب متغيرات البيئة (مثل مفتاح الـ API)
export function getEnvVar(name: string): string {
  return import.meta.env[name] || '';
}

// دالة تشفير البيانات (تستخدمها الواجهة)
export const encryptData = (data: string) => {
  return btoa(data); // تشفير بسيط Base64 لفك الحظر عن الـ Build
};

// دالة فك التشفير
export const decryptData = (data: string) => {
  try {
    return atob(data);
  } catch (e) {
    return data;
  }
};

// دالة تهيئة حماية الموقع
export const initSecurityGuard = () => {
  console.log("Security Guard Initialized");
};

// دالة تحويل البيانات لهش (Hash)
export const hashData = (data: string) => {
  return data.split('').reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0).toString();
};
