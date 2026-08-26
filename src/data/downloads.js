/**
 * The download catalogue.
 *
 * Adding a new file to KuikDown = adding one object to this array.
 * Nothing else in the app needs to change.
 *
 *   id          unique slug, used as the React key
 *   name        display title on the card
 *   version     optional, shown next to the title
 *   fileName    the name the file actually has on disk
 *   description one or two lines of copy
 *   size        human readable, e.g. "14.5 MB"
 *   platform    "android" | "windows"  (drives the badge + icon)
 *   url         the direct link the card opens
 *   sha256      optional checksum, rendered under the card when present
 */

const RELEASE = 'https://github.com/sirnewson/kuikdown/releases/download/v1.0.0'

export const downloads = [
  {
    id: 'sportzx-31',
    name: 'SportzX',
    version: 'v3.1',
    fileName: 'SportzX_3.1v.apk',
    description: 'Newest build. Direct install package.',
    size: '19.9 MB',
    platform: 'android',
    url: `${RELEASE}/SportzX_3.1v.apk`,
    sha256: '98afe8b8c22c96c3b1021bfd9432e660a7cfae209d5d308d21f41cb971d2f44f',
  },
  {
    id: 'sportzx-25',
    name: 'SportzX',
    version: 'v2.5',
    fileName: 'SportzX_v2.5.apk',
    description: 'Previous release, kept around for older devices.',
    size: '12.1 MB',
    platform: 'android',
    url: 'https://www.mediafire.com/file/2hc35uh370gj0ti/SportzX_v2.5.apk/file',
  },
  {
    id: 'explore-player',
    name: 'Explore Player',
    version: 'v1.0.0',
    fileName: 'Explore-Player-Setup-1.0.0.exe',
    description: 'Desktop audio player. Full offline installer.',
    size: '118.7 MB',
    platform: 'windows',
    url: `${RELEASE}/Explore-Player-Setup-1.0.0.exe`,
    sha256: 'ab70a43bd70c4363321e55d9df9ea111ef9d68d00688ce02001a4809b1bdaf29',
  },
  {
    id: 'freetube',
    name: 'FreeTube',
    version: 'v0.23.14 beta',
    fileName: 'freetube-0.23.14-beta-setup-x64.exe',
    description: 'Private YouTube client for the desktop. 64-bit setup.',
    size: '80.8 MB',
    platform: 'windows',
    url: `${RELEASE}/freetube-0.23.14-beta-setup-x64.exe`,
    sha256: 'ea9e47fce8a591f05df65805b68693c3a955699ed3060d85c3cb0d9d389479aa',
  },
  {
    id: 'birdfont',
    name: 'BirdFont',
    version: 'v6.15.5',
    fileName: 'birdfont-6.15.5-free.exe',
    description: 'Font editor for TTF, EOT and SVG fonts. Free edition.',
    size: '16.8 MB',
    platform: 'windows',
    url: `${RELEASE}/birdfont-6.15.5-free.exe`,
    sha256: '359791001559f2cb4d63161f5b0e9df1b4948f5cb5af84a5cb17c292c558c5a2',
  },
  {
    id: 'framer',
    name: 'Framer',
    fileName: 'Framer.exe',
    description: 'Interactive design and prototyping app for Windows.',
    size: '143.5 MB',
    platform: 'windows',
    url: `${RELEASE}/Framer.exe`,
    sha256: '03e152171bdd25796fccecc9c9af297c49dd70cb8523aec09c82b124ce9766e9',
  },
  {
    id: 'psd-viewer',
    name: 'PSD Viewer',
    version: 'v3.2',
    fileName: 'psd-viewer-3.2.exe',
    description: 'Open and preview Photoshop .psd files without Photoshop.',
    size: '9.5 MB',
    platform: 'windows',
    url: `${RELEASE}/psd-viewer-3.2.exe`,
    sha256: '7955658b55b89cf7e57107badf7420a37f1da090809dfc8e7ab6c7977d32a63e',
  },
  {
    id: 'camo-studio',
    name: 'Camo Studio',
    fileName: 'Camo-Studio-Installer.exe',
    description: 'Use your phone as a webcam. Small online installer.',
    size: '1.1 MB',
    platform: 'windows',
    url: `${RELEASE}/Camo-Studio-Installer.exe`,
    sha256: 'ec12a717febb731e4b0815abb51e518dc0e3b41db1bf1984a78be7403f6bb844',
  },
]

export const platforms = {
  android: { label: 'Android App (APK)', icon: 'smartphone' },
  windows: { label: 'Windows Installer (EXE)', icon: 'monitor' },
}
