#!/usr/bin/env fish

set REPO_URL "https://github.com/4ndr3s-00/shinra-tensei-theme.git"
set DEST_DIR "$HOME/.vscode/extensions/shinra-tensei-theme"

set_color a277ff
echo "   _____ __    _                    ______                      _ "
echo "  / ___// /_  (_)___  _________ _  /_  __/__  ____  ________  (_) "
echo "  \\__ \\/ __ \\/ / __ \\/ ___/ __ `/   / / / _ \\/ __ \\/ ___/ _ \\/ / "
echo " ___/ / / / / / / / / /  / /_/ /   / / /  __/ / / (__  )  __/ /  "
echo "/____/_/ /_/_/_/ /_/_/   \\__,_/   /_/  \\___/_/ /_/____/\\___/_/   "
set_color normal

echo "Instalando Shinra Tensei VS Code Theme..."

if test -d "$DEST_DIR"
    echo "Actualizando instalación existente en $DEST_DIR..."
    git -C "$DEST_DIR" pull --ff-only
else
    echo "Clonando repositorio en $DEST_DIR..."
    git clone "$REPO_URL" "$DEST_DIR"
end

set_color green
echo "✔ ¡Instalación completada con éxito!"
set_color normal
echo "Abre o recarga VS Code y activa el tema:"
echo "  1. Presiona Ctrl + Shift + P"
echo "  2. Escribe 'Preferences: Color Theme'"
echo "  3. Selecciona 'Shinra Tensei (Rinnegan)'"
