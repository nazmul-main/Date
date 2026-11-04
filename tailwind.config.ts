import type { Config } from 'tailwindcss';
export default { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { olive: { 50:'#f5f6ef',100:'#e9ecdc',500:'#78834b',600:'#626d3b',700:'#4d572f',900:'#252b1b' }, cream:'#faf9f5' }, boxShadow: { soft:'0 12px 35px rgba(35,42,23,.07)' } } }, plugins: [] } satisfies Config;
