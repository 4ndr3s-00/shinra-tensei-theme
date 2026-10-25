# 🌌 Shinra Tensei Ports Ecosystem

Harmonize your entire developer workstation with the deep obsidian canvas and Rinnegan lilac chakra of **Shinra Tensei**.

---

## 🐱 Kitty Terminal

1. Copy or symlink [`kitty/shinra-tensei.conf`](kitty/shinra-tensei.conf) to your Kitty configuration directory:
   ```bash
   cp ports/kitty/shinra-tensei.conf ~/.config/kitty/shinra-tensei.conf
   ```
2. Include it at the end of your `~/.config/kitty/kitty.conf`:
   ```conf
   include shinra-tensei.conf
   ```
3. Reload Kitty (`Ctrl + Shift + F5`).

---

## 🐟 Fish Shell

1. Copy the theme file to your Fish themes folder:
   ```fish
   mkdir -p ~/.config/fish/themes
   cp ports/fish/shinra-tensei.theme ~/.config/fish/themes/shinra-tensei.theme
   ```
2. Activate and persist the theme:
   ```fish
   fish_config theme choose shinra-tensei
   fish_config theme save
   ```

---

*More ports coming soon: Neovim, Alacritty, Ghostty, Hyprland & Waybar.*
