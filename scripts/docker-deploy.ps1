param (
    [string]$path = ".",
    [string]$custom_tag,
    [switch]$prod,
    [switch]$clean = $false,
    [switch]$v = $false,
    [switch]$h = $false,
    [switch]$dry_run = $false
)

function Show-Help {
    Write-Host "Usage: docker-deploy.ps1 [-path <path>] [-source <source>] [-prod] [-clean] [-v] [-h] [-dry_run]" -ForegroundColor Cyan
    Write-Host "  -path <path>    Path to the project directory. Default is '..'." -ForegroundColor Cyan
    Write-Host "  -custom_tag     Custom tag for the image." -ForegroundColor Cyan
    Write-Host "  -prod           Deploy to production." -ForegroundColor Cyan
    Write-Host "  -clean          Remove old images and build with no cache." -ForegroundColor Cyan
    Write-Host "  -v              Verbose output." -ForegroundColor Cyan
    Write-Host "  -h              Display this help message." -ForegroundColor Cyan
    Write-Host "  -dry_run         Show what would be done without making any changes." -ForegroundColor Cyan
}

if ($h) {
    Show-Help
    exit
}

function Set-Directory {
    param (
        [string]$directory
    )
    try {
        Set-Location $directory -ErrorAction Stop
        if ($v) { Write-Host "Set location to $directory" -ForegroundColor Green }
    }
    catch {
        Write-Host "Failed to set location to $directory" -ForegroundColor Red
        exit 1
    }
}

function Remove-OldImages {
    $images = docker images --format "{{.ID}} {{.Repository}}" | Where-Object { $_ -match "tennismanager" }
    $imageIds = $images -replace " .*", ""

    if ($imageIds.Count -gt 0) {
        $imageIds | ForEach-Object {
            if ($dry_run) {
                Write-Host "Would remove image ID $_" -ForegroundColor Yellow
            }
            else {
                docker rmi $_ -f
                if ($v) { Write-Host "Removed image ID $_" -ForegroundColor Green }
            }
        }
    }
    else {
        Write-Host "No images found to remove." -ForegroundColor Blue
    }
}

function Build-Image {
    param (
        [string]$imageName,
        [string]$tag,
        [bool]$noCache = $false
    )

    if ($dry_run) {
        Write-Host "Would build image ${imageName}:${tag}" -ForegroundColor Yellow
    }
    else {
        if ($v) { Write-Host "Attempting to build image: docker build -t ${imageName}:${tag} $path" -ForegroundColor Green }
        
        if ($noCache) {
            docker build -t $imageName":"$tag $path --no-cache --push 
        }
        else {
            docker build -t $imageName":"$tag $path --push 
        }
    }
}

# Set the tag
$tag = if ($custom_tag) { 
    $custom_tag 
}
elseif ($prod) { 
    "prod" 
}
else { 
    "dev" 
}

# Set the image name
$image = "justinfay501/tennismanager"

# Remove old images if clean is set
if ($clean) {
    if ($v) { Write-Host "Removing old images..." -ForegroundColor Yellow }
    Remove-OldImages
}

# Build the image
if ($v) { Write-Host "Building the image..." -ForegroundColor Yellow }

Build-Image -imageName $image -tag $tag -noCache:$clean

if ($prod -and !$dry_run) {
    docker push "${image}:${tag}"
    if ($v) { Write-Host "Pushed image ${image}:${tag}" -ForegroundColor Green }
}