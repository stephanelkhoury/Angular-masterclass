# Generating PWA Icons

To generate the various icon sizes required for your PWA:

1. Place a base icon file named `icon-base.png` in the `src/assets/` directory
   - This should be a square PNG image with transparent background
   - Minimum recommended size is 512x512 pixels
   - Optimal size is 1024x1024 pixels

2. Install ImageMagick (if not already installed):
   ```
   brew install imagemagick
   ```

3. Run the icon generation script:
   ```
   ./generate-icons.sh
   ```

4. The script will create all necessary icon sizes in the `src/assets/icons/` directory

These icons will be used by the PWA manifest for various display contexts, including:
- App icon on home screen
- Splash screen
- Task switcher
- Browser tabs

The generated icons match the sizes specified in `manifest.webmanifest`.
