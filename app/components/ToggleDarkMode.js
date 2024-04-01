// darkMode.js
export const toggleDarkMode = () => {
    const html = document.querySelector('html');
    html.classList.toggle('dark');
    const isDarkMode = html.classList.contains('dark');
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  };
  