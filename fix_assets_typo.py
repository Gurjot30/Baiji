with open('index.html', 'r') as f:
    content = f.read()

content = content.replace('assets/assets/', 'assets/')

with open('index.html', 'w') as f:
    f.write(content)

print("Fixed assets/assets/ typo in index.html")
