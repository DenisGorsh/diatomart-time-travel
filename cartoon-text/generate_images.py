"""Generate cartoon scene images via DALL-E 3 for Riga Time Travel.
Each prompt uses ONLY visual media that existed during that historical period."""
import os
import sys
import time
import traceback
import urllib.request

from openai import OpenAI

API_KEY = os.environ.get("OPENAI_API_KEY", "")
if not API_KEY:
    print("ERROR: OPENAI_API_KEY not set")
    sys.exit(1)

client = OpenAI(api_key=API_KEY)

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "cartoon", "generated")
os.makedirs(OUT_DIR, exist_ok=True)

SCENES = [
    {
        "id": 1,
        "file": "scene_01_crusaders.png",
        "prompt": (
            "A cog ship carrying crusaders across the Baltic Sea toward a dark forested coast, "
            "bishop with a cross standing at the bow. Based on an actual 12th-century manuscript "
            "illumination, tempera and gold leaf on vellum, Romanesque style with flat figures "
            "and no perspective, bold outlines, vermillion red and ultramarine blue pigments, "
            "burnished gold leaf background, the visual language of the Winchester Bible or "
            "Moralia in Job manuscripts."
        ),
    },
    {
        "id": 2,
        "file": "scene_02_sword_brothers.png",
        "prompt": (
            "Armored knights of the Livonian Order on horseback with red cross-and-sword shields "
            "attacking a Baltic tribal settlement. Based on a 13th-century chronicle manuscript "
            "illumination like the Maciejowski Bible, opaque tempera on vellum, flat spatial "
            "composition with stacked registers, bold black outlines, heraldic shields, figures "
            "in chain mail with great helms, limited palette of red ochre blue and gold leaf."
        ),
    },
    {
        "id": 3,
        "file": "scene_03_saule.png",
        "prompt": (
            "Fallen crusader knights lying in marshland surrounded by forest, Lithuanian warriors "
            "with wooden shields and spears standing victorious. Based on a 13th-century battle "
            "chronicle marginalia illustration like those in Matthew Paris chronicles, ink and "
            "wash on vellum, tinted drawing style, minimal color, cross-hatched shading, "
            "annotated manuscript page with Latin text fragments visible at edges."
        ),
    },
    {
        "id": 4,
        "file": "scene_04_castles.png",
        "prompt": (
            "A Teutonic Order stone castle under construction on a Livonian river bank with "
            "scaffolding and workers. Based on a 13th-century architectural manuscript drawing "
            "like those in Villard de Honnecourt sketchbook, ink on vellum with geometric "
            "construction lines visible, elevation and cutaway views combined, figures of "
            "masons with tools, Gothic architectural details, brown ink with red and gold accents."
        ),
    },
    {
        "id": 5,
        "file": "scene_05_chronicler.png",
        "prompt": (
            "A monk writing the Livonian Rhymed Chronicle at a scriptorium desk with quill and "
            "ink. Based on a 13th-century illuminated manuscript author portrait like the Codex "
            "Manesse miniatures, tempera and gold leaf on vellum, the scribe seated within a "
            "decorated initial letter, Gothic architectural frame, Middle High German text lines "
            "visible on the parchment, rich lapis blue and gold leaf background."
        ),
    },
    {
        "id": 6,
        "file": "scene_06_parchment.png",
        "prompt": (
            "A printing press workshop producing the Riga Breviary of 1513. Based on an actual "
            "early 16th-century woodcut print like those by Jost Amman or the Nuremberg Chronicle, "
            "black line woodcut on laid paper, a printer operating a wooden screw press, type "
            "cases on shelves, printed sheets hanging to dry, strong black outlines with "
            "parallel-line shading, no color, visible wood grain texture in the cut."
        ),
    },
    {
        "id": 7,
        "file": "scene_07_fall.png",
        "prompt": (
            "Siege of Riga with cannon bombardment breaking through city walls, soldiers with "
            "muskets and pikes storming the breach. Based on a 16th-century German broadsheet "
            "woodcut or Hogenberg engraving, detailed black ink line engraving on paper, "
            "bird's-eye view of fortified city with labeled bastions, smoke from cannon fire, "
            "period military formations, text cartouche at bottom, aged yellowed paper."
        ),
    },
    {
        "id": 8,
        "file": "scene_08_swedish.png",
        "prompt": (
            "Panoramic view of Swedish Riga from across the Daugava river with warships in "
            "harbor. Based on an actual 17th-century copperplate engraving like those by "
            "Matthaeus Merian or Erik Dahlbergh Suecia Antiqua, fine parallel burin lines on "
            "copper, detailed city skyline with numbered church spires, ships with Swedish "
            "flags, decorative Baroque cartouche with title and coat of arms, sky rendered "
            "in graduated line density."
        ),
    },
    {
        "id": 9,
        "file": "scene_09_peter.png",
        "prompt": (
            "The devastated city of Riga after the 1710 siege and plague, Russian soldiers "
            "raising the imperial eagle standard over ruins. Based on an 18th-century copperplate "
            "engraving in the style of period battle prints, fine cross-hatching and stipple "
            "technique, dramatic sky with engraved cloud formations, ruined buildings rendered "
            "in precise architectural detail, hand-tinted with watercolor washes in sepia and "
            "grey-blue, engraved border with scale and compass rose."
        ),
    },
    {
        "id": 10,
        "file": "scene_10_industrial.png",
        "prompt": (
            "A steam locomotive arriving at Riga's new railway station with factory smokestacks "
            "in background and medieval walls being demolished. Based on an early 19th-century "
            "lithograph print like those by Godfrey Engelmann, crayon lithograph on stone with "
            "soft tonal gradations, Romantic-era composition, sepia and warm grey tones, fine "
            "grain texture of lithographic stone visible, figures in top hats and frock coats, "
            "horses and carriages on cobblestones."
        ),
    },
    {
        "id": 11,
        "file": "scene_11_awakening.png",
        "prompt": (
            "The First Latvian Song Festival of 1873 with a massive choir on an outdoor stage "
            "and red-white-red Latvian flags. Based on a late 19th-century chromolithograph "
            "poster, full color lithographic printing with halftone dots visible, Art Nouveau "
            "decorative border with organic floral ornaments, Jugendstil lettering, the visual "
            "style of Alphonse Mucha or the Secession movement, warm golden amber and forest "
            "green palette."
        ),
    },
    {
        "id": 12,
        "file": "scene_12_war.png",
        "prompt": (
            "Soldiers marching through Art Nouveau Riga streets under a blood-red sky with "
            "civilians watching from doorways. Based on an early 20th-century expressionist "
            "linocut or woodcut print in the style of Die Bruecke artists Ernst Ludwig Kirchner "
            "or Karl Schmidt-Rottluff, bold angular carved forms, stark red and black ink on "
            "rough paper, dramatic high-contrast composition, visible knife cuts and wood grain, "
            "raw emotional intensity."
        ),
    },
]


def generate_scene(scene):
    """Generate one scene image via DALL-E 3 and save to disk."""
    out_path = os.path.join(OUT_DIR, scene["file"])
    if os.path.exists(out_path):
        print(f"  [SKIP] {scene['file']} already exists")
        return True

    print(f"  [CALL] Generating scene {scene['id']}: {scene['file']}...")
    t0 = time.time()

    try:
        response = client.images.generate(
            model="dall-e-3",
            prompt=scene["prompt"],
            n=1,
            size="1792x1024",
            quality="hd",
            response_format="url",
        )
        url = response.data[0].url
        revised = response.data[0].revised_prompt
        elapsed = time.time() - t0
        print(f"  [OK]   Generated in {elapsed:.1f}s")
        if revised:
            print(f"  [INFO] Revised prompt: {revised[:150]}...")

        # Download image
        print(f"  [SAVE] Downloading to {out_path}...")
        urllib.request.urlretrieve(url, out_path)
        size_kb = os.path.getsize(out_path) / 1024
        print(f"  [DONE] Saved ({size_kb:.0f} KB)")
        return True

    except Exception as e:
        elapsed = time.time() - t0
        print(f"  [ERR]  Scene {scene['id']} failed after {elapsed:.1f}s: {e}")
        traceback.print_exc()
        return False


def main():
    print(f"Generating {len(SCENES)} cartoon scenes via DALL-E 3")
    print(f"Output: {OUT_DIR}\n")

    success = 0
    failed = 0
    for scene in SCENES:
        print(f"[{scene['id']}/12] {scene['file']}")
        if generate_scene(scene):
            success += 1
        else:
            failed += 1
        # Small delay between calls
        if scene["id"] < len(SCENES):
            time.sleep(2)

    print(f"\nDone: {success} generated, {failed} failed")
    print(f"Images saved to: {OUT_DIR}")


if __name__ == "__main__":
    main()
