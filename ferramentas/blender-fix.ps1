# Blender que funciona em placa de video antiga (ex.: Intel HD Graphics 4000)
# O que faz: 1) instala o Blender 3.6 LTS se nao tiver  2) coloca o "OpenGL por software" (Mesa)
# dentro da pasta do Blender, para ele usar o processador no lugar da placa  3) cria atalho na Area de Trabalho e abre.
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
function Passo($t){ Write-Host "`n>> $t" -ForegroundColor Yellow }
$tmp = Join-Path $env:TEMP 'blender-fix'; New-Item -ItemType Directory -Force -Path $tmp | Out-Null

Passo '1/4 Procurando o Blender 3.6...'
$dir = Get-ChildItem 'C:\Program Files\Blender Foundation' -Directory -ErrorAction SilentlyContinue | Where-Object { $_.Name -like 'Blender 3.6*' } | Select-Object -First 1
if(-not $dir){
  $msi = Get-ChildItem (Join-Path $env:USERPROFILE 'Downloads') -Filter 'blender-3.6*windows-x64.msi' -ErrorAction SilentlyContinue | Sort-Object Name -Descending | Select-Object -First 1
  if(-not $msi){
    Write-Host 'Baixando o Blender 3.6 LTS do site oficial...'
    $page = (Invoke-WebRequest 'https://download.blender.org/release/Blender3.6/' -UseBasicParsing).Links.href | Where-Object { $_ -match '^blender-3\.6\.\d+-windows-x64\.msi$' }
    $last = $page | Sort-Object { [int]($_ -replace '^blender-3\.6\.(\d+).*','$1') } | Select-Object -Last 1
    $msi = Join-Path $tmp $last
    Invoke-WebRequest ('https://download.blender.org/release/Blender3.6/' + $last) -OutFile $msi -UseBasicParsing
    $msi = Get-Item $msi
  }
  Write-Host "Instalando $($msi.Name) (pode demorar 1-2 minutos)..."
  Start-Process msiexec.exe -ArgumentList '/i', "`"$($msi.FullName)`"", '/qn', '/norestart' -Wait
  $dir = Get-ChildItem 'C:\Program Files\Blender Foundation' -Directory | Where-Object { $_.Name -like 'Blender 3.6*' } | Select-Object -First 1
}
if(-not $dir){ throw 'Nao consegui instalar o Blender 3.6. Mande um print desta tela para o Claude.' }
Write-Host "Blender em: $($dir.FullName)" -ForegroundColor Green

Passo '2/4 Preparando o 7-Zip (para abrir o pacote do OpenGL)...'
$7z = 'C:\Program Files\7-Zip\7z.exe'
if(-not (Test-Path $7z)){ winget install --id 7zip.7zip --silent --accept-package-agreements --accept-source-agreements | Out-Null }
if(-not (Test-Path $7z)){ throw 'Nao consegui instalar o 7-Zip. Mande um print para o Claude.' }

Passo '3/4 Baixando o OpenGL por software (Mesa, gratuito)...'
$rel = Invoke-RestMethod 'https://api.github.com/repos/pal1000/mesa-dist-win/releases/latest' -Headers @{ 'User-Agent' = 'blender-fix' }
$asset = $rel.assets | Where-Object { $_.name -match 'release-msvc\.7z$' } | Select-Object -First 1
if(-not $asset){ $asset = $rel.assets | Where-Object { $_.name -match '\.7z$' -and $_.name -notmatch 'debug|devel' } | Select-Object -First 1 }
$pkg = Join-Path $tmp $asset.name
Invoke-WebRequest $asset.browser_download_url -OutFile $pkg -UseBasicParsing
$ex = Join-Path $tmp 'mesa'; Remove-Item $ex -Recurse -Force -ErrorAction SilentlyContinue
& $7z x $pkg "-o$ex" -y | Out-Null
$x64 = Join-Path $ex 'x64'
$copiados = 0
foreach($f in 'opengl32.dll','libgallium_wgl.dll','libglapi.dll','dxil.dll'){
  $src = Join-Path $x64 $f
  if(Test-Path $src){ Copy-Item $src -Destination $dir.FullName -Force; $copiados++; Write-Host "  copiado: $f" }
}
if($copiados -eq 0){ throw 'O pacote do Mesa veio diferente do esperado. Mande um print para o Claude.' }

Passo '4/4 Criando atalho e abrindo o Blender...'
$exe = Join-Path $dir.FullName 'blender.exe'
$lnk = Join-Path ([Environment]::GetFolderPath('Desktop')) 'Blender 3.6.lnk'
$ws = New-Object -ComObject WScript.Shell; $s = $ws.CreateShortcut($lnk); $s.TargetPath = $exe; $s.WorkingDirectory = $dir.FullName; $s.Save()
Start-Process $exe -WorkingDirectory $dir.FullName
Write-Host "`nPRONTO! Blender 3.6 aberto. Atalho 'Blender 3.6' na Area de Trabalho." -ForegroundColor Green
Write-Host 'Ele usa o processador para desenhar: funciona em qualquer PC, so e um pouco mais lento.'
