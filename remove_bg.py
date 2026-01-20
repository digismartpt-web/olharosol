import sys
import os

try:
    from PIL import Image
except ImportError:
    print("PIL not installed")
    sys.exit(1)

def remove_bg(input_path, output_path):
    # Open image and convert to RGBA
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Get background color from top-left pixel
    bg_color = datas[0]
    # Threshold for color matching (handle slight compression artifacts)
    threshold = 50 

    newData = []
    for item in datas:
        # Calculate Manhattan distance for color difference
        diff = abs(item[0] - bg_color[0]) + abs(item[1] - bg_color[1]) + abs(item[2] - bg_color[2])
        
        if diff < threshold:
            newData.append((0, 0, 0, 0)) # Fully transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python script.py <input> <output>")
        sys.exit(1)
    remove_bg(sys.argv[1], sys.argv[2])
