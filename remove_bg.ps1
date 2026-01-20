
Add-Type -AssemblyName System.Drawing

$inputPath = "$PSScriptRoot\public\images\digismart-logo-wip.png"
$outputPath = "$PSScriptRoot\public\images\logo-ds.png"

$img = [System.Drawing.Bitmap]::FromFile($inputPath)
$bmp = New-Object System.Drawing.Bitmap $img.Width, $img.Height

# Get background color from top-left pixel
$bgColor = $img.GetPixel(0, 0)
$threshold = 40

for ($x = 0; $x -lt $img.Width; $x++) {
    for ($y = 0; $y -lt $img.Height; $y++) {
        $pixel = $img.GetPixel($x, $y)
        
        $diff = [Math]::Abs($pixel.R - $bgColor.R) + [Math]::Abs($pixel.G - $bgColor.G) + [Math]::Abs($pixel.B - $bgColor.B)
        
        if ($diff -lt $threshold) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        } else {
            $bmp.SetPixel($x, $y, $pixel)
        }
    }
}

$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
$bmp.Dispose()

Write-Host "Background removed and saved to $outputPath"
