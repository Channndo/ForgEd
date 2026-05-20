#!/usr/bin/env python3
"""Remove black background from FE icon; write favicon assets."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "forged-icon.png"
BLACK_THRESHOLD = 28  # max(R,G,B) below this → transparent


def remove_black_background(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if max(r, g, b) <= BLACK_THRESHOLD:
                px[x, y] = (0, 0, 0, 0)
            elif max(r, g, b) <= BLACK_THRESHOLD + 40:
                # Soft edge on letter antialiasing against black
                t = (max(r, g, b) - BLACK_THRESHOLD) / 40.0
                px[x, y] = (r, g, b, int(a * min(1.0, t)))
    return im


def crop_to_content(im: Image.Image, padding: int = 8) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(im.width, right + padding)
    bottom = min(im.height, bottom + padding)
    return im.crop((left, top, right, bottom))


def fit_square(im: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    scale = min(size / im.width, size / im.height) * 0.92
    nw = max(1, int(im.width * scale))
    nh = max(1, int(im.height * scale))
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (size - nw) // 2
    y = (size - nh) // 2
    canvas.paste(resized, (x, y), resized)
    return canvas


def write_ico(path: Path, sizes: list[int]) -> None:
    base = Image.open(SRC).convert("RGBA")
    base = remove_black_background(base)
    base = crop_to_content(base, padding=12)
    images = [fit_square(base, s) for s in sizes]
    images[0].save(
        path,
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=images[1:],
    )


def main() -> None:
    if not SRC.exists():
        raise SystemExit(f"Missing source: {SRC}")

    base = Image.open(SRC).convert("RGBA")
    base = remove_black_background(base)
    base = crop_to_content(base, padding=12)

    outputs: list[tuple[Path, int]] = [
        (ROOT / "public" / "forged-icon.png", 512),
        (ROOT / "src" / "app" / "icon.png", 512),
        (ROOT / "src" / "app" / "apple-icon.png", 180),
    ]

    for path, size in outputs:
        out = fit_square(base, size)
        path.parent.mkdir(parents=True, exist_ok=True)
        out.save(path, "PNG", optimize=True)
        print(f"wrote {path} ({size}x{size}, transparent)")

    ico_path = ROOT / "src" / "app" / "favicon.ico"
    write_ico(ico_path, [16, 32, 48])
    print(f"wrote {ico_path}")


if __name__ == "__main__":
    main()
