/**
 * The download catalogue.
 *
 * Adding a new file to KuikDown = adding one object to this array.
 * Nothing else in the app needs to change.
 *
 *   id          unique slug, used as the React key
 *   name        display title on the card
 *   version     shown next to the title
 *   fileName    the name the file actually has on disk
 *   description one or two lines of copy
 *   size        human readable, e.g. "14.5 MB"
 *   platform    "android" | "windows"  (drives the badge + icon)
 *   url         the direct link the card opens
 *   sha256      optional checksum, rendered under the card when present
 */

export const downloads = [
  {
    id: 'cricfy',
    name: 'CRICFy',
    version: 'v6.8',
    fileName: 'CRICFy_v6.8_new.apk',
    description: 'Latest official build. Optimised install package.',
    size: '14.5 MB',
    platform: 'android',
    url: 'https://www.mediafire.com/file/aj3ei44lk1a4ec1/CRICFy_v6.8_new.apk/file',
  },
  {
    id: 'sportzx',
    name: 'SportzX',
    version: 'v2.5',
    fileName: 'SportzX_v2.5.apk',
    description: 'Original install package. Fast and lightweight.',
    size: '12.1 MB',
    platform: 'android',
    url: 'https://www.mediafire.com/file/2hc35uh370gj0ti/SportzX_v2.5.apk/file',
  },
  {
    id: 'explore-player',
    name: 'Explore Player',
    version: 'v1.0.0',
    fileName: 'Explore-Player-Setup-1.0.0.exe',
    description: 'Desktop audio player for Windows. Full offline installer.',
    size: '118.7 MB',
    platform: 'windows',
    url: 'https://github.com/sirnewson/kuikdown/releases/download/v1.0.0/Explore-Player-Setup-1.0.0.exe',
    sha256: 'ab70a43bd70c4363321e55d9df9ea111ef9d68d00688ce02001a4809b1bdaf29',
  },
]

export const platforms = {
  android: { label: 'Android App (APK)', icon: 'smartphone' },
  windows: { label: 'Windows Installer (EXE)', icon: 'monitor' },
}
