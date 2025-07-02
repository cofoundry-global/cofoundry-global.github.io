# DEPLOYMENT GUIDE FOR COFOUNDRY.GLOBAL

## Quick Deploy: From Change to Live in 5 Minutes

### The 5-Step Process

#### Step 1: Edit Source Files
Edit files in `/src/pug/` folder (NOT the HTML files!)
```bash
# Example: Edit src/pug/index.pug
```

#### Step 2: Commit Your Changes
```bash
git add -A
git commit -m "Your change description"
```

#### Step 3: Build the Site
```bash
npm run build
```

#### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

#### Step 5: Push to GitHub
```bash
git push origin main
```

**That's it! Wait 5 minutes for the site to update.**

---

## Important Rules

- ✅ **ALWAYS edit** `.pug` files in `/src/pug/`
- ❌ **NEVER edit** HTML files directly
- ❌ **NEVER touch** the `gh-pages` branch
- ✅ **GitHub Pages setting** must be: Branch = `gh-pages`, Folder = `/ (root)`

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Still showing old content? | Clear browser cache (Ctrl+Shift+R) |
| 404 error? | Check GitHub Pages settings didn't reset |
| Build errors? | Run `npm install` first |

## Complete Copy-Paste Example

```bash
# 1. Make your changes
edit src/pug/index.pug

# 2-5. Deploy (copy/paste these 4 commands)
git add -A && git commit -m "Update services section"
npm run build
npm run deploy  
git push origin main

# Done! Check site in 5 minutes at https://cofoundry.global
```

## File Structure Reference

```
/src/pug/          ← Edit these files
  - index.pug      ← Main homepage
  - sbir.pug       ← SBIR page
  - utilitytoken.pug ← Utility token page
  - legal-disclaimer.pug ← Legal page

/dist/             ← Auto-generated (don't edit)
  - index.html     ← Built from pug files
  - other files... ← All generated

gh-pages branch    ← Auto-deployed (never touch)
```

## GitHub Pages Configuration

If deployment stops working, check these settings:
1. Go to: https://github.com/cofoundry-global/cofoundry-global.github.io/settings/pages
2. Source: Deploy from a branch
3. Branch: `gh-pages` / `/ (root)`
4. Custom domain: `cofoundry.global`

---

**Save this guide!** Follow these exact steps every time. No variations needed. 🚀