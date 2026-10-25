$repoUrl = "https://github.com/4ndr3s-00/shinra-tensei-theme.git"
$destDir = "$env:USERPROFILE\.vscode\extensions\4ndr3s-00.shinra-tensei-theme-1.2.0"
$legacyDir = "$env:USERPROFILE\.vscode\extensions\shinra-tensei-theme"
$v100Dir = "$env:USERPROFILE\.vscode\extensions\4ndr3s-00.shinra-tensei-theme-1.0.0"

Write-Host "Installing Shinra Tensei VS Code Theme v1.2.0..." -ForegroundColor Magenta

# Clean up older folder formats if they exist
if ((Test-Path $legacyDir) -and (-not (Test-Path $destDir))) {
    Write-Host "Migrating legacy folder to v1.2.0..." -ForegroundColor Yellow
    Rename-Item -Path $legacyDir -NewName "4ndr3s-00.shinra-tensei-theme-1.2.0"
} elseif (Test-Path $legacyDir) {
    Remove-Item -Path $legacyDir -Recurse -Force
}

if ((Test-Path $v100Dir) -and (-not (Test-Path $destDir))) {
    Write-Host "Upgrading 1.0.0 folder to v1.2.0..." -ForegroundColor Yellow
    Rename-Item -Path $v100Dir -NewName "4ndr3s-00.shinra-tensei-theme-1.2.0"
} elseif (Test-Path $v100Dir) {
    Remove-Item -Path $v100Dir -Recurse -Force
}

# 1. Clone or update repository
if (Test-Path $destDir) {
    Write-Host "Updating existing installation in $destDir..." -ForegroundColor Yellow
    git -C "$destDir" pull --ff-only
} else {
    Write-Host "Cloning repository into $destDir..." -ForegroundColor Cyan
    git clone $repoUrl $destDir
}

# 2. Automatically activate in settings.json
$settingsPath = "$env:APPDATA\Code\User\settings.json"
$settingsDir = Split-Path $settingsPath

if (-not (Test-Path $settingsDir)) {
    New-Item -ItemType Directory -Path $settingsDir -Force | Out-Null
}

$settings = @{}
if (Test-Path $settingsPath) {
    try {
        $content = Get-Content $settingsPath -Raw -Encoding UTF8
        # Remove comments if any
        $clean = $content -replace '//.*', ''
        $settings = $clean | ConvertFrom-Json -AsHashtable
    } catch {
        $settings = @{}
    }
}

$settings["workbench.colorTheme"] = "Shinra Tensei (Rinnegan)"
$settings["workbench.iconTheme"] = "shinra-tensei-icons"
$settings | ConvertTo-Json -Depth 10 | Set-Content $settingsPath -Encoding UTF8

Write-Host "`n✔ Extension installed in $destDir!" -ForegroundColor Green
Write-Host "✔ 'Shinra Tensei (Rinnegan)' and 'Shinra Tensei Icons' automatically activated in settings.json!" -ForegroundColor Green

Write-Host "`n================================================================="
Write-Host "  HOW TO APPLY CHANGES:"
Write-Host "================================================================="
Write-Host "  * If VS Code is CLOSED: Just open it."
Write-Host "  * If VS Code is OPEN:"
Write-Host "      1. Press 'Ctrl + Shift + P'"
Write-Host "      2. Type and press Enter: 'Developer: Reload Window'"
Write-Host "`n  * To manually pick or switch themes at any time:"
Write-Host "      Press 'Ctrl + K' then 'Ctrl + T', and select 'Shinra Tensei (Rinnegan)'."
Write-Host "================================================================="
