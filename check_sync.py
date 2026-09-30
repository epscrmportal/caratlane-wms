"""Reports drift between index.html, app.js and preview.html.

Run from this folder:   python check_sync.py

index.html is the source of truth. app.js should contain the same JavaScript,
and preview.html should match index.html apart from its preview-mode stubs.
This only reads the files; it never changes them.
"""
import re, sys

def load(name):
    return open(name, encoding="utf8").read()

def js_of(name, s):
    if name.endswith(".js"):
        return s
    blocks = re.findall(r"<script(?![^>]*\bsrc=)[^>]*>(.*?)</script>", s, flags=re.S)
    return "\n".join(blocks)

def funcs(js):
    return set(re.findall(r"^\s*(?:async\s+)?function\s+([A-Za-z0-9_$]+)", js, flags=re.M))

files = ["index.html", "app.js", "preview.html"]
src = {f: load(f) for f in files}
fn = {f: funcs(js_of(f, src[f])) for f in files}
base = fn["index.html"]
bad = False
for f in files[1:]:
    missing = sorted(base - fn[f])
    extra = sorted(fn[f] - base)
    print(f"{f}: {len(fn[f])} functions (index.html has {len(base)})")
    if missing:
        bad = True
        print("  missing vs index.html:", ", ".join(missing[:25]), "..." if len(missing) > 25 else "")
    if extra:
        print("  only in", f + ":", ", ".join(extra[:25]))

css = lambda s: re.search(r"<style>(.*?)</style>\s*</head>", s, flags=re.S).group(1)
same_css = css(src["index.html"]) == css(src["preview.html"])
print("CSS identical in index.html and preview.html:", same_css)
bad = bad or not same_css
sys.exit(1 if bad else 0)
