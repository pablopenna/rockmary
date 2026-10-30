"""Builds src/app/fonts/NotoSansSC-zh.woff2, the Chinese font used on /zh.

The full Noto Sans SC is ~17 MB, so this keeps only the characters that appear in zh.json and the
400-700 weight range the site uses. Re-run it whenever zh.json changes; characters missing from the
subset fall back to the system font.

Usage (needs fonttools and brotli):
    curl -L -o NotoSansSC.ttf "https://github.com/google/fonts/raw/main/ofl/notosanssc/NotoSansSC%5Bwght%5D.ttf"
    python scripts/subset-zh-font.py NotoSansSC.ttf
"""

import json
import sys
from pathlib import Path

from fontTools import subset
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer

ROOT = Path(__file__).resolve().parent.parent
TRANSLATIONS = ROOT / "src/app/i18n/translations/zh.json"
OUTPUT = ROOT / "src/app/fonts/NotoSansSC-zh.woff2"


def main(source: str) -> None:
    strings = json.loads(TRANSLATIONS.read_text(encoding="utf-8")).values()
    # Latin text is drawn by Inter / Space Grotesk, which come first in the font stack.
    chars = {c for s in strings for c in s if ord(c) > 0x7F}

    font = TTFont(source)
    options = subset.Options()
    options.layout_features = ["*"]
    options.flavor = "woff2"
    subsetter = subset.Subsetter(options)
    subsetter.populate(unicodes=[ord(c) for c in chars])
    subsetter.subset(font)
    font = instancer.instantiateVariableFont(font, {"wght": (400, 700)})

    font.flavor = "woff2"
    font.save(OUTPUT)
    print(f"{len(chars)} characters, {OUTPUT.stat().st_size // 1024} KB -> {OUTPUT.relative_to(ROOT)}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
