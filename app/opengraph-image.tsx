import fs from 'node:fs';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import OpenGraphImageGraphic from '@/ui/opengraph-image/OpenGraphImageGraphic';

export const alt = 'Pedro Ramos, frontend developer, with a portrait framed by a colorful orbital ring.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage() {
  const fontsDirectory = path.join(process.cwd(), 'public/fonts');
  const avantFont = fs.readFileSync(path.join(fontsDirectory, 'avant-garde.ttf'));
  const geistRegularFont = fs.readFileSync(path.join(fontsDirectory, 'geist-regular.ttf'));
  const geistBoldFont = fs.readFileSync(path.join(fontsDirectory, 'geist.otf'));
  const portrait = fs.readFileSync(path.join(process.cwd(), 'public/images/pedro-about-og.jpg'));
  const portraitBase64 = `data:image/jpeg;base64,${portrait.toString('base64')}`;

  return new ImageResponse(<OpenGraphImageGraphic portraitBase64={portraitBase64} />, {
    ...size,
    fonts: [
      {
        name: 'AvantGarde',
        data: avantFont,
        weight: 700,
        style: 'normal',
      },
      {
        name: 'Geist',
        data: geistRegularFont,
        weight: 400,
        style: 'normal',
      },
      {
        name: 'Geist',
        data: geistBoldFont,
        weight: 700,
        style: 'normal',
      },
    ],
  });
}
