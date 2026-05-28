import subprocess

files_to_fetch = [
    "src/pages/BrandStrategyPage.css",
    "src/pages/DigitalMarketingPage.css",
    "src/pages/IntegratedBrandPage.css",
    "src/pages/ProductionEntertainmentPage.css",
    "src/pages/PortfolioPage.css"
]

css_content = ""

for f in files_to_fetch:
    try:
        print(f"Fetching {f}...")
        result = subprocess.run(["git", "show", f"5c79bdd:{f}"], capture_output=True, text=True, check=True)
        css_content += f"\n/* --- Content from {f} --- */\n"
        css_content += result.stdout
    except subprocess.CalledProcessError:
        print(f"Error fetching {f} or it doesn't exist.")

with open("style.css", "a") as out_file:
    out_file.write(css_content)

print("Done appending CSS.")
