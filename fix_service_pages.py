import os

def fix_asset_paths():
    html_files = [f for f in os.listdir('.') if f.endswith('.html')]
    for file in html_files:
        with open(file, 'r') as f:
            content = f.read()

        # Fix src="/image.png" -> src="assets/image.png"
        # Be careful not to replace src="https://..." or src="assets/..."
        import re
        content = re.sub(r'src="/([^"]+\.(png|jpg|jpeg|svg|webp|gif))"', r'src="assets/\1"', content)
        content = re.sub(r"src='/([^']+\.(png|jpg|jpeg|svg|webp|gif))'", r"src='assets/\1'", content)
        
        # Fix url(/image.png) -> url(assets/image.png)
        content = re.sub(r'url\(\/?([^)]+\.(png|jpg|jpeg|svg|webp|gif))\)', r'url(assets/\1)', content)
        content = re.sub(r'url\([\'"]\/?([^\'")]+\.(png|jpg|jpeg|svg|webp|gif))[\'"]\)', r"url('assets/\1')", content)

        with open(file, 'w') as f:
            f.write(content)
            
    print("Asset paths fixed.")

def inject_dm_script():
    with open('digital-marketing.html', 'r') as f:
        content = f.read()
        
    script = """
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.dm-tab-btn');
    const contents = document.querySelectorAll('.dm-showcase-content-wrapper');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.style.display = 'none');
        
        tab.classList.add('active');
        const targetId = tab.getAttribute('data-tab');
        const targetContent = document.getElementById('dm-tab-content-' + targetId);
        if (targetContent) {
          targetContent.style.display = 'flex'; // The original CSS uses flex or grid for this wrapper usually. Actually, let's just clear inline display so CSS takes over.
          targetContent.style.display = '';
        }
      });
    });
  });
</script>
</body>
"""
    if "dm-tab-btn" in content and "<script>" not in content.split("</footer>")[-1]:
        content = content.replace("</body>", script)
        with open('digital-marketing.html', 'w') as f:
            f.write(content)
        print("Injected DM script.")

if __name__ == "__main__":
    fix_asset_paths()
    inject_dm_script()
