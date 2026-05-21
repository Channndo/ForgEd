#!/usr/bin/env python3
"""Build favicon assets from forged-icon-source.png (metallic FE monogram)."""
from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "public" / "forged-icon-source.png"
USER_ASSET = (
    ROOT.parent.parent
    / ".cursor/projects/Users-chandlerhill-Omnistrata-other-ventures-ForgEd/assets"
)
# Prefer latest user drop if present
USER_GLOB_NAMES = ["887B4512*.png", "forged*.png"]
FALLBACK = ROOT / "public" / "forged-icon.png"
BLACK_THRESHOLD = 36
CACHE_VERSION = "5"


def find_user_asset() -> Path | None:
    assets_dir = Path(
        "/Users/chandlerhill/.cursor/projects/Users-chandlerhill-Omnistrata-other-ventures-ForgEd/assets"
    )
    if not assets_dir.is_dir():
        return None
    for pattern in ("*.png",):
        for p in sorted(assets_dir.glob(pattern), key=lambda x: -x.stat().st_mtime):
            if p.stat().st_size > 50_000:
                return p
    return None


def is_full_brand_lockup(im: Image.Image) -> bool:
    """Detect stacked logo (emblem + ForgEd wordmark + tagline)."""
    w, h = im.size
    if h < w * 0.85:
        return False
    top = im.crop((0, 0, w, int(h * 0.38))).convert("L")
    lower = im.crop((0, int(h * 0.52), w, h)).convert("L")
    top_avg = sum(top.getdata()) / max(1, top.width * top.height)
    low_avg = sum(lower.getdata()) / max(1, lower.width * lower.height)
    return low_avg > top_avg * 0.45


def extract_monogram_from_full_logo(im: Image.Image) -> Image.Image:
    """Crop FE emblem from full ForgEd marketing image (text below ~42%)."""
    w, h = im.size
    if not is_full_brand_lockup(im) and h <= w * 1.05:
        return im
    top = im.crop((0, 0, w, int(h * 0.42)))
    px = top.load()
    minx, miny, maxx, maxy = w, h, 0, 0
    for y in range(top.height):
        for x in range(top.width):
            r, g, b, a = px[x, y]
            if max(r, g, b) > 40:
                minx = min(minx, x)
                miny = min(miny, y)
                maxx = max(maxx, x)
                maxy = max(maxy, y)
    pad = max(4, int(min(w, h) * 0.02))
    if maxx <= minx:
        return top
    return top.crop(
        (
            max(0, minx - pad),
            max(0, miny - pad),
            min(w, maxx + pad),
            min(top.height, maxy + pad),
        )
    )


def remove_black_background(im: Image.Image) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, a = px[x, y]
            if max(r, g, b) <= BLACK_THRESHOLD:
                px[x, y] = (0, 0, 0, 0)
            elif max(r, g, b) <= BLACK_THRESHOLD + 60:
                t = (max(r, g, b) - BLACK_THRESHOLD) / 60.0
                px[x, y] = (r, g, b, int(a * min(1.0, t)))
    return im


def crop_to_content(im: Image.Image, padding: int = 3) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        return im
    left, top, right, bottom = bbox
    left = max(0, left - padding)
    top = max(0, top - padding)
    right = min(im.width, right + padding)
    bottom = min(im.height, bottom + padding)
    return im.crop((left, top, right, bottom))


def fit_square(im: Image.Image, size: int, margin: float = 0.04) -> Image.Image:
    master_size = 256 if size < 128 else size
    canvas = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
    inner = int(master_size * (1 - 2 * margin))
    scale = min(inner / im.width, inner / im.height)
    nw = max(1, int(im.width * scale))
    nh = max(1, int(im.height * scale))
    resized = im.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (master_size - nw) // 2
    y = (master_size - nh) // 2
    canvas.paste(resized, (x, y), resized)
    if size <= 32:
        canvas = canvas.filter(
            ImageFilter.UnsharpMask(radius=0.8, percent=180, threshold=1)
        )
    if master_size != size:
        canvas = canvas.resize((size, size), Image.Resampling.LANCZOS)
    return canvas


def write_ico(path: Path, base: Image.Image, sizes: list[int]) -> None:
    images = [fit_square(base, s) for s in sizes]
    images[0].save(
        path,
        format="ICO",
        sizes=[(s, s) for s in sizes],
        append_images=images[1:],
    )


def load_source() -> Image.Image:
    user = find_user_asset()
    if user and user.exists():
        raw = Image.open(user).convert("RGBA")
        raw = extract_monogram_from_full_logo(raw)
        raw.save(SRC)
        print(f"source from user asset → {SRC} ({raw.size})")
        return raw
    if SRC.exists():
        return Image.open(SRC).convert("RGBA")
    if FALLBACK.exists():
        return Image.open(FALLBACK).convert("RGBA")
    raise SystemExit(f"Missing icon source. Add {SRC} or run with user PNG in assets/")


def main() -> None:
    raw = load_source()
    base = crop_to_content(remove_black_background(raw.copy()), padding=3)

    png_outputs: list[tuple[Path, int]] = [
        (ROOT / "public" / "icon-16.png", 16),
        (ROOT / "public" / "icon-32.png", 32),
        (ROOT / "public" / "icon-48.png", 48),
        (ROOT / "public" / "forged-icon.png", 512),
        (ROOT / "public" / "apple-touch-icon.png", 180),
        (ROOT / "src" / "app" / "icon.png", 32),
        (ROOT / "src" / "app" / "apple-icon.png", 180),
    ]

    for path, size in png_outputs:
        out = fit_square(base, size)
        path.parent.mkdir(parents=True, exist_ok=True)
        out.save(path, "PNG", optimize=True)
        print(f"wrote {path} ({size}×{size})")

    for ico_path in (
        ROOT / "public" / "favicon.ico",
        ROOT / "src" / "app" / "favicon.ico",
    ):
        write_ico(ico_path, base, [16, 32, 48])
        print(f"wrote {ico_path}")

    # Remove stale SVG that browsers preferred over real PNG (looked like "FF")
    app_svg = ROOT / "src" / "app" / "icon.svg"
    if app_svg.exists():
        app_svg.unlink()
        print(f"removed {app_svg}")

    print(f"Done. Bump layout cache to ?v={CACHE_VERSION}")


if __name__ == "__main__":
    main()
