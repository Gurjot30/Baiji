import subprocess

def append_css(file_path):
    css_content = subprocess.check_output(['git', 'show', '5c79bdd:src/pages/ContactPage.css'], text=True)
    with open('style.css', 'a') as f:
        f.write("\n\n/* ==========================================\n")
        f.write("   CONTACT PAGE CSS\n")
        f.write("   ========================================== */\n")
        f.write(css_content)
        
if __name__ == '__main__':
    append_css('style.css')
    print("Appended ContactPage.css to style.css")
