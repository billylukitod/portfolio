#!/bin/bash
set -e

# Generic function to create SVG
create_svg() {
  local path=$1
  local width=$2
  local height=$3
  local text=$4
  local bg_color=${5:-"#e5e7eb"}
  local icon_svg=$6
  
  cat <<SVG > "$path"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 $width $height" width="$width" height="$height">
  <rect width="$width" height="$height" fill="$bg_color"/>
  $icon_svg
  <text x="50%" y="70%" font-family="system-ui, sans-serif" font-size="24" font-weight="bold" fill="#4b5563" text-anchor="middle" dominant-baseline="middle">$text</text>
  <text x="50%" y="80%" font-family="system-ui, sans-serif" font-size="16" fill="#6b7280" text-anchor="middle" dominant-baseline="middle">(Placeholder)</text>
</svg>
SVG
}

ROBOT_ICON='<path d="M 350 150 L 450 150 L 450 250 L 350 250 Z" fill="none" stroke="#9ca3af" stroke-width="8"/>
<circle cx="380" cy="180" r="10" fill="#9ca3af"/><circle cx="420" cy="180" r="10" fill="#9ca3af"/>
<rect x="380" y="210" width="40" height="10" fill="#9ca3af"/>'

DRONE_ICON='<circle cx="400" cy="200" r="30" fill="none" stroke="#9ca3af" stroke-width="8"/>
<line x1="330" y1="130" x2="380" y2="180" stroke="#9ca3af" stroke-width="8"/>
<line x1="470" y1="130" x2="420" y2="180" stroke="#9ca3af" stroke-width="8"/>
<line x1="330" y1="270" x2="380" y2="220" stroke="#9ca3af" stroke-width="8"/>
<line x1="470" y1="270" x2="420" y2="220" stroke="#9ca3af" stroke-width="8"/>
<circle cx="330" cy="130" r="20" fill="none" stroke="#9ca3af" stroke-width="4"/>
<circle cx="470" cy="130" r="20" fill="none" stroke="#9ca3af" stroke-width="4"/>
<circle cx="330" cy="270" r="20" fill="none" stroke="#9ca3af" stroke-width="4"/>
<circle cx="470" cy="270" r="20" fill="none" stroke="#9ca3af" stroke-width="4"/>'

CIRCUIT_ICON='<rect x="350" y="150" width="100" height="100" fill="none" stroke="#9ca3af" stroke-width="8"/>
<line x1="350" y1="170" x2="310" y2="170" stroke="#9ca3af" stroke-width="6"/>
<line x1="350" y1="200" x2="310" y2="200" stroke="#9ca3af" stroke-width="6"/>
<line x1="350" y1="230" x2="310" y2="230" stroke="#9ca3af" stroke-width="6"/>
<line x1="450" y1="170" x2="490" y2="170" stroke="#9ca3af" stroke-width="6"/>
<line x1="450" y1="200" x2="490" y2="200" stroke="#9ca3af" stroke-width="6"/>
<line x1="450" y1="230" x2="490" y2="230" stroke="#9ca3af" stroke-width="6"/>
<circle cx="310" cy="170" r="5" fill="#9ca3af"/><circle cx="310" cy="200" r="5" fill="#9ca3af"/><circle cx="310" cy="230" r="5" fill="#9ca3af"/>
<circle cx="490" cy="170" r="5" fill="#9ca3af"/><circle cx="490" cy="200" r="5" fill="#9ca3af"/><circle cx="490" cy="230" r="5" fill="#9ca3af"/>'

BASE="/home/billy/.gemini/antigravity/scratch/portfolio/public"

# Ackermann (Robot)
DIR="$BASE/media/projects/ackermann-adaptive-cruise-control"
create_svg "$DIR/cover.svg" 800 450 "Replace with Cover Image" "#e5e7eb" "$ROBOT_ICON"
create_svg "$DIR/architecture.svg" 800 450 "Replace with Architecture Diagram" "#e5e7eb" "$ROBOT_ICON"
create_svg "$DIR/gallery-01.svg" 800 450 "Replace with Gallery Image 1" "#e5e7eb" "$ROBOT_ICON"
create_svg "$DIR/gallery-02.svg" 800 450 "Replace with Gallery Image 2" "#e5e7eb" "$ROBOT_ICON"
create_svg "$DIR/demo-poster.svg" 800 450 "Replace with Demo Poster" "#e5e7eb" "$ROBOT_ICON"

# Drone
DIR="$BASE/media/projects/wearable-drone-control-interface"
create_svg "$DIR/cover.svg" 800 450 "Replace with Cover Image" "#e5e7eb" "$DRONE_ICON"
create_svg "$DIR/architecture.svg" 800 450 "Replace with Architecture Diagram" "#e5e7eb" "$DRONE_ICON"
create_svg "$DIR/gallery-01.svg" 800 450 "Replace with Gallery Image 1" "#e5e7eb" "$DRONE_ICON"
create_svg "$DIR/gallery-02.svg" 800 450 "Replace with Gallery Image 2" "#e5e7eb" "$DRONE_ICON"
create_svg "$DIR/demo-poster.svg" 800 450 "Replace with Demo Poster" "#e5e7eb" "$DRONE_ICON"

# DVR
DIR="$BASE/media/projects/dvr-reader-board-stm32"
create_svg "$DIR/cover.svg" 800 450 "Replace with Cover Image" "#e5e7eb" "$CIRCUIT_ICON"
create_svg "$DIR/architecture.svg" 800 450 "Replace with Architecture Diagram" "#e5e7eb" "$CIRCUIT_ICON"
create_svg "$DIR/gallery-01.svg" 800 450 "Replace with Gallery Image 1" "#e5e7eb" "$CIRCUIT_ICON"
create_svg "$DIR/gallery-02.svg" 800 450 "Replace with Gallery Image 2" "#e5e7eb" "$CIRCUIT_ICON"
create_svg "$DIR/demo-poster.svg" 800 450 "Replace with Demo Poster" "#e5e7eb" "$CIRCUIT_ICON"

# Profile
PROFILE_ICON='<circle cx="150" cy="120" r="40" fill="#9ca3af"/><path d="M 70 250 Q 150 150 230 250" fill="#9ca3af"/>'
cat <<SVG > "$BASE/media/profile/photo.svg"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="300" height="300">
  <rect width="300" height="300" fill="#e5e7eb"/>
  <circle cx="150" cy="150" r="140" fill="none" stroke="#9ca3af" stroke-width="4"/>
  $PROFILE_ICON
  <text x="50%" y="85%" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#4b5563" text-anchor="middle">Replace with</text>
  <text x="50%" y="92%" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#4b5563" text-anchor="middle">profile photo</text>
</svg>
SVG

# Favicon
cat <<SVG > "$BASE/favicon.svg"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#0d9488"/>
  <path d="M 20 20 L 44 20 L 44 44 L 20 44 Z" fill="none" stroke="#ffffff" stroke-width="4"/>
  <circle cx="32" cy="32" r="6" fill="#ffffff"/>
  <line x1="20" y1="32" x2="12" y2="32" stroke="#ffffff" stroke-width="4"/>
  <line x1="44" y1="32" x2="52" y2="32" stroke="#ffffff" stroke-width="4"/>
  <line x1="32" y1="20" x2="32" y2="12" stroke="#ffffff" stroke-width="4"/>
  <line x1="32" y1="44" x2="32" y2="52" stroke="#ffffff" stroke-width="4"/>
</svg>
SVG

# Social Card
cat <<SVG > "$BASE/social-card-default.svg"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <rect width="1200" height="630" fill="#1e293b"/>
  <circle cx="600" cy="315" r="200" fill="none" stroke="#334155" stroke-width="40"/>
  <circle cx="600" cy="315" r="300" fill="none" stroke="#334155" stroke-width="20"/>
  <text x="50%" y="45%" font-family="system-ui, sans-serif" font-size="64" font-weight="bold" fill="#f8fafc" text-anchor="middle">[DUMMY — REPLACE SITE NAME]</text>
  <text x="50%" y="55%" font-family="system-ui, sans-serif" font-size="36" fill="#94a3b8" text-anchor="middle">Robotics &amp; Embedded Systems Engineer</text>
</svg>
SVG

# robots.txt
cat <<EOF > "$BASE/robots.txt"
User-agent: *
Allow: /

Sitemap: https://example.com/sitemap-index.xml
