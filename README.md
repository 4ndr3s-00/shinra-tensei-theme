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
| **Primary (Functions & Methods)** | `#BFA5D9` | `■` | **Soothing Rinnegan Lilac** — Calm, elegant wisteria purple |
| **Variables & Parameters** | `#E4DEEE` | `■` | **Mist White / Soft Lilac** — Effortless reading contrast |
| **Keywords & Control Flow** | `#ED7882` | `■` | **Akatsuki Rose-Coral** — Distinct syntax logic without harsh glare |
| **Classes, Types & Interfaces** | `#89DCEB` | `■` | **Calm Mist Cyan** — Soothing Arctic tone for architecture |
| **Strings & Templates** | `#E5C07B` | `■` | **Soft Sunset Amber** — Warm gold for text and templates |
| **Numbers & Booleans** | `#A6D189` | `■` | **Sage Chakra Green** — Grounded, natural numeric markers |
| **Comments & Docstrings** | `#6F6880` | `■` | **Amegakure Rain Mist** — Soft muted violet-grey (italic) |
| **Punctuation & Operators** | `#B3A7C2` | `■` | Balanced, refined syntax delimiters |

---

## 🚀 Installation & Activation

### Automated One-Liner (Recommended)

The automated script clones the repository and **automatically activates `Shinra Tensei (Rinnegan)` in your `settings.json`**:

#### 🐧 Linux / 🍎 macOS
* **Bash / Zsh**:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/4ndr3s-00/shinra-tensei-theme/main/install.sh | sh
  ```
* **Fish Shell**:
  ```fish
  curl -fsSL https://raw.githubusercontent.com/4ndr3s-00/shinra-tensei-theme/main/install.fish | fish
  ```

#### 🪟 Windows (PowerShell)
```powershell
irm https://raw.githubusercontent.com/4ndr3s-00/shinra-tensei-theme/main/install.ps1 | iex
```

> **Note**: If VS Code is currently open when running the command, reload the window to apply changes:  
> Press `Ctrl + Shift + P` (or `Cmd + Shift + P` on macOS) → type `Developer: Reload Window` → press `Enter`.

---

### Manual Installation & Activation

If you prefer to clone the repository manually:

```bash
# Linux / macOS (Bash / Zsh / Fish)
git clone https://github.com/4ndr3s-00/shinra-tensei-theme.git ~/.vscode/extensions/shinra-tensei-theme

# Windows (Command Prompt or PowerShell)
git clone https://github.com/4ndr3s-00/shinra-tensei-theme.git "%USERPROFILE%\.vscode\extensions\shinra-tensei-theme"
```

#### How to Activate the Theme in VS Code:
1. Reload or restart VS Code (`Ctrl + Shift + P` → `Developer: Reload Window`).
2. Press `Ctrl + K` then `Ctrl + T` (or `Cmd + K, Cmd + T` on macOS).
3. Select **`Shinra Tensei (Rinnegan)`** from the list.
4. *(Alternative)* Add this line to your `settings.json`:
   ```json
   "workbench.colorTheme": "Shinra Tensei (Rinnegan)"
   ```

---

## 🌫️ Simulated Blurred Pain Background (Optional)

If you'd like the iconic Pain Chibaku Tensei blurred backdrop inside your editor (independent of your operating system wallpaper):

1. Install the `shalldie.background` extension:
   ```bash
   code --install-extension shalldie.background
   ```
2. Add the following to your `settings.json`:
   ```json
   "background.enabled": true,
   "background.useDefault": false,
   "background.customImages": [
     "file:///path/to/shinra-tensei-theme/assets/pain-blurred-bg.png"
   ],
   "background.style": {
     "content": "''",
     "pointer-events": "none",
     "position": "absolute",
     "z-index": "99999",
     "width": "100%",
     "height": "100%",
     "background-position": "center",
     "background-repeat": "no-repeat",
     "background-size": "cover",
     "opacity": 0.4
   }
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

Developed with passion by [4ndr3s-00](https://github.com/4ndr3s-00).
