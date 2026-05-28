import os

with open("contact.html", "r") as f:
    content = f.read()

content = content.replace("\\`", "`")
content = content.replace("\\$", "$")

with open("contact.html", "w") as f:
    f.write(content)
print("Fixed JS syntax in contact.html")
