# Shinra Tensei (神羅天征)

<p align="center">
  <img src="https://img.shields.io/badge/VS%20Code-v1.60%2B-blue?style=for-the-badge&logo=visualstudiocode" alt="VS Code Version">
  <img src="https://img.shields.io/badge/Theme-Dark%20Obsidian-6B46C1?style=for-the-badge" alt="Theme Type">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

An elegant, dark obsidian and Rinnegan purple theme for **Visual Studio Code**, inspired by **Pain / Nagato** from *Naruto Shippuden*.

Designed around high contrast, low eye-strain, and aesthetic color harmony derived directly from the dark atmosphere of Amegakure and the iconic ripple eyes of the Rinnegan.

---

## 👁️ The Palette

Shinra Tensei uses a deep obsidian-purple canvas (`#131118`) that eliminates flat greys and blinding pitch blacks, paired with vivid chakra accents:

| Token / Role | Hex Code | Preview | Description |
| :--- | :--- | :---: | :--- |
| **Editor Background** | `#131118` | `■` | Deep obsidian canvas with a 5% cold purple undertone |
| **Sidebar / Panels** | `#16131D` | `■` | Subtle elevation and panel contrast |
| **Primary (Functions & Methods)** | `#A277FF` | `■` | **Rinnegan Purple** — Crisp, electric chakra accent |
| **Variables & Parameters** | `#D4BFFF` | `■` | **Soft Lilac** — Gentle on the eyes for extended sessions |
| **Keywords & Control Flow** | `#FF5370` | `■` | **Akatsuki Crimson** — Complementary contrast for syntax logic |
| **Classes, Types & Interfaces** | `#79E6F3` | `■` | **Shinra Tensei Cyan** — Electric mist highlight |
| **Strings & Templates** | `#FFCB6B` | `■` | **Yahiko Amber** — Warm sunset gold for strings and regex |
| **Numbers & Booleans** | `#C3E88D` | `■` | **Chakra Green** — Distinct, vibrant numeric markers |
| **Comments & Docstrings** | `#6C657E` | `■` | **Amegakure Rain Mist** — Muted violet-grey (italic) |
| **Punctuation & Operators** | `#B5A8C8` | `■` | Clean, readable syntax delimiters |

---

## 🚀 Installation

### Option 1: Manual Installation (Git Clone)
Clone this repository directly into your VS Code extensions folder:

```bash
# Linux / macOS
git clone git@github.com:4ndr3s-00/shinra-tensei-theme.git ~/.vscode/extensions/shinra-tensei-theme

# Windows (PowerShell)
git clone git@github.com:4ndr3s-00/shinra-tensei-theme.git $HOME/.vscode/extensions/shinra-tensei-theme
```

Restart or reload VS Code (`Ctrl+Shift+P` → `Developer: Reload Window`).

### Option 2: Package & Install `.vsix`
If you have `@vscode/vsce` installed:

```bash
npx @vscode/vsce package
code --install-extension shinra-tensei-theme-1.0.0.vsix
```

---

## 🎨 Recommended Configuration

For the ultimate visual experience, pair **Shinra Tensei** with the **Catppuccin Macchiato** icon theme:

In your `settings.json`:
```json
{
  "workbench.colorTheme": "Shinra Tensei (Rinnegan)",
  "workbench.iconTheme": "catppuccin-macchiato",
  "editor.fontFamily": "'JetBrainsMono Nerd Font', 'Fira Code', monospace",
  "editor.fontLigatures": true,
  "editor.semanticHighlighting.enabled": true
}
```

---

## 📜 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for more information.

Developed with passion by [Andrés](https://github.com/4ndr3s-00).
