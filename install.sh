#!/bin/sh
set -e

REPO_URL="https://github.com/4ndr3s-00/shinra-tensei-theme.git"
DEST_DIR="$HOME/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.2.0"
LEGACY_DIR="$HOME/.vscode/extensions/shinra-tensei-theme"
V100_DIR="$HOME/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.0.0"

printf "\033[38;2;191;165;217m"
cat << 'EOF'
   _____ __    _                    ______                      _ 
  / ___// /_  (_)___  _________ _  /_  __/__  ____  ________  (_)
  \__ \/ __ \/ / __ \/ ___/ __ `/   / / / _ \/ __ \/ ___/ _ \/ / 
 ___/ / / / / / / / / /  / /_/ /   / / /  __/ / / (__  )  __/ /  
/____/_/ /_/_/_/ /_/_/   \__,_/   /_/  \___/_/ /_/____/\___/_/   
EOF
printf "\033[0m\n"

echo "Instalando Shinra Tensei VS Code Theme v1.2.0..."

# Limpiar versiones legadas si existían
if [ -d "$LEGACY_DIR" ] && [ ! -d "$DEST_DIR" ]; then
    echo "Migrando instalación anterior a versión 1.2.0..."
    mv "$LEGACY_DIR" "$DEST_DIR"
elif [ -d "$LEGACY_DIR" ]; then
    rm -rf "$LEGACY_DIR"
fi

if [ -d "$V100_DIR" ] && [ ! -d "$DEST_DIR" ]; then
    echo "Actualizando instalación 1.0.0 a 1.2.0..."
    mv "$V100_DIR" "$DEST_DIR"
elif [ -d "$V100_DIR" ]; then
    rm -rf "$V100_DIR"
fi

# 1. Clonar o actualizar el repositorio en ~/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.2.0
if [ -d "$DEST_DIR" ]; then
    echo "Actualizando instalación existente en $DEST_DIR..."
    git -C "$DEST_DIR" pull --ff-only
else
    echo "Clonando repositorio en $DEST_DIR..."
    git clone "$REPO_URL" "$DEST_DIR"
fi

# 2. Localizar y actualizar settings.json automáticamente
activate_theme_in_file() {
    target_file="$1"
    [ -z "$target_file" ] && return
    mkdir -p "$(dirname "$target_file")"

    if command -v python3 >/dev/null 2>&1; then
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
data['workbench.iconTheme'] = 'shinra-tensei-icons'
with open(p, 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)
"
    elif command -v jq >/dev/null 2>&1; then
        if [ -f "$target_file" ]; then
            tmp=$(mktemp)
            jq '."workbench.colorTheme" = "Shinra Tensei (Rinnegan)" | ."workbench.iconTheme" = "shinra-tensei-icons"' "$target_file" > "$tmp" && mv "$tmp" "$target_file"
        else
            echo '{"workbench.colorTheme": "Shinra Tensei (Rinnegan)", "workbench.iconTheme": "shinra-tensei-icons"}' > "$target_file"
        fi
    fi
}

ACTIVATED=0
# Linux estándar
if [ -d "$HOME/.config/Code/User" ] || [ -f "$HOME/.config/Code/User/settings.json" ]; then
    activate_theme_in_file "$HOME/.config/Code/User/settings.json"
    ACTIVATED=1
fi

# Linux VSCodium
if [ -d "$HOME/.config/VSCodium/User" ]; then
    activate_theme_in_file "$HOME/.config/VSCodium/User/settings.json"
    ACTIVATED=1
fi

# Linux Flatpak
if [ -d "$HOME/.var/app/com.visualstudio.code/config/Code/User" ]; then
    activate_theme_in_file "$HOME/.var/app/com.visualstudio.code/config/Code/User/settings.json"
    ACTIVATED=1
fi

# macOS
if [ -d "$HOME/Library/Application Support/Code/User" ]; then
    activate_theme_in_file "$HOME/Library/Application Support/Code/User/settings.json"
    ACTIVATED=1
fi

# Si no existía ninguno, creamos el de Code por defecto
if [ "$ACTIVATED" -eq 0 ]; then
    activate_theme_in_file "$HOME/.config/Code/User/settings.json"
fi

echo ""
printf "\033[32m✔ ¡Extensión instalada con éxito en ~/.vscode/extensions/4ndr3s-00.shinra-tensei-theme-1.2.0!\033[0m\n"
printf "\033[32m✔ ¡Tema 'Shinra Tensei (Rinnegan)' y paquete de iconos 'Shinra Tensei Icons' activados automáticamente en tu settings.json!\033[0m\n"
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
