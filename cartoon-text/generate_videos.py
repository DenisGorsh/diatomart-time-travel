"""Generate 10-second animated video clips from DALL-E images via Replicate.
Uses Wan2.1 image-to-video model for figure animation."""
import os
import sys
import time
import base64
import traceback
import urllib.request

import replicate

API_TOKEN = os.environ.get("REPLICATE_API_TOKEN", "")
if not API_TOKEN:
    print("ERROR: REPLICATE_API_TOKEN not set")
    sys.exit(1)

os.environ["REPLICATE_API_TOKEN"] = API_TOKEN

IMG_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "images", "cartoon", "generated")
OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "videos", "cartoon")
os.makedirs(OUT_DIR, exist_ok=True)

SCENES = [
    {
        "id": 1,
        "image": "scene_01_crusaders.png",
        "video": "scene_01_crusaders.mp4",
        "prompt": (
            "The cog ship rocks gently on rolling ocean waves, the sail billows in the wind, "
            "the knights sway with the motion of the ship, seagulls fly overhead, "
            "clouds drift across the sky, the water sparkles and churns"
        ),
    },
    {
        "id": 2,
        "image": "scene_02_sword_brothers.png",
        "video": "scene_02_sword_brothers.mp4",
        "prompt": (
            "The mounted knights ride forward at a trot, horses stepping and bobbing their heads, "
            "banners and pennants flutter in the wind, armor glints in sunlight, "
            "smoke rises from the settlement in the background, birds scatter"
        ),
    },
    {
        "id": 3,
        "image": "scene_03_saule.png",
        "video": "scene_03_saule.mp4",
        "prompt": (
            "Fog drifts slowly through the dark forest, fallen knights lie still on the marshy ground, "
            "the victorious warriors raise their spears, tree branches sway in wind, "
            "birds circle overhead, mist rolls across the battlefield"
        ),
    },
    {
        "id": 4,
        "image": "scene_04_castles.png",
        "video": "scene_04_castles.mp4",
        "prompt": (
            "Workers carry stone blocks up scaffolding, masons chisel at the castle walls, "
            "a pulley lifts a heavy block, flags flutter on completed towers, "
            "clouds pass behind the rising castle, the river flows below"
        ),
    },
    {
        "id": 5,
        "image": "scene_05_chronicler.png",
        "video": "scene_05_chronicler.mp4",
        "prompt": (
            "The monk dips his quill in ink and writes carefully on the parchment, "
            "candlelight flickers casting dancing shadows on the stone walls, "
            "he pauses to think then continues writing, pages of manuscript rustle gently"
        ),
    },
    {
        "id": 6,
        "image": "scene_06_parchment.png",
        "video": "scene_06_parchment.mp4",
        "prompt": (
            "The printer pulls the press handle down firmly, workers arrange metal type in cases, "
            "freshly printed pages hang drying on lines swaying gently, "
            "an apprentice carries a stack of paper, light streams through the windows"
        ),
    },
    {
        "id": 7,
        "image": "scene_07_fall.png",
        "video": "scene_07_fall.mp4",
        "prompt": (
            "Cannon smoke billows upward from the siege lines, puffs of smoke burst from the walls, "
            "military formations slowly advance toward the city gates, "
            "flags wave over the encampments, clouds of dust and debris rise"
        ),
    },
    {
        "id": 8,
        "image": "scene_08_swedish.png",
        "video": "scene_08_swedish.mp4",
        "prompt": (
            "Ships rock gently in the harbor, their sails furled, Swedish flags flutter on masts, "
            "smoke rises from chimneys across the city skyline, "
            "clouds drift across the dramatic sky, water ripples in the river"
        ),
    },
    {
        "id": 9,
        "image": "scene_09_peter.png",
        "video": "scene_09_peter.mp4",
        "prompt": (
            "Russian soldiers march forward raising the imperial eagle banner high, "
            "smoke drifts from ruined buildings, rain falls from dark clouds, "
            "a few survivors walk slowly through the devastated streets, "
            "the flag ripples in the cold wind"
        ),
    },
    {
        "id": 10,
        "image": "scene_10_industrial.png",
        "video": "scene_10_industrial.mp4",
        "prompt": (
            "The steam locomotive chugs forward with pistons pumping, thick smoke pours from the stack, "
            "factory chimneys billow smoke into the sky, workers swing hammers demolishing old walls, "
            "horses pull carts along the street, pedestrians walk past"
        ),
    },
    {
        "id": 11,
        "image": "scene_11_awakening.png",
        "video": "scene_11_awakening.mp4",
        "prompt": (
            "The massive choir sings passionately with swaying motion, Latvian flags wave energetically, "
            "the crowd cheers and applauds, birds fly above the festival grounds, "
            "women in traditional dress clap in rhythm, confetti drifts in the air"
        ),
    },
    {
        "id": 12,
        "image": "scene_12_war.png",
        "video": "scene_12_war.mp4",
        "prompt": (
            "Soldiers march in formation down the street, boots stepping in unison, "
            "civilians watch from doorways clutching each other, "
            "the blood-red sky pulses and shifts, shadows lengthen dramatically, "
            "a church bell tolls as the column moves past"
        ),
    },
]


def image_to_data_uri(path):
    """Convert image file to base64 data URI for Replicate."""
    with open(path, "rb") as f:
        data = base64.b64encode(f.read()).decode("utf-8")
    return f"data:image/png;base64,{data}"


def generate_video(scene):
    """Generate a video clip from image + motion prompt via Replicate."""
    out_path = os.path.join(OUT_DIR, scene["video"])
    if os.path.exists(out_path):
        print(f"  [SKIP] {scene['video']} already exists")
        return True

    img_path = os.path.join(IMG_DIR, scene["image"])
    if not os.path.exists(img_path):
        print(f"  [ERR]  Source image not found: {img_path}")
        return False

    print(f"  [CALL] Generating video for scene {scene['id']}...")
    t0 = time.time()

    try:
        data_uri = image_to_data_uri(img_path)

        output = replicate.run(
            "wavespeedai/wan-2.1-i2v-480p",
            input={
                "image": data_uri,
                "prompt": scene["prompt"],
                "max_area": "832x480",
                "duration": 5,
                "fast_mode": "Balanced",
                "num_frames": 81,
                "sample_shift": 8,
                "sample_steps": 30,
                "frames_per_second": 16,
                "sample_guide_scale": 5,
            },
        )

        elapsed = time.time() - t0
        print(f"  [OK]   Generated in {elapsed:.1f}s")

        # output is a FileOutput URL — download it
        video_url = str(output)
        print(f"  [SAVE] Downloading to {out_path}...")
        urllib.request.urlretrieve(video_url, out_path)
        size_mb = os.path.getsize(out_path) / (1024 * 1024)
        print(f"  [DONE] Saved ({size_mb:.1f} MB)")
        return True

    except Exception as e:
        elapsed = time.time() - t0
        print(f"  [ERR]  Scene {scene['id']} failed after {elapsed:.1f}s: {e}")
        traceback.print_exc()
        return False


def main():
    print(f"Generating {len(SCENES)} animated video clips via Replicate (Wan2.1)")
    print(f"Source images: {IMG_DIR}")
    print(f"Output videos: {OUT_DIR}\n")

    success = 0
    failed = 0
    for scene in SCENES:
        print(f"[{scene['id']}/12] {scene['video']}")
        if generate_video(scene):
            success += 1
        else:
            failed += 1
        if scene["id"] < len(SCENES):
            print("  [WAIT] Pausing 15s for rate limit...")
            time.sleep(15)

    print(f"\nDone: {success} generated, {failed} failed")
    print(f"Videos saved to: {OUT_DIR}")


if __name__ == "__main__":
    main()
