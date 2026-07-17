import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont
import random

INK = np.array([6, 16, 31])
BLUE = np.array([37, 99, 235])
EUBLUE = np.array([0, 51, 153])
VIOLET = np.array([124, 58, 237])
SAFFRON = np.array([255, 204, 0])

FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
MONO = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"

def base(w, h, c1, c2):
    xv, yv = np.meshgrid(np.linspace(0, 1, w), np.linspace(0, 1, h))
    t = (xv + yv) / 2
    arr = (c1[None, None, :] * (1 - t[..., None]) + c2[None, None, :] * t[..., None]).astype(np.uint8)
    return Image.fromarray(arr, "RGB")

def glow(img, cx, cy, r, color, strength=100):
    g = Image.new("RGB", img.size, (0, 0, 0))
    d = ImageDraw.Draw(g)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill=tuple(color))
    g = g.filter(ImageFilter.GaussianBlur(r / 1.6))
    a = np.array(img).astype(np.int16) + np.array(g).astype(np.int16) * (strength / 255)
    return Image.fromarray(np.clip(a, 0, 255).astype(np.uint8), "RGB")

W, H = 1200, 675
OUT = "/home/claude/mogana/public/images/articles"

def save_label(img, text, accent):
    d = ImageDraw.Draw(img, "RGBA")
    d.rectangle([0, 0, W-1, H-1], outline=(255,255,255,25), width=2)
    f = ImageFont.truetype(FONT, 30)
    lines = []
    words = text.split()
    cur = ""
    for w_ in words:
        t2 = (cur + " " + w_).strip()
        bbox = d.textbbox((0,0), t2, font=f)
        if bbox[2]-bbox[0] < W - 120:
            cur = t2
        else:
            lines.append(cur)
            cur = w_
    if cur: lines.append(cur)
    ty = H - 60 - len(lines) * 38
    for line in lines:
        d.text((60, ty), line, font=f, fill=(255,255,255))
        ty += 38
    d.rectangle([60, H-70-len(lines)*38-14, 100, H-70-len(lines)*38-8], fill=tuple(accent)+(255,))

configs = [
    ("saas-concept-to-production", VIOLET, SAFFRON, "grid"),
    ("accounting-erp-platforms", EUBLUE, BLUE, "chart"),
    ("product-engineering-beyond-code", BLUE, VIOLET, "nodes"),
    ("rbac-with-supabase", VIOLET, EUBLUE, "lock"),
    ("marketplace-platforms-that-scale", SAFFRON, VIOLET, "network"),
    ("nextjs-performance-seo", BLUE, SAFFRON, "speed"),
    ("business-operations-to-software", EUBLUE, VIOLET, "bridge"),
    ("bilingual-digital-products-europe", VIOLET, BLUE, "globe"),
]

random.seed(4)
for slug, c1, c2, motif in configs:
    img = base(W, H, INK, np.array([10, 20, 40]))
    img = glow(img, W*0.15, H*0.2, 420, c1, 90)
    img = glow(img, W*0.85, H*0.85, 420, c2, 70)
    d = ImageDraw.Draw(img, "RGBA")

    if motif == "grid":
        for i in range(6):
            for j in range(4):
                x, y = 700 + i*70, 120 + j*70
                d.rounded_rectangle([x, y, x+55, y+55], radius=8, fill=(255,255,255, 18))
    elif motif == "chart":
        random.seed(1)
        for i in range(10):
            bh = random.randint(30, 220)
            x = 680 + i*45
            d.rounded_rectangle([x, 480-bh, x+30, 480], radius=4, fill=tuple(c2)+(200,))
    elif motif == "nodes":
        pts = [(750,150),(950,220),(700,320),(1000,380),(850,480)]
        for i in range(len(pts)-1):
            d.line([pts[i], pts[i+1]], fill=(255,255,255,60), width=2)
        for p in pts:
            d.ellipse([p[0]-10,p[1]-10,p[0]+10,p[1]+10], fill=tuple(c1)+(255,))
    elif motif == "lock":
        d.rounded_rectangle([820, 220, 980, 360], radius=16, fill=(255,255,255,20), outline=(255,255,255,60), width=2)
        d.arc([850, 160, 950, 260], start=180, end=360, fill=(255,255,255,150), width=8)
    elif motif == "network":
        random.seed(2)
        pts = [(random.randint(650,1100), random.randint(120,420)) for _ in range(8)]
        for i in range(len(pts)):
            for j in range(i+1, len(pts)):
                if random.random() < 0.35:
                    d.line([pts[i], pts[j]], fill=(255,255,255,35), width=1)
        for p in pts:
            d.ellipse([p[0]-7,p[1]-7,p[0]+7,p[1]+7], fill=tuple(c2)+(255,))
    elif motif == "speed":
        for i in range(5):
            y = 180 + i*50
            w_ = 350 - i*40
            d.rounded_rectangle([700, y, 700+w_, y+18], radius=9, fill=tuple(c2)+(160,))
    elif motif == "bridge":
        d.line([700, 400, 1100, 400], fill=(255,255,255,80), width=4)
        for x in range(720, 1100, 60):
            d.line([x, 400, x, 340], fill=tuple(c1)+(200,), width=4)
    elif motif == "globe":
        d.ellipse([780, 150, 1080, 450], outline=(255,255,255,90), width=3)
        d.ellipse([850, 150, 1010, 450], outline=(255,255,255,60), width=2)
        d.line([780, 300, 1080, 300], fill=(255,255,255,60), width=2)

    save_label(img, slug.replace("-", " ").title(), c1)
    img.save(f"{OUT}/{slug}.webp", "WEBP", quality=82)

print("done", len(configs))
