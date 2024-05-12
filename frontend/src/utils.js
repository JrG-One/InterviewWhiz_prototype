// utils.js
export const getQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      name: params.get('name') || '',
      company: params.get('company') || '',
      role: params.get('role') || '',
      experience: params.get('experience') || '',
      language: params.get('language') || '',
    };
  };
  