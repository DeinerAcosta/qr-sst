"""
COFCA · Generador de Códigos QR para SST
==========================================

Genera los códigos QR en PNG (alta calidad para imprimir)
y en SVG (vectorial, para tamaños grandes sin pixelado).

Uso:
    1. Instala la dependencia (una sola vez):
       pip install "qrcode[pil]"

    2. Edita las dos URLs de abajo (BASE_URL) con la URL final
       donde quede publicado el sitio (GitHub Pages, Netlify, etc.)

    3. Ejecuta el script:
       python generar-qr.py

    Los archivos se guardan en la carpeta /qr-codes
"""

from pathlib import Path
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from qrcode.image.svg import SvgPathImage


# === CONFIGURACIÓN ============================================================
# Cambia esta URL por la URL real donde quede publicado el sitio.
# Ejemplos:
#   "https://deineracosta.github.io/qr-sst"
#   "https://qr-sst-cofca.netlify.app"
BASE_URL = "https://deineracosta.github.io/qr-sst"

DESTINOS = {
    "qr-quimicos":        f"{BASE_URL}/quimicos/",
    "qr-gases":           f"{BASE_URL}/gases-medicinales/",
}

# Colores corporativos COFCA (módulos azul, fondo blanco)
COLOR_QR = "#00467F"
COLOR_FONDO = "#FFFFFF"

# Carpeta de salida
OUTPUT_DIR = Path(__file__).parent / "qr-codes"
OUTPUT_DIR.mkdir(exist_ok=True)


def generar_png(nombre: str, url: str) -> Path:
    """Genera un PNG de alta resolución con corrección de error H (30%)."""
    qr = qrcode.QRCode(
        version=None,                   # auto-ajusta el tamaño
        error_correction=ERROR_CORRECT_H,  # tolera daño / logo encima
        box_size=20,                    # px por módulo → imagen grande
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color=COLOR_QR, back_color=COLOR_FONDO)
    out = OUTPUT_DIR / f"{nombre}.png"
    img.save(out)
    return out


def generar_svg(nombre: str, url: str) -> Path:
    """Genera un SVG vectorial — ideal para impresiones grandes."""
    qr = qrcode.QRCode(
        version=None,
        error_correction=ERROR_CORRECT_H,
        box_size=10,
        border=4,
        image_factory=SvgPathImage,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image()
    out = OUTPUT_DIR / f"{nombre}.svg"
    img.save(out)
    return out


def main() -> None:
    print("\n🔷 COFCA · Generador de QR para SST\n")
    print(f"URL base: {BASE_URL}\n")

    for nombre, url in DESTINOS.items():
        png = generar_png(nombre, url)
        svg = generar_svg(nombre, url)
        print(f"  ✓ {nombre}")
        print(f"      URL: {url}")
        print(f"      PNG: {png}")
        print(f"      SVG: {svg}\n")

    print("✅ Listo. Los QR están en la carpeta 'qr-codes/'.")
    print("   Imprime el PNG (alta resolución) o usa el SVG para tamaños grandes.\n")


if __name__ == "__main__":
    main()
