import unicodedata

with open("src/main/resources/static/js/i18n.js", "r", encoding="utf-8") as f:
    js_lines = f.readlines()
with open("src/main/resources/templates/uu-dai-cua-toi.html", "r", encoding="utf-8") as f:
    html_lines = f.readlines()

js_match = [line for line in js_lines if "Chuyến đi" in line]
html_match = [line for line in html_lines if "Chuyến đi" in line]

def to_unicode_escapes(s):
    return "".join(f"\\u{ord(c):04x}" if ord(c) > 127 else c for c in s)

print("JS raw line:", to_unicode_escapes(js_match[0] if js_match else "None"))
print("HTML raw line:", to_unicode_escapes(html_match[0] if html_match else "None"))

if js_match:
    nfc_js = unicodedata.normalize('NFC', js_match[0])
    nfd_js = unicodedata.normalize('NFD', js_match[0])
    print("JS NFC:", to_unicode_escapes(nfc_js))
    print("JS NFD:", to_unicode_escapes(nfd_js))

if html_match:
    nfc_html = unicodedata.normalize('NFC', html_match[0])
    nfd_html = unicodedata.normalize('NFD', html_match[0])
    print("HTML NFC:", to_unicode_escapes(nfc_html))
    print("HTML NFD:", to_unicode_escapes(nfd_html))
