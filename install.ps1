$repoUrl = "https://github.com/4ndr3s-00/shinra-tensei-theme.git"
$destDir = "$env:USERPROFILE\.vscode\extensions\shinra-tensei-theme"

Write-Host "Installing Shinra Tensei VS Code Theme..." -ForegroundColor Magenta

if (Test-Path $destDir) {
    Write-Host "Updating existing installation in $destDir..." -ForegroundColor Yellow
    git -C "$destDir" pull --ff-only
} else {
    Write-Host "Cloning repository into $destDir..." -ForegroundColor Cyan
    git clone $repoUrl $destDir
}

Write-Host "`n✔ Installation complete!" -ForegroundColor Green
Write-Host "Restart or reload VS Code, then activate the theme:"
Write-Host "  1. Press Ctrl+Shift+P"
Write-Host "  2. Type 'Preferences: Color Theme'"
Write-Host "  3. Select 'Shinra Tensei (Rinnegan)'"
