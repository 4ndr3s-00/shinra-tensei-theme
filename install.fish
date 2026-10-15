#!/usr/bin/env fish

set REPO_URL "https://github.com/4ndr3s-00/shinra-tensei-theme.git"
set DEST_DIR "$HOME/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.0.0"
set LEGACY_DIR "$HOME/.vscode/extensions/shinra-tensei-theme"

set_color bfa5d9
echo "   _____ __    _                    ______                      _ "
echo "  / ___// /_  (_)___  _________ _  /_  __/__  ____  ________  (_) "
echo "  \\__ \\/ __ \\/ / __ \\/ ___/ __ `/   / / / _ \\/ __ \\/ ___/ _ \\/ / "
echo " ___/ / / / / / / / / /  / /_/ /   / / /  __/ / / (__  )  __/ /  "
echo "/____/_/ /_/_/_/ /_/_/   \\__,_/   /_/  \\___/_/ /_/____/\\___/_/   "
set_color normal

echo "Instalando Shinra Tensei VS Code Theme..."

# Limpiar versión legada si existía
if test -d "$LEGACY_DIR"; and not test -d "$DEST_DIR"
    echo "Migrando instalación anterior a formato de VS Code..."
    mv "$LEGACY_DIR" "$DEST_DIR"
else if test -d "$LEGACY_DIR"; and test -d "$DEST_DIR"
    rm -rf "$LEGACY_DIR"
end

# 1. Clonar o actualizar repositorio
if test -d "$DEST_DIR"
    echo "Actualizando instalación existente en $DEST_DIR..."
    git -C "$DEST_DIR" pull --ff-only
else
    echo "Clonando repositorio en $DEST_DIR..."
    git clone "$REPO_URL" "$DEST_DIR"
end

# 2. Localizar y activar automáticamente en settings.json
function activate_theme_file -a target_file
    test -z "$target_file"; and return
    set -l target_dir (path dirname "$target_file")
    mkdir -p "$target_dir"

    if command -v python3 >/dev/null 2>&1
        python3 -c "
import json, os, re
p = '$target_file'
data = {}
if os.path.exists(p):
    try:
        with open(p, 'r', encoding='utf-8') as f:
            clean = re.sub(r'//.*', '', f.read())
            data = json.loads(clean)
    except Exception:
        data = {}
data['workbench.colorTheme'] = 'Shinra Tensei (Rinnegan)'
with open(p, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
"
    else if command -v jq >/dev/null 2>&1
        if test -f "$target_file"
            set -l tmp (mktemp)
            jq '."workbench.colorTheme" = "Shinra Tensei (Rinnegan)"' "$target_file" > "$tmp"; and mv "$tmp" "$target_file"
        else
            echo '{"workbench.colorTheme": "Shinra Tensei (Rinnegan)"}' > "$target_file"
        end
    end
end

set -l activated 0
if test -d "$HOME/.config/Code/User"; or test -f "$HOME/.config/Code/User/settings.json"
    activate_theme_file "$HOME/.config/Code/User/settings.json"
    set activated 1
end

if test -d "$HOME/.config/VSCodium/User"
    activate_theme_file "$HOME/.config/VSCodium/User/settings.json"
    set activated 1
end

if test -d "$HOME/.var/app/com.visualstudio.code/config/Code/User"
    activate_theme_file "$HOME/.var/app/com.visualstudio.code/config/Code/User/settings.json"
    set activated 1
end

if test -d "$HOME/Library/Application Support/Code/User"
    activate_theme_file "$HOME/Library/Application Support/Code/User/settings.json"
    set activated 1
end

if test "$activated" -eq 0
    activate_theme_file "$HOME/.config/Code/User/settings.json"
end

set_color green
echo ""
echo "✔ ¡Extensión instalada con éxito en ~/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.0.0!"
echo "✔ ¡Tema 'Shinra Tensei (Rinnegan)' activado automáticamente en tu settings.json!"
set_color normal

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  CÓMO APLICAR LOS CAMBIOS:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  • Si VS Code está CERRADO: Simplemente ábrelo y ya estará listo."
echo "  • Si VS Code está ABIERTO:"
echo "      1. Presiona 'Ctrl + Shift + P' (o 'Cmd + Shift + P' en Mac)"
echo "      2. Escribe y presiona Enter: 'Developer: Reload Window'"
echo ""
echo "  • Para cambiar o re-activar el tema manualmente en cualquier momento:"
echo "      Presiona 'Ctrl + K' y luego 'Ctrl + T', y elige 'Shinra Tensei (Rinnegan)'."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
