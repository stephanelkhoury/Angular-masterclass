#!/bin/bash

# This script generates various sized PWA icons from a base icon
# Note: This requires ImageMagick to be installed (brew install imagemagick)

# The base icon should be placed in src/assets/icon-base.png before running this script
# The base icon should be at least a 512x512 PNG image with transparency

# Create the icons directory if it doesn't exist
mkdir -p src/assets/icons

# Define icon sizes
sizes=("72x72" "96x96" "128x128" "144x144" "152x152" "192x192" "384x384" "512x512")

# Generate icons for each size
for size in "${sizes[@]}"; do
  echo "Generating icon-$size.png"
  convert src/assets/icon-base.png -resize $size src/assets/icons/icon-$size.png
done

echo "PWA icons generated successfully in src/assets/icons/"
echo "Remember to use a base icon with at least 512x512 pixels for best results"
