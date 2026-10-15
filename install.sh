#!/bin/sh
set -e

REPO_URL="https://github.com/4ndr3s-00/shinra-tensei-theme.git"
DEST_DIR="$HOME/.vscode/extensions/shinra-tensei-theme"

printf "\033[38;2;162;119;255m"
cat << 'EOF'
   _____ __    _                    ______                      _ 
  / ___// /_  (_)___  _________ _  /_  __/__  ____  ________  (_)
  \__ \/ __ \/ / __ \/ ___/ __ `/   / / / _ \/ __ \/ ___/ _ \/ / 
 ___/ / / / / / / / / /  / /_/ /   / / /  __/ / / (__  )  __/ /  
/____/_/ /_/_/_/ /_/_/   \__,_/   /_/  \___/_/ /_/____/\___/_/   
EOF
printf "\033[0m\n"

echo "Installing Shinra Tensei VS Code Theme..."

if [ -d "$DEST_DIR" ]; then
    echo "Updating existing installation in $DEST_DIR..."
    git -C "$DEST_DIR" pull --ff-only
else
    echo "Cloning repository into $DEST_DIR..."
    git clone "$REPO_URL" "$DEST_DIR"
fi

echo ""
printf "\033[32m✔ Installation complete!\033[0m\n"
echo "Restart or reload VS Code, then activate the theme:"
echo "  1. Press Ctrl+Shift+P (or Cmd+Shift+P on macOS)"
echo "  2. Type 'Preferences: Color Theme' and press Enter"
echo "  3. Select 'Shinra Tensei (Rinnegan)'"
