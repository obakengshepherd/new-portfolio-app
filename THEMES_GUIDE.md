# Available Themes - Quick Reference

## 13 Professional Themes

### 1. **Gold** 🟡

- **Light**: Warm beige backgrounds, brown text, golden accent
- **Dark**: Dark brown background, cream text, gold highlights
- **Best for**: Luxury, premium, financial portfolios
- **Primary Color**: `#d4af37`

### 2. **Modern Blue** 🔵

- **Light**: Light gray-blue background, deep navy text, bright blue accent
- **Dark**: Very dark blue background, light blue text, cyan accents
- **Best for**: Tech, SaaS, professional profiles
- **Primary Color**: `#0066ff`

### 3. **Professional Slate** 💼

- **Light**: Off-white background, slate gray text, muted blue primary
- **Dark**: Deep slate background, light gray text, bright blue primary
- **Best for**: Corporate, business, traditional portfolios
- **Primary Color**: `#3d5afe`

### 4. **Neutral Minimalist** ⚫

- **Light**: Pure white background, black text, gray accents
- **Dark**: Pure black background, white text, gray accents
- **Best for**: Minimalist, clean, focusing on content
- **Primary Color**: `#1f1f1f`

### 5. **Midnight** 🌙

- **Light**: Light blue background, dark navy text, cyan accents
- **Dark**: Very dark blue-black, light blue text, bright cyan
- **Best for**: Creative, night mode, mystery
- **Primary Color**: `#1e40af`

### 6. **Crimson** ❤️

- **Light**: Light red background, dark burgundy text, red accent
- **Dark**: Dark burgundy background, pink text, rose accents
- **Best for**: Bold, artistic, passion-driven projects
- **Primary Color**: `#dc2626`

### 7. **Aurora** 🌌

- **Light**: Light cyan background, dark teal text, turquoise accent
- **Dark**: Dark teal background, light cyan text, bright turquoise
- **Best for**: Modern, tech, northern lights inspiration
- **Primary Color**: `#0ea5e9`

### 8. **Neon** ⚡

- **Light**: Light purple background, dark indigo text, pink accent
- **Dark**: Dark purple background, light purple text, bright magenta
- **Best for**: Creative, gaming, futuristic projects
- **Primary Color**: `#6366f1`

### 9. **Ember** 🔥

- **Light**: Light orange background, brown text, golden accent
- **Dark**: Dark orange-brown background, cream text, amber accent
- **Best for**: Warm, energetic, creative portfolios
- **Primary Color**: `#f59e0b`

### 10. **Arctic** ❄️

- **Light**: Light blue background, dark slate text, bright cyan accent
- **Dark**: Dark blue background, light cyan text, bright turquoise
- **Best for**: Cool, calm, professional tech portfolios
- **Primary Color**: `#0369a1`

### 11. **Lavender** 💜

- **Light**: Light purple background, dark purple text, violet accent
- **Dark**: Dark purple background, light purple text, pink accent
- **Best for**: Creative, design-focused, artistic projects
- **Primary Color**: `#7c3aed`

### 12. **Forest** 🌲

- **Light**: Light green background, dark green text, lime accent
- **Dark**: Dark green background, light green text, bright lime
- **Best for**: Environmental, nature, growth-focused projects
- **Primary Color**: `#16a34a`

### 13. **Coral** 🪸

- **Light**: Light orange background, dark orange text, coral accent
- **Dark**: Dark coral background, light orange text, bright salmon
- **Best for**: Warm, tropical, creative portfolios
- **Primary Color**: `#ff7f50`

---

## How to Switch Themes

### Using the Theme Toggle:

1. Click the sun/moon icon in the top-right navbar
2. Select a theme name from the grid
3. Toggle between Light and Dark modes
4. Theme persists on page reload

### Programmatically (Advanced):

```javascript
// Get current theme
const { theme } = useTheme();

// Set a specific theme
const { setTheme } = useTheme();
setTheme("gold-dark"); // gold with dark mode
setTheme("midnight-light"); // midnight with light mode
```

---

## Theme Colors at a Glance

| Theme    | Light Primary | Dark Primary | Accent Color |
| -------- | ------------- | ------------ | ------------ |
| Gold     | #d4af37       | #d4af37      | #f0d770      |
| Blue     | #0066ff       | #4d9eff      | #00d9ff      |
| Slate    | #3d5afe       | #7b9cff      | #8ba5f5      |
| Neutral  | #1f1f1f       | #e5e5e5      | #a3a3a3      |
| Midnight | #1e40af       | #60a5fa      | #06b6d4      |
| Crimson  | #dc2626       | #f87171      | #fecaca      |
| Aurora   | #0ea5e9       | #06b6d4      | #14b8a6      |
| Neon     | #6366f1       | #a78bfa      | #f472b6      |
| Ember    | #f59e0b       | #fbbf24      | #fed7aa      |
| Arctic   | #0369a1       | #0284c7      | #22d3ee      |
| Lavender | #7c3aed       | #c4b5fd      | #f0abfc      |
| Forest   | #16a34a       | #22c55e      | #86efac      |
| Coral    | #ff7f50       | #ffa07a      | #ffc0ab      |

---

## Recommended Theme Pairings

### For Tech Portfolios:

- **Blue (Modern)** - Professional and modern
- **Midnight** - Deep, focused
- **Arctic** - Clean, professional

### For Creative Portfolios:

- **Neon** - Bold and artistic
- **Aurora** - Modern and fresh
- **Coral** - Warm and inviting

### For Corporate:

- **Slate** - Professional and traditional
- **Neutral** - Clean and focused
- **Gold** - Premium and sophisticated

### For Personal Brands:

- **Forest** - Natural and growth
- **Lavender** - Creative and artistic
- **Ember** - Energetic and passionate

---

## Light vs. Dark Mode

### Light Mode Benefits:

- Better readability in bright environments
- Higher contrast for accessibility
- Professional appearance
- Great for presentations

### Dark Mode Benefits:

- Easier on the eyes in low light
- Modern aesthetic
- Reduces eye strain
- Battery saving on OLED screens

**Both are available for every theme!**

---

## Customizing Themes

To modify a theme's colors, edit `/src/styles/themes.css`:

```css
/* Example: Modify Gold theme light mode */
[data-theme="gold-light"] {
  --background: #fef9f0; /* Background color */
  --foreground: #2c1810; /* Text color */
  --primary: #d4af37; /* Main action color */
  --accent: #d4af37; /* Accent color */
  /* ... more colors ... */
}
```

---

**Current Theme**: Check the navbar theme toggle to see your selection
**Auto-save**: Your theme preference is saved automatically
**Sync**: Theme syncs across all browser tabs in real-time
