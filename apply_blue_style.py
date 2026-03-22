import re
import os

def update_file(path):
    with open(path, 'r') as f:
        content = f.read()

    # Exception for entrance overlay in home.astro so it matches the splash-page bg
    if 'home.astro' in path:
        content = re.sub(r'bg-cream( z-\[200\])', r'bg-blue-950\1', content)

    # Navbar tweaks
    content = re.sub(r'\bbg-white/90\b', 'bg-blue-950/90', content)
    content = re.sub(r'\bbg-white/95\b', 'bg-blue-950/95', content)
    
    # Cards / Overlays
    content = re.sub(r'\bbg-cream-dark\b', 'bg-blue-900/40', content)
    content = re.sub(r'\bbg-cream/(\d+)\b', r'bg-blue-900/\1', content)
    content = re.sub(r'\bbg-white\b', 'bg-blue-900/30', content)
    
    # Generic secion backgrounds
    content = re.sub(r'\bbg-cream\b', 'bg-transparent', content)
    
    # Text colors
    content = re.sub(r'\btext-charcoal-light\b', 'text-white/70', content)
    content = re.sub(r'\btext-charcoal\b', 'text-white', content)
    
    # Borders
    content = re.sub(r'\bborder-charcoal/(\d+)\b', r'border-white/\1', content)
    content = re.sub(r'\bborder-charcoal\b', 'border-white', content)
    content = re.sub(r'\bborder-cream-dark/(\d+)\b', r'border-white/10', content)
    content = re.sub(r'\bborder-cream-dark\b', 'border-white/10', content)

    # Accent adjustments specifically for high contrast on dark mode
    content = re.sub(r'\bhover:text-charcoal\b', 'hover:text-white', content)

    with open(path, 'w') as f:
        f.write(content)

for d in ['src/pages', 'src/components']:
    for root, _, files in os.walk(d):
        for f in files:
            if f.endswith('.astro'):
                update_file(os.path.join(root, f))

# Update global.css
css_path = 'src/styles/global.css'
with open(css_path, 'r') as f:
    css = f.read()

css = css.replace('color: var(--color-charcoal);', 'color: var(--color-cream);')
css = css.replace('background-color: var(--color-cream);', 'background-color: #172554;')

with open(css_path, 'w') as f:
    f.write(css)

print("Migration completed.")
